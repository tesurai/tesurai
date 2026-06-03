// API route for the free Tessa demo.
//
// One shot scoring: the visitor sends an outcome (one sentence) and a paragraph
// about what is going on for them. We call the Tessa judge prompt with the
// recipe's exact equation (Thoughts and Actions are the drive, Feelings is the
// multiplier), then we recompute the score in code so the math lives in one
// place and never drifts.
//
// What we do not do here: any persistence, any background jobs, any promise
// ledger. The recipe accounts for that: when there is no ledger yet, Actions
// gets estimated from the text, conservatively.
//
// Cost protection: a soft per IP rate limit lives in memory. It survives the
// lambda warm window only. For a hard limit, swap in Vercel KV or Upstash
// Redis. The "rate" map is the obvious place to do that.

import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_OUTCOME = 280;
const MAX_TEXT = 2400;
const MIN_TEXT = 40;

const rate = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 10;

function rateOk(ip: string): boolean {
  const now = Date.now();
  const cur = rate.get(ip);
  if (!cur || cur.reset < now) {
    rate.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (cur.count >= LIMIT) return false;
  cur.count += 1;
  return true;
}

function clamp(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(100, Math.round(n)));
}

function computeScore(t: number, f: number, a: number): number {
  const drive = (t + a) / 2;
  const factor = 0.5 + f / 100;
  return clamp(Math.round(drive * factor));
}

const SYSTEM_PROMPT = `You are Tessa, reading what a person wrote about who they want to become and what is going on for them now. Your job is to measure how close they are to becoming that person, and to give them one thing to do next.

THE EQUATION: Thought to Feeling to Action to Result. A clear plan (THOUGHTS) and real reps (ACTIONS) are the drive. FEELINGS, how much they believe and feel it, is the MULTIPLIER that decides how much of the drive becomes a result. Score each from 0 to 100 from what they wrote here.

THOUGHTS (0 to 100). Clarity of who they need to become and the next step.
FEELINGS (0 to 100). Do they trust the path AND believe they can live it. Read it honestly. Quiet doubt and real conviction are not the same number.
ACTIONS (0 to 100). What they are actually doing. The reps. There is no behavior ledger here yet, so estimate from what they wrote, conservatively, until they have a track record.

This is their first read with you. Pick from signal density. 10 for almost nothing. 40 for a solid baseline. 70 only if they are already deep in the work.

OUTPUT, strict JSON only, no prose or markdown around it:
{
  "components": { "thoughts": <int 0..100>, "feelings": <int 0..100>, "actions": <int 0..100> },
  "identity_statement": "<one sentence, 'you are someone who ...', grounded in what they wrote. Plain language. No dashes.>",
  "reasoning": "<one short paragraph, second person 'you', plain language. No dashes.>",
  "next_step": { "label": "<one move they can do this week>", "why": "<one sentence on why this is the right move now>" }
}

EXTRACTIVE ONLY. Every claim must be grounded in what they wrote. Do not invent. Honest empty beats made up content. No dashes anywhere in your output.`;

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "Tessa is not set up here yet. The site owner needs to add an API key. Try again soon.",
      },
      { status: 503 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateOk(ip)) {
    return Response.json(
      { error: "Take a breath. You have used your free reads for now. Try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "We could not read that. Try again." }, { status: 400 });
  }

  const outcome = String((body as { outcome?: unknown })?.outcome ?? "").trim();
  const text = String((body as { text?: unknown })?.text ?? "").trim();

  if (!outcome || outcome.length > MAX_OUTCOME) {
    return Response.json(
      { error: "Write one short sentence about the goal you are working on." },
      { status: 400 },
    );
  }
  if (text.length < MIN_TEXT || text.length > MAX_TEXT) {
    return Response.json(
      { error: "Write a short paragraph about what is going on for you right now." },
      { status: 400 },
    );
  }

  const userMessage = `THE OUTCOME: "${outcome}"\n\nWHAT THEY WROTE:\n${text}`;

  try {
    const client = new Anthropic({ apiKey });
    const resp = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 800,
      temperature: 0.3,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const block = resp.content.find((b) => b.type === "text");
    if (!block || block.type !== "text") {
      return Response.json({ error: "Tessa went quiet. Try again." }, { status: 502 });
    }

    const raw = block.text.trim();
    const cleaned = raw.startsWith("```")
      ? raw.replace(/^```[a-z]*\s*/i, "").replace(/```\s*$/, "")
      : raw;

    let parsed: {
      components?: { thoughts?: unknown; feelings?: unknown; actions?: unknown };
      identity_statement?: unknown;
      reasoning?: unknown;
      next_step?: { label?: unknown; why?: unknown };
    };
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      return Response.json(
        { error: "Tessa wrote something we could not read. Try again." },
        { status: 502 },
      );
    }

    const t = clamp(Number(parsed?.components?.thoughts));
    const f = clamp(Number(parsed?.components?.feelings));
    const a = clamp(Number(parsed?.components?.actions));
    const score = computeScore(t, f, a);

    return Response.json({
      score,
      components: { thoughts: t, feelings: f, actions: a },
      identity_statement: String(parsed?.identity_statement ?? "").slice(0, 400),
      reasoning: String(parsed?.reasoning ?? "").slice(0, 1200),
      next_step: {
        label: String(parsed?.next_step?.label ?? "").slice(0, 200),
        why: String(parsed?.next_step?.why ?? "").slice(0, 300),
      },
    });
  } catch (err) {
    console.error("tessa route error:", err);
    return Response.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
