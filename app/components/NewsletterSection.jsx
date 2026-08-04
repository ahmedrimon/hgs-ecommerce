"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full min-h-[500px] flex items-center bg-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1920&q=80"
          alt="Maison Atmosphere"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Soft dark overlay on the left to ensure legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16">
        <div className="max-w-md text-white space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium uppercase">
              Follow Us
            </h2>
            <p className="font-serif text-xs md:text-sm tracking-wide text-neutral-300 font-light leading-relaxed">
              Subscribe to our newsletter <br className="hidden sm:inline" />
              and don't miss out the latest news from Maison Trudon
            </p>
          </div>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubmit} className="pt-2 space-y-4">
            <div className="relative flex items-center border-b border-white/70 focus-within:border-white transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-transparent py-3 pr-10 text-xs tracking-wider text-white placeholder-neutral-400 focus:outline-none font-serif"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 p-1 text-white/80 hover:text-white transition-colors"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Privacy Legal Note */}
            <p className="font-serif text-[10px] text-neutral-300 leading-normal font-light tracking-wide">
              By signing up, you agree to comply with Trudon's{" "}
              <a href="/privacy" className="underline hover:text-white transition-colors">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline hover:text-white transition-colors">
                Terms of Use
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}