// Booking page: the Cal.com calendar on its own page, in the same Grok style
// black and white system as the landing page. Frame rails, bracketed mono
// label, medium weight headline, dark Cal embed below a full width rule.

import CalEmbed from "../cal-embed";

const LINE = "border-white/[0.08]";

export const metadata = {
  title: "Tesurai | Book a call",
  description:
    "Book a call with Tesurai. Pick a time and tell us which software you want to learn more about.",
};

function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-white.svg" alt="Tesurai" className={className} />
  );
}

export default function BookPage() {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
      {/* Nav: wordmark home link and a back link. */}
      <header className={`fixed top-0 inset-x-0 z-50 border-b ${LINE} bg-[#0a0a0a]/70 backdrop-blur-xl`}>
        <div className={`max-w-[1240px] mx-auto h-16 border-x ${LINE} px-6 flex items-center justify-between`}>
          <a href="/" aria-label="Tesurai home">
            <Wordmark className="h-3 w-auto" />
          </a>
          <a
            href="/"
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors"
          >
            ← Home
          </a>
        </div>
      </header>

      {/* Booking: label, headline, and the dark calendar below a rule. */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} min-h-svh flex flex-col pt-16`}>
          <div className="px-6 sm:px-10 pt-14 sm:pt-20 pb-10 sm:pb-14">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">
              [ Get started ]
            </p>
            <h1 className="mt-7 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
              Book a call
            </h1>
          </div>

          <div className={`border-t ${LINE} p-4 sm:p-10 flex-1`}>
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <footer>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 py-8`}>
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/45 tabular-nums">
            © 2026 Tesurai LLC
          </span>
        </div>
      </footer>
    </div>
  );
}
