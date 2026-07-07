"use client";

// Quantum: an interactive graph view, modeled on the Obsidian graph. A small
// force simulation keeps the web alive (nodes repel, edges pull, everything
// drifts). Hover a node to light up its connections; drag a node to disturb
// the web and watch it settle. Falls still under prefers-reduced-motion.

import { useEffect, useRef, useState } from "react";

const W = 400;
const H = 320;

const NODES0: readonly [number, number, number][] = [
  [200, 160, 6],
  [120, 110, 5],
  [288, 200, 5],
  [58, 80, 2.5],
  [158, 64, 3],
  [252, 70, 2.5],
  [332, 96, 3],
  [64, 170, 2.5],
  [92, 234, 3],
  [176, 236, 2.5],
  [256, 244, 3],
  [342, 218, 2.5],
  [300, 128, 2.5],
  [216, 118, 3],
  [138, 182, 2.5],
  [242, 170, 3],
];

const EDGES: readonly [number, number][] = [
  [0, 1], [0, 2], [0, 13], [0, 15], [0, 14], [0, 9], [0, 5],
  [1, 3], [1, 4], [1, 7], [1, 14], [1, 13],
  [2, 10], [2, 11], [2, 15], [2, 12], [2, 9],
  [4, 5], [5, 13], [5, 6], [6, 12], [12, 13],
  [7, 8], [8, 9], [9, 10], [14, 8], [15, 10], [13, 4], [3, 7],
];

export default function QuantumGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodes = useRef(NODES0.map(([x, y, r]) => ({ x, y, vx: 0, vy: 0, r })));
  const drag = useRef<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [, tick] = useState(0);

  const neighbors = useRef<Set<number>[]>([]);
  if (neighbors.current.length === 0) {
    neighbors.current = NODES0.map(() => new Set<number>());
    EDGES.forEach(([a, b]) => {
      neighbors.current[a].add(b);
      neighbors.current[b].add(a);
    });
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const step = () => {
      const ns = nodes.current;
      for (let i = 0; i < ns.length; i++) {
        if (drag.current === i) continue;
        let fx = 0;
        let fy = 0;
        for (let j = 0; j < ns.length; j++) {
          if (i === j) continue;
          const dx = ns[i].x - ns[j].x;
          const dy = ns[i].y - ns[j].y;
          const d2 = dx * dx + dy * dy || 0.01;
          const d = Math.sqrt(d2);
          const rep = 900 / d2;
          fx += (dx / d) * rep;
          fy += (dy / d) * rep;
        }
        fx += (200 - ns[i].x) * 0.008;
        fy += (160 - ns[i].y) * 0.008;
        ns[i].vx = (ns[i].vx + fx) * 0.82;
        ns[i].vy = (ns[i].vy + fy) * 0.82;
      }
      for (const [a, b] of EDGES) {
        const dx = ns[b].x - ns[a].x;
        const dy = ns[b].y - ns[a].y;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const f = (d - 72) * 0.02;
        const ux = dx / d;
        const uy = dy / d;
        if (drag.current !== a) {
          ns[a].vx += ux * f;
          ns[a].vy += uy * f;
        }
        if (drag.current !== b) {
          ns[b].vx -= ux * f;
          ns[b].vy -= uy * f;
        }
      }
      for (let i = 0; i < ns.length; i++) {
        if (drag.current === i) continue;
        if (!reduce) {
          ns[i].vx += (Math.random() - 0.5) * 0.22;
          ns[i].vy += (Math.random() - 0.5) * 0.22;
        }
        ns[i].x = Math.max(14, Math.min(W - 14, ns[i].x + ns[i].vx));
        ns[i].y = Math.max(14, Math.min(H - 14, ns[i].y + ns[i].vy));
      }
      tick((v) => (v + 1) % 1000000);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const toSvg = (e: React.PointerEvent) => {
    const r = svgRef.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * W,
      y: ((e.clientY - r.top) / r.height) * H,
    };
  };
  const nearest = (p: { x: number; y: number }) => {
    let best = -1;
    let bd = 1e9;
    nodes.current.forEach((n, i) => {
      const d = (n.x - p.x) ** 2 + (n.y - p.y) ** 2;
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    return bd < 520 ? best : -1;
  };

  const onDown = (e: React.PointerEvent) => {
    const i = nearest(toSvg(e));
    if (i >= 0) {
      drag.current = i;
      setHover(i);
      (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    }
  };
  const onMove = (e: React.PointerEvent) => {
    const p = toSvg(e);
    if (drag.current != null) {
      const n = nodes.current[drag.current];
      n.x = Math.max(14, Math.min(W - 14, p.x));
      n.y = Math.max(14, Math.min(H - 14, p.y));
      n.vx = 0;
      n.vy = 0;
    } else {
      setHover(nearest(p));
    }
  };
  const onUp = () => {
    drag.current = null;
  };

  const ns = nodes.current;
  const active = hover;
  const isLit = (i: number) =>
    active == null ? true : i === active || neighbors.current[active].has(i);
  const edgeLit = (a: number, b: number) =>
    active != null && (a === active || b === active);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full touch-none cursor-grab active:cursor-grabbing"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={() => {
        onUp();
        setHover(null);
      }}
      fill="none"
      stroke="currentColor"
    >
      <g strokeWidth="1">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={ns[a].x}
            y1={ns[a].y}
            x2={ns[b].x}
            y2={ns[b].y}
            strokeOpacity={active == null ? 0.18 : edgeLit(a, b) ? 0.7 : 0.05}
          />
        ))}
      </g>
      <g stroke="none" fill="currentColor">
        {ns.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fillOpacity={isLit(i) ? (i < 3 ? 0.95 : 0.7) : 0.16}
            style={{ transition: "fill-opacity .2s" }}
          />
        ))}
      </g>
    </svg>
  );
}
