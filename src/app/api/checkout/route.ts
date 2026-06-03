// Stripe Checkout Session for the $2,500 Founding Customer one time fee.
// Uses STRIPE_SECRET_KEY from Vercel environment variables. The key never
// appears in the client bundle; this route runs server side only.
//
// Flow: client clicks "Pay $2,500 now" -> POST to this route -> we create a
// Checkout Session with the price baked in -> we return the hosted Stripe
// URL -> client redirects there. Stripe handles the card form, the receipt,
// and the success / cancel redirects back to /thanks or /.

import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRICE_USD_CENTS = 250000;
const PRODUCT_NAME = "Tessa Founding Customer";
const PRODUCT_DESCRIPTION =
  "One time fee. One week to live in your consumer product.";

export async function POST(req: Request) {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "Payment is not set up yet. The site owner needs to add the Stripe key. Try again soon.",
      },
      { status: 503 },
    );
  }

  const stripe = new Stripe(apiKey);

  // Build success and cancel URLs from the request origin so this works in
  // local dev, preview deploys, and production without any extra config.
  const origin =
    req.headers.get("origin") ||
    `https://${req.headers.get("host") ?? "tesurai.com"}`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: PRODUCT_NAME,
              description: PRODUCT_DESCRIPTION,
            },
            unit_amount: PRICE_USD_CENTS,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      billing_address_collection: "auto",
      metadata: {
        product: "tessa-founding-customer",
        price_usd: "2500",
      },
    });

    if (!session.url) {
      return Response.json(
        { error: "Could not start payment. Try again." },
        { status: 500 },
      );
    }

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return Response.json(
      { error: "Could not start payment. Try again." },
      { status: 500 },
    );
  }
}
