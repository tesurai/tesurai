// Drop into src/app/page.tsx after the "Where Tessa lives today" section,
// before the "Beyond Abbelo" grid. Delete this file once integrated.

export default function WiringTessaSection() {
  return (
    <section className="px-6 sm:px-10 py-24 sm:py-32 max-w-[1100px] mx-auto border-t border-white/[0.06]">
      <p className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/35 mb-6">
        [ Wiring Tessa ]
      </p>
      <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-white/90 max-w-[20ch]">
        Four steps from gut to score.
      </h2>
      <p className="mt-8 text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/50 max-w-[640px]">
        Tessa doesn’t replace the work — she names what to measure, watches it move, and tells you the next thing to do.
      </p>

      <div className="mt-16 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px]">
        <div>
          <p className="text-[13px] font-mono tracking-[0.12em] text-white/30 mb-4 tabular-nums">01</p>
          <h3 className="text-[clamp(1rem,1.3vw,1.15rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
            Name the subject.
          </h3>
          <p className="text-[14px] font-light leading-relaxed text-white/50">
            Person, company, creator, team — whatever you want to see becoming.
          </p>
        </div>
        <div>
          <p className="text-[13px] font-mono tracking-[0.12em] text-white/30 mb-4 tabular-nums">02</p>
          <h3 className="text-[clamp(1rem,1.3vw,1.15rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
            Connect the signal.
          </h3>
          <p className="text-[14px] font-light leading-relaxed text-white/50">
            Voice sessions, dashboards, posts, commitments — whatever the subject actually does.
          </p>
        </div>
        <div>
          <p className="text-[13px] font-mono tracking-[0.12em] text-white/30 mb-4 tabular-nums">03</p>
          <h3 className="text-[clamp(1rem,1.3vw,1.15rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
            Tessa fits the model.
          </h3>
          <p className="text-[14px] font-light leading-relaxed text-white/50">
            She finds the few signals that actually predict the outcome and turns them into one score.
          </p>
        </div>
        <div>
          <p className="text-[13px] font-mono tracking-[0.12em] text-white/30 mb-4 tabular-nums">04</p>
          <h3 className="text-[clamp(1rem,1.3vw,1.15rem)] font-light tracking-[-0.01em] text-white/90 mb-3">
            You get the move.
          </h3>
          <p className="text-[14px] font-light leading-relaxed text-white/50">
            A score you can move, a 90-day forecast, and the one move that moves it most.
          </p>
        </div>
      </div>
    </section>
  );
}
