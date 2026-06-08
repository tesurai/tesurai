// Tesurai company landing page.
// Voice: written as a category-defining product. Confident, declarative, short.
// The category is "the intelligence layer for digital products." Less first-person,
// more product-as-protagonist.
// Copy rules: fifth grade reading level, no dashes anywhere, no pronouns for Tessa,
// no language framing Tessa as a team replacement, no made up outcome claims.

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

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ paid?: string }>;
}) {
  const params = await searchParams;
  const paid = params?.paid === "1";
  return (
    <div
      className="min-h-screen bg-black text-white antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 sm:px-10 bg-black/60 backdrop-blur-md border-b border-white/[0.10]">
        <Wordmark className="h-3 w-auto" />
        <nav className="flex items-center gap-5 sm:gap-7">
          <a
            href="#get-started"
            className="text-white border border-white/25 px-5 py-2 text-[12px] font-normal tracking-[0.1em] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get started
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-44 sm:pt-56 pb-28 sm:pb-40 max-w-[1200px] mx-auto sm:text-center">
        {paid && (
          <div className="mb-12 border border-white/[0.15] bg-white/[0.04] rounded-lg p-5 sm:p-6 max-w-[560px] sm:mx-auto text-left sm:text-center">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white mb-2">
              Payment received
            </p>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.55] text-white/70">
              Our team will reach out within a few hours to find a time to hop on a call.
            </p>
          </div>
        )}
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          [ Tesurai ]
        </p>
        <h1 className="text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-[18ch] sm:mx-auto">
          Stop guessing. Start knowing.
        </h1>
        <p className="mt-8 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          Tessa learns each user and shows them what to do next. Built right into your product.
        </p>
      </section>

      {/* The difference: with vs without Tessa */}
      <section
        id="tessa"
        className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] sm:text-center scroll-mt-24"
      >
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Difference ]
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] sm:mx-auto">
          Predict or lose them
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          Every user takes a path through your product. Most quit before they reach the end.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 text-left">
          {/* Without Tessa */}
          <div className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-8 flex flex-col">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/45 mb-8">
              Without Tessa
            </p>
            <ol className="space-y-4 flex-1">
              {[
                "Signs up wanting a clear result.",
                "Opens the product and pokes around.",
                "Tries a few things on the first session.",
                "Nothing they try fits the moment.",
                "Forgets to come back the next day.",
                "Cancels the account weeks later.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="text-[15px] font-normal leading-[1.55] text-white/45 flex gap-4"
                >
                  <span className="text-[11px] font-mono text-white/30 tabular-nums shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/35">
                Result: the user quits before they get what they wanted
              </p>
            </div>
          </div>

          {/* With Tessa */}
          <div className="bg-white/[0.04] border border-white/[0.20] rounded-lg p-6 sm:p-8 flex flex-col">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/70 mb-8">
              With Tessa
            </p>
            <ol className="space-y-4 flex-1">
              {[
                "Signs up wanting a clear result.",
                "Tessa watches every move they make.",
                "Tessa learns the patterns in their behavior.",
                "Tessa predicts where they will be in 30 days and 90 days.",
                "Tessa surfaces the next move that gets them closer.",
                "Step by step, they reach what they came for.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="text-[15px] font-normal leading-[1.55] text-white/80 flex gap-4"
                >
                  <span className="text-[11px] font-mono text-white/55 tabular-nums shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-white/[0.20]">
              <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/85">
                Result: the user gets what they came for
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Same engine: x.ai-style editorial. Naked mono context label, oversized left-aligned
          headline, asymmetric two-column comparison, right-aligned terminal. No card
          backgrounds, hairlines do all the structural work. */}
      <section className="px-6 sm:px-10 py-32 sm:py-44 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        {/* Context label: name the source, no brackets */}
        <p className="text-[12px] font-mono tracking-[0.22em] uppercase text-white/40 mb-16 sm:mb-20">
          TikTok &nbsp;/&nbsp; Instagram &nbsp;/&nbsp; YouTube
        </p>

        {/* Oversized editorial headline */}
        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white max-w-[14ch]">
          Same engine. Opposite aim.
        </h2>

        <p className="mt-10 sm:mt-12 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[620px]">
          TikTok, Instagram, and YouTube built this engine to win your attention. Tessa is built
          on the same engine, pointed at the outcome the user actually wants.
        </p>

        {/* Asymmetric two-column comparison. Right column carries more weight. */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-white/[0.10] grid gap-12 sm:gap-16 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-6">
              01 &nbsp;/&nbsp; Attention
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[420px]">
              They watch every move you make. They learn what keeps your eyes on the screen. They
              pick the next video to keep you scrolling.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/85 mb-6">
              02 &nbsp;/&nbsp; Outcome
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[460px]">
              Tessa finds the patterns in each user&rsquo;s behavior and gives them feedback that
              helps them reach the result they came for.
            </p>
            <p className="mt-6 text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/60 max-w-[460px]">
              Every pattern feeds back to you, so you see what is working and what to improve
              next.
            </p>
          </div>
        </div>

        {/* Right-aligned terminal, plain white so it does not compete with the closing
            CTA's faded treatment further down the page. */}
        <p className="mt-20 sm:mt-32 text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] ml-auto text-right">
          If your users win, you win.
        </p>
      </section>

      {/* Same framework: people and companies that operate the way Tessa does */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Framework ]
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[22ch]">
          The framework that proves itself over and over again
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px]">
          Tessa is not a new idea. The most influential people and the top companies have always
          studied patterns to predict their future.
        </p>

        <div className="mt-16 sm:mt-20 space-y-12 sm:space-y-14">
          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">01</span>
              <br />
              Benjamin Franklin
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              Tracked his daily behavior every night. Looked at his actions, saw where he fell
              short, and over time shaped the kind of person he was becoming. He was not
              guessing. He was measuring.
            </p>
          </article>

          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">02</span>
              <br />
              Michael Jordan
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              Watched film of his own games to find patterns in how he played. What he did when
              he was tired. Where he missed shots. What situations caused mistakes.
            </p>
          </article>

          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">03</span>
              <br />
              Warren Buffett
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              Looks back at his old money decisions all the time to see what actually works and
              what does not. Every new decision is shaped by what he learned from the last
              hundred.
            </p>
          </article>

          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">04</span>
              <br />
              Billy Beane
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              In Moneyball, he did not try to feel his way to better baseball decisions. He used
              patterns in past performance to predict future outcomes. A losing team became a
              winner.
            </p>
          </article>

          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">05</span>
              <br />
              Netflix
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              Watches what every viewer plays and how long. Learns every user. Guesses what each
              one will actually sit through to the end, and puts it on the home screen.
            </p>
          </article>

          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">06</span>
              <br />
              Spotify
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              Tracks every song, every skip, every save. Learns every listener. Drops a playlist
              every Monday made just for them, full of songs it thinks they will love next.
            </p>
          </article>

          <article className="grid gap-3 sm:gap-6 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 leading-[1.7]">
              <span className="text-white/40 tabular-nums">07</span>
              <br />
              TikTok
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.6] text-white/85 max-w-[640px]">
              Every swipe is a clue. The For You Page learns every viewer and picks the next
              video before the viewer even knows they want it.
            </p>
          </article>

        </div>
      </section>

      {/* Get started: centered headline + editorial step rows + centered price/CTA bookend */}
      <section
        id="get-started"
        className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] scroll-mt-24 sm:text-center"
      >
        <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white sm:mx-auto sm:whitespace-nowrap">
          Discover. Build. Launch.
        </h2>

        {/* Editorial step rows: big mono numerals on the left, content on the right, hairlines
            between each step. No card backgrounds — matches the x.ai restraint of the Same
            engine section above. */}
        <div className="mt-20 sm:mt-24 text-left max-w-[960px] sm:mx-auto border-t border-white/[0.10]">
          {[
            {
              n: "01",
              t: "Discover",
              d: "We hop on a call with you to understand your business, your users, and the outcome you want them to achieve.",
            },
            {
              n: "02",
              t: "Build",
              d: "We build the Tessa formula around your business so users get the right patterns and feedback to reach the outcome.",
            },
            {
              n: "03",
              t: "Launch",
              d: "We wire Tessa up to your business, clean up bugs with test flights, and then push it to live.",
            },
          ].map((s) => (
            <article
              key={s.n}
              className="grid gap-5 sm:gap-12 sm:grid-cols-[140px_1fr] sm:items-start py-10 sm:py-14 border-b border-white/[0.10]"
            >
              <p className="text-[clamp(2.5rem,4.5vw,4rem)] font-mono font-normal leading-none tracking-[-0.03em] text-white/30 tabular-nums">
                {s.n}
              </p>
              <div>
                <h3 className="text-[clamp(1.25rem,1.6vw,1.5rem)] font-medium tracking-[-0.02em] text-white mb-3">
                  {s.t}
                </h3>
                <p className="text-[clamp(1rem,1.4vw,1.15rem)] font-normal leading-[1.6] text-white/65 max-w-[560px]">
                  {s.d}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start sm:items-center gap-8">
          <div>
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-3">
              Price
            </p>
            <p className="text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-none text-white tabular-nums tracking-[-0.04em]">
              $2,500
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-center gap-3">
            <PayButton />
            <p className="text-[13px] font-normal text-white/40">
              More info?{" "}
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Book a call.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA: emotional, fades to nothing on the right like the wordmark */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <h2
          className="bg-clip-text text-transparent text-[clamp(1.25rem,2.5vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em] max-w-[1080px] break-words"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.75) 85%, rgba(255,255,255,0.45) 100%)",
            WebkitTextFillColor: "transparent",
          }}
        >
          Every user deserves to get what they came for. You built the product for them. You
          promised them a real result. Tessa is how you make sure they actually get one. Every
          session. Every user. Every time.
        </h2>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-16 border-t border-white/[0.10]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-12 sm:gap-y-10 gap-x-12">
            <div>
              <Wordmark className="h-3 w-auto" />
            </div>

            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-5">
                Products
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#tessa"
                    className="text-[14px] font-normal text-white/70 hover:text-white transition-colors"
                  >
                    Tessa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-5">
                Contact
              </p>
              <a
                href="mailto:hello@tesurai.com"
                className="text-[14px] font-normal text-white/70 hover:text-white transition-colors"
              >
                hello@tesurai.com
              </a>
            </div>

            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-5">
                Connect
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/55 hover:text-white transition-colors"
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
                  className="text-white/55 hover:text-white transition-colors"
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
                  className="text-white/55 hover:text-white transition-colors"
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
                  className="text-white/55 hover:text-white transition-colors"
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

          <div className="mt-14">
            <span className="text-white/35 text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
