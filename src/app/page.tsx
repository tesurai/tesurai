// Tesurai company landing page.
// One product: Tessa, set up in your business for you. For solo founders
// building consumer apps and products that real people use.
// Visual system applied here is in the x.ai family: pure black, single
// type weight (normal), hairline borders, mono labels and numerals,
// outline pills with one filled pill per page.
// Copy rules: fifth grade reading level, clear not concise, no dashes anywhere.

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | We put Tessa in your business",
  description:
    "Tesurai is for solo founders building consumer apps and products. We figure out your business, build the formula for Tessa, and put it into your product. You stay solo. Your customers get better results without you having to hire a team.",
  openGraph: {
    title: "Tesurai | We put Tessa in your business",
    description:
      "Tesurai is for solo founders building consumer apps and products. We figure out your business, build the formula for Tessa, and put it into your product. You stay solo. Your customers get better results without you having to hire a team.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | We put Tessa in your business",
    description:
      "Tesurai is for solo founders building consumer apps and products. We figure out your business, build the formula for Tessa, and put it into your product. You stay solo. Your customers get better results without you having to hire a team.",
  },
};

const ArrowRight = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
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
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 sm:px-10 bg-black/60 backdrop-blur-md border-b border-white/[0.10]">
        <span className="text-white font-extralight text-[14px] tracking-[0.32em] uppercase">
          Tesurai
        </span>
        <nav className="flex items-center gap-5 sm:gap-7">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white/25 px-5 py-2 text-[12px] font-normal tracking-[0.1em] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-52 sm:pt-64 pb-24 sm:pb-32 max-w-[1100px] mx-auto">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
          Tesurai
        </p>
        <h1 className="text-[clamp(2.6rem,6.5vw,6rem)] font-normal leading-[1.02] tracking-[-0.04em] text-white max-w-[16ch]">
          We put Tessa in your business.
        </h1>
        <p className="mt-10 text-[clamp(1.05rem,2vw,1.4rem)] font-normal leading-relaxed text-white/65 max-w-[700px]">
          Tesurai is for solo founders building apps and products that real people use. Tessa
          is the AI system that watches every one of your customers and tells each of them the
          next thing to do. It is already running inside Abbelo today. We bring Tessa into your
          product and set the whole thing up for you. You stay solo while your customers get
          better results.
        </p>
        <div className="mt-14">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border border-white/25 px-7 py-4 text-[13px] font-normal tracking-[0.04em] rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a call
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* What we believe */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ What we believe ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white max-w-[20ch]">
          You do not need a big team to build a big business.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-normal leading-relaxed text-white/65 max-w-[720px]">
          The best tools used to belong to big companies with big teams. That is changing fast.
          One founder with the right AI can now do the work of many people. We are here for
          solo founders building consumer apps and products. The ones who want to grow a real
          business without hiring a big team to do it. We bring you the tools you need, and we
          set them up for you, all the way through.
        </p>
      </section>

      {/* Tessa */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Tessa ]
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white max-w-[22ch]">
          Built to do the work of a team.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-normal leading-relaxed text-white/65 max-w-[720px]">
          Tessa gives every one of your customers a score from 0 to 100. The score shows how
          close that customer is to the result they came to your product for. Tessa also tells
          each customer the next thing to do, and shows you the big picture of who is doing
          well and who is stuck. We put Tessa in your business in three steps.
        </p>

        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-3 max-w-[1100px]">
          {[
            {
              n: "01",
              t: "Figure out your business",
              d: "We sit down with you and learn your product. We learn who your customers are and what they came to do. Together we pick the one result you want every customer to reach. That is the thing Tessa will measure them against.",
            },
            {
              n: "02",
              t: "Build the formula",
              d: "We build the version of Tessa that fits your product. We pick what it watches, how it scores each customer, and the kind of next move it gives them. This is the formula that turns your customer data into one clear number from 0 to 100.",
            },
            {
              n: "03",
              t: "Put it in your business",
              d: "We connect Tessa to your product and to the tools you already use. We get it live in your business in about three weeks. You stay solo. Tessa runs every day, scoring every customer and pointing them at their next move.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-white/[0.02] border border-white/[0.10] rounded-lg p-6 sm:p-7 flex flex-col"
            >
              <p className="text-[clamp(2rem,3.5vw,2.75rem)] font-mono font-normal leading-none tracking-[-0.02em] text-white/35 mb-8 tabular-nums">
                {s.n}
              </p>
              <h3 className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-normal tracking-[-0.015em] text-white mb-3">
                {s.t}
              </h3>
              <p className="text-[14.5px] font-normal leading-relaxed text-white/60">{s.d}</p>
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
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white max-w-[18ch]">
          How Abbelo uses Tessa.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[920px]">
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-normal leading-relaxed text-white/65">
            Abbelo is an app that helps people grow into who they want to be. People sign up to
            work on themselves. They talk through their goals out loud, like a voice call with
            a coach. Tessa runs behind every one of those sessions, listening and learning.
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-normal leading-relaxed text-white/65">
            Tessa reads each session. It tracks the habits people keep and the promises they
            make. It gives each user a score from 0 to 100, which shows how much they have
            grown over time. And it gives them the next small step to take, the one thing that
            will move their score up the most.
          </p>
        </div>
        <p className="mt-10 text-[clamp(1.05rem,1.7vw,1.3rem)] font-normal leading-relaxed text-white/75 max-w-[760px]">
          Abbelo is live today. Tessa is running inside it, scoring real users every day. The
          same Tessa we set up for you is the one running there. You can see how it works in a
          real product before we ever touch yours.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="px-6 sm:px-10 py-28 sm:py-40 max-w-[1100px] mx-auto border-t border-white/[0.10] text-center">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Next ]
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] mx-auto">
          Let us put Tessa in your business.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-normal leading-relaxed text-white/60 max-w-[560px] mx-auto">
          Book a call. We will look at your product together and figure out what it takes to
          put Tessa in it. You will see a clear price before any work starts.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-[14px] font-normal tracking-[0.04em] rounded-full hover:bg-white/90 transition-all duration-300"
          >
            Book a call
            <ArrowRight />
          </a>
        </div>
        <p className="mt-5 text-[13px] font-normal text-white/40">
          Or email{" "}
          <a
            href="mailto:hello@tesurai.com"
            className="text-white/60 hover:text-white transition-colors"
          >
            hello@tesurai.com
          </a>
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
              className="text-white/50 hover:text-white text-[14px] font-normal transition-colors"
            >
              hello@tesurai.com
            </a>
          </div>
          <span className="text-white/35 text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
            © 2026 Tesurai
          </span>
        </div>
      </footer>
    </div>
  );
}
