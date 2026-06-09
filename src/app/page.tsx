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

import PayButton from "./pay-button";

const CAL_LINK = "https://cal.com/tesurai";

const BROWSER_TITLE = "Tesurai | Most products react. The best ones predict.";
const SHARE_TITLE = "Most products react. The best ones predict.";
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
        alt: "Tesurai. Most products react. The best ones predict.",
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

// Pill eyebrow used above section headlines.
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex justify-center">
      <span className="inline-block border border-white/20 px-3 py-1.5 text-[11px] font-mono tracking-[0.18em] uppercase text-white/55">
        {children}
      </span>
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
                href="#product"
                className="text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
              >
                Product
              </a>
              <a
                href="#process"
                className="text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
              >
                Process
              </a>
              <a
                href="#pricing"
                className="text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-[13.5px] font-normal text-white/60 hover:text-white transition-colors"
            >
              Book a call
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-[13px] font-medium hover:bg-white/90 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero: badge, gradient headline, subhead, dual CTAs, soft glow */}
      <section className="px-6 sm:px-10 pt-40 sm:pt-52 pb-24 sm:pb-32">
        <div className="max-w-[860px] mx-auto text-center">
          {paid && (
            <div className="mb-10 rounded-xl border border-white/[0.15] bg-white/[0.04] p-5 sm:p-6 max-w-[560px] mx-auto">
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white mb-2">
                Payment received
              </p>
              <p className="text-[14px] sm:text-[15px] font-normal leading-[1.55] text-white/70">
                Our team will reach out within a few hours to find a time to hop on a call.
              </p>
            </div>
          )}
          <p className="mb-7 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-1.5 text-[12px] font-normal text-white/70">
              The intelligence layer for digital products
            </span>
          </p>
          <h1 className="text-[clamp(2.75rem,6.5vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-[18ch] mx-auto">
            Most products react. The best ones predict.
          </h1>
          <p className="mt-7 text-[clamp(1.05rem,1.45vw,1.2rem)] font-normal leading-[1.6] text-white/60 max-w-[600px] mx-auto">
            Tessa is built into your product. Tessa learns each user, spots their patterns,
            and shows them the next move to reach the result they came for.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-[14px] font-medium hover:bg-white/90 transition-colors"
            >
              Get started
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/[0.15] bg-white/[0.04] px-7 py-3.5 text-[14px] font-normal text-white hover:bg-white/[0.08] transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Mission: the counterforce manifesto, right under the hero. The threat in muted
          text, three Theirs/Ours contrast rows, then the stance in full white. */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center">
            <Eyebrow>Mission</Eyebrow>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              We are building the counterforce
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-normal leading-[1.65] text-white/60">
              Big companies use AI to make people weaker, dumber, more distracted, more
              dependent, and easier to control. Pretending AI will go away does not make it
              go away. Sitting on the sidelines is how we lose.
            </p>

            <div className="my-10 sm:my-12 divide-y divide-white/[0.10] border-y border-white/[0.10]">
              {[
                ["Their AI captures your attention.", "Ours builds the best you."],
                ["Their AI makes people dependent.", "Ours makes people independent."],
                ["They use this technology on you.", "We put it in your hands."],
              ].map(([theirs, ours]) => (
                <div key={theirs} className="grid sm:grid-cols-2 gap-2 sm:gap-8 py-5">
                  <p className="text-[15px] font-normal leading-[1.55] text-white/45">
                    {theirs}
                  </p>
                  <p className="text-[15px] font-normal leading-[1.55] text-white">{ours}</p>
                </div>
              ))}
            </div>

            <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-normal leading-[1.65] text-white">
              We are not joining their game. We take the same system the giants built and
              flip the script for consumer businesses like yours. Your users get real
              results and grow into a more capable version of themselves. That is the
              fight, and that is how we win it.
            </p>
          </div>
        </div>
      </section>

      {/* The difference: one shared first step, then the path forks around a center
          spine. The dim path fades out on the left, the Tessa path lands on the right. */}
      <section id="tessa" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Predict or lose them
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.3vw,1.15rem)] font-normal leading-[1.6] text-white/60 max-w-[560px] mx-auto">
              Every user signs up wanting a result. Most quit before they get it. You see it
              as churn.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto">
            <p className="text-[15px] font-normal leading-[1.55] text-white text-center">
              Signs up wanting a clear result.
            </p>
            <div aria-hidden className="mx-auto mt-4 h-6 w-px bg-white/[0.15]" />
            <div className="grid grid-cols-2 text-left">
              <div className="pr-4 sm:pr-8 pt-6 border-r border-white/[0.15]">
                <p className="text-[11px] sm:text-[12px] font-mono tracking-[0.16em] uppercase text-white/45">
                  Without Tessa
                </p>
                <ol className="mt-5 space-y-5">
                  {[
                    "Opens the product and pokes around.",
                    "Tries a few things on the first session.",
                    "Nothing they try fits the moment.",
                    "Forgets to come back the next day.",
                    "Cancels the account weeks later.",
                  ].map((step) => (
                    <li
                      key={step}
                      className="text-[13.5px] sm:text-[15px] font-normal leading-[1.55] text-white/40"
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
                    "Tessa watches every move they make.",
                    "Tessa learns the patterns in their behavior.",
                    "Tessa predicts where they will be in 30 days and 90 days.",
                    "Tessa surfaces the next move that gets them closer.",
                    "They reach what they came for.",
                  ].map((step) => (
                    <li
                      key={step}
                      className="text-[13.5px] sm:text-[15px] font-normal leading-[1.55] text-white"
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

      {/* Product: an editorial index. Mono numerals in the margin, large titles,
          generous hairline rows. */}
      <section id="product" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center">
            <Eyebrow>Product</Eyebrow>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Every user gets their own Tessa
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.3vw,1.15rem)] font-normal leading-[1.6] text-white/60 max-w-[560px] mx-auto">
              After every session, Tessa reads the data, finds the patterns, and shows each
              user the next move.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <div className="divide-y divide-white/[0.10] border-y border-white/[0.10]">
              {[
                {
                  t: "Patterns",
                  d: "Tessa spots the habits that shape each user's results and shows how often they come up.",
                },
                {
                  t: "Forecast",
                  d: "Two paths in plain words. Where the user is headed at their current pace, and where the thing holding them back takes them instead.",
                },
                {
                  t: "Feedback",
                  d: "One clear next step after every session. Not a list of twenty things.",
                },
                {
                  t: "Sharper over time",
                  d: "The more each user does, the more Tessa learns. The picture keeps getting sharper.",
                },
                {
                  t: "Real data only",
                  d: "Tessa works only from real session data. Tessa never guesses and never makes things up.",
                },
                {
                  t: "Private by default",
                  d: "Each user's Tessa is theirs alone. Never shared.",
                },
              ].map((f, i) => (
                <div
                  key={f.t}
                  className="grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-4 sm:gap-6 py-7 sm:py-8"
                >
                  <p className="text-[12px] font-mono text-white/30 tabular-nums pt-[7px]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-[clamp(1.125rem,1.6vw,1.375rem)] font-medium tracking-[-0.02em] text-white">
                      {f.t}
                    </h3>
                    <p className="mt-2 text-[14.5px] font-normal leading-[1.6] text-white/50 max-w-[480px]">
                      {f.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Same engine: the narrative statement section, kept card-less on purpose */}
      <section className="px-6 sm:px-10 py-24 sm:py-36">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.0] tracking-[-0.035em] text-white max-w-[14ch] mx-auto">
            Same engine. Opposite aim.
          </h2>

          <div className="mt-16 sm:mt-20 max-w-[680px] mx-auto text-left">
            <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-normal leading-[1.65] text-white/60">
              TikTok, Instagram, and YouTube built this engine to win your attention. They
              watch every move you make. They learn what keeps your eyes on the screen. They
              pick the next video to keep you scrolling.
            </p>

            <div className="my-10 sm:my-12 border-t border-white/[0.10]" />

            <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-normal leading-[1.65] text-white">
              Tessa is built on the same engine, pointed at the results your users actually
              want. Tessa finds the patterns in each user&rsquo;s behavior and gives them
              feedback that helps them reach the result they came for. Every pattern feeds
              back to you, so you see what is working and what to improve next.
            </p>
          </div>

          <p className="mt-16 sm:mt-20 text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
            If your users win, you win.
          </p>
        </div>
      </section>

      {/* Process: a vertical timeline. Square nodes on a left rail echo the sharp
          boxed eyebrows. */}
      <section id="process" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
              Discover. Build. Launch.
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 max-w-[680px] mx-auto text-left">
            <div className="relative ml-1 border-l border-white/[0.15]">
              {[
                {
                  n: "01",
                  t: "Discover",
                  d: "We hop on a call with you to understand your business, your users, and the results you want them to achieve.",
                },
                {
                  n: "02",
                  t: "Build",
                  d: "We build the Tessa formula around your business so users get the right patterns and feedback to reach the results.",
                },
                {
                  n: "03",
                  t: "Launch",
                  d: "We wire Tessa up to your business, clean up bugs with test flights, and then push it to live.",
                },
              ].map((s) => (
                <div key={s.n} className="relative pl-8 sm:pl-12 pb-12 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[4.5px] top-[5px] h-2 w-2 bg-white"
                  />
                  <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/40">
                    Step {s.n}
                  </p>
                  <h3 className="mt-2 text-[clamp(1.125rem,1.6vw,1.375rem)] font-medium tracking-[-0.02em] text-white">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-[14.5px] font-normal leading-[1.6] text-white/50 max-w-[480px]">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing: single centered plan card */}
      {/* Pricing: signal only. The price and the two ways to start. */}
      <section id="pricing" className="px-6 sm:px-10 py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
            One build. One price.
          </h2>
          <p className="mt-10 text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none text-white tabular-nums tracking-[-0.03em]">
            $2,500
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PayButton />
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/[0.15] bg-white/[0.02] px-7 py-3.5 text-[14px] font-normal text-white hover:bg-white/[0.08] transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Closing: the mission as the final word, fading right like the wordmark */}
      <section className="px-6 sm:px-10 py-24 sm:py-36">
        <div className="max-w-[860px] mx-auto text-left">
          <h2
            className="bg-clip-text text-transparent text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.3] tracking-[-0.02em]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.75) 85%, rgba(255,255,255,0.45) 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Their AI is built to capture your attention. Ours is built to build the best
            you. We are not joining their game. We are the counterforce.
          </h2>
        </div>
      </section>

      {/* Footer: flat row on desktop, tight stack on mobile. No mono category labels above
          single items. Touch targets padded for mobile thumbs. */}
      <footer className="px-6 sm:px-10 py-12 sm:py-14 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          {/* Top row: wordmark + links/socials. Stacks on mobile, single row on desktop. */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-6">
            <Wordmark className="h-3 w-auto" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href="#product"
                className="text-[14px] font-normal text-white/65 hover:text-white transition-colors"
              >
                Product
              </a>
              <a
                href="#process"
                className="text-[14px] font-normal text-white/65 hover:text-white transition-colors"
              >
                Process
              </a>
              <a
                href="#pricing"
                className="text-[14px] font-normal text-white/65 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="mailto:hello@tesurai.com"
                className="text-[14px] font-normal text-white/65 hover:text-white transition-colors"
              >
                hello@tesurai.com
              </a>

              <div className="flex items-center gap-1 sm:gap-2 sm:ml-2">
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

          {/* Copyright row */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.06]">
            <span className="text-white/35 text-[11px] sm:text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
