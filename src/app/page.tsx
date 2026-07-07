// Tesurai company landing page.
// Voice: written as a category-defining company. Confident, declarative, short.
// The category is AI software for digital consumer products, four products:
// Quantum (an AI memory brain per user), Tessa (the intelligence layer on
// Quantum's data), Voice (what speaks to users), and Senna (the social side where
// users grow together). Product data and art live in shared modules so the
// per product pages (/quantum, /tessa, /voice, /senna) stay in sync.
// Copy rules: fifth grade reading level, no dashes anywhere, no named LLMs, no
// named voice provider on the page, no made up outcome claims.
// Design system: Grok / xAI style, black and white only. Near black canvas, a
// hero with the giant ghosted wordmark faded by a gradient and lit by a white
// beam, mono uppercase nav and pill buttons, bracketed section labels, a stacked
// scroll product showcase where each product sticks and the next slides over it,
// a one system section, and a short Book a call closer. No color anywhere.

import { LINE, Wordmark, PillLink, SectionLabel } from "./ui";
import { PRODUCTS } from "./products";
import { ProductArt } from "./product-art";

const CAL_LINK = "https://cal.com/tesurai/call";

const BROWSER_TITLE = "Tesurai | Intelligence for digital consumer products.";
const SHARE_TITLE = "Intelligence for digital consumer products.";
const SHARE_DESCRIPTION =
  "Four AI products for consumer apps, built into your product under your brand. They remember each user, guide them, talk to them, and bring them together.";
const SHARE_IMAGE = "/og.png";

export const metadata = {
  title: BROWSER_TITLE,
  description: SHARE_DESCRIPTION,
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    siteName: "Tesurai",
    type: "website",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tesurai. Intelligence for digital consumer products.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ paid?: string }>;
}) {
  const params = await searchParams;
  const paid = params?.paid === "1";
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
      {/* Nav: mono uppercase links, thin outlined pill CTA. */}
      <header className={`fixed top-0 inset-x-0 z-50 border-b ${LINE} bg-[#0a0a0a]/70 backdrop-blur-xl`}>
        <div className={`max-w-[1240px] mx-auto h-16 border-x ${LINE} px-6 flex items-center justify-between`}>
          <div className="flex items-center gap-10">
            <a href="#top" aria-label="Tesurai home">
              <Wordmark className="h-3 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {PRODUCTS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </nav>
          </div>
          <PillLink href="/book" filled>
            Book a call
          </PillLink>
        </div>
      </header>

      {/* Hero: the giant ghosted wordmark as the headline, faded by a gradient
          and lit by a white beam from the right, with the announcement row
          pinned to the bottom. */}
      <section id="top" className={`relative border-b ${LINE} overflow-hidden`}>
        <div className={`relative max-w-[1240px] mx-auto border-x ${LINE} min-h-svh flex flex-col`}>
          {/* white light beam sweeping in from the right edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 62% at 102% 50%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.22) 34%, rgba(255,255,255,0.05) 58%, transparent 78%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 205deg at 101% 50%, transparent 0deg, rgba(255,255,255,0.12) 50deg, rgba(255,255,255,0.02) 95deg, transparent 130deg)",
              }}
            />
          </div>

          {/* the brand wordmark as the headline, gradient faded across */}
          <div aria-hidden className="absolute inset-0 flex items-center justify-center px-6 sm:px-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt=""
              className="w-full max-w-[1080px] select-none"
              style={{
                opacity: 0.32,
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 24%, black 50%, transparent 94%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, black 24%, black 50%, transparent 94%)",
              }}
            />
          </div>

          <h1 className="sr-only">Tesurai. Intelligence for digital consumer products.</h1>

          <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-10">
            {paid && (
              <div className="w-full max-w-[560px] border border-white/[0.15] bg-black/60 backdrop-blur p-5">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white mb-2">
                  Payment received
                </p>
                <p className="text-[15px] font-normal leading-[1.55] text-white/70">
                  Our team will reach out within a few hours to find a time to hop on a call.
                </p>
              </div>
            )}
          </div>

          {/* bottom announcement row */}
          <div className="relative px-6 sm:px-10 pb-10 grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-end">
            <span aria-hidden className="hidden sm:block font-mono text-[15px] text-white/50">
              ↓
            </span>
            <p className="max-w-[470px] text-[13.5px] font-normal leading-[1.6] text-white/70">
              Four AI products for consumer apps, built into your product under your
              brand. They remember each user, guide them, talk to them, and bring
              them together.
            </p>
            <div className="flex flex-wrap gap-3">
              <PillLink href="/book" filled>
                Book a call
              </PillLink>
              <PillLink href="#quantum">Learn more</PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* Products header. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 pt-20 sm:pt-28 pb-12 sm:pb-16`}>
          <SectionLabel>Products</SectionLabel>
          <h2 className="mt-7 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white max-w-[820px]">
            Memory, intelligence, a voice, and a way to grow together.
          </h2>
        </div>
      </section>

      {/* Stacked product showcase: each product is a sticky full height card, so
          it holds while the next one scrolls up and slides over it. Later cards
          get a higher z index and an opaque background to cover the last. */}
      <div className="relative">
        {PRODUCTS.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className={`sticky top-0 h-svh border-b ${LINE} bg-[#0a0a0a] overflow-hidden`}
            style={{ zIndex: i + 1 }}
          >
            <div className={`max-w-[1240px] mx-auto border-x ${LINE} h-full flex items-center px-6 sm:px-10`}>
              <div className="w-full grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-2">
                  <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-white/45 tabular-nums">
                    {p.n}
                  </p>
                  <h3 className="mt-4 text-[clamp(1.125rem,1.6vw,1.375rem)] font-medium text-white">
                    {p.name}
                  </h3>
                  <a
                    href={`/${p.id}`}
                    className="mt-5 inline-block font-mono text-[11px] tracking-[0.16em] uppercase text-white/45 hover:text-white transition-colors"
                  >
                    View ↗
                  </a>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.025em] text-white text-balance">
                    {p.title}
                  </p>
                  <p className="mt-5 text-[clamp(1rem,1.2vw,1.125rem)] font-medium leading-[1.55] text-white/85">
                    {p.tagline}
                  </p>
                  {p.body.map((line) => (
                    <p
                      key={line.slice(0, 24)}
                      className="mt-4 text-[14.5px] font-normal leading-[1.7] text-white/55"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="lg:col-span-5">
                  <div className={`border ${LINE} p-8 sm:p-10 h-[260px] sm:h-[340px] text-white/40`}>
                    <ProductArt id={p.id} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* One system: the four work as one, you just wire in your product. */}
      <section className={`relative z-10 border-b ${LINE} bg-[#0a0a0a]`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 py-24 sm:py-32`}>
          <SectionLabel>One system</SectionLabel>
          <h2 className="mt-7 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
            Four products. One system.
          </h2>
          <p className="mt-5 max-w-[620px] text-[15px] font-normal leading-[1.7] text-white/55">
            Quantum, Tessa, Voice, and Senna work as one. We handle the intelligence
            and keep it under your brand. The only thing you do is wire up your
            product, and your users get all four.
          </p>

          <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1.4fr]">
            <div className={`border ${LINE} px-6 py-8 text-center`}>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40">
                Your product
              </p>
              <p className="mt-3 text-[15px] leading-[1.5] text-white/75">
                Your app or service. Your brand. Your users.
              </p>
            </div>
            <div className="flex items-center justify-center py-2">
              <span aria-hidden className="font-mono text-[18px] text-white/40 rotate-90 lg:rotate-0">
                →
              </span>
            </div>
            <div className={`grid grid-cols-2 gap-px border ${LINE} bg-white/[0.08]`}>
              {PRODUCTS.map((p) => (
                <div key={p.id} className="bg-[#0a0a0a] px-6 py-6">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40 tabular-nums">
                    {p.n}
                  </p>
                  <p className="mt-2 text-[16px] font-medium text-white">{p.name}</p>
                  <p className="mt-1 text-[13px] leading-[1.45] text-white/45">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Close: super short, the big button is the section. */}
      <section className={`relative z-10 border-b ${LINE} bg-[#0a0a0a]`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 py-24 sm:py-36`}>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-white">
            Book a call.
          </h2>
          <div className="mt-10">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-10 sm:px-14 py-5 sm:py-6 font-mono text-[13px] sm:text-[15px] tracking-[0.16em] uppercase hover:bg-white/85 transition-colors"
            >
              Pick a time
            </a>
          </div>
        </div>
      </section>

      {/* Footer: brand block, Explore and Connect columns, bottom bar, and a
          white horizon glow rising from the bottom edge. */}
      <footer className="relative z-10 overflow-hidden bg-[#0a0a0a]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
          style={{
            background:
              "radial-gradient(ellipse 90% 85% at 50% 125%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.03) 60%, transparent 80%)",
          }}
        />
        <div className={`relative max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 pt-16 sm:pt-24 pb-10`}>
          <div className="grid gap-12 md:gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
            <div>
              <Wordmark className="h-4 w-auto" />
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/35">
                Explore
              </p>
              <ul className="mt-5 space-y-3.5">
                {PRODUCTS.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`/${p.id}`}
                      className="text-[15px] font-normal text-white/60 hover:text-white transition-colors"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/35">
                Connect
              </p>
              <ul className="mt-5 space-y-3.5">
                <li>
                  <a
                    href="mailto:hello@tesurai.com"
                    className="text-[15px] font-normal text-white/60 hover:text-white transition-colors"
                  >
                    hello@tesurai.com
                  </a>
                </li>
                <li>
                  <a
                    href={CAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-normal text-white/60 hover:text-white transition-colors"
                  >
                    Book a call
                  </a>
                </li>
              </ul>
              <div className="mt-5 -ml-2 flex items-center gap-1">
                <a
                  href="https://www.instagram.com/gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://x.com/gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@tessurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-14 sm:mt-20 pt-7 border-t ${LINE} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`}>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/35 tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
