// Tesurai company landing page.
// One product: Tessa, set up in your business for you, white glove.
// Stupid simple. Seven blocks total: nav, hero, belief, Tessa (with the three
// step process baked in), case study, closing CTA, footer.
// Copy rules: fifth grade reading level, clear not concise, no dashes anywhere.

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | We put Tessa in your business",
  description:
    "We figure out your business, build the formula for Tessa, and put it into your product. You stay solo. Your customers get better results without you having to hire.",
  openGraph: {
    title: "Tesurai | We put Tessa in your business",
    description:
      "We figure out your business, build the formula for Tessa, and put it into your product. You stay solo. Your customers get better results without you having to hire.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | We put Tessa in your business",
    description:
      "We figure out your business, build the formula for Tessa, and put it into your product. You stay solo. Your customers get better results without you having to hire.",
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
      <section className="px-6 sm:px-10 pt-44 sm:pt-56 pb-24 sm:pb-32 max-w-[1100px] mx-auto">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          Tesurai
        </p>
        <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.035em] text-white max-w-[16ch]">
          We put Tessa in your business.
        </h1>
        <p className="mt-10 text-[clamp(1.05rem,2vw,1.4rem)] font-light leading-relaxed text-white/55 max-w-[700px]">
          Tessa is an AI system that watches every customer in your product and tells them the
          next thing to do. It is the same Tessa that runs inside Abbelo today. We put it in
          your business next, end to end. You stay solo.
        </p>
        <div className="mt-12">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] rounded-full hover:bg-white/85 transition-all duration-300"
          >
            Book a call
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* What we believe */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What we believe ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[20ch]">
          You do not need a big team to build a big business.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[720px]">
          The best tools used to belong to big companies with big teams. That is changing fast.
          One founder with the right AI can do the work of many people. We are here for the
          next wave of solo founders building billion dollar businesses. We bring you the
          tools, and we set them up for you.
        </p>
      </section>

      {/* Tessa: the product and the three steps */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Tessa ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[22ch]">
          Built to do the work of a team.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55 max-w-[720px]">
          Tessa scores every customer in your product from 0 to 100, tells each one the next
          thing to do, and shows you the big picture of who is doing well and who is stuck. We
          put Tessa in your business in three steps.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 max-w-[1100px]">
          {[
            {
              n: "Step 1",
              t: "Figure out your business",
              d: "We sit with you and learn your product, your customers, and the one result you want them to reach.",
            },
            {
              n: "Step 2",
              t: "Build the formula",
              d: "We build the version of Tessa that fits your business. What it watches, how it scores, and the next move it gives each customer.",
            },
            {
              n: "Step 3",
              t: "Put it in your business",
              d: "We wire Tessa into your product and the tools you already use. You stay solo. Tessa runs.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/35 mb-3">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
                {s.t}
              </h3>
              <p className="text-[15px] font-light leading-relaxed text-white/55">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case study */}
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
            talk through their goals out loud, like a voice call. Tessa runs behind every one of
            those sessions.
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/55">
            Tessa reads each session. It tracks the habits people keep and the promises they
            make. It gives each user a score from 0 to 100, and it gives them the next small
            step to take.
          </p>
        </div>
        <p className="mt-10 text-[clamp(1.05rem,1.7vw,1.3rem)] font-light leading-relaxed text-white/70 max-w-[760px]">
          Abbelo is live today. Tessa is running inside it, scoring real users. The same system
          we set up for you is the one that runs there.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1100px] mx-auto border-t border-white/[0.06] text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Next ]
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.08] tracking-[-0.03em] text-white/90 max-w-[18ch] mx-auto">
          Let us put Tessa in your business.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[560px] mx-auto">
          Book a call. We will look at your product together and scope what it takes. You see a
          clear price before any work starts.
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
