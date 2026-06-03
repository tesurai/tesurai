// Tesurai company landing page.
// Positioning: Tessa is the leverage that lets a solo founder serve thousands
// of customers like a real growth team. Tessa scores every customer, finds
// the patterns across the funnel, and ships the next move — for each user
// and for the founder. Today she also lives in a separate B2C product
// (becoming-score for individuals), which is the live proof of the engine.

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | AI that measures who you’re becoming",
  description:
    "Tessa scores every customer in your product — what’s working, what’s not, and the next move to lift them. The customer success team, growth analyst, and data engineer you don’t have to hire.",
  openGraph: {
    title: "Tesurai | AI that measures who you’re becoming",
    description:
      "Tessa scores every customer in your product — what’s working, what’s not, and the next move to lift them. The customer success team, growth analyst, and data engineer you don’t have to hire.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | AI that measures who you’re becoming",
    description:
      "Tessa scores every customer in your product — what’s working, what’s not, and the next move to lift them. The customer success team, growth analyst, and data engineer you don’t have to hire.",
  },
};

const ArrowRight = () => (
  <svg
    width="15"
    height="15"
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
);

export default function Page() {
  return (
    <div
      className="min-h-screen bg-black text-white antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 sm:px-10 bg-black/60 backdrop-blur-md border-b border-white/[0.06]">
        <span className="text-white font-extralight text-[14px] tracking-[0.32em] uppercase">
          Tesurai
        </span>
        <nav className="flex items-center gap-5 sm:gap-7">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white/25 px-5 py-2 text-[12px] font-light tracking-[0.1em] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-44 sm:pt-56 pb-20 sm:pb-28 max-w-[1100px] mx-auto">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          Tesurai
        </p>
        <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.035em] text-white max-w-[16ch]">
          We build AI that measures who you’re becoming.
        </h1>
        <p className="mt-10 text-[clamp(1.05rem,2vw,1.4rem)] font-light leading-relaxed text-white/55 max-w-[700px]">
          Tessa scores who each of your customers is becoming inside your product — what’s
          working, what’s not, and the single move that lifts them next. So one founder can
          serve thousands like a real growth team.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] rounded-full hover:bg-white/85 transition-all duration-300"
          >
            Book a call
            <ArrowRight />
          </a>
          <a
            href="#wiring"
            className="inline-flex items-center gap-2 text-white/70 border border-white/20 px-7 py-3.5 text-[13px] font-light tracking-[0.04em] rounded-full hover:text-white hover:border-white/40 transition-all duration-300"
          >
            See how Tessa wires in
          </a>
        </div>
      </section>

      {/* Live-today proof */}
      <section className="px-6 sm:px-10 py-20 sm:py-28 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Live today ]
        </p>
        <p className="text-[clamp(1.1rem,1.8vw,1.35rem)] font-light leading-relaxed text-white/70 max-w-[760px]">
          Tessa already scores who a person is becoming on her first product. Now we point the
          same engine at your customers — so every founder can see, for every user, what’s
          working and what to do next.
        </p>
      </section>

      {/* Belief / manifesto */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ The belief ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[22ch]">
          You don’t need a big team to build a massive business.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[720px]">
          Tesurai is built for the next wave of solo founders building billion-dollar
          businesses. Tessa is the leverage — the customer success team, growth analyst, and
          data engineer you don’t have to hire. One number per customer. One pattern across the
          funnel. One move per week.
        </p>
      </section>

      {/* Tessa — Moneyball mechanism */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Tessa ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[20ch]">
          Moneyball for what actually matters.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[700px]">
          Most tools give you forty metrics on a dashboard you have to staff. Tessa picks the
          three signals that actually predict your customers’ outcome — and tells you which one
          to move first, for each user and for the funnel as a whole.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 max-w-[1000px]">
          {[
            {
              n: "Signals in",
              d: "We wire Tessa to every user signal in your product — events, conversions, drop-offs, billing, support. Whatever you already emit.",
            },
            {
              n: "Score out",
              d: "One 0–100 becoming-score per customer, fit to the outcome they came for. Re-fit weekly as your product changes.",
            },
            {
              n: "Move next",
              d: "The single next move that lifts each customer toward their outcome — surfaced to you, or delivered straight to them.",
            },
          ].map((row) => (
            <div key={row.n}>
              <p className="text-[13px] font-mono tracking-[0.12em] uppercase text-white/45 mb-4">
                {row.n}
              </p>
              <p className="text-[15px] font-light leading-relaxed text-white/55">{row.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wiring Tessa — engagement spec */}
      <section
        id="wiring"
        className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06] scroll-mt-24"
      >
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Wiring Tessa ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[22ch]">
          From gut to score in three weeks.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[700px]">
          White glove, end to end. You don’t build anything new — we wire Tessa to your
          product, score every customer against the outcome you actually care about, and ship
          the next move into the inbox of the human who needs it.
        </p>

        <div className="mt-16 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px]">
          {[
            {
              n: "Week 1",
              t: "Outcome",
              d: "We sit with you to name the outcome your customers came for, and the success signal we’ll score against.",
            },
            {
              n: "Week 2",
              t: "Wire",
              d: "We wire Tessa to your event stream — Mixpanel, Amplitude, Segment, PostHog, Stripe, your own DB — in an afternoon. You write nothing new.",
            },
            {
              n: "Week 3",
              t: "Score",
              d: "Every customer gets their first score. You see the funnel — top producers, low potential, the patterns between them — and the first move per cohort.",
            },
            {
              n: "Ongoing",
              t: "Re-fit",
              d: "Tessa re-fits weekly as your product changes. Each customer’s next move ships into your dashboard, or straight to them.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/35 mb-3">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
                {s.t}
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-white/50">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Where Tessa scores — two cards (People live + Founders) */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Where Tessa scores ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[24ch]">
          The same engine, measuring more than a person.
        </h2>

        <div className="mt-16 grid gap-px sm:grid-cols-2 bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="bg-black p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/40">
                People
              </span>
              <span className="text-[10px] font-light tracking-[0.12em] uppercase text-white/55 border border-white/25 rounded-full px-2.5 py-0.5">
                Live
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-white/90 mb-4">
              Becoming, scored
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-white/50">
              Tessa reads every check-in, commitment, and habit, and turns it into a
              becoming-score from 0 to 100 — the first number that tracks the person someone is
              turning into. Live today.
            </p>
          </div>
          <div className="bg-black p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/40">
                Founders
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-white/90 mb-4">
              Your customers, scored
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-white/50">
              Tessa scores who each of your customers is becoming inside your product. The
              funnel rolls up so you see what your top producers do that the bottom don’t — and
              the next move for every user, every week.
            </p>
          </div>
        </div>

        <p className="mt-12 text-[15px] font-light leading-relaxed text-white/40 max-w-[680px]">
          Beyond people and founders, the same engine measures teams, companies, and audiences.
          Tessa is built to measure any system that changes over time.
        </p>
      </section>

      {/* Is Tessa for you? — honest filter */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Is Tessa for you? ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[18ch]">
          The honest filter.
        </h2>

        <div className="mt-14 grid gap-10 sm:gap-px sm:grid-cols-2 sm:bg-white/[0.06] sm:border sm:border-white/[0.06] sm:rounded-2xl overflow-hidden">
          <div className="bg-black p-8 sm:p-10">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-5">
              Yes if
            </p>
            <ul className="space-y-4">
              {[
                "You’re a founder building something serious — and you don’t want to hire a customer success or growth team to do it.",
                "Your product already emits events somewhere — Mixpanel, Amplitude, Segment, PostHog, Stripe, your own DB.",
                "You believe one number per customer beats a dashboard of forty.",
              ].map((line) => (
                <li
                  key={line}
                  className="text-[15px] font-light leading-relaxed text-white/65 pl-5 relative"
                >
                  <span className="absolute left-0 top-[0.6em] inline-block w-2 h-px bg-white/40" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black p-8 sm:p-10">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/35 mb-5">
              Not yet if
            </p>
            <ul className="space-y-4">
              {[
                "You don’t have customers in your product yet — Tessa needs real signal to score.",
                "You want a dashboard, a chatbot, or AI insights without a model behind them.",
                "The outcome your customers came for isn’t yet named — Tessa works when the target is sharp.",
              ].map((line) => (
                <li
                  key={line}
                  className="text-[15px] font-light leading-relaxed text-white/35 pl-5 relative"
                >
                  <span className="absolute left-0 top-[0.6em] inline-block w-2 h-px bg-white/20" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Questions, answered ]
        </p>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 max-w-[1000px]">
          {[
            {
              q: "How is Tessa different from Mixpanel, Amplitude, or PostHog?",
              a: "Those give you dashboards you have to staff and interpret. Tessa gives you one score per customer and the single next move to lift them — for every user, every week. Fewer numbers, more conviction. The dashboards still exist; you just don’t have to live in them.",
            },
            {
              q: "Who owns the data?",
              a: "You do. Tessa runs in your warehouse when you have one, and hers when you don’t. Your customers’ data never trains anyone else’s model.",
            },
            {
              q: "What if our signals are messy?",
              a: "They always are. We wire what’s there, score against what matters, and tell you when a stream is too noisy to trust. Honesty beats false precision.",
            },
            {
              q: "What happens after the first three weeks?",
              a: "Tessa re-fits the model weekly as your product changes and your customers move. Each week the score updates, the next move ships, the funnel patterns sharpen. You meet with us monthly to recalibrate the outcome.",
            },
          ].map((f) => (
            <div key={f.q}>
              <h3 className="text-[clamp(1.05rem,1.5vw,1.2rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
                {f.q}
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-white/55">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1100px] mx-auto border-t border-white/[0.06] text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Next ]
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.08] tracking-[-0.03em] text-white/90 max-w-[20ch] mx-auto">
          Ready to see who your customers are becoming?
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[600px] mx-auto">
          One score per customer. One pattern across the funnel. One move per week. Book a call
          to scope the first three weeks.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-[14px] font-medium tracking-[0.04em] rounded-full hover:bg-white/85 transition-all duration-300"
          >
            Book a call
            <ArrowRight />
          </a>
        </div>
        <p className="mt-5 text-[13px] font-light text-white/35">
          Or email{" "}
          <a
            href="mailto:hello@tesurai.com"
            className="text-white/55 hover:text-white transition-colors"
          >
            hello@tesurai.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-14 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="text-white font-extralight text-[13px] tracking-[0.32em] uppercase">
            Tesurai
          </span>
          <div className="flex items-center gap-8">
            <a
              href="mailto:hello@tesurai.com"
              className="text-white/45 hover:text-white text-[14px] font-light transition-colors"
            >
              hello@tesurai.com
            </a>
          </div>
          <span className="text-white/30 text-[13px] font-light">© 2026 Tesurai</span>
        </div>
      </footer>
    </div>
  );
}
