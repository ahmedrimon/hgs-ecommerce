import { NextResponse } from "next/server";
import Stripe from "stripe";


export async function POST(req) {

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

  if (!process.env.STRIPE_SECRET_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing API Key" }),
      { status: 500 }
    );
  }

  try {
    const { amount } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert to cents
      currency: "eur",
      payment_method_types: ["card"], // Apple Pay automatically works via Stripe Payment Request
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}