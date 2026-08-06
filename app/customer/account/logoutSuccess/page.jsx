"use client";

import Link from "next/link";

export default function LogoutSuccessPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-32 text-center px-6">
      <h1 className="text-2xl tracking-[0.35em] font-light uppercase mb-4">
        YOU ARE SIGNED OUT
      </h1>
      <p className="text-xs text-neutral-500 mb-8">
        You have signed out and will go to our homepage.
      </p>

      <Link
        href="/"
        className="inline-block px-8 py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
}