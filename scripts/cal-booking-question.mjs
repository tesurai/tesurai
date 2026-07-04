// Temporary build step: adds a multiple choice question to the Cal.com booking
// form for the call event (id 5956394) so each booker picks which software they
// want to learn more about on the call. Runs during the Vercel build where
// CAL_SECRET_KEY exists, logs the API responses to the build log for
// verification, and never fails the build. Delete after one successful deploy.

const KEY = process.env.CAL_SECRET_KEY;
const EVENT = "https://api.cal.com/v2/event-types/5956394";
const HEADERS = {
  Authorization: `Bearer ${KEY}`,
  "cal-api-version": "2024-06-14",
  "Content-Type": "application/json",
};

if (!KEY) {
  console.log("[cal-booking-question] no CAL_SECRET_KEY, skipping");
  process.exit(0);
}

try {
  const patch = await fetch(EVENT, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify({
      bookingFields: [
        {
          type: "multiselect",
          label: "Which software do you want to learn more about on the call?",
          required: true,
          options: ["Shiloh", "Tessa", "Voice", "Senna"],
        },
      ],
    }),
  });
  const patchBody = await patch.json();
  console.log("[cal-booking-question] PATCH status:", patch.status);
  console.log(
    "[cal-booking-question] PATCH response:",
    JSON.stringify(patchBody).slice(0, 2000),
  );

  const get = await fetch(EVENT, { headers: HEADERS });
  const getBody = await get.json();
  const fields = getBody?.data?.bookingFields ?? [];
  console.log("[cal-booking-question] GET status:", get.status);
  console.log(
    "[cal-booking-question] bookingFields now:",
    JSON.stringify(fields).slice(0, 2000),
  );
} catch (err) {
  console.log("[cal-booking-question] error:", String(err));
}
