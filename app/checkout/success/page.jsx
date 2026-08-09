"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    if (clearCart) {
      clearCart();
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-32 pb-20 text-center font-serif px-6">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-xl">
          ✓
        </div>
        <h1 className="text-2xl tracking-[0.25em] uppercase font-light">
          THANK YOU FOR YOUR ORDER
        </h1>
        <p className="text-xs font-sans text-neutral-600 leading-relaxed">
          Your payment was processed successfully. We have received your order and are preparing it for shipment.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="px-8 py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors inline-block font-sans"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </main>
  );
}