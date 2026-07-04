// Temporary build step: adds a multiple choice question to the Cal.com booking
// form for the call event (id 5956394) so each booker picks which software they
// want to learn more about on the call. Applies the field, then reads it back
// and fails the build if the question is missing, so the deployment state
// (READY or ERROR) confirms whether the change landed. Skips locally where no
// key exists. Delete after one successful deploy.

const KEY = process.env.CAL_SECRET_KEY;
const EVENT = "https://api.cal.com/v2/event-types/5956394";
const HEADERS = {
  Authorization: `Bearer ${KEY}`,
  "cal-api-version": "2024-06-14",
  "Content-Type": "application/json",
};
const LABEL = "Which software do you want to learn more about on the call?";

if (!KEY) {
  console.log("[cal-booking-question] no CAL_SECRET_KEY, skipping");
  process.exit(0);
}

const patch = await fetch(EVENT, {
  method: "PATCH",
  headers: HEADERS,
  body: JSON.stringify({
    bookingFields: [
      {
        type: "multiselect",
        label: LABEL,
        required: true,
        options: ["Shiloh", "Tessa", "Voice", "Senna"],
      },
    ],
  }),
});
const patchBody = await patch.json().catch(() => ({}));
console.log("[cal-booking-question] PATCH status:", patch.status);
console.log(
  "[cal-booking-question] PATCH response:",
  JSON.stringify(patchBody).slice(0, 2000),
);

const get = await fetch(EVENT, { headers: HEADERS });
const getBody = await get.json().catch(() => ({}));
const fields = getBody?.data?.bookingFields ?? [];
console.log("[cal-booking-question] GET status:", get.status);
console.log(
  "[cal-booking-question] bookingFields now:",
  JSON.stringify(fields).slice(0, 2000),
);

const found = fields.some((f) => f?.label === LABEL);
if (!found) {
  console.log("[cal-booking-question] question NOT found, failing the build");
  process.exit(1);
}
console.log("[cal-booking-question] question is on the booking form");
