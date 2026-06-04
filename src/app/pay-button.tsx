"use client";

import { useState } from "react";

export default function PayButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePay() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        setError(data?.error ?? "Could not start payment. Try again.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Could not start payment. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={handlePay}
        disabled={loading}
        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-[14px] font-normal tracking-[0.04em] rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Starting..." : "Get started"}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
      {error && (
        <p className="text-[13px] font-light text-white/70 border border-white/15 rounded-lg px-4 py-2 max-w-[320px]">
          {error}
        </p>
      )}
    </div>
  );
}
