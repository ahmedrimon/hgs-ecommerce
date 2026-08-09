"use client";

import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col justify-between border-b border-r border-neutral-200 p-6 transition-all bg-white">
      {/* Top Badge & Favorite Icon */}
      <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-serif text-neutral-500 mb-4">
        <span>{product.badge}</span>
        <button 
          aria-label="Add to wishlist" 
          className="hover:text-black transition-colors"
        >
          ♡
        </button>
      </div>

      {/* Product Image & Quick Add Overlay */}
      <div className="relative w-full aspect-square flex items-center justify-center my-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Quick Add-To-Cart Bag Icon */}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow-md border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-900 hover:text-white"
          title="Add to Cart"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-1.5 font-serif">
        <h3 className="text-xs tracking-[0.2em] font-medium uppercase text-neutral-900">
          {product.name}
        </h3>
        <p className="text-[11px] text-neutral-500 italic font-sans">
          {product.notes}
        </p>

        <div className="flex justify-between items-end pt-4 border-t border-neutral-100 mt-3 font-sans text-xs text-neutral-800">
          <div>
            <span>{product.size}</span>
            <span className="mx-2">|</span>
            <span>€{product.price.toFixed(2)}</span>
          </div>

          {product.hasOtherSizes && (
            <span className="text-[10px] text-neutral-400 font-serif uppercase tracking-widest">
              +1 size
            </span>
          )}
        </div>
      </div>
    </div>
  );
}