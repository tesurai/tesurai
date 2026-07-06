// Shared layout for the four per product pages (/shiloh, /tessa, /voice,
// /senna). Same Grok style black and white system as the landing page: frame
// rails, mono labels, the product's line art in a square frame, and links to
// the other products.

import { LINE, Wordmark, PillLink, SectionLabel } from "./ui";
import { PRODUCTS } from "./products";
import { ProductArt } from "./product-art";

export function ProductPage({ id }: { id: string }) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return null;
  const others = PRODUCTS.filter((x) => x.id !== id);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white antialiased"
      style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif" }}
    >
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

      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} pt-16`}>
          <div className="grid lg:grid-cols-2">
            <div className={`px-6 sm:px-10 py-16 sm:py-24 lg:border-r ${LINE} flex flex-col justify-center`}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45 tabular-nums">
                {p.n} · {p.name}
              </p>
              <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                {p.title}
              </h1>
              <p className="mt-6 text-[clamp(1rem,1.3vw,1.25rem)] font-medium text-white/85">
                {p.tagline}
              </p>
              {p.body.map((line) => (
                <p
                  key={line.slice(0, 24)}
                  className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white/55"
                >
                  {line}
                </p>
              ))}
              <div className="mt-9">
                <PillLink href="/book" filled>
                  Book a call
                </PillLink>
              </div>
            </div>
            <div className="px-6 sm:px-10 py-16 sm:py-24 flex items-center">
              <div className={`w-full border ${LINE} p-8 sm:p-10 h-[300px] sm:h-[400px] text-white/40`}>
                <ProductArt id={p.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* the other products */}
      <section className={`border-b ${LINE}`}>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE}`}>
          <div className="px-6 sm:px-10 pt-16 pb-8">
            <SectionLabel>The rest of the suite</SectionLabel>
          </div>
          <div className="grid sm:grid-cols-3">
            {others.map((o, i) => (
              <a
                key={o.id}
                href={`/${o.id}`}
                className={`group px-6 sm:px-10 py-10 border-t ${LINE} sm:border-t-0 ${
                  i > 0 ? `sm:border-l ${LINE}` : ""
                } hover:bg-white/[0.02] transition-colors`}
              >
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 tabular-nums">
                  {o.n}
                </p>
                <h3 className="mt-3 text-[19px] font-medium">{o.name}</h3>
                <p className="mt-1.5 text-[14px] text-white/50">{o.title}</p>
                <span className="mt-4 inline-block font-mono text-[11px] tracking-[0.16em] uppercase text-white/40 group-hover:text-white transition-colors">
                  Open ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className={`max-w-[1240px] mx-auto border-x ${LINE} px-6 sm:px-10 py-10 flex items-center justify-between`}>
          <Wordmark className="h-4 w-auto" />
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/40 tabular-nums">
            © 2026 Tesurai LLC
          </span>
        </div>
      </footer>
    </div>
  );
}
