"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const HEADER_BG_IMAGE =
  "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=2000&auto=format&fit=crop";

const PERFUMES_DATA = [
  {
    id: "carmen-100ml",
    name: "CARMEN",
    notes: "Bergamot, Tobacco, Leather",
    size: "100ml",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60",
    badge: "ICONS",
    hasOtherSizes: true,
  },
  {
    id: "carmen-15ml",
    name: "CARMEN (15ML)",
    notes: "Bergamot, Tobacco, Leather",
    size: "15ml",
    price: 42.0,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60",
    badge: "ICONS",
    hasOtherSizes: true,
  },
  {
    id: "45-100ml",
    name: "45°",
    notes: "Honey accord, Vanilla Absolute and Benzoin",
    size: "100ml",
    price: 250.0,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=60",
    badge: "ICONS",
    hasOtherSizes: true,
  },
  {
    id: "45-15ml",
    name: "45° (15ML)",
    notes: "Honey accord, Vanilla Absolute and Benzoin",
    size: "15ml",
    price: 50.0,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&auto=format&fit=crop&q=60",
    badge: "ICONS",
    hasOtherSizes: true,
  },
  {
    id: "midnight-omen-100ml",
    name: "MIDNIGHT OMEN",
    notes: "Mandarin, Violet and Amber Woods",
    size: "100ml",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60",
    badge: "ICONS",
    hasOtherSizes: true,
  },
  {
    id: "mystique-100ml",
    name: "MYSTIQUE",
    notes: "Leather, Oud and Papyrus",
    size: "100ml",
    price: 250.0,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=60",
    badge: "ICONS",
    hasOtherSizes: true,
  },
];

function SafeProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group relative flex flex-col justify-between border-b border-r border-neutral-200 p-6 transition-all bg-white hover:shadow-sm">
      <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-serif text-neutral-500 mb-4">
        <span>{product?.badge || "ICONS"}</span>
        <button aria-label="Add to wishlist" className="hover:text-black transition-colors">
          ♡
        </button>
      </div>

      <div className="relative w-full aspect-square flex items-center justify-center my-4 overflow-hidden bg-neutral-50 rounded-sm">
        <img
          src={product?.image}
          alt={product?.name || "Product"}
          className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
        />

        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 right-3 bg-white p-3 rounded-full shadow-md border border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-900 hover:text-white"
          title="Add to Cart"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 space-y-1.5 font-serif">
        <h3 className="text-xs tracking-[0.2em] font-medium uppercase text-neutral-900">
          {product?.name}
        </h3>
        <p className="text-[11px] text-neutral-500 italic font-sans">
          {product?.notes}
        </p>

        <div className="flex justify-between items-end pt-4 border-t border-neutral-100 mt-3 font-sans text-xs text-neutral-800">
          <div>
            <span>{product?.size}</span>
            <span className="mx-2">|</span>
            <span>€{product?.price ? product.price.toFixed(2) : "0.00"}</span>
          </div>

          {product?.hasOtherSizes && (
            <span className="text-[10px] text-neutral-400 font-serif uppercase tracking-widest">
              +1 size
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EauxDeParfumPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger background and color transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* 1. Hero Header Container */}
      <div className="relative h-[380px] md:h-[450px] w-full overflow-hidden flex items-end justify-center pb-16 bg-neutral-900">
        <img
          src={HEADER_BG_IMAGE}
          alt="The Eaux De Parfum Header"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />
        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white space-y-2 px-4">
          <h1 className="font-serif text-2xl md:text-4xl tracking-[0.35em] font-light uppercase">
            THE EAUX DE PARFUM
          </h1>
        </div>
      </div>

      {/* 2. Sticky Sub-navigation Bar */}
      <div
        className={`sticky top-16 z-30 w-full border-b border-neutral-200 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center text-xs font-serif uppercase tracking-widest">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-1 transition-all ${
                activeTab === "all"
                  ? "border-b-2 border-black font-medium text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Eaux de Parfum
            </button>
            <button
              onClick={() => setActiveTab("travel")}
              className={`pb-1 transition-all ${
                activeTab === "travel"
                  ? "border-b-2 border-black font-medium text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Travel sizes
            </button>
            <button
              onClick={() => setActiveTab("gifts")}
              className={`pb-1 transition-all ${
                activeTab === "gifts"
                  ? "border-b-2 border-black font-medium text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Perfume Gift Sets
            </button>
          </div>

          <button className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors">
            <span>FILTERS</span>
            <span>≡</span>
          </button>
        </div>
      </div>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto border-l border-neutral-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PERFUMES_DATA.map((product) => (
            <SafeProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}