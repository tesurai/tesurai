// Shared UI primitives used across the landing page and product pages so the
// design language stays identical everywhere.

import type { ReactNode } from "react";

// The 1px line color used for every rule, rail, and grid line on the site.
export const LINE = "border-white/[0.08]";

// Wordmark: the white brand SVG with its built in alpha fade.
export function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-white.svg" alt="Tesurai" className={className} />
  );
}

// Bracketed mono section label, Grok style: [ PRODUCTS ]
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">
      [ {children} ]
    </p>
  );
}

// Mono uppercase pill link with a thin border.
export function PillLink({
  href,
  children,
  filled = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  filled?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors ${
        filled
          ? "border-white/[0.25] bg-white/[0.12] text-white hover:bg-white/[0.2]"
          : "border-white/[0.18] text-white/75 hover:text-white hover:border-white/[0.45]"
      }`}
    >
      {children}
    </a>
  );
}
