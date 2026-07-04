import { NextResponse } from "next/server";

// Temporary route: adds a multiple choice question to the Cal.com booking form
// for the call event (id 5956394) so each booker picks which software they want
// to learn more about on the call. Hit once via the production URL, verify the
// response, then delete this route.
export async function GET() {
  const res = await fetch("https://api.cal.com/v2/event-types/5956394", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${process.env.CAL_SECRET_KEY}`,
      "cal-api-version": "2024-06-14",
      "Content-Type": "application/json",
    },
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
    cache: "no-store",
  });
  const data = await res.json();
  return NextResponse.json({ status: res.status, data });
}
