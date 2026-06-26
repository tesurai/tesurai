/* eslint-disable @typescript-eslint/no-explicit-any */
// TEMPORARY route. Shortens the title + description and sets the call length to
// 60 minutes on the "call" event type. Run once, then delete.
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API = "https://api.cal.com/v2";
const VERSION = "2024-06-14";
const EVENT_ID = 5956394;

export async function GET() {
  const key = process.env.CAL_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "CAL_SECRET_KEY not set in this environment." },
      { status: 503 },
    );
  }

  const res = await fetch(`${API}/event-types/${EVENT_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${key}`,
      "cal-api-version": VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Tessa call",
      description: "See if Tessa fits your business and what it takes to launch.",
      lengthInMinutes: 60,
    }),
    cache: "no-store",
  });

  const text = await res.text();
  let body: any;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }

  return NextResponse.json({
    ok: res.status >= 200 && res.status < 300,
    status: res.status,
    title: body?.data?.title,
    description: body?.data?.description,
    lengthInMinutes: body?.data?.lengthInMinutes,
    afterEventBuffer: body?.data?.afterEventBuffer,
  });
}
