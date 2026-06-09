// One-time setup endpoint for the Cal.com booking link. Runs on Vercel where
// CAL_SECRET_KEY is configured. Creates an always-open 24/7 schedule and a
// 30 minute "Book a call" event type (slug: call), idempotently. Safe to run
// more than once. Remove this route after the booking link is live.
import { NextResponse } from "next/server";

const CAL_API = "https://api.cal.com/v2";
const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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

  // Who owns this key (username + timezone)
  const me = await calFetch("/me", "2024-06-14", { method: "GET" });
  const username = me.body?.data?.username;
  const timeZone = me.body?.data?.timeZone ?? "America/New_York";
  steps.me = { status: me.status, username, timeZone };
  if (!me.ok || !username) {
    return NextResponse.json(
      { ok: false, error: "Could not read the Cal.com account", steps },
      { status: 502 }
    );
  }

  // Find or create the always-open schedule, and force it to 24/7
  const schedules = await calFetch("/schedules", "2024-06-11", { method: "GET" });
  let schedule = (schedules.body?.data ?? []).find(
    (s: any) => s?.name === "Always open"
  );
  const fullAvailability = [
    { days: ALL_DAYS, startTime: "00:00", endTime: "23:59" },
  ];
  if (schedule?.id) {
    const updated = await calFetch(`/schedules/${schedule.id}`, "2024-06-11", {
      method: "PATCH",
      body: JSON.stringify({ availability: fullAvailability }),
    });
    steps.schedule = { action: "updated", status: updated.status, id: schedule.id };
  } else {
    const created = await calFetch("/schedules", "2024-06-11", {
      method: "POST",
      body: JSON.stringify({
        name: "Always open",
        timeZone,
        isDefault: false,
        availability: fullAvailability,
      }),
    });
    schedule = created.body?.data;
    steps.schedule = {
      action: "created",
      status: created.status,
      id: schedule?.id,
      error: created.ok ? undefined : created.body,
    };
  }
  if (!schedule?.id) {
    return NextResponse.json(
      { ok: false, error: "Could not create the always-open schedule", steps },
      { status: 502 }
    );
  }

  // Find or create the 30 minute event type at slug "call"
  const eventTypePayload = {
    title: "Book a call",
    slug: "call",
    lengthInMinutes: 30,
    description:
      "A 30 minute call to map your business, your users, and the results you want them to achieve.",
    scheduleId: schedule.id,
  };
  const eventTypes = await calFetch(
    `/event-types?username=${encodeURIComponent(username)}`,
    "2024-06-14",
    { method: "GET" }
  );
  const existing = (eventTypes.body?.data ?? []).find(
    (e: any) => e?.slug === "call"
  );
  if (existing?.id) {
    const patched = await calFetch(`/event-types/${existing.id}`, "2024-06-14", {
      method: "PATCH",
      body: JSON.stringify(eventTypePayload),
    });
    steps.eventType = {
      action: "updated",
      status: patched.status,
      id: existing.id,
      error: patched.ok ? undefined : patched.body,
    };
  } else {
    const created = await calFetch("/event-types", "2024-06-14", {
      method: "POST",
      body: JSON.stringify(eventTypePayload),
    });
    steps.eventType = {
      action: "created",
      status: created.status,
      id: created.body?.data?.id,
      error: created.ok ? undefined : created.body,
    };
  }

  const eventTypeStep = steps.eventType as { status: number };
  const ok = eventTypeStep.status >= 200 && eventTypeStep.status < 300;
  return NextResponse.json(
    { ok, bookingUrl: `https://cal.com/${username}/call`, steps },
    { status: ok ? 200 : 502 }
  );
}

export async function GET() {
  return run();
}

export async function POST() {
  return run();
}
