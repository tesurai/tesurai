// Tesurai company landing page.
// Voice: written as a category-defining company. Confident, declarative, short.
// The category is AI software for digital consumer products, four products in order:
// Shiloh is a digital brain that builds a living map of each user, Tessa is the
// intelligence layer that reads Shiloh's data and moves the user toward their goals,
// Voice makes talking to the software feel human, and Senna pairs users so they grow
// together with Tessa in the middle. Product bodies speak to the end user (you);
// the hero speaks to the business. Less first-person, more product-as-protagonist.
// Copy rules: fifth grade reading level, no dashes anywhere, no pronouns for the
// products, no language framing them as a team replacement, no made up outcome claims.
// Design system: Grok / xAI style, black and white only. Near black canvas, a hero
// with the giant ghosted wordmark lit by a white beam from the right edge, mono
// uppercase for nav links, labels, and pill buttons, bracketed section labels like
// [ PRODUCTS ], medium weight sans headlines, products as full screen rows with a
// framed line art board each (animated Obsidian style graph for Shiloh, an
// interactive voice memo that speaks a demo for Voice, a shared progress track
// for Senna), divided by 1px lines, full width section rules and frame rails, and
// a short Book a call closer with one big button.
// No color anywhere: the light is white, the page is black.
// Booking lives on its own page at /book; every Book a call button points there.

import VoiceMemo from "./voice-memo";

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

// The 1px line color used for every rule, rail, and grid line on the page.
const LINE = "border-white/[0.08]";

// Small wordmark used in the nav and footer. The white brand SVG with the
// alpha-fade gradient so the trailing letters dissolve to almost nothing.
function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-white.svg" alt="Tesurai" className={className} />
  );
}

// Bracketed mono section label, Grok style: [ PRODUCTS ]
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">
      [ {children} ]
    </p>
  );
}

// Mono uppercase pill link, thin border, Grok style.
function PillLink({
  href,
  children,
  filled = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
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

// The four products as full width rows divided by 1px lines.
const PRODUCTS: {
  id: string;
  n: string;
  name: string;
  title: string;
  body: string[];
  anchor?: string;
}[] = [
  {
    id: "shiloh",
    n: "01",
    name: "Shiloh",
    title: "Your product remembers everyone",
    body: [
      "Shiloh is an LLM brain, like Claude, ChatGPT, or Grok, with one difference: this one belongs to you and is built from your life inside the product.",
      "Every session, every entry, every action feeds it. Over time it compiles what it hears into your skills, traits, patterns, and commitments: one living map of you, recalled instantly whenever you talk.",
    ],
    anchor: "Like an LLM, but for your brain.",
  },
  {
    id: "tessa",
    n: "02",
    name: "Tessa",
    title: "Analytics your users can talk to",
    body: [
      "Tessa is the intelligence layer that sits on top of Shiloh. Tessa reads the map Shiloh builds, finds the patterns you cannot see yourself, and turns them into feedback.",
      "What to fix, what to keep doing, and the next step to take: clear feedback from your own data, aimed at one thing, getting you the results you came for.",
    ],
    anchor: "The intelligence layer on top of Shiloh.",
  },
  {
    id: "voice",
    n: "03",
    name: "Voice",
    title: "Feels like talking to a person",
    body: [
      "Voice is what speaks to your users. It is the wrapper that lets them talk to Shiloh and Tessa out loud and hear the answer back in a natural voice.",
      "Users ask a question in the moment and the software answers in the moment. No menus, no forms, no charts.",
    ],
    anchor: "The voice of your product.",
  },
  {
    id: "senna",
    n: "04",
    name: "Senna",
    title: "Grow together, not alone",
    body: [
      "Senna is the social side of your product: a place for users to connect, run programs together, and hold each other accountable.",
      "Pair with a friend, a partner, or your team. Run the same program side by side and share every check in. Tessa sits in the middle, reads both sides, shares the patterns you have in common, and gives you both the feedback to grow stronger together.",
    ],
    anchor: "Someone real is in it with you.",
  },
];

// Thin line art for each product, Grok style: wireframe drawings in a plain
// square frame. All strokes inherit currentColor from the frame.
// Shiloh: an animated Obsidian style graph view. A faint static web with a
// signal flowing along the edges and nodes twinkling, so it reads as a live,
// growing brain. The edge path is shared by a static underlay and a flowing
// overlay. Falls still under prefers-reduced-motion (handled in globals.css).
const SHILOH_EDGES =
  "M200 140 120 92M200 140 288 178M200 140 216 98M200 140 242 150M200 140 138 162M200 140 176 216M200 140 252 52M120 92 58 64M120 92 158 46M120 92 64 150M120 92 44 112M120 92 138 162M120 92 216 98M288 178 256 224M288 178 342 198M288 178 242 150M288 178 300 108M288 178 354 142M288 178 176 216M158 46 252 52M252 52 216 98M252 52 332 78M332 78 300 108M300 108 216 98M300 108 354 142M64 150 44 112M64 150 92 214M92 214 176 216M176 216 256 224M138 162 92 214M242 150 256 224M342 198 354 142M58 64 44 112M158 46 216 98";

const SHILOH_NODES: [number, number, number][] = [
  [58, 64, 2.5],
  [158, 46, 3],
  [252, 52, 2.5],
  [332, 78, 3],
  [64, 150, 2.5],
  [92, 214, 3],
  [176, 216, 2.5],
  [256, 224, 3],
  [342, 198, 2.5],
  [300, 108, 2.5],
  [216, 98, 3],
  [138, 162, 2.5],
  [242, 150, 3],
  [354, 142, 2.5],
  [44, 112, 2],
];

function ShilohArt() {
  return (
    <svg viewBox="0 0 400 280" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden className="h-full w-full">
      <path d={SHILOH_EDGES} strokeOpacity="0.12" />
      <path className="tsr-flow" d={SHILOH_EDGES} strokeOpacity="0.55" />
      <g fill="currentColor" stroke="none">
        {SHILOH_NODES.map(([cx, cy, r], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            className="tsr-twinkle"
            style={{ animationDelay: `${(i % 6) * 460}ms` }}
          />
        ))}
        <g fillOpacity="0.95">
          <circle cx="200" cy="140" r="6" />
          <circle cx="120" cy="92" r="5" />
          <circle cx="288" cy="178" r="5" />
        </g>
      </g>
    </svg>
  );
}

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

// Senna: two members running the same program, joined by a shared progress
// track. Filled checkpoints are shared check ins already done, the hollow one
// is next, the ticks above are days they held each other accountable.
function SennaArt() {
  return (
    <svg viewBox="0 0 400 280" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className="h-full w-full">
      {/* two members */}
      <g strokeOpacity="0.8">
        <circle cx="84" cy="140" r="30" />
        <circle cx="316" cy="140" r="30" />
      </g>
      {/* person glyphs */}
      <g strokeOpacity="0.5">
        <circle cx="84" cy="130" r="8" />
        <path d="M68 158a16 13 0 0 1 32 0" />
        <circle cx="316" cy="130" r="8" />
        <path d="M300 158a16 13 0 0 1 32 0" />
      </g>
      {/* shared progress track */}
      <path d="M120 140h160" strokeOpacity="0.28" />
      <g fill="currentColor" stroke="none">
        <circle cx="150" cy="140" r="4.5" fillOpacity="0.9" />
        <circle cx="185" cy="140" r="4.5" fillOpacity="0.9" />
        <circle cx="220" cy="140" r="4.5" fillOpacity="0.9" />
      </g>
      <circle cx="255" cy="140" r="4.5" strokeOpacity="0.5" />
      {/* accountability check ins */}
      <path
        d="M182 116l4 5 8-11M217 116l4 5 8-11"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.75"
      />
    </svg>
  );
}

const ART: Record<string, () => React.ReactNode> = {
  shiloh: ShilohArt,
  tessa: TessaArt,
  voice: VoiceMemo,
  senna: SennaArt,
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
            <Wordmark className="h-3 w-auto" />
            <nav className="hidden md:flex items-center gap-8">
              {[
                ["Shiloh", "#shiloh"],
                ["Tessa", "#tessa"],
                ["Voice", "#voice"],
                ["Senna", "#senna"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <PillLink href="/book" filled>
            Book a call
          </PillLink>
        </div>
      </header>

      {/* Hero: the giant ghosted wordmark lit by a white beam from the right,
          with the announcement row pinned to the bottom. */}
      <section className={`relative border-b ${LINE} overflow-hidden`}>
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

          {/* the brand wordmark as the headline, faded with a left to right
              gradient so it dissolves across rather than reading as flat grey */}
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
              <PillLink href="#shiloh">Learn more</PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* Products: bracketed label, big clean headline, then each product on
          its own full width row divided by 1px rules, like the Grok news
          rows. Number and name on the left, headline and pill in the middle,
          body copy on the right. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE}`}>
          <div className="px-6 sm:px-10 pt-20 sm:pt-28 pb-12 sm:pb-16">
            <SectionLabel>Products</SectionLabel>
            <h2 className="mt-7 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white max-w-[820px]">
              Memory, intelligence, a voice, and a way to grow together.
            </h2>
          </div>

          <div className={`border-t ${LINE} divide-y divide-white/[0.08]`}>
            {PRODUCTS.map((p) => {
              const Art = ART[p.id];
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-16 min-h-svh flex items-center px-6 sm:px-10 py-16"
                >
                  <div className="w-full grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-2">
                      <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-white/45 tabular-nums">
                        {p.n}
                      </p>
                      <h3 className="mt-4 text-[clamp(1.125rem,1.6vw,1.375rem)] font-medium text-white">
                        {p.name}
                      </h3>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-[clamp(1.625rem,2.8vw,2.375rem)] font-medium leading-[1.12] tracking-[-0.025em] text-white text-balance">
                        {p.title}
                      </p>
                      {p.anchor && (
                        <p className="mt-5 text-[clamp(1rem,1.2vw,1.125rem)] font-medium leading-[1.55] text-white/85">
                          {p.anchor}
                        </p>
                      )}
                      {p.body.map((line) => (
                        <p
                          key={line.slice(0, 32)}
                          className="mt-4 text-[15px] font-normal leading-[1.7] text-white/55"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    {/* plain square framed artboard */}
                    <div className={`lg:col-span-5 border ${LINE} p-8 sm:p-10 h-[260px] sm:h-[340px] text-white/40`}>
                      <Art />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Close: super short, the big button is the section. */}
      <section className={`border-b ${LINE}`}>
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
      <footer className="relative overflow-hidden">
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
            {/* Brand */}
            <div>
              <Wordmark className="h-4 w-auto" />
            </div>

            {/* Explore */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45">
                Explore
              </p>
              <ul className="mt-5 space-y-3.5">
                {[
                  ["Shiloh", "#shiloh"],
                  ["Tessa", "#tessa"],
                  ["Voice", "#voice"],
                  ["Senna", "#senna"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[15px] font-normal text-white/60 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45">
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
              </ul>
              <div className="mt-5 -ml-2 flex items-center gap-1">
                <a
                  href="https://www.instagram.com/gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
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
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`mt-14 sm:mt-20 pt-7 border-t ${LINE} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`}>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/45 tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
