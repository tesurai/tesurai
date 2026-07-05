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
// [ PRODUCTS ], medium weight sans headlines, products as full width rows and steps
// as cells divided by 1px lines, full width section rules and frame rails.
// No color anywhere: the light is white, the page is black.
// Booking lives on its own page at /book; every Book a call button points there.

const BROWSER_TITLE = "Tesurai | Intelligence for digital consumer products.";
const SHARE_TITLE = "Intelligence for digital consumer products.";
const SHARE_DESCRIPTION =
  "Tesurai builds intelligence that remembers your users, talks to them, and brings them together. We implement it into your product, under your brand.";
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
      "A digital brain that remembers every session, learns how you think, and grows sharper the longer you use it.",
      "After every conversation it compiles what it heard into your skills, traits, patterns, and commitments: one living map of you, recalled instantly whenever you talk.",
    ],
  },
  {
    id: "tessa",
    n: "02",
    name: "Tessa",
    title: "Analytics your users can talk to",
    body: [
      "Tessa tracks Shiloh’s data, spots the patterns you cannot see yourself, and tells you what to fix and what to keep doing.",
    ],
    anchor: "The intelligence layer on top of Shiloh: the thing that helps you accomplish your goals.",
  },
  {
    id: "voice",
    n: "03",
    name: "Voice",
    title: "Feels like talking to a person",
    body: [
      "Voice is how users talk to Shiloh, Tessa, and Senna. They speak, and the software speaks back in real time, in a natural voice, like Gemini Live.",
    ],
    anchor: "No menus, no forms, no charts.",
  },
  {
    id: "senna",
    n: "04",
    name: "Senna",
    title: "Grow together, not alone",
    body: [
      "A social platform inside your product, built for growing together instead of scrolling alone. Pair with a friend, a partner, or your team. Run the same program side by side and share every check in.",
      "Tessa sits in the middle, reads both sides, shares the patterns you have in common, and gives you both the feedback to grow stronger together.",
    ],
    anchor: "Someone real is in it with you.",
  },
];

// The system in one line per product, for the How it fits together strip.
const FLOW: { n: string; t: string; d: string }[] = [
  { n: "01", t: "Shiloh", d: "Builds the living map of each user." },
  { n: "02", t: "Tessa", d: "Reads the map and picks the next move." },
  { n: "03", t: "Voice", d: "Says it out loud, like a person would." },
  { n: "04", t: "Senna", d: "Pairs people up so nobody grows alone." },
];

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

          {/* the brand wordmark, ghosted and lit by the beam, is the hero */}
          <div aria-hidden className="absolute inset-0 flex items-center justify-center px-6 sm:px-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt=""
              className="w-full max-w-[1080px] opacity-[0.14] select-none"
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
            <p className="max-w-[460px] text-[13.5px] font-normal leading-[1.6] text-white/70">
              Tesurai builds intelligence that remembers your users, talks to them, and
              brings them together. We implement it into your product, under your brand.
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
              Intelligence for digital consumer products.
            </h2>
          </div>

          <div className={`border-t ${LINE} divide-y divide-white/[0.08]`}>
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-24 grid gap-8 lg:gap-10 lg:grid-cols-12 px-6 sm:px-10 py-12 sm:py-16"
              >
                <div className="lg:col-span-2">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45 tabular-nums">
                    {p.n}
                  </p>
                  <h3 className="mt-3 text-[17px] font-medium text-white">{p.name}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[clamp(1.375rem,2vw,1.75rem)] font-medium leading-[1.2] tracking-[-0.02em] text-white text-balance">
                    {p.title}
                  </p>
                  {p.anchor && (
                    <p className="mt-4 text-[14.5px] font-medium leading-[1.55] text-white/85">
                      {p.anchor}
                    </p>
                  )}
                  <div className="mt-7">
                    <PillLink href="/book">Learn more ↗</PillLink>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  {p.body.map((line) => (
                    <p
                      key={line.slice(0, 32)}
                      className="mt-3 first:mt-0 text-[14.5px] font-normal leading-[1.7] text-white/50"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it fits together: the system as four cells in a strip. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE}`}>
          <div className="px-6 sm:px-10 pt-20 sm:pt-28 pb-12 sm:pb-16">
            <SectionLabel>The system</SectionLabel>
            <h2 className="mt-7 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
              How it fits together
            </h2>
          </div>

          <div className={`border-t ${LINE} grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08]`}>
            {FLOW.map((s) => (
              <div key={s.n} className="bg-[#0a0a0a] p-7 sm:p-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45 tabular-nums">
                  {s.n}
                </p>
                <h3 className="mt-4 text-[17px] font-medium text-white">{s.t}</h3>
                <p className="mt-2 text-[13.5px] font-normal leading-[1.6] text-white/50">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing: the page summed up as one statement. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 py-20 sm:py-28`}>
          <h2 className="text-balance text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.2] tracking-[-0.02em] text-white max-w-[900px]">
            Your product remembers each user, talks to them, and brings them together.
            When your users win, you win.
          </h2>
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
