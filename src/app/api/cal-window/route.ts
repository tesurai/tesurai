// One-time endpoint to set a rolling 2 day booking window on the "call" event
// type. Runs on Vercel where CAL_SECRET_KEY lives. Idempotent. Remove after use.
import { NextResponse } from "next/server";

const CAL_API = "https://api.cal.com/v2";

/* eslint-disable @typescript-eslint/no-explicit-any */

async function calFetch(
  path: string,
  version: string,
  init?: RequestInit
): Promise<{ ok: boolean; status: number; body: any }> {
  const res = await fetch(`${CAL_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.CAL_SECRET_KEY}`,
      "cal-api-version": version,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
  const body = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, body };
}

async function run() {
  if (!process.env.CAL_SECRET_KEY) {
    return NextResponse.json(
      { ok: false, error: "CAL_SECRET_KEY is not set in this environment" },
      { status: 500 }
    );
  }

  const steps: Record<string, unknown> = {};

  const me = await calFetch("/me", "2024-06-14", { method: "GET" });
  const username = me.body?.data?.username;
  steps.me = { status: me.status, username };
  if (!username) {
    return NextResponse.json(
      { ok: false, error: "Could not read the Cal.com account", steps },
      { status: 502 }
    );
  }

  const eventTypes = await calFetch(
    `/event-types?username=${encodeURIComponent(username)}`,
    "2024-06-14",
    { method: "GET" }
  );
  const evt = (eventTypes.body?.data ?? []).find((e: any) => e?.slug === "call");
  steps.find = { status: eventTypes.status, id: evt?.id };
  if (!evt?.id) {
    return NextResponse.json(
      { ok: false, error: "Could not find the call event type", steps },
      { status: 404 }
    );
  }

  // Reframe the call as a discovery + close call, and set a rolling window so
  // only the next 2 calendar days are bookable, moving forward each day.
  const patched = await calFetch(`/event-types/${evt.id}`, "2024-06-14", {
    method: "PATCH",
    body: JSON.stringify({
      title: "Tessa discovery call",
      description:
        "A 30 minute discovery call. We learn your business and your users, then show you how Tessa gets them the results they came for. Leave knowing if Tessa is a fit and what it takes to launch.",
      bookingWindow: { type: "calendarDays", value: 2, rolling: true },
    }),
  });
  steps.patch = {
    status: patched.status,
    bookingWindow: patched.body?.data?.bookingWindow,
    title: patched.body?.data?.title,
    error: patched.ok ? undefined : patched.body,
  };

  return NextResponse.json(
    { ok: patched.ok, bookingUrl: `https://cal.com/${username}/call`, steps },
    { status: patched.ok ? 200 : 502 }
  );
}

export async function GET() {
  return run();
}

export async function POST() {
  return run();
}
