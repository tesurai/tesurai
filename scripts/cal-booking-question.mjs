// Temporary build step: adds a multiple choice question to the Cal.com booking
// form for the call event (id 5956394) so each booker picks which software they
// want to learn more about on the call. Tries several field shapes accepted by
// different cal-api-version schemas, verifies after each with a GET, and fails
// the build only if none land, so the deployment state (READY or ERROR)
// confirms whether the change took. Skips locally where no key exists.
// Delete after one successful deploy.

const KEY = process.env.CAL_SECRET_KEY;
const EVENT = "https://api.cal.com/v2/event-types/5956394";
const HEADERS = {
  Authorization: `Bearer ${KEY}`,
  "cal-api-version": "2024-06-14",
  "Content-Type": "application/json",
};
const LABEL = "Which software do you want to learn more about on the call?";
const OPTIONS = ["Shiloh", "Tessa", "Voice", "Senna"];

if (!KEY) {
  console.log("[cal-booking-question] no CAL_SECRET_KEY, skipping");
  process.exit(0);
}

const SHAPES = [
  {
    name: "multiselect with slug",
    field: {
      type: "multiselect",
      slug: "software-interest",
      label: LABEL,
      required: true,
      options: OPTIONS,
    },
  },
  {
    name: "multiselect without slug",
    field: { type: "multiselect", label: LABEL, required: true, options: OPTIONS },
  },
  {
    name: "select with slug",
    field: {
      type: "select",
      slug: "software-interest",
      label: LABEL,
      required: true,
      options: OPTIONS,
    },
  },
  {
    name: "radio with slug",
    field: {
      type: "radio",
      slug: "software-interest",
      label: LABEL,
      required: true,
      options: OPTIONS,
    },
  },
];

async function verify() {
  const res = await fetch(EVENT, { headers: HEADERS });
  const body = await res.json().catch(() => ({}));
  const fields = body?.data?.bookingFields ?? [];
  const raw = JSON.stringify(fields);
  console.log("[cal-booking-question] GET status:", res.status);
  console.log("[cal-booking-question] bookingFields now:", raw.slice(0, 2000));
  return raw.includes("Shiloh") || raw.includes(LABEL);
}

if (await verify()) {
  console.log("[cal-booking-question] question already on the booking form");
  process.exit(0);
}

for (const shape of SHAPES) {
  try {
    const res = await fetch(EVENT, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify({ bookingFields: [shape.field] }),
    });
    const body = await res.json().catch(() => ({}));
    console.log(`[cal-booking-question] PATCH (${shape.name}) status:`, res.status);
    console.log(
      `[cal-booking-question] PATCH (${shape.name}) response:`,
      JSON.stringify(body).slice(0, 1500),
    );
    if (await verify()) {
      console.log(`[cal-booking-question] question landed via: ${shape.name}`);
      process.exit(0);
    }
  } catch (err) {
    console.log(`[cal-booking-question] PATCH (${shape.name}) error:`, String(err));
  }
}

console.log("[cal-booking-question] no shape landed, failing the build");
process.exit(1);
