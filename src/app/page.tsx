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
// Design system: modern dark SaaS, kept plain on purpose. Near-black canvas, glassy
// sticky nav with anchor links, editorial sections on a narrow 680px column that share
// the same generous side spacing: four indexed product sections (Shiloh, Tessa, Voice,
// Senna). Pill buttons (one white-filled primary), plain mono uppercase eyebrows,
// medium-weight display type in solid white. No cards, no glows, no shadows, no accent
// color, no gradient text except the closing fade quote.

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

// Small wordmark used in the nav and footer. Loaded from the brand SVG with
// the alpha-fade gradient so the trailing letters dissolve to almost nothing.
function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-white.svg" alt="Tesurai" className={className} />
  );
}

// Small mono label above section headlines.
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[12px] font-mono tracking-[0.18em] uppercase text-white/50">
      {children}
    </p>
  );
}

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
      {/* Nav: glassy sticky bar with anchor links and a small filled CTA */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.08] bg-[#0a0a0a]/70 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto h-16 px-6 flex items-center justify-between">
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
                  className="text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
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
              className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-[13px] font-medium hover:bg-white/90 transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero: eyebrow, headline, and subhead. */}
      <section className="px-6 sm:px-10 flex flex-col justify-center min-h-svh sm:block sm:min-h-0 pt-24 sm:pt-52 pb-20 sm:pb-32">
        <div className="max-w-[800px] mx-auto sm:text-center">
          {paid && (
            <div className="mb-10 rounded-xl border border-white/[0.15] bg-white/[0.04] p-5 sm:p-6 max-w-[560px] mx-auto">
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white mb-2">
                Payment received
              </p>
              <p className="text-[15px] sm:text-[16px] font-normal leading-[1.55] text-white/70">
                Our team will reach out within a few hours to find a time to hop on a call.
              </p>
            </div>
          )}
          <h1 className="text-pretty sm:text-balance text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
            Intelligence for digital consumer products.
          </h1>
          <p className="mt-6 text-pretty sm:text-balance text-[clamp(1.0625rem,1.4vw,1.1875rem)] font-normal leading-[1.65] text-white/55 max-w-[660px] mx-auto">
            Tesurai builds intelligence that remembers your users, talks to them, and
            brings them together. We implement it into your product, under your brand.
          </p>
        </div>
      </section>

      {/* Products: the four in flow order. Shiloh is the digital brain, Tessa is the
          intelligence layer that reads it, Voice makes the talking feel human, Senna
          pairs people with Tessa in the middle. Each section uses the same editorial
          device: indexed mono eyebrow, headline, body copy on the narrow column. */}
      <section id="shiloh" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>01 · Shiloh</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Your product remembers everyone
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              A digital brain that remembers every session, learns how you think, and
              grows sharper the longer you use it.
            </p>
            <p className="mt-6 text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              After every conversation it compiles what it heard into your skills,
              traits, patterns, and commitments: one living map of you, recalled
              instantly whenever you talk.
            </p>
            <p className="mt-6 text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white">
              Like an LLM, but for your brain.
            </p>
          </div>
        </div>
      </section>

      <section id="tessa" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>02 · Tessa</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Analytics your users can talk to
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              Tessa tracks Shiloh&rsquo;s data, spots the patterns you cannot see
              yourself, and tells you what to fix and what to keep doing.
            </p>
            <p className="mt-6 text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white">
              The intelligence layer on top of Shiloh: the thing that helps you
              accomplish your goals.
            </p>
          </div>
        </div>
      </section>

      <section id="voice" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>03 · Voice</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Feels like talking to a person
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              Voice is how users talk to Shiloh, Tessa, and Senna. They speak, and the
              software speaks back in real time, in a natural voice, like Gemini Live.
              No menus, no forms, no charts.
            </p>
            <p className="mt-6 text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white">
              Talking to your product feels like talking to a person.
            </p>
          </div>
        </div>
      </section>

      <section id="senna" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>04 · Senna</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Grow together, not alone
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              A social platform inside your product, built for growing together instead
              of scrolling alone. Pair with a friend, a partner, or your team. Run the
              same program side by side and share every check in.
            </p>
            <p className="mt-6 text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              Tessa sits in the middle, reads both sides, shares the patterns you have
              in common, and gives you both the feedback to grow stronger together.
            </p>
          </div>
        </div>
      </section>

      {/* Booking: the Cal.com calendar embedded inline as the section (CalEmbed). */}
      <section id="pricing" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Book a call
            </h2>
          </div>

          <div className="mt-12 sm:mt-14 max-w-[1000px] mx-auto">
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* Closing: the page summed up as one fade quote, fading right like the wordmark.
          No buttons. */}
      <section className="px-6 sm:px-10 py-24 sm:py-36">
        <div className="max-w-[1100px] mx-auto text-left">
          <h2
            className="bg-clip-text text-transparent text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.3] tracking-[-0.02em]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.75) 85%, rgba(255,255,255,0.45) 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your product remembers each user, talks to them, and brings them together.
            When your users win, you win.
          </h2>
        </div>
      </section>

      {/* Footer: brand block with tagline, then Explore and Connect columns, and a bottom
          bar. Collapses to a single column on mobile. */}
      <footer className="px-6 sm:px-10 pt-16 sm:pt-24 pb-10 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid gap-12 md:gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Wordmark className="h-4 w-auto" />
            </div>

            {/* Explore */}
            <div>
              <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/35">
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
                      className="text-[15px] font-normal text-white/65 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/35">
                Connect
              </p>
              <ul className="mt-5 space-y-3.5">
                <li>
                  <a
                    href="mailto:hello@tesurai.com"
                    className="text-[15px] font-normal text-white/65 hover:text-white transition-colors"
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
                  className="p-2 text-white/55 hover:text-white transition-colors"
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
                  className="p-2 text-white/55 hover:text-white transition-colors"
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
                  className="p-2 text-white/55 hover:text-white transition-colors"
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
                  className="p-2 text-white/55 hover:text-white transition-colors"
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
          <div className="mt-14 sm:mt-20 pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-white/35 text-[11px] sm:text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
