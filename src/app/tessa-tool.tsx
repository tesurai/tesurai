"use client";

import { useState } from "react";

type Result = {
  score: number;
  components: { thoughts: number; feelings: number; actions: number };
  identity_statement: string;
  reasoning: string;
  next_step: { label: string; why: string };
};

const COMPONENTS = ["thoughts", "feelings", "actions"] as const;

export default function TessaTool() {
  const [outcome, setOutcome] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const r = await fetch("/api/tessa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ outcome, text }),
      });
      const data = await r.json();
      if (!r.ok) {
        setError(data?.error ?? "Something went wrong.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setResult(null);
    setOutcome("");
    setText("");
    setError(null);
  }

  return (
    <div className="mt-16 rounded-2xl border border-white/[0.12] bg-white/[0.02] p-8 sm:p-10 max-w-[1000px]">
      <div className="flex items-center gap-3 mb-4">
        <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55">
          Try Tessa
        </p>
        <span className="text-[10px] font-light tracking-[0.12em] uppercase text-white/55 border border-white/25 rounded-full px-2.5 py-0.5">
          Free
        </span>
      </div>
      <p className="text-[clamp(1.05rem,1.7vw,1.3rem)] font-light leading-relaxed text-white/80 mb-8">
        Tell Tessa what you are working on. She will give you a score, a sentence about who
        you are becoming, and one thing to do next. No sign up. No email.
      </p>

      {!result ? (
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-3">
              The goal you are working on (one sentence)
            </label>
            <input
              type="text"
              required
              maxLength={280}
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
              placeholder="I want to be the kind of person who..."
              className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 text-[15px] font-light text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-3">
              What is going on for you right now
            </label>
            <textarea
              required
              minLength={40}
              maxLength={2400}
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a short paragraph. Tell Tessa what you are thinking, how you are feeling, and what you are actually doing."
              className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 text-[15px] font-light text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none transition-colors resize-none"
            />
          </div>

          {error && (
            <p className="text-[14px] font-light text-white/70 border border-white/15 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={loading || !outcome || text.length < 40}
              className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] rounded-full hover:bg-white/85 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Reading..." : "Read me"}
            </button>
            <p className="text-[13px] font-light text-white/35">
              Free. No sign up. No email.
            </p>
          </div>
        </form>
      ) : (
        <div>
          <div className="grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-12 items-start">
            <div className="flex flex-col items-start">
              <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/45 mb-2">
                Your score
              </p>
              <p className="text-[clamp(4rem,9vw,7rem)] font-extralight leading-none text-white tabular-nums">
                {result.score}
              </p>
              <p className="text-[12px] font-light text-white/35 mt-1">out of 100</p>
            </div>

            <div className="space-y-4 w-full">
              {COMPONENTS.map((k) => {
                const v = result.components[k];
                return (
                  <div key={k}>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[12px] font-mono tracking-[0.14em] uppercase text-white/55">
                        {k}
                      </span>
                      <span className="text-[12px] font-mono text-white/55 tabular-nums">
                        {v}
                      </span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white" style={{ width: `${v}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/45 mb-2">
                Who you are becoming
              </p>
              <p className="text-[clamp(1.05rem,1.7vw,1.3rem)] font-light leading-relaxed text-white/85">
                {result.identity_statement}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/45 mb-2">
                What Tessa sees
              </p>
              <p className="text-[15px] font-light leading-relaxed text-white/65">
                {result.reasoning}
              </p>
            </div>
            <div className="border-t border-white/[0.08] pt-6">
              <p className="text-[12px] font-mono tracking-[0.16em] uppercase text-white/55 mb-2">
                Do this next
              </p>
              <p className="text-[clamp(1.05rem,1.6vw,1.2rem)] font-light leading-relaxed text-white/85 mb-2">
                {result.next_step.label}
              </p>
              <p className="text-[14px] font-light leading-relaxed text-white/55">
                {result.next_step.why}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 text-white/70 border border-white/20 px-6 py-3 text-[13px] font-light tracking-[0.04em] rounded-full hover:text-white hover:border-white/40 transition-all duration-300"
            >
              Try another one
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
