// Renders the right line art for each product. Quantum and Voice are interactive
// client components; Tessa and Senna are static wireframes. All strokes inherit
// currentColor from the frame.

import QuantumGraph from "./quantum-graph";
import VoiceMemo from "./voice-memo";

// Tessa: stacked intelligence planes with a pulse reading across the top layer.
function TessaArt() {
  return (
    <svg viewBox="0 0 400 280" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className="h-full w-full">
      <path d="M200 150 320 200 200 250 80 200Z" strokeOpacity="0.25" />
      <path d="M200 95 320 145 200 195 80 145Z" strokeOpacity="0.45" />
      <path d="M200 40 320 90 200 140 80 90Z" strokeOpacity="0.85" />
      <path d="M80 90V200M320 90V200M200 140V250" strokeOpacity="0.18" strokeDasharray="2 6" />
      <path d="M150 88 172 88 184 70 200 102 214 84 250 84" strokeOpacity="0.95" />
      <circle cx="250" cy="84" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Senna: two paired users working as one, inside a shared orbit, joined at a
// link node in the middle, running the same goal (the ring around both).
function SennaArt() {
  return (
    <svg viewBox="0 0 400 280" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className="h-full w-full">
      {/* shared goal ring around the pair */}
      <ellipse cx="200" cy="140" rx="150" ry="104" strokeOpacity="0.2" strokeDasharray="3 7" />
      {/* the two paired users, overlapping toward the center */}
      <g strokeOpacity="0.85">
        <circle cx="152" cy="140" r="46" />
        <circle cx="248" cy="140" r="46" />
      </g>
      {/* person glyphs */}
      <g strokeOpacity="0.55">
        <circle cx="152" cy="126" r="11" />
        <path d="M130 162a22 18 0 0 1 44 0" />
        <circle cx="248" cy="126" r="11" />
        <path d="M226 162a22 18 0 0 1 44 0" />
      </g>
      {/* the link where they meet */}
      <circle cx="200" cy="140" r="7" fill="currentColor" stroke="none" fillOpacity="0.95" />
      <circle cx="200" cy="140" r="14" strokeOpacity="0.5" />
    </svg>
  );
}

export function ProductArt({ id }: { id: string }) {
  if (id === "quantum") return <QuantumGraph />;
  if (id === "voice") return <VoiceMemo />;
  if (id === "tessa") return <TessaArt />;
  return <SennaArt />;
}
