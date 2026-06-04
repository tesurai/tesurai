import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks | Tesurai",
  description:
    "Payment received. We will reach out within two business days to schedule your kickoff call.",
};

function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-white.svg" alt="Tesurai" className={className} />
  );
}

export default function ThanksPage() {
  return (
    <div
      className="min-h-screen bg-black text-white antialiased flex flex-col"
      style={{
        fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 sm:px-10 bg-black/60 backdrop-blur-md border-b border-white/[0.10]">
        <Link href="/" aria-label="Tesurai">
          <Wordmark className="h-3 w-auto" />
        </Link>
      </header>

      <main className="flex-1 flex items-center px-6 sm:px-10 pt-44 sm:pt-52 pb-28 max-w-[1200px] mx-auto w-full">
        <div className="text-center mx-auto w-full">
          <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-8">
            [ Payment received ]
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch] mx-auto">
            We will reach out within two business days
          </h1>
          <div className="mt-10 space-y-5 text-[clamp(1.05rem,1.45vw,1.25rem)] font-normal leading-[1.55] text-white/65 max-w-[640px] mx-auto">
            <p>
              Your card has been charged $2,500. A receipt is on the way to your email from
              Stripe.
            </p>
            <p>
              Within two business days, we will email you to schedule your kickoff call. On
              that call we will learn your product and pick the one result you want every
              user to reach.
            </p>
            <p>
              About one week from the kickoff, Tessa goes live inside your product.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white border border-white/25 px-7 py-4 text-[13px] font-normal tracking-[0.04em] rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Back to home
            </Link>
            <a
              href="mailto:hello@tesurai.com"
              className="text-[13px] font-normal text-white/55 hover:text-white transition-colors"
            >
              Questions? hello@tesurai.com
            </a>
          </div>
        </div>
      </main>

      <footer className="px-6 sm:px-10 py-14 border-t border-white/[0.10]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Wordmark className="h-3 w-auto" />
          <a
            href="mailto:hello@tesurai.com"
            className="text-white/50 hover:text-white text-[14px] font-normal transition-colors"
          >
            hello@tesurai.com
          </a>
          <span className="text-white/35 text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
            © 2026 Tesurai
          </span>
        </div>
      </footer>
    </div>
  );
}
