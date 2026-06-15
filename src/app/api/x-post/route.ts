// Daily X (Twitter) poster. A Vercel cron (see vercel.json) hits this once a
// day; it posts the next item from the reviewed queue in posts.ts, in order.
//
// Stateless by design: which post goes out is derived from the calendar date,
// so no database is needed. START_UTC is day 0 of the queue; each calendar day
// after it advances to the next post. When the queue runs out, it posts nothing
// and reports that it is empty.
//
// Required env vars (set in Vercel, never in the repo):
//   CRON_SECRET            any random string. Vercel sends it automatically on
//                          cron runs; the route rejects callers without it.
//   X_API_KEY              X app API key (consumer key)
//   X_API_SECRET           X app API secret (consumer secret)
//   X_ACCESS_TOKEN         access token for the @gettesurai account
//   X_ACCESS_TOKEN_SECRET  access token secret
// The X app must have Read and Write permission.
import { NextResponse } from "next/server";
import { TwitterApi } from "twitter-api-v2";
import { X_POSTS } from "./posts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Day 0 of the queue (UTC). The first post goes out on this date. Move this to
// your chosen go-live day so post #1 lands when you want it to.
const START_UTC = Date.UTC(2026, 5, 16); // 2026-06-16 (month is 0-indexed)

function dayIndex(): number {
  const now = new Date();
  const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((todayUTC - START_UTC) / 86_400_000);
}

export async function GET(req: Request) {
  // Only allow callers that present the cron secret (Vercel cron does this for
  // us). This keeps the public from triggering posts to the brand account.
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.X_API_KEY;
  const apiSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_TOKEN_SECRET;
  if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
    return NextResponse.json(
      { ok: false, error: "X API credentials are not set in this environment yet." },
      { status: 503 },
    );
  }

  const index = dayIndex();
  if (index < 0) {
    return NextResponse.json({ ok: true, skipped: "Queue has not started yet.", index });
  }
  if (index >= X_POSTS.length) {
    return NextResponse.json({
      ok: true,
      skipped: "Queue is empty. Add more posts to keep it going.",
      index,
      total: X_POSTS.length,
    });
  }

  const text = X_POSTS[index];

  try {
    const client = new TwitterApi({
      appKey: apiKey,
      appSecret: apiSecret,
      accessToken,
      accessSecret,
    });
    const res = await client.v2.tweet(text);
    return NextResponse.json({ ok: true, index, id: res.data?.id, text });
  } catch (err) {
    console.error("X post error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not post to X.", detail: String(err) },
      { status: 502 },
    );
  }
}
