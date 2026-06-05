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

      <footer className="px-6 sm:px-10 py-16 border-t border-white/[0.10]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-12 sm:gap-y-10 gap-x-12">
            <div>
              <Wordmark className="h-3 w-auto" />
            </div>

            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-5">
                Products
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/#tessa"
                    className="text-[14px] font-normal text-white/70 hover:text-white transition-colors"
                  >
                    Tessa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-5">
                Contact
              </p>
              <a
                href="mailto:hello@tesurai.com"
                className="text-[14px] font-normal text-white/70 hover:text-white transition-colors"
              >
                hello@tesurai.com
              </a>
            </div>

            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/40 mb-5">
                Connect
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://x.com/gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@gettesurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <span className="text-white/35 text-[12px] font-mono tracking-[0.12em] uppercase tabular-nums">
              © 2026 Tesurai LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
