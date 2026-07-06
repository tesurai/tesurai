"use client";

// Interactive voice memo for the Voice product section. Click to play a short
// spoken demo out loud, straight from the browser, with the waveform animating
// while it speaks. The real product speaks through Gemini Live over a backend;
// this in page demo uses the browser speech engine so it plays instantly with
// no key. Swap speak() for an <audio> clip or a live stream when wired up.

import { useEffect, useRef, useState } from "react";

const DEMO_LINE =
  "Hey, you have hit your goal three days in a row. Want to push for five?";

// Fixed bar heights (percent of the track) so the resting waveform looks like
// a real memo, then each bar animates on its own offset while speaking.
const BARS = [14, 26, 44, 62, 38, 74, 50, 30, 52, 66, 40, 26, 18, 34, 18];

export default function VoiceMemo() {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
    }
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  const toggle = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(DEMO_LINE);
    u.rate = 1;
    u.pitch = 1;
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    setPlaying(true);
  };

  const idleRef = useRef<HTMLSpanElement>(null);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Stop the voice demo" : "Play the voice demo"}
      className="group flex h-full w-full items-center gap-5 text-left text-white/65"
    >
      {/* play / pause */}
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/85 transition-colors group-hover:border-white/45">
        {playing ? (
          <span className="flex gap-[5px]">
            <span className="block h-4 w-[3px] bg-current" />
            <span className="block h-4 w-[3px] bg-current" />
          </span>
        ) : (
          <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-current" />
        )}
      </span>

      {/* waveform */}
      <span className="flex h-24 flex-1 items-center gap-[3px]" ref={idleRef}>
        {BARS.map((h, i) => (
          <span
            key={i}
            className={`w-[3px] shrink-0 rounded-full bg-current ${playing ? "tsr-eq" : ""}`}
            style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
          />
        ))}
      </span>

      {/* label */}
      <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 sm:block">
        {supported ? (playing ? "Playing" : "Voice demo") : "Voice demo"}
      </span>
    </button>
  );
}
