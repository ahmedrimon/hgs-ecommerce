"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cartSubtotal } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!agreed) return alert("Please accept Terms & Conditions.");
    if (!stripe || !elements) return;

    setLoading(true);

    // Call your backend API endpoint to create a Stripe PaymentIntent
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: cartSubtotal * 100 }),
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Payment Successful!");
      window.location.href = "/checkout/success";
    }
  };

  return (
    <form onSubmit={handlePayment} className="space-y-6">
      <div className="border p-4 space-y-4">
        <label className="flex items-center gap-3 cursor-pointer text-xs uppercase tracking-wider font-serif">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedMethod === "card"}
            onChange={() => setSelectedMethod("card")}
          />
          CARDS
        </label>

        {selectedMethod === "card" && (
          <div className="pt-4 space-y-4 border-t font-sans text-xs">
            <div>
              <label className="block text-neutral-500 mb-1">Card Number</label>
              <div className="border p-2.5 bg-white">
                <CardNumberElement className="w-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-500 mb-1">Expiry Date</label>
                <div className="border p-2.5 bg-white">
                  <CardExpiryElement className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-neutral-500 mb-1">Security Code (CVC)</label>
                <div className="border p-2.5 bg-white">
                  <CardCvcElement className="w-full" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs font-sans">
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="terms" className="uppercase tracking-wider">
          I agree to the terms & conditions
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full py-4 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : "PLACE ORDER"}
      </button>
    </form>
  );
}

export default function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen bg-white font-serif pt-28 pb-20 px-6 max-w-xl mx-auto">
        <h1 className="text-xl tracking-[0.25em] font-light uppercase text-center mb-8">
          PAYMENT METHOD
        </h1>
        <CheckoutForm />
      </div>
    </Elements>
  );
}