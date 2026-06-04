"use client";

import { useState } from "react";

// Inline product callout used inside body copy. Mirrors the David protein bar
// pattern: a highlighted phrase with a small floating pill above it showing
// the product. The pill has a close button. Clicking the highlighted phrase
// again reopens the pill.

export default function ProductCallout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <span className="relative inline-block align-baseline">
      {open && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 inline-flex items-center gap-1.5 bg-black border border-white/[0.20] rounded-full pl-3 pr-1.5 py-1.5 whitespace-nowrap z-10 shadow-lg shadow-black/60"
          role="dialog"
          aria-label="Tessa"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-tessa-white.svg"
            alt="Tessa"
            width={88}
            height={16}
            className="h-4 w-auto"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-white/45 hover:text-white w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/[0.10] transition-colors"
            aria-label="Close"
          >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M1 1L8 8M8 1L1 8" />
            </svg>
          </button>
        </span>
      )}
      <span
        onClick={() => setOpen((v) => !v)}
        className="whitespace-nowrap bg-white/[0.15] px-1 rounded cursor-pointer transition-colors hover:bg-white/[0.22]"
      >
        {children}
      </span>
    </span>
  );
}
