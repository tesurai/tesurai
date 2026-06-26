// Tesurai company landing page.
// Voice: written as a category-defining product. Confident, declarative, short.
// The category is "the intelligence layer for digital products." Less first-person,
// more product-as-protagonist.
// Copy rules: fifth grade reading level, no dashes anywhere, no pronouns for Tessa,
// no language framing Tessa as a team replacement, no made up outcome claims.
// Design system: modern dark SaaS, kept plain on purpose. Near-black canvas, glassy
// sticky nav with anchor links, editorial sections on a narrow 680px column that share
// the same generous side spacing but each get their own device: contrast rows (Mission),
// a forked path (Difference), an indexed list (Product), a timeline (Process). Pill
// buttons (one white-filled primary), sharp boxed mono eyebrows, medium-weight display
// type in solid white. No cards, no gradient text, no glows, no shadows, no accent color.

import ProcessTimeline from "./process-timeline";
import CalEmbed from "./cal-embed";

const CAL_LINK = "https://cal.com/tesurai/call";

const BROWSER_TITLE = "Tesurai | Most products react, but the best ones predict.";
const SHARE_TITLE = "Most products react, but the best ones predict.";
const SHARE_DESCRIPTION =
  "Every user gets their own Tessa. Built right into your product.";
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
        alt: "Tesurai. Most products react, but the best ones predict.",
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
              <a
                href="#tessa"
                className="text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
              >
                Tessa
              </a>
              <a
                href="#process"
                className="text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
              >
                Process
              </a>
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

      {/* Hero: eyebrow, headline, and subhead. No CTA here. */}
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
          <Eyebrow>Intelligence layer</Eyebrow>
          <h1 className="text-pretty sm:text-balance text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
            Most products react, but the best ones predict.
          </h1>
          <p className="mt-6 text-pretty sm:text-balance text-[clamp(1.0625rem,1.4vw,1.1875rem)] font-normal leading-[1.65] text-white/55 max-w-[720px] mx-auto">
            Tessa lives inside your product. Tessa reads each user&rsquo;s behavior,
            predicts their future, and gives them the feedback to reach the outcome they
            want.
          </p>
        </div>
      </section>

      {/* Mission: the counterforce manifesto, right under the hero. The threat in muted
          text, three Theirs/Ours contrast rows, then the stance in full white. */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>Mission</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              We are building the counterforce
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.15rem,1.4vw,1.3rem)] font-normal leading-[1.65] text-white/60">
              Big companies use AI to make people weaker, dumber, more distracted, more
              dependent, and easier to control. Pretending AI will go away does not make it
              go away. Sitting on the sidelines is how we lose.
            </p>

            <div className="my-10 sm:my-12 divide-y divide-white/[0.10] border-y border-white/[0.10]">
              {[
                ["Their AI distracts your users.", "Tessa directs your users."],
                ["Their AI keeps your users in the dark.", "Tessa makes your users aware."],
                ["Their AI uses your users.", "Tessa serves your users."],
              ].map(([theirs, ours]) => (
                <div key={theirs} className="grid grid-cols-2 gap-3 sm:gap-8 py-5">
                  <p className="text-[16px] font-normal leading-[1.55] text-white/45">
                    {theirs}
                  </p>
                  <p className="text-[16px] font-normal leading-[1.55] text-white">{ours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The difference: the path forks around a center spine. The dim path fades out on
          the left, the Tessa path lands on the right. */}
      <section id="tessa" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Predict or lose them
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto">
            <div className="grid grid-cols-2 text-left">
              <div className="pr-4 sm:pr-8 pt-6 border-r border-white/[0.15]">
                <p className="text-[11px] sm:text-[12px] font-mono tracking-[0.16em] uppercase text-white/45">
                  Without Tessa
                </p>
                <ol className="mt-5 space-y-5">
                  {[
                    "Your product treats them like every other user.",
                    "They hit a wall your product cannot see.",
                    "They stall, and nothing steps in.",
                    "They go quiet and blame themselves.",
                    "You find out at the cancel. Too late.",
                  ].map((step) => (
                    <li
                      key={step}
                      className="text-[13.5px] sm:text-[16px] font-normal leading-[1.55] text-white/40"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="pl-4 sm:pl-8 pt-6">
                <p className="text-[11px] sm:text-[12px] font-mono tracking-[0.16em] uppercase text-white/70">
                  With Tessa
                </p>
                <ol className="mt-5 space-y-5">
                  {[
                    "Tessa learns this user, not the average user.",
                    "Tessa spots the stall early.",
                    "Tessa gives them the next move that fits where they are.",
                    "You see who is winning and who is slipping, early.",
                    "They keep moving toward what they came for.",
                  ].map((step) => (
                    <li
                      key={step}
                      className="text-[13.5px] sm:text-[16px] font-normal leading-[1.55] text-white"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process: a vertical timeline whose line draws on scroll (ProcessTimeline, a
          client component). Square nodes on a left rail echo the sharp eyebrows. */}
      <section id="process" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:text-center">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-[clamp(2.125rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Onboard. Build. Launch.
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <ProcessTimeline />
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
            Stop losing the users you could have kept. Tessa keeps each user moving toward
            the outcome they want. When your users win, you win.
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
                <li>
                  <a
                    href="#tessa"
                    className="text-[15px] font-normal text-white/65 hover:text-white transition-colors"
                  >
                    Tessa
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-[15px] font-normal text-white/65 hover:text-white transition-colors"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-[15px] font-normal text-white/65 hover:text-white transition-colors"
                  >
                    Book a call
                  </a>
                </li>
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
