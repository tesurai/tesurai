/* eslint-disable @typescript-eslint/no-explicit-any */
// TEMPORARY route. Sets a 60-minute buffer AFTER each "call" booking so
// consecutive calls are spaced an hour apart. Run once, then delete.
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API = "https://api.cal.com/v2";
const VERSION = "2024-06-14";
const DESCRIPTION =
  "A 30 minute call to see if Tessa is a fit for your business and what it takes to launch.";

async function cal(path: string, init: RequestInit, key: string) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${key}`,
      "cal-api-version": VERSION,
      "Content-Type": "application/json",
      ...(init.headers as Record<string, string> | undefined),
    },
    cache: "no-store",
  });
  const text = await res.text();
  let body: any;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  return { status: res.status, body };
}

export async function GET() {
  const key = process.env.CAL_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "CAL_SECRET_KEY not set in this environment." },
      { status: 503 },
    );
  }

  // Find the "call" event type.
  const list = await cal(`/event-types?username=tesurai&eventSlug=call`, { method: "GET" }, key);
  const data = (list.body as any)?.data;
  const ev = Array.isArray(data) ? data[0] : data;
  const id = ev?.id;

  if (!id) {
    return NextResponse.json({ ok: false, step: "find-event", list }, { status: 200 });
  }

  // 60-minute buffer after each call, none before.
  const patch = await cal(
    `/event-types/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        afterEventBuffer: 60,
        beforeEventBuffer: 0,
        description: DESCRIPTION,
      }),
    },
    key,
  );

  return NextResponse.json({
    ok: patch.status >= 200 && patch.status < 300,
    id,
    bufferWas: { before: ev?.beforeEventBuffer, after: ev?.afterEventBuffer },
    patchStatus: patch.status,
    patch: patch.body,
  });
}
