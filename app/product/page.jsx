"use client";

import { useCart } from "@/context/CartContext";

export default function SampleProductPage() {
  const { addToCart } = useCart();

  const product = {
    id: "classic-candle-empire",
    name: "THE CLASSIC CANDLE - EMPIRE",
    price: 110.0,
    image: "https://trudon.com/media/catalog/product/b/o/bougie-empire-270g.jpg", // placeholder image
  };

  return (
    <div className="min-h-screen bg-white font-serif pt-28 pb-20 max-w-xl mx-auto px-6 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-80 object-cover mx-auto mb-6"
      />
      <h1 className="text-lg tracking-[0.2em] uppercase font-light mb-2">
        {product.name}
      </h1>
      <p className="text-sm font-sans text-neutral-600 mb-6">
        €{product.price.toFixed(2)}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="px-10 py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
      >
        ADD TO CART
      </button>
    </div>
  );
}