// Tesurai company landing page.
// Tesurai sells one thing: putting Tessa in your product so more of your
// customers get the result they came for. For founders building consumer
// apps and products that real people use.
// Visual system in the x.ai family. Pure black. Lighter type. Hairline
// borders. Mono labels and numerals. Outline pills with one filled pill
// per page on the closing CTA.
// Copy rules: fifth grade reading level, clear not concise, no dashes
// anywhere. No language that frames Tessa as a team replacement.

const CAL_LINK = "https://cal.com/tesurai";

export const metadata = {
  title: "Tesurai | Make every customer win",
  description:
    "Tesurai puts Tessa in your product so each customer gets the next move they need to win. When more customers win, more of them stay and your business compounds. The same Tessa runs inside Abbelo today, helping real people grow.",
  openGraph: {
    title: "Tesurai | Make every customer win",
    description:
      "Tesurai puts Tessa in your product so each customer gets the next move they need to win. When more customers win, more of them stay and your business compounds. The same Tessa runs inside Abbelo today, helping real people grow.",
    siteName: "Tesurai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesurai | Make every customer win",
    description:
      "Tesurai puts Tessa in your product so each customer gets the next move they need to win. When more customers win, more of them stay and your business compounds. The same Tessa runs inside Abbelo today, helping real people grow.",
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
        <h1 className="text-[clamp(2.4rem,5.5vw,5rem)] font-extralight leading-[1.05] tracking-[-0.025em] text-white max-w-[18ch]">
          Make every customer win.
        </h1>
        <p className="mt-10 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[640px]">
          People sign up for your product wanting something. Most quit before they get there.
          Tesurai puts Tessa in your product so each customer gets the next move they need to
          win. When more customers win, your business compounds. The same Tessa runs inside
          Abbelo today, helping real people grow.
        </p>
        <div className="mt-12">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border border-white/25 px-7 py-4 text-[13px] font-light tracking-[0.04em] rounded-full hover:bg-white hover:text-black transition-all duration-300"
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
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          Customers do not churn. They quit.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          Churn is a polite word for what really happens. A real person signed up for your
          product because they wanted something. They could not get to it. They walked away.
          We believe the way to grow is not to chase more sign ups. The way to grow is to help
          the customers you already have actually get there. Then they stay. Then they tell
          their friends. That is when a consumer business starts to compound.
        </p>
      </section>

      {/* Tessa */}
      <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.10]">
        <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
          [ Tessa ]
        </p>
        <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[22ch]">
          How Tessa helps each customer succeed.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65 max-w-[720px]">
          Tessa watches every one of your customers as they use your product. It gives each
          customer a score from 0 to 100, showing how close they are to the result they came
          for. Then it tells them the next thing to do, the one small step that will move their
          score up the most. And it shows you the big picture, so you can see which customers
          are doing well and which ones need help. We put Tessa in your product in three steps.
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
              t: "Put it in your product",
              d: "We connect Tessa to your product and to the tools you already use. We get it live in about three weeks. From then on, Tessa runs every day. It scores every customer and gives each one the next move that gets them closer to the result they came for.",
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
          How Abbelo uses Tessa.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[920px]">
          <p className="text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65">
            Abbelo is an app that helps people grow into who they want to be. People sign up to
            work on themselves. They talk through their goals out loud, like a voice call with
            a coach. Tessa runs behind every one of those sessions, listening and learning.
          </p>
          <p className="text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/65">
            Tessa reads each session. It tracks the habits people keep and the promises they
            make. It gives each user a score from 0 to 100, which shows how much they have
            grown over time. And it gives them the next small step to take, the one thing that
            will move their score up the most.
          </p>
        </div>
        <p className="mt-10 text-[clamp(1.05rem,1.65vw,1.25rem)] font-light leading-relaxed text-white/75 max-w-[760px]">
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
        <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white max-w-[20ch] mx-auto">
          More wins. More growth.
        </h2>
        <p className="mt-8 text-[clamp(1rem,1.55vw,1.2rem)] font-light leading-relaxed text-white/60 max-w-[560px] mx-auto">
          Book a call. We will look at your product together and figure out what it takes to
          get more customers to win. You will see a clear price before any work starts.
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
        <p className="mt-5 text-[13px] font-light text-white/40">
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
              className="text-white/50 hover:text-white text-[14px] font-light transition-colors"
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
