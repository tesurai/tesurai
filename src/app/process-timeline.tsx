"use client";

// The Process timeline, with a line that draws as you scroll. A dim rail sits
// behind a bright fill rail whose height tracks how far the section has moved
// through the viewport. Each square node lights up the moment the fill reaches
// it, so the three steps "connect" on scroll. Falls back to a fully drawn line
// when the user prefers reduced motion.

import { useEffect, useRef, useState } from "react";

type Step = { n: string; t: string; d: string };

const STEPS: Step[] = [
  {
    n: "01",
    t: "Onboard",
    d: "We hop on a call with you to understand your business, your users, and the results you want them to achieve.",
  },
  {
    n: "02",
    t: "Build",
    d: "We build the Tessa formula around your business so users get the right patterns and feedback to reach the results.",
  },
  {
    n: "03",
    t: "Launch",
    d: "We wire Tessa up to your business, clean up bugs with test flights, and then push it to live.",
  },
];

// How far down the viewport the "fill point" sits. The line draws to wherever
// the content has crossed this line (0.65 = 65% down the screen).
const FILL_POINT = 0.65;

export default function ProcessTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [reached, setReached] = useState<boolean[]>(() => STEPS.map(() => false));

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      setReached(STEPS.map(() => true));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const fillPx = Math.max(0, Math.min(rect.height, vh * FILL_POINT - rect.top));
      setProgress(fillPx / rect.height);
      setReached(
        nodeRefs.current.map((node) =>
          node ? node.getBoundingClientRect().top - rect.top <= fillPx + 2 : false,
        ),
      );
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={trackRef} className="relative ml-1">
      {/* dim base rail */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.15]"
      />
      {/* bright fill rail, height tracks scroll */}
      <div
        aria-hidden
        className="absolute left-0 top-0 w-px bg-white"
        style={{ height: `${progress * 100}%` }}
      />
      {STEPS.map((s, i) => (
        <div key={s.n} className="relative pl-8 sm:pl-12 pb-12 last:pb-0">
          <span
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            aria-hidden
            className={`absolute -left-[4.5px] top-[5px] h-2 w-2 transition-colors duration-300 ${
              reached[i] ? "bg-white" : "bg-white/25"
            }`}
          />
          <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/40">
            Step {s.n}
          </p>
          <h3 className="mt-2 text-[clamp(1.125rem,1.6vw,1.375rem)] font-medium tracking-[-0.02em] text-white">
            {s.t}
          </h3>
          <p className="mt-2 text-[15px] font-normal leading-[1.6] text-white/50 max-w-[480px]">
            {s.d}
          </p>
        </div>
      ))}
    </div>
  );
}
