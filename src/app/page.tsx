// Tesurai company landing page.
// Rebuilt from the live page with every Abbelo reference removed:
//  - nav + footer Abbelo links dropped
//  - "Tessa × Abbelo" section replaced by the Abbelo-free "Wiring Tessa" steps
//  - "Beyond Abbelo" → "Beyond a person"; the Abbelo card is now a generic
//    "People" card (keeps the Live proof-of-life)
//  - hero + consulting copy reworded off Abbelo
// Colors: black / white / grey only (the Live badge is grey, not green).

const CAL_LINK = "https://cal.com/tesurai"; // swap for the real handle/slug

export const metadata = {
  title: "Tesurai | AI that measures who you’re becoming",
  description:
    "Tesurai is a company building AI that turns change into something you can measure. Our first intelligence, Tessa, models you over time and scores your growth — built to measure far more.",
  openGraph: {
    title: "Tesurai | AI that measures who you’re becoming",
    description:
      "Tesurai is a company building AI that turns change into something you can measure. Our first intelligence, Tessa, models you over time and scores your growth — built to measure far more.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | AI that measures who you’re becoming",
    description:
      "Tesurai is a company building AI that turns change into something you can measure. Our first intelligence, Tessa, models you over time and scores your growth — built to measure far more.",
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
      <section className="px-6 sm:px-10 pt-44 sm:pt-56 pb-28 sm:pb-40 max-w-[1100px] mx-auto">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          Tesurai
        </p>
        <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.035em] text-white max-w-[16ch]">
          We build AI that measures who you’re becoming.
        </h1>
        <p className="mt-10 text-[clamp(1.05rem,2vw,1.4rem)] font-light leading-relaxed text-white/55 max-w-[640px]">
          Tesurai is a company building intelligence that turns change into something you can
          see. Our first, Tessa, models a person over time and scores their growth. She’s live
          today, scoring real growth — and she’s built to measure far more.
        </p>
      </section>

      {/* Tessa — Moneyball */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Tessa ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[20ch]">
          Moneyball for what actually matters.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[900px]">
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50">
            In Moneyball, a team stopped trusting gut and started measuring the few signals that
            actually win games, and beat everyone who didn’t. Tessa does that for the things still
            run on instinct: who you’re becoming, how a business is really doing, where a team is
            heading.
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50">
            She builds a living model of the subject, finds the metrics that actually predict the
            outcome, and turns them into a score you can move and a forecast you can trust. A new
            way to play the game, in places that were never kept score.
          </p>
        </div>
      </section>

      {/* Wiring Tessa — four steps (replaces the old Tessa × Abbelo section) */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Wiring Tessa ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[20ch]">
          Four steps from gut to score.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[640px]">
          Tessa doesn’t replace the work — she names what to measure, watches it move, and tells
          you the next thing to do.
        </p>

        <div className="mt-16 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px]">
          {[
            {
              n: "01",
              t: "Name the subject.",
              d: "Person, company, creator, team — whatever you want to see becoming.",
            },
            {
              n: "02",
              t: "Connect the signal.",
              d: "Check-ins, dashboards, posts, commitments — whatever the subject actually does.",
            },
            {
              n: "03",
              t: "Tessa fits the model.",
              d: "She finds the few signals that actually predict the outcome and turns them into one score.",
            },
            {
              n: "04",
              t: "You get the move.",
              d: "A score you can move, a 90-day forecast, and the one move that moves it most.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-[13px] font-mono tracking-[0.12em] text-white/30 mb-4 tabular-nums">
                {s.n}
              </p>
              <h3 className="text-[clamp(1rem,1.3vw,1.15rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
                {s.t}
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-white/50">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond a person */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Beyond a person ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[22ch]">
          The same engine measures more than a person.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[680px]">
          Tessa models any system that changes over time and makes its progress legible. A person
          becoming who they want to be is the first case. It is not the last.
        </p>

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
              becoming-score from 0 to 100 — the first number that tracks the person you’re turning
              into. Live today.
            </p>
          </div>
          <div className="bg-black p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/40">
                Founders
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-white/90 mb-4">
              Your company, scored
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-white/50">
              Point Tessa at your metrics and she models the health of the business itself — where
              it’s strong, where it’s drifting, and where the next 90 days are heading.
            </p>
          </div>
          <div className="bg-black p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/40">
                Creators
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-white/90 mb-4">
              The pattern behind the reach
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-white/50">
              Tessa reads what your audience actually responds to across everything you post, and
              tells you what to make next instead of guessing.
            </p>
          </div>
          <div className="bg-black p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/40">
                Teams
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-white/90 mb-4">
              Performance you can see move
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-white/50">
              Measure output and culture as they actually change, week over week, so a team knows
              what it’s becoming, not just what it shipped.
            </p>
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ How we build ]
        </p>
        <div className="grid gap-12 sm:grid-cols-3 max-w-[1000px]">
          {[
            {
              n: "01",
              d: "Model the subject, not the surface. A real picture of how something is changing beats a wall of disconnected metrics.",
            },
            {
              n: "02",
              d: "One score, one next move. Intelligence is only useful when it ends in a decision a person can actually make.",
            },
            {
              n: "03",
              d: "The person stays in charge. Tessa reads, scores, and forecasts. You decide.",
            },
          ].map((p) => (
            <div key={p.n}>
              <p className="text-[13px] font-mono tracking-[0.12em] text-white/30 mb-4 tabular-nums">
                {p.n}
              </p>
              <p className="text-[clamp(1rem,1.5vw,1.15rem)] font-light leading-relaxed text-white/60">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What's next */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1100px] mx-auto border-t border-white/[0.06] text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What’s next ]
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.08] tracking-[-0.03em] text-white/90 max-w-[16ch] mx-auto">
          Tessa is the first of many.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.7vw,1.25rem)] font-light leading-relaxed text-white/50 max-w-[600px] mx-auto">
          Tesurai is a company, not a single product. More are coming, each built on the same
          belief: if you can measure it, you can change it.
        </p>
      </section>

      {/* Consulting */}
      <section className="px-6 sm:px-10 py-24 sm:py-36 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Consulting ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[18ch]">
          Work with me directly.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[900px]">
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50">
            I’m Matthew Werner, founder of Tesurai. I build AI that measures what matters — Tessa
            for people, teams, and businesses.
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50">
            I take on a small number of founders and teams to help them build AI products and turn
            their business into something they can actually measure and move — the Moneyball way.
            If that’s the game you want to play, let’s talk.
          </p>
        </div>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-12 bg-white text-black px-8 py-4 text-[14px] font-medium tracking-[0.04em] rounded-full hover:bg-white/85 transition-all duration-300"
        >
          Book a call
          <ArrowRight />
        </a>
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
