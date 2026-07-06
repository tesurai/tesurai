import { NextResponse } from "next/server";

// Generates the Voice section demo audio with the Gemini text to speech API and
// returns it as a WAV. The result is cached in the lambda so repeat plays do not
// re-bill. Needs GEMINI_API_KEY set in the environment; without it the client
// falls back to a silent animated waveform.

export const runtime = "nodejs";

const TEXT =
  "Hey, you have hit your goal three days in a row. Want to push for five?";
const MODEL = "gemini-2.5-flash-preview-tts";
const VOICE = "Aoede";

let cache: Uint8Array | null = null;

function pcmToWav(pcm: Uint8Array, rate: number, channels: number, bits: number) {
  const blockAlign = (channels * bits) / 8;
  const byteRate = rate * blockAlign;
  const header = new ArrayBuffer(44);
  const v = new DataView(header);
  const w = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i));
  };
  w(0, "RIFF");
  v.setUint32(4, 36 + pcm.length, true);
  w(8, "WAVE");
  w(12, "fmt ");
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, channels, true);
  v.setUint32(24, rate, true);
  v.setUint32(28, byteRate, true);
  v.setUint16(32, blockAlign, true);
  v.setUint16(34, bits, true);
  w(36, "data");
  v.setUint32(40, pcm.length, true);
  const out = new Uint8Array(44 + pcm.length);
  out.set(new Uint8Array(header), 0);
  out.set(pcm, 44);
  return out;
}

function wav(body: Uint8Array) {
  // Copy into a fresh ArrayBuffer so the body type is an unambiguous BodyInit.
  const ab = new ArrayBuffer(body.byteLength);
  new Uint8Array(ab).set(body);
  return new NextResponse(ab, {
    headers: {
      "Content-Type": "audio/wav",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}

export async function GET() {
  if (cache) return wav(cache);

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return new NextResponse("Voice demo not configured", { status: 503 });
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Say warmly and naturally: ${TEXT}` }] }],
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } },
            },
          },
        }),
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return new NextResponse("Text to speech request failed", { status: 502 });
    }

    const data = await res.json();
    const parts = data?.candidates?.[0]?.content?.parts ?? [];
    const inline = parts.find(
      (p: { inlineData?: { data?: string } }) => p?.inlineData?.data,
    );
    const b64: string | undefined = inline?.inlineData?.data;
    if (!b64) return new NextResponse("No audio returned", { status: 502 });

    const pcm = Uint8Array.from(Buffer.from(b64, "base64"));
    const out = pcmToWav(pcm, 24000, 1, 16);
    cache = out;
    return wav(out);
  } catch {
    return new NextResponse("Text to speech error", { status: 502 });
  }
}
