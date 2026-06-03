// Tesurai company landing page.
// Tesurai is a portfolio of AI tools and consulting.
// Two things are promoted now: Tessa (a free tool, live on this page) and
// consulting (the paid product). The Tessa tool is built from the abbelo
// Tessa recipe (one shot judge prompt, no persistence, no ledger).
// Copy rules: fifth grade reading level, clear not concise, no dashes anywhere.

import TessaTool from "./tessa-tool";

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | AI tools and consulting for founders",
  description:
    "Tesurai is a portfolio of AI tools and consulting. Our first tool is Tessa, and she is free. We help founders give their customers a better experience and better results.",
  openGraph: {
    title: "Tesurai | AI tools and consulting for founders",
    description:
      "Tesurai is a portfolio of AI tools and consulting. Our first tool is Tessa, and she is free. We help founders give their customers a better experience and better results.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | AI tools and consulting for founders",
    description:
      "Tesurai is a portfolio of AI tools and consulting. Our first tool is Tessa, and she is free. We help founders give their customers a better experience and better results.",
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
            href="#tessa"
            className="hidden sm:inline text-white/60 hover:text-white text-[13px] font-light tracking-[0.06em] transition-colors"
          >
            Tessa
          </a>
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
        <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.035em] text-white max-w-[15ch]">
          Build a big business with a small team.
        </h1>
        <p className="mt-10 text-[clamp(1.05rem,2vw,1.4rem)] font-light leading-relaxed text-white/55 max-w-[680px]">
          Tesurai is a group of AI tools and hands on help for founders. Our first tool is Tessa,
          and she is free. Our consulting is how we work with you to help your customers get
          better results.
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
            href="#tessa"
            className="inline-flex items-center gap-2 text-white/70 border border-white/20 px-7 py-3.5 text-[13px] font-light tracking-[0.04em] rounded-full hover:text-white hover:border-white/40 transition-all duration-300"
          >
            Meet Tessa, free
          </a>
        </div>
      </section>

      {/* The belief */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What we believe ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[20ch]">
          You do not need a big team to build a big business.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[720px]">
          The best tools used to belong to big companies with big teams. That is changing fast.
          One founder with the right AI can now do the work of many people. We are here for the
          next wave of solo founders. The ones who want to build a billion dollar business
          without a giant team. We give you the tools and the help to do it.
        </p>
      </section>

      {/* Tessa: free tool */}
      <section
        id="tessa"
        className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06] scroll-mt-24"
      >
        <div className="flex items-center gap-3 mb-6">
          <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35">
            [ Tessa ]
          </p>
          <span className="text-[10px] font-light tracking-[0.12em] uppercase text-white/55 border border-white/25 rounded-full px-2.5 py-0.5">
            Free
          </span>
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[18ch]">
          Meet Tessa. She is free.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[720px]">
          Tessa is an AI that watches how people use your product. She learns what works and
          what does not. Then she gives each person a score from 0 to 100. The score shows how
          close they are to the result they came for. Tessa tells each person the one thing to
          do next. And she shows you, the founder, the big picture. You see who is doing well,
          who is stuck, and why.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 max-w-[1000px]">
          {[
            {
              n: "She watches",
              d: "Tessa looks at what your users do inside your product. Every step they take, every win, every place they get stuck.",
            },
            {
              n: "She scores",
              d: "Tessa turns all of that into one simple score from 0 to 100 for each user. The score tells you how each person is really doing.",
            },
            {
              n: "She guides",
              d: "Tessa tells each user the next best thing to do. And she shows you what your top users do that the rest do not.",
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

        <TessaTool />
      </section>

      {/* Case study: Abbelo */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Case study ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[18ch]">
          How Abbelo uses Tessa.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[920px]">
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55">
            Abbelo is an app that helps people grow. People use it to work on themselves. They
            talk through their goals out loud, like a voice call. Behind every one of those
            sessions sits Tessa.
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55">
            Tessa listens to each session. She watches the habits people keep and the promises
            they make. Then she gives each person a becoming score from 0 to 100. The score
            shows how much they are growing over time. Tessa also gives them the next small step
            to take.
          </p>
        </div>
        <p className="mt-10 text-[clamp(1.05rem,1.7vw,1.3rem)] font-light leading-relaxed text-white/70 max-w-[760px]">
          This is live in Abbelo today. It is the same Tessa we are giving away free here. So
          you do not have to wonder if she works. She is already at work, helping real people
          grow.
        </p>
      </section>

      {/* Consulting: paid product */}
      <section
        id="consulting"
        className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06] scroll-mt-24"
      >
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Consulting ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[18ch]">
          Work with us.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[720px]">
          Tessa is the free tool. Our consulting is how we help you the most. We work with you
          one on one. We learn your business and your customers. We find the one result that
          matters most to them. Then we set up the right tools so your customers get there. This
          is what Tesurai sells right now.
        </p>

        <div className="mt-14 grid gap-px sm:grid-cols-2 bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden max-w-[1000px]">
          {[
            {
              t: "We learn your business",
              d: "We sit with you and study your product and your customers. We learn what a win looks like for the people you serve.",
            },
            {
              t: "We find what matters",
              d: "We pick the one result that matters most for your customers. Then we figure out what to measure to get them there.",
            },
            {
              t: "We set up your tools",
              d: "We wire up Tessa and the other tools you need. We fit them into what you already use, without breaking it.",
            },
            {
              t: "We stay with you",
              d: "We do not set it and leave. We keep working with you, week after week, to make your results better over time.",
            },
          ].map((card) => (
            <div key={card.t} className="bg-black p-8 sm:p-10">
              <h3 className="text-[clamp(1.1rem,1.6vw,1.35rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
                {card.t}
              </h3>
              <p className="text-[15px] font-light leading-relaxed text-white/55">{card.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-[14px] font-medium tracking-[0.04em] rounded-full hover:bg-white/85 transition-all duration-300"
          >
            Book a call
            <ArrowRight />
          </a>
          <p className="text-[13px] font-light text-white/35">
            Or email{" "}
            <a
              href="mailto:hello@tesurai.com"
              className="text-white/55 hover:text-white transition-colors"
            >
              hello@tesurai.com
            </a>
          </p>
        </div>
      </section>

      {/* Is this for you */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Is this for you? ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[16ch]">
          Let us be honest.
        </h2>

        <div className="mt-14 grid gap-10 sm:gap-px sm:grid-cols-2 sm:bg-white/[0.06] sm:border sm:border-white/[0.06] sm:rounded-2xl overflow-hidden">
          <div className="bg-black p-8 sm:p-10">
            <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-5">
              Yes if
            </p>
            <ul className="space-y-4">
              {[
                "You are a founder, and people already use your product.",
                "You want your customers to get better results.",
                "You want to grow without hiring a big team.",
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
                "No one uses your product yet. Tessa needs real people to watch.",
                "You want a tool you never think about. Tessa works best when you care about one clear result.",
                "You are not sure what a win looks like for your customers. We can help you find it on a call.",
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
              q: "How much does Tessa cost?",
              a: "Tessa is free. There is no sign up and no email. We are putting her right on this page so you can use her for free.",
            },
            {
              q: "Then how does Tesurai make money?",
              a: "We make money from consulting. That is the paid help we give founders one on one. Tessa stays free for everyone.",
            },
            {
              q: "Is Tessa real, or just an idea?",
              a: "She is real and live today. The app Abbelo uses Tessa right now to score how its users are growing and to give them the next step.",
            },
            {
              q: "What do I need to use Tessa?",
              a: "You need a product that people use, and one clear result you want for them. We help you with the rest on a call.",
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
        <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.08] tracking-[-0.03em] text-white/90 max-w-[16ch] mx-auto">
          Let us help you grow.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[560px] mx-auto">
          Tessa is free. Our consulting is how we help you win. Book a call and we will look at
          your business together.
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
