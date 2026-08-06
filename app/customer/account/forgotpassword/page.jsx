"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-md mx-auto px-6">
      <h1 className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase text-center mb-6">
        FORGOT YOUR PASSWORD?
      </h1>

      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-4 mb-6 leading-relaxed">
          If there is an account associated with {email} you will receive an email with a link to reset your password.
        </div>
      )}

      <p className="text-xs text-neutral-500 font-light mb-6 text-center">
        Please enter your email address below to receive a password reset link.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
            EMAIL
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
        >
          RESET MY PASSWORD
        </button>

        <div className="text-center pt-2">
          <Link
            href="/customer/account"
            className="text-xs text-neutral-500 underline underline-offset-4 uppercase"
          >
            Go back
          </Link>
        </div>
      </form>
    </div>
  );
}