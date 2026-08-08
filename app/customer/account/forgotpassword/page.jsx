"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleResetRequest = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrorMessage("");
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/customer/account/updatepassword`,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
      setMessage("Check your email for the password reset link!");
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-md mx-auto px-6">
      <h1 className="text-xl tracking-[0.25em] font-light uppercase text-center mb-8">
        FORGOT YOUR PASSWORD?
      </h1>

      <p className="text-xs text-neutral-500 mb-6 font-sans leading-relaxed text-center">
        Please enter your email address below. You will receive a link to reset your password.
      </p>

      {message && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3 mb-6">
          {message}
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-800 text-xs p-3 mb-6">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleResetRequest} className="space-y-4">
        <div>
          <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@trudon.com"
            className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {loading ? "SENDING..." : "RESET MY PASSWORD"}
        </button>

        <div className="text-center pt-4">
          <Link
            href="/"
            className="text-xs text-neutral-500 underline underline-offset-4 hover:text-black uppercase tracking-wider"
          >
            Cancel and Return
          </Link>
        </div>
      </form>
    </div>
  );
}