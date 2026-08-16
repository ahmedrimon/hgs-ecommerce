"use client";

import { useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";

const NOVELTIES_PRODUCTS = [
  {
    id: "bee-candle-topper",
    name: "BEE CANDLE TOPPER",
    notes: "Brass Accessory",
    size: "One Size",
    price: 140.0,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Candles and Home",
  },
  {
    id: "the-diffuser-cire",
    name: "THE DIFFUSER CIRE",
    notes: "Beeswax Absolute",
    size: "350ml",
    price: 180.0,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Candles and Home",
  },
  {
    id: "the-refill-cire",
    name: "THE REFILL CIRE",
    notes: "Beeswax Absolute",
    size: "350ml",
    price: 85.0,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Candles and Home",
  },
  {
    id: "the-room-spray-cire",
    name: "THE ROOM SPRAY CIRE",
    notes: "Beeswax Absolute",
    size: "375ml",
    price: 200.0,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Candles and Home",
  },
  {
    id: "carmen-100ml",
    name: "CARMEN",
    notes: "Bergamot, Tobacco, Leather",
    size: "100ml",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Perfumes and Body",
  },
  {
    id: "carmen-15ml",
    name: "CARMEN (15ML)",
    notes: "Bergamot, Tobacco, Leather",
    size: "15ml",
    price: 42.0,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Perfumes and Body",
  },
  {
    id: "scented-hand-soap-carmen",
    name: "SCENTED HAND SOAP CARMEN",
    notes: "Bergamot, Tobacco, Leather",
    size: "350ml",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1608248597262-838249719143?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Perfumes and Body",
  },
  {
    id: "scented-hand-soap-refill-carmen",
    name: "SCENTED HAND SOAP REFILL CARMEN",
    notes: "Bergamot, Tobacco, Leather",
    size: "500ml",
    price: 52.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Perfumes and Body",
  },
  {
    id: "scented-hand-lotion-medie",
    name: "SCENTED HAND LOTION MÉDIE",
    notes: "Grapefruit, Sambac Jasmine and Cedarwood",
    size: "350ml",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Perfumes and Body",
  },
  {
    id: "scented-hand-lotion-vixi",
    name: "SCENTED HAND LOTION VIXI",
    notes: "Petitgrain, Sage Natural Essence and Organic Sandalwood",
    size: "350ml",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1608248597262-838249719143?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    category: "Perfumes and Body",
  },
];

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group relative flex flex-col justify-between border-b border-r border-neutral-200 p-6 transition-all bg-white hover:shadow-sm">
      <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-serif text-neutral-500 mb-4">
        <span>{product?.badge || "NEW"}</span>
        <button aria-label="Add to wishlist" className="hover:text-black transition-colors">
          ♡
        </button>
      </div>

      <div className="relative w-full aspect-square flex items-center justify-center my-4 overflow-hidden bg-neutral-50 rounded-sm">
        <img
          src={product?.image}
          alt={product?.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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
        <p className="text-[11px] text-neutral-500 italic font-sans min-h-[32px]">
          {product?.notes}
        </p>

        <div className="flex justify-between items-end pt-4 border-t border-neutral-100 mt-3 font-sans text-xs text-neutral-800">
          <div>
            <span>{product?.size}</span>
            <span className="mx-2">|</span>
            <span>€{product?.price ? product.price.toFixed(2) : "0.00"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NoveltiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["Candles and Home", "Perfumes and Body", "Decoration", "Gifts"];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return NOVELTIES_PRODUCTS;
    return NOVELTIES_PRODUCTS.filter(
      (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 relative font-serif">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Collection Header */}
        <div className="text-center my-10">
          <h1 className="text-2xl md:text-3xl tracking-[0.35em] font-light uppercase">
            NOVELTIES
          </h1>
        </div>

        {/* Category Sub-Nav & Filter Bar */}
        <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-8 text-xs uppercase tracking-widest">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`pb-1 whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? "border-b-2 border-black font-medium text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-1 whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "border-b-2 border-black font-medium text-black"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors pl-4"
          >
            <span>Filters</span>
            <span>≡</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="border-l border-t border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Products Count Indicator */}
        <div className="mt-12 text-center text-xs font-sans text-neutral-500">
          <p className="pb-2">
            {filteredProducts.length} out of {NOVELTIES_PRODUCTS.length} products
          </p>
          <div className="w-32 h-[1px] bg-neutral-900 mx-auto" />
        </div>
      </div>

      {/* Filter Side Drawer Backdrop */}
      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}

      {/* Filter Side Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-neutral-200 flex justify-between items-center">
          <h2 className="text-xs uppercase tracking-[0.25em] font-semibold">
            FILTERS
          </h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="text-2xl leading-none text-neutral-400 hover:text-black"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 divide-y divide-neutral-200 text-xs font-sans">
          <div className="py-4">
            <h3 className="font-serif uppercase tracking-wider mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={activeCategory === cat}
                    onChange={() => setActiveCategory(cat)}
                    className="accent-black"
                  />
                  <span className="text-neutral-600">{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-neutral-200">
          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors font-serif"
          >
            APPLY FILTERS
          </button>
        </div>
      </aside>
    </main>
  );
}