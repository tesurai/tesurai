"use client";

// Inline Cal.com booking calendar, themed light to match the site. The embed
// auto-resizes to fit its content. calLink points at the same event the CTA
// buttons use (cal.com/tesurai/call).
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "call" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="call"
      calLink="tesurai/call"
      style={{ width: "100%" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
