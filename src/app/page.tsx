// Tesurai company landing page.
// Positioning: Tesurai builds AI that measures who you're becoming.
// Tessa is the engine. Today she scores people (B2C, live). Next:
// she scores the teams those people work in (B2B beachhead).
// Page is black/white/grey only, no pricing on the page (intentional).

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | AI that measures who you’re becoming",
  description:
    "Tesurai builds AI that measures who you’re becoming. Tessa turns the signals you already have into one score, a 90-day forecast, and the next move to move it — for people, and for the teams they work in.",
  openGraph: {
    title: "Tesurai | AI that measures who you’re becoming",
    description:
      "Tesurai builds AI that measures who you’re becoming. Tessa turns the signals you already have into one score, a 90-day forecast, and the next move to move it — for people, and for the teams they work in.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | AI that measures who you’re becoming",
    description:
      "Tesurai builds AI that measures who you’re becoming. Tessa turns the signals you already have into one score, a 90-day forecast, and the next move to move it — for people, and for the teams they work in.",
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
        <p className="mt-10 text-[clamp(1.05rem,2vw,1.4rem)] font-light leading-relaxed text-white/55 max-w-[680px]">
          One score that predicts the outcome you actually care about, a 90-day forecast you can
          trust, and the single next move to move the score. For people, and for the teams they
          work in.
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
          Tessa already scores who a person is becoming on her first product. Now we bring the
          same engine to the teams those people work in — so every manager has one number that
          tracks who each employee is becoming inside your company, and one move to make this
          week.
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
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[680px]">
          Most tools give you forty metrics. Tessa picks the three that actually predict your
          outcome this quarter — and tells you which one to move first.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 max-w-[1000px]">
          {[
            {
              n: "Signals in",
              d: "We wire the data that already exists in your stack — HRIS, Slack, calendar, perf reviews, surveys, whatever real.",
            },
            {
              n: "Score out",
              d: "One 0–100 score per subject, fit to the outcome you actually care about. Re-fit weekly as your business changes.",
            },
            {
              n: "Move next",
              d: "The single next move that lifts the score most — delivered to the human who needs it, every week.",
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
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[680px]">
          White glove, end to end. You don’t build anything — we wire Tessa into the systems you
          already run on, score the outcome you already care about, and ship the next move into
          the inbox of the human who needs it.
        </p>

        <div className="mt-16 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px]">
          {[
            {
              n: "Week 1",
              t: "Outcome",
              d: "We sit with you to name the one outcome you’d bet the quarter on, and the subjects whose scores we’ll move — employees, teams, customers.",
            },
            {
              n: "Week 2",
              t: "Wire",
              d: "We connect Tessa to the data that already exists in your stack — HRIS, Slack, calendar, perf tools, CRM. OAuth in, no code from you.",
            },
            {
              n: "Week 3",
              t: "Score",
              d: "The first scores and 90-day forecast land. Each manager gets their first weekly move. Real numbers, not a survey.",
            },
            {
              n: "Ongoing",
              t: "Re-fit",
              d: "Tessa re-fits the model every week as your business changes. The score updates, the next move ships into Slack every Monday.",
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

      {/* Where Tessa scores — focused two-card */}
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
              becoming-score from 0 to 100 — the first number that tracks the person you’re
              turning into. Live today.
            </p>
          </div>
          <div className="bg-black p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/40">
                Teams
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-white/90 mb-4">
              Your employees, scored
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-white/50">
              Point Tessa at the signals you already have — HRIS, Slack, calendar, perf reviews —
              and she scores who each employee is becoming inside your company. Every manager
              gets one move per direct report, every week.
            </p>
          </div>
        </div>

        <p className="mt-12 text-[15px] font-light leading-relaxed text-white/40 max-w-[680px]">
          Beyond people and teams, the same engine measures companies, customers, and audiences.
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
                "You have one outcome you’d bet the quarter on.",
                "You already have at least one stream of signal — HRIS, perf tool, Slack, CRM, anything real.",
                "You’re tired of dashboards that don’t end in a decision.",
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
                "You want a dashboard, not a score.",
                "You want a chatbot or a coach.",
                "The outcome you care about isn’t yet named — Tessa works when the target is sharp.",
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
              q: "How is Tessa different from Lattice, Culture Amp, or Gong?",
              a: "Those products give you a dashboard or a coach. Tessa picks the few signals that actually predict your outcome, and ships you one score, one forecast, and one next move. Fewer numbers, more conviction.",
            },
            {
              q: "Who owns the data?",
              a: "You do. We work in your warehouse when you have one, and host yours when you don’t. Your data never trains anyone else’s model.",
            },
            {
              q: "What if our signals are messy?",
              a: "They always are. We wire what’s there, score against what matters, and tell you when a signal stream is too noisy to trust. Honesty beats false precision.",
            },
            {
              q: "What happens after the first three weeks?",
              a: "Tessa re-fits the model weekly as your business changes, ships the next move to the right human, and the score keeps moving. You meet with us monthly to recalibrate the outcome.",
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
        <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.08] tracking-[-0.03em] text-white/90 max-w-[18ch] mx-auto">
          Ready to see who your team is becoming?
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[560px] mx-auto">
          One outcome. One score. One move per week. Book a call to scope the first three weeks.
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
