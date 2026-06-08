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
  "Tessa reads each user and predicts where they're heading.";
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
          Tesurai
        </p>
        <h1 className="text-[clamp(2.875rem,7vw,6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] sm:mx-auto">
          Most predictive intelligence layer for digital products
        </h1>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          Tessa reads each user and predicts where they&rsquo;re heading.
        </p>
      </section>

      {/* What we believe */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] sm:text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What we believe ]
        </p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] sm:mx-auto">
          Most products react
          <br />
          The best ones predict
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          Reading the past is too late. The best products see what is coming and act before the
          user slips.
        </p>
      </section>

      {/* The difference: with vs without Tessa */}
      <section
        id="tessa"
        className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] sm:text-center scroll-mt-24"
      >
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ The difference ]
        </p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] sm:mx-auto">
          Predict or lose them
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          Every user takes a path through your business. Without an intelligence layer, most
          users never reach the result.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 text-left">
          {/* Without Tessa */}
          <div className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-8 flex flex-col">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/45 mb-8">
              Without Tessa
            </p>
            <ol className="space-y-4 flex-1">
              {[
                "Signs up for a clear outcome.",
                "Opens the product and pokes around.",
                "Tries a few things in the first session.",
                "Picks up nothing that fits the moment.",
                "Forgets to come back the next day.",
                "Closes the account weeks later.",
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
                Outcome: user churns before the result
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
                "Signs up for a clear outcome.",
                "Tessa reads each session as a pattern.",
                "Tessa scores how close that pattern sits to the outcome.",
                "Tessa forecasts where the user lands at 30 and 90 days.",
                "Tessa surfaces the one next move that lifts the score.",
                "User repeats the loop and reaches the outcome.",
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
                Outcome: user reaches the result
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this is powerful: Tessa wires both ways, founders and users aim at the same outcome */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] sm:text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Why this is powerful ]
        </p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] sm:mx-auto">
          Wired to your users
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          Each user gets their own Tessa. Every Tessa wires back to yours.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 text-left">
          <div className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-8 flex flex-col">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/55 mb-6">
              For every user
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.55] text-white/85">
              A private model of who they are becoming. The next move that gets them closer to
              the outcome they came for.
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.20] rounded-lg p-6 sm:p-8 flex flex-col">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/85 mb-6">
              For you
            </p>
            <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.55] text-white/85">
              Every user&rsquo;s Tessa reports back to yours. You see what helps each user win,
              what stops them, and what to build next.
            </p>
          </div>
        </div>

        <p className="mt-16 text-[clamp(1.15rem,1.55vw,1.4rem)] font-normal leading-[1.4] text-white max-w-[640px] sm:mx-auto">
          Users want their outcome. You want successful users. Tessa is how both sides get there.
        </p>
      </section>

      {/* How */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ How ]
        </p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white sm:whitespace-nowrap">
          Discover. Build. Deploy.
        </h2>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-3">
          {[
            {
              n: "01",
              t: "Discover",
              d: "Learn your product, your users, and the one outcome every user should reach.",
            },
            {
              n: "02",
              t: "Build",
              d: "Build the version of Tessa that fits your product. The patterns. The predictions. The feedback.",
            },
            {
              n: "03",
              t: "Deploy",
              d: "Put Tessa inside your product. Live in one week. It runs every day from there.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-7 flex flex-col"
            >
              <p className="text-[clamp(2.25rem,3.8vw,3rem)] font-mono font-normal leading-none tracking-[-0.02em] text-white/35 mb-8 tabular-nums">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.15rem,1.5vw,1.4rem)] font-medium tracking-[-0.02em] text-white mb-3">
                {s.t}
              </h3>
              <p className="text-[15px] font-normal leading-[1.55] text-white/60">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Throughout history: pattern recognition case studies */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Throughout history ]
        </p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[22ch]">
          The pattern that always wins
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px]">
          Tessa is not a new idea. The best in every field have always tracked their own patterns
          to decide what to do next.
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
              short, and over time shaped the kind of person he was becoming. He was not guessing.
              He was measuring.
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
              Looks back at his investment decisions constantly to understand what actually leads
              to success and what does not. The next decision is shaped by the patterns in the
              last hundred.
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
        </div>

        <p className="mt-20 text-[clamp(1.15rem,1.55vw,1.4rem)] font-normal leading-[1.5] text-white max-w-[640px]">
          Tessa is the first product to ship this pattern as software, built into every user.
        </p>
      </section>

      {/* Case study: founder testimonial from Abbelo */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-12">
          [ Case study ]
        </p>

        {/* Identity row: label column + lead */}
        <div className="grid gap-y-8 gap-x-12 sm:grid-cols-[160px_1fr] items-baseline pb-12 border-b border-white/[0.10]">
          <div>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-2">
              Customer
            </p>
            <p className="text-[15px] font-normal text-white">Abbelo</p>
          </div>
          <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal leading-[1.55] text-white/75 max-w-[560px]">
            Helps users design their dream life and builds them into the person they need to be
            to turn that dream life into reality.
          </p>
        </div>

        {/* Testimonial: founder voice, centerpiece */}
        <figure className="mt-16 sm:mt-20 max-w-[860px]">
          <blockquote className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-normal leading-[1.35] tracking-[-0.02em] text-white">
            &ldquo;Men lie, women lie, numbers don&rsquo;t. Tessa is a private model of every
            Abbelo user. It learns from every session, scores who they are becoming, and shows
            them the one move to push next. Abbelo no longer guesses where any user is
            heading.&rdquo;
          </blockquote>
          <figcaption className="mt-10 text-[11px] font-mono tracking-[0.22em] uppercase leading-[1.6] text-white/55">
            Founder, Abbelo
          </figcaption>
        </figure>
      </section>

      {/* Get started: vertical timeline layout, distinct from the How cards */}
      <section
        id="get-started"
        className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] scroll-mt-24 sm:text-center"
      >
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Get started ]
        </p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] sm:mx-auto">
          Start with Tessa
        </h2>
        <p className="mt-10 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] sm:mx-auto">
          $2,500 one time. We build Tessa for your product, get it live, and keep tuning it for
          90 days after.
        </p>

        {/* Boxed step cards */}
        <div className="mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {[
            {
              n: "01",
              t: "Discovery call",
              d: "We hop on a call with you to learn your product, your users, and the outcome you want them to reach.",
            },
            {
              n: "02",
              t: "Build the formula",
              d: "We build Tessa for your product. The patterns. The predictions. The feedback.",
            },
            {
              n: "03",
              t: "Wire it in",
              d: "We wire Tessa into your stack on Vercel and GitHub using Claude Code. No new tools for your team to learn.",
            },
            {
              n: "04",
              t: "Live and tuned",
              d: "Tessa goes live inside your product. We keep tuning it around your real users for 90 days after.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-7 flex flex-col"
            >
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/45 tabular-nums mb-6">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.15rem,1.5vw,1.4rem)] font-medium tracking-[-0.02em] text-white mb-3">
                {s.t}
              </h3>
              <p className="text-[15px] font-normal leading-[1.55] text-white/60">
                {s.d}
              </p>
            </div>
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
              Or{" "}
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                book a call first.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA: emotional, fades to nothing on the right like the wordmark */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <h2
          className="bg-clip-text text-transparent text-[clamp(1.75rem,4.2vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em] max-w-[820px] break-words"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.75) 85%, rgba(255,255,255,0.45) 100%)",
            WebkitTextFillColor: "transparent",
          }}
        >
          Every user deserves to get what they came for. You built it for them. Tessa is how you
          make sure they get there.
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
