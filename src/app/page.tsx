// Tesurai company landing page.
// Voice: written as a category-defining product. Confident, declarative, short.
// The category is "the intelligence layer for digital products." Less first-person,
// more product-as-protagonist.
// Copy rules: fifth grade reading level, no dashes anywhere, no pronouns for Tessa,
// no language framing Tessa as a team replacement, no made up outcome claims.

import PayButton from "./pay-button";

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | The intelligence layer for digital products",
  description:
    "Tessa uses each user's past data to find patterns and predict their future, then gives feedback to help them get results. Live inside Abbelo today. Built into your product next.",
  openGraph: {
    title: "Tesurai | The intelligence layer for digital products",
    description:
      "Tessa uses each user's past data to find patterns and predict their future, then gives feedback to help them get results. Live inside Abbelo today. Built into your product next.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | The intelligence layer for digital products",
    description:
      "Tessa uses each user's past data to find patterns and predict their future, then gives feedback to help them get results. Live inside Abbelo today. Built into your product next.",
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

export default function Page() {
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
            className="text-white border border-white/25 px-5 py-2 text-[12px] font-light tracking-[0.1em] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get started
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-44 sm:pt-56 pb-28 sm:pb-40 max-w-[1200px] mx-auto">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          Tesurai
        </p>
        <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-extralight leading-[1.08] tracking-[-0.025em] text-white max-w-[22ch]">
          Most predictive intelligence layer for digital products
        </h1>
        <p className="mt-10 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[680px]">
          Tessa uses each user's past data to find patterns and predict their future, then gives
          feedback to help them get results. User outcomes are no longer guess work. They follow
          patterns you can read on every user.
        </p>
      </section>

      {/* What we believe */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What we believe ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Most products react
          <br />
          The best ones predict
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          By the time you understand why a user left, the user is already gone. Reading the past
          is not enough. The best digital products see what is coming and act before the user
          slips. That is the layer Tessa adds to your product.
        </p>
      </section>

      {/* The journey */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ The journey ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Two paths for every user
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          Every user takes a path through your product. Each step is a signal. Tessa reads the
          signals and helps each user get closer to the result they came for.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2">
          {/* Without Tessa */}
          <div className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-8 flex flex-col">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/45 mb-8">
              Without Tessa
            </p>
            <ol className="space-y-4 flex-1">
              {[
                "Signs up wanting a result.",
                "Tries the product on their own.",
                "Gets stuck somewhere.",
                "Does not know what to do next.",
                "Drops off the path.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="text-[14.5px] font-light leading-relaxed text-white/45 flex gap-4"
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
                Outcome: user drops off
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
                "Signs up wanting a result.",
                "Tessa watches what they do.",
                "Tessa predicts where they are heading.",
                "Tessa sends the next move.",
                "User stays on the path.",
                "User gets the result.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="text-[14.5px] font-light leading-relaxed text-white/80 flex gap-4"
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
                Outcome: user gets the result
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ How ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Discover
          <br />
          Build
          <br />
          Deploy
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
              <p className="text-[clamp(2rem,3.5vw,2.75rem)] font-mono font-light leading-none tracking-[-0.02em] text-white/35 mb-8 tabular-nums">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-light tracking-[-0.01em] text-white mb-3">
                {s.t}
              </h3>
              <p className="text-[14.5px] font-light leading-relaxed text-white/60">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case study */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10]">
        {/* Meta bar */}
        <div className="flex items-baseline justify-between mb-16 sm:mb-24">
          <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40">
            Case study
          </p>
          <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 tabular-nums">
            No. 001 / 2026
          </p>
        </div>

        {/* Hero: customer identity */}
        <div className="grid gap-10 sm:gap-16 sm:grid-cols-12 items-end pb-14 sm:pb-20 border-b border-white/[0.15]">
          <div className="sm:col-span-3">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-3">
              Customer
            </p>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase leading-[1.6] text-white/70">
              Personal development
              <br />
              Consumer mobile and web
            </p>
          </div>
          <div className="sm:col-span-9">
            <h2 className="text-[clamp(3.2rem,8vw,7rem)] font-extralight leading-[0.92] tracking-[-0.04em] text-white">
              Abbelo
            </h2>
            <p className="mt-8 text-[clamp(1.1rem,1.8vw,1.4rem)] font-light leading-relaxed text-white/75 max-w-[600px]">
              A coaching app for people who want to change. Every session ends with one number
              that tracks who they are becoming.
            </p>
          </div>
        </div>

        {/* Chapter 01: the problem */}
        <article className="mt-20 sm:mt-28 grid gap-8 sm:gap-12 sm:grid-cols-12">
          <header className="sm:col-span-3">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-2 tabular-nums">
              01
            </p>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/65">
              The problem
            </p>
          </header>
          <div className="sm:col-span-9">
            <blockquote className="text-[clamp(1.7rem,3.4vw,2.7rem)] font-extralight leading-[1.2] tracking-[-0.025em] text-white max-w-[760px]">
              Am I becoming who I said I wanted to become, and at what pace?
            </blockquote>
            <p className="mt-7 text-[12px] font-mono tracking-[0.2em] uppercase text-white/45 max-w-[560px]">
              The question every Abbelo user has. No coaching app answered it.
            </p>
          </div>
        </article>

        {/* Chapter 02: the solution */}
        <article className="mt-20 sm:mt-28 grid gap-8 sm:gap-12 sm:grid-cols-12">
          <header className="sm:col-span-3">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-2 tabular-nums">
              02
            </p>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/65">
              The solution
            </p>
          </header>
          <div className="sm:col-span-9">
            <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] font-light leading-relaxed text-white/85 max-w-[680px]">
              Tessa reads every session. Scores the chain of thoughts, feelings, and actions.
              Forecasts where the user is heading at 30 and 90 days. Surfaces the one move to
              push next.
            </p>
            <p className="mt-6 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[680px]">
              The picture sharpens after every session.
            </p>
          </div>
        </article>

        {/* Chapter 03: in their words */}
        <article className="mt-20 sm:mt-28 grid gap-8 sm:gap-12 sm:grid-cols-12">
          <header className="sm:col-span-3">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-2 tabular-nums">
              03
            </p>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/65">
              In their words
            </p>
          </header>
          <div className="sm:col-span-9">
            <blockquote className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-light leading-[1.3] tracking-[-0.02em] text-white max-w-[760px]">
              Abbelo uses Tessa to show every user what they are becoming and what to push next.
            </blockquote>
            <figcaption className="mt-8 text-[11px] font-mono tracking-[0.22em] uppercase leading-[1.6] text-white/55">
              Matthew Werner
              <br />
              <span className="text-white/35">Founder, Abbelo</span>
            </figcaption>
          </div>
        </article>

      </section>

      {/* Get started: vertical timeline layout, distinct from the How cards */}
      <section
        id="get-started"
        className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] scroll-mt-24"
      >
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Get started ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Start with Tessa
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          $2,500 one time. We build Tessa for your product, get it live, and keep tuning it for
          ninety days after.
        </p>

        {/* Stepped row: 4 columns across, vertical hairlines between cells. */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 border-t border-white/[0.10]">
          {[
            {
              n: "01",
              t: "Discovery call",
              d: "We hop on a call with you to learn your product, your users, and the outcome you want them to reach.",
            },
            {
              n: "02",
              t: "Build",
              d: "We build Tessa for your product. The patterns. The predictions. The feedback.",
            },
            {
              n: "03",
              t: "Live",
              d: "Tessa is up and running inside your product.",
            },
            {
              n: "04",
              t: "Fine tune",
              d: "Over the next ninety days we clean up bugs and tune Tessa around your real users.",
            },
          ].map((s, i) => (
            <div
              key={s.n}
              className={`py-8 sm:py-10 sm:px-6 ${i === 0 ? "" : "border-t sm:border-t-0 sm:border-l border-white/[0.10]"}`}
            >
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/45 tabular-nums mb-5">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.15rem,1.5vw,1.35rem)] font-light tracking-[-0.01em] text-white mb-3">
                {s.t}
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-white/60">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-3">
              Price
            </p>
            <p className="text-[clamp(2.4rem,5vw,3.5rem)] font-extralight leading-none text-white tabular-nums tracking-[-0.02em]">
              $2,500
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <PayButton />
            <p className="text-[13px] font-light text-white/40">
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

      {/* Closing CTA: emotional, no buttons, no eyebrow */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1200px] mx-auto border-t border-white/[0.10] text-center">
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.025em] text-white max-w-[24ch] mx-auto">
          Every user deserves to get what they came for
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/60 max-w-[560px] mx-auto">
          You built it for them. Tessa is how you make sure they get there.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-14 border-t border-white/[0.10]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Wordmark className="h-3 w-auto" />
          <div className="flex items-center gap-8">
            <a
              href="mailto:hello@tesurai.com"
              className="text-white/50 hover:text-white text-[14px] font-light transition-colors"
            >
              hello@tesurai.com
            </a>
          </div>
          <span className="text-white/35 text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
            © 2026 Tesurai LLC
          </span>
        </div>
      </footer>
    </div>
  );
}
