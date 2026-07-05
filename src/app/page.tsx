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
// Design system: Framer type on a sharp editorial grid, black and white only. White
// canvas, black display type with tight tracking and heavy weights, gray secondary
// text. Full bleed 1px horizontal rules between sections and vertical rails on the
// 1200px frame run the whole page; products and steps are square grid cells divided
// by 1px lines that meet the rails. Structure is sharp (no rounded corners on cards,
// cells, badges, or bands); only action buttons are pills. One full black statement
// band. No color anywhere.

import CalEmbed from "./cal-embed";

const CAL_LINK = "https://cal.com/tesurai/call";

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
const LINE = "border-black/[0.08]";

// Small wordmark used in the nav and footer. The black brand SVG with the
// alpha-fade gradient so the trailing letters dissolve to almost nothing.
function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.svg" alt="Tesurai" className={className} />
  );
}

// Small square badge above section headlines. Sharp corners on purpose.
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-black/[0.15] bg-black/[0.03] px-3 py-1.5 text-[13px] font-medium text-black/55">
      {children}
    </span>
  );
}

// The four products as square grid cells. Equal halves so the center grid
// line runs straight through both rows.
const PRODUCTS: {
  id: string;
  label: string;
  title: string;
  body: string[];
  anchor: string;
}[] = [
  {
    id: "shiloh",
    label: "01 · Shiloh",
    title: "Your product remembers everyone",
    body: [
      "A digital brain that remembers every session, learns how you think, and grows sharper the longer you use it.",
      "After every conversation it compiles what it heard into your skills, traits, patterns, and commitments: one living map of you, recalled instantly whenever you talk.",
    ],
    anchor: "Like an LLM, but for your brain.",
  },
  {
    id: "tessa",
    label: "02 · Tessa",
    title: "Analytics your users can talk to",
    body: [
      "Tessa tracks Shiloh’s data, spots the patterns you cannot see yourself, and tells you what to fix and what to keep doing.",
    ],
    anchor: "The intelligence layer on top of Shiloh: the thing that helps you accomplish your goals.",
  },
  {
    id: "voice",
    label: "03 · Voice",
    title: "Feels like talking to a person",
    body: [
      "Voice is how users talk to Shiloh, Tessa, and Senna. They speak, and the software speaks back in real time, in a natural voice, like Gemini Live.",
    ],
    anchor: "No menus, no forms, no charts.",
  },
  {
    id: "senna",
    label: "04 · Senna",
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
      className="min-h-screen bg-white text-black antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
      {/* Nav: glassy sticky bar. The frame rails continue through it. */}
      <header className={`fixed top-0 inset-x-0 z-50 border-b ${LINE} bg-white/80 backdrop-blur-xl`}>
        <div className={`max-w-[1200px] mx-auto h-16 border-x ${LINE} px-6 flex items-center justify-between`}>
          <div className="flex items-center gap-10">
            <Wordmark className="h-3 w-auto" />
            <nav className="hidden md:flex items-center gap-7">
              {[
                ["Shiloh", "#shiloh"],
                ["Tessa", "#tessa"],
                ["Voice", "#voice"],
                ["Senna", "#senna"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[14px] font-medium text-black/55 hover:text-black transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-black text-white px-4.5 py-2 text-[13.5px] font-medium hover:bg-black/80 transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero: huge black display type on white inside the frame. */}
      <section className={`border-b ${LINE}`}>
        <div
          className={`max-w-[1200px] mx-auto border-x ${LINE} px-6 sm:px-10 flex flex-col justify-center min-h-svh sm:block sm:min-h-0 pt-24 sm:pt-48 pb-20 sm:pb-32`}
        >
          <div className="max-w-[960px] mx-auto sm:text-center">
            {paid && (
              <div className="mb-10 border border-black/[0.12] bg-black/[0.03] p-5 sm:p-6 max-w-[560px] mx-auto">
                <p className="text-[13px] font-semibold text-black mb-1.5">
                  Payment received
                </p>
                <p className="text-[15px] sm:text-[16px] font-normal leading-[1.55] text-black/60">
                  Our team will reach out within a few hours to find a time to hop on a call.
                </p>
              </div>
            )}
            <h1 className="text-pretty sm:text-balance text-[clamp(2.75rem,6.5vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-black">
              Intelligence for digital consumer products.
            </h1>
            <p className="mt-7 text-pretty sm:text-balance text-[clamp(1.0625rem,1.5vw,1.25rem)] font-normal leading-[1.6] text-black/55 max-w-[680px] mx-auto">
              Tesurai builds intelligence that remembers your users, talks to them, and
              brings them together. We implement it into your product, under your brand.
            </p>
            <div className="mt-9 flex flex-wrap sm:justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-[15px] font-medium hover:bg-black/80 transition-colors"
              >
                Book a call
              </a>
              <a
                href="#shiloh"
                className="inline-flex items-center rounded-full bg-black/[0.05] text-black px-6 py-3 text-[15px] font-medium hover:bg-black/[0.1] transition-colors"
              >
                Explore the suite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products: square grid cells divided by 1px lines that meet the rails.
          Shiloh is the digital brain, Tessa is the intelligence layer that
          reads it, Voice makes the talking feel human, Senna pairs people with
          Tessa in the middle. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1200px] mx-auto border-x ${LINE}`}>
          <div className="px-6 sm:px-10 pt-20 sm:pt-28 pb-14 sm:pb-16 sm:text-center">
            <div className="max-w-[760px] mx-auto">
              <Badge>The suite</Badge>
              <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-black">
                Four products. One system.
              </h2>
              <p className="mt-5 text-[clamp(1.0625rem,1.3vw,1.1875rem)] font-normal leading-[1.6] text-black/55">
                Shiloh remembers, Tessa reads, Voice speaks, and Senna connects.
              </p>
            </div>
          </div>

          <div className={`border-t ${LINE} grid md:grid-cols-2 gap-px bg-black/[0.08]`}>
            {PRODUCTS.map((p) => (
              <div key={p.id} id={p.id} className="scroll-mt-28 bg-white p-8 sm:p-12">
                <p className="text-[13px] font-medium text-black/40">{p.label}</p>
                <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,1.9375rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-black text-balance">
                  {p.title}
                </h3>
                {p.body.map((line) => (
                  <p
                    key={line.slice(0, 32)}
                    className="mt-4 text-[16px] font-normal leading-[1.65] text-black/60"
                  >
                    {line}
                  </p>
                ))}
                <p className="mt-5 text-[16px] font-medium leading-[1.55] text-black">
                  {p.anchor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it fits together: the system as four square cells in a strip. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1200px] mx-auto border-x ${LINE}`}>
          <div className="px-6 sm:px-10 pt-20 sm:pt-28 pb-14 sm:pb-16 sm:text-center">
            <div className="max-w-[760px] mx-auto">
              <Badge>The system</Badge>
              <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-black">
                How it fits together
              </h2>
            </div>
          </div>

          <div className={`border-t ${LINE} grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08]`}>
            {FLOW.map((s) => (
              <div key={s.n} className="bg-white p-8 sm:p-10">
                <p className="text-[13px] font-medium text-black/35 tabular-nums">{s.n}</p>
                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-black">
                  {s.t}
                </h3>
                <p className="mt-2 text-[15.5px] font-normal leading-[1.6] text-black/55">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking: the Cal.com calendar embedded inline, light theme, below a
          full width rule. */}
      <section id="pricing" className={`border-b ${LINE} scroll-mt-16`}>
        <div className={`max-w-[1200px] mx-auto border-x ${LINE}`}>
          <div className="px-6 sm:px-10 pt-20 sm:pt-28 pb-12 sm:pb-14 sm:text-center">
            <div className="max-w-[760px] mx-auto">
              <Badge>Get started</Badge>
              <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-black">
                Book a call
              </h2>
            </div>
          </div>

          <div className={`border-t ${LINE} p-4 sm:p-10`}>
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* Closing: the page summed up as one statement on a full black band
          flush with the frame. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1200px] mx-auto border-x ${LINE} bg-[#0a0a0a] px-8 sm:px-16 py-16 sm:py-24`}>
          <h2 className="text-balance text-[clamp(1.875rem,3.6vw,3rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white max-w-[900px]">
            Your product remembers each user, talks to them, and brings them together.
            When your users win, you win.
          </h2>
        </div>
      </section>

      {/* Footer: brand block, Explore and Connect columns, bottom bar. */}
      <footer>
        <div className={`max-w-[1200px] mx-auto border-x ${LINE} px-6 sm:px-10 pt-16 sm:pt-24 pb-10`}>
          <div className="grid gap-12 md:gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Wordmark className="h-4 w-auto" />
            </div>

            {/* Explore */}
            <div>
              <p className="text-[13px] font-medium text-black/40">Explore</p>
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
                      className="text-[15px] font-normal text-black/60 hover:text-black transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[13px] font-medium text-black/40">Connect</p>
              <ul className="mt-5 space-y-3.5">
                <li>
                  <a
                    href="mailto:hello@tesurai.com"
                    className="text-[15px] font-normal text-black/60 hover:text-black transition-colors"
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
                  className="p-2 text-black/50 hover:text-black transition-colors"
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
                  className="p-2 text-black/50 hover:text-black transition-colors"
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
                  className="p-2 text-black/50 hover:text-black transition-colors"
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
                  className="p-2 text-black/50 hover:text-black transition-colors"
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
            <span className="text-black/40 text-[13px] font-normal tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
