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

export default function Page() {
  return (
    <div
      className="min-h-screen bg-black text-white antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 sm:px-10 bg-black/60 backdrop-blur-md border-b border-white/[0.10]">
        <span className="text-white font-extralight text-[14px] tracking-[0.32em] uppercase">
          Tesurai
        </span>
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
      <section className="px-6 sm:px-10 pt-44 sm:pt-56 pb-20 sm:pb-28 max-w-[1100px] mx-auto">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          Tesurai
        </p>
        <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-extralight leading-[1.08] tracking-[-0.025em] text-white max-w-[22ch]">
          Most predictive intelligence layer for digital products
        </h1>
        <p className="mt-10 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[680px]">
          Tessa uses each user's past data to find patterns and predict their future, then gives
          feedback to help them get results. User outcomes are no longer guess work. They are a
          science you can run on every user.
        </p>
      </section>

      {/* What we believe */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What we believe ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          User outcomes are not chance. They are patterns.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          Every user takes a path through your product. That path leaves a trail of signals
          about what each user needs next. Most products miss those signals. Tessa reads them
          and turns them into the next move for each user. There is a better way to help your
          users get to what they came for, and it starts with the signals they are already
          giving you.
        </p>
      </section>

      {/* The journey */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ The journey ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Two paths for every user.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          Every user takes a path through your product. Each step is a signal. Tessa reads the
          signals and helps each user get closer to the result they came for.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 max-w-[1100px]">
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
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ How ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Discover. Build. Deploy.
        </h2>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-3 max-w-[1100px]">
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
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-6">
          <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35">
            [ Case study ]
          </p>
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/25 tabular-nums">
            Case 001 / 2026
          </span>
        </div>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[20ch]">
          Abbelo runs on Tessa.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[920px]">
          <p className="text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65">
            Abbelo is a digital product that helps people grow into who they want to be. Users
            talk through their goals out loud, like a voice call with a coach.
          </p>
          <p className="text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65">
            Tessa reads every session. It tracks the habits and promises each user makes. It
            scores their growth from 0 to 100. It sends the next small step that lifts the
            score most.
          </p>
        </div>
        <p className="mt-10 text-[clamp(1.05rem,1.65vw,1.25rem)] font-light leading-relaxed text-white/75 max-w-[760px]">
          Live inside Abbelo today. The same Tessa runs there as the one built into your
          product.
        </p>
      </section>

      {/* Get started */}
      <section
        id="get-started"
        className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10] scroll-mt-24"
      >
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-6">
          <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35">
            [ Get started ]
          </p>
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/25 tabular-nums">
            Founding cohort pricing
          </span>
        </div>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Start with Tessa.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          $2,500 one time. One week from kickoff to Tessa live inside your product.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px]">
          {[
            {
              n: "01",
              t: "Pay",
              d: "$2,500 one time. Receipt arrives instantly.",
            },
            {
              n: "02",
              t: "Kickoff",
              d: "We meet within two business days. Lock in the outcome you want for every user.",
            },
            {
              n: "03",
              t: "Build",
              d: "One week. We build Tessa and put it inside your product.",
            },
            {
              n: "04",
              t: "Live",
              d: "Tessa runs every day. Monthly check ins keep it aimed at the right outcome.",
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

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-3">
              Price
            </p>
            <p className="text-[clamp(2.4rem,5vw,3.5rem)] font-extralight leading-none text-white tabular-nums tracking-[-0.02em]">
              $2,500
            </p>
            <p className="text-[13px] font-light text-white/45 mt-3">
              One time. Founding cohort pricing.
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

      {/* Closing CTA — emotional, no buttons */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1100px] mx-auto border-t border-white/[0.10] text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Next ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-light leading-[1.15] tracking-[-0.025em] text-white max-w-[24ch] mx-auto">
          Every user deserves to get what they came for.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/60 max-w-[560px] mx-auto">
          You built it for them. Tessa is how you make sure they get there.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-14 border-t border-white/[0.10]">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="text-white font-extralight text-[13px] tracking-[0.32em] uppercase">
            Tesurai
          </span>
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
