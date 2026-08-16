"use client";

import { useCart } from "@/context/CartContext";

const CARMEN_PRODUCTS = [
  {
    id: "carmen-100ml",
    name: "CARMEN",
    notes: "Bergamot, Tobacco, Leather",
    size: "100ml",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
  },
  {
    id: "carmen-15ml",
    name: "CARMEN (15ML)",
    notes: "Bergamot, Tobacco, Leather",
    size: "15ml",
    price: 42.0,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
  },
  {
    id: "carmen-liquid-soap",
    name: "CARMEN LIQUID SOAP",
    notes: "Bergamot, Tobacco, Leather",
    size: "350ml",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1608248597262-838249719143?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
  },
  {
    id: "carmen-hand-lotion",
    name: "CARMEN HAND LOTION",
    notes: "Bergamot, Tobacco, Leather",
    size: "350ml",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
  },
];

export default function CarmenCollectionPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 font-serif">
      {/* 1. Header Section */}
      <section className="max-w-3xl mx-auto text-center px-6 my-12 space-y-6">
        <h1 className="text-3xl md:text-4xl tracking-[0.35em] font-light uppercase">
          CARMEN COLLECTION
        </h1>
        <p className="text-xs md:text-sm font-sans text-neutral-600 leading-relaxed tracking-wide italic">
          With Carmen, Trudon extends the legacy of the iconic Ernesto candle into a more intimate, skin-focused expression.
        </p>
        <p className="text-xs font-sans text-neutral-500 leading-relaxed tracking-wide">
          Tobacco, the cornerstone of the original composition, gains depth and nobility, illuminated by a subtle touch of rum. Leather is refined, revealing a more tactile, sensual texture. Woods and resins bring structure without heaviness, while ambroxan and an exceptionally pure patchouli introduce a modern scent.
        </p>
        <p className="text-xs font-sans text-neutral-500 leading-relaxed tracking-wide pt-2">
          Named after the heroine of Georges Bizet's opera, Carmen embodies a spirit of absolute freedom, untamed, sensual, and defiantly independent.
        </p>
      </section>

      {/* 2. Hero Editorial Banner */}
      <section className="max-w-6xl mx-auto px-6 my-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1600&auto=format&fit=crop&q=80"
            alt="Carmen Collection Editorial"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-6xl tracking-[0.4em] font-light uppercase">
              CARMEN
            </h2>
          </div>
        </div>
      </section>

      {/* 3. Olfactory Pyramid Section */}
      <section className="max-w-4xl mx-auto px-6 my-20 text-center border-y border-neutral-200 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
          <div className="space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">
              Head notes
            </h3>
            <p className="text-xs text-neutral-500 italic">
              Bergamot, Grapefruit, Rum
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">
              Heart notes
            </h3>
            <p className="text-xs text-neutral-500 italic">
              Tobacco, Leather, Clove, Oakwood
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">
              Base notes
            </h3>
            <p className="text-xs text-neutral-500 italic">
              Patchouli, Labdanum, Ambergris, Moss
            </p>
          </div>
        </div>
      </section>

      {/* 4. Products Collection Grid */}
      <section className="max-w-7xl mx-auto px-6 my-16">
        <div className="border-l border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CARMEN_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between border-b border-r border-neutral-200 p-6 transition-all bg-white hover:shadow-sm"
            >
              <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-serif text-neutral-500 mb-4">
                <span>{product.badge}</span>
                <button aria-label="Add to wishlist" className="hover:text-black transition-colors">
                  ♡
                </button>
              </div>

              <div className="relative w-full aspect-square flex items-center justify-center my-4 overflow-hidden bg-neutral-50 rounded-sm">
                <img
                  src={product.image}
                  alt={product.name}
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
                  {product.name}
                </h3>
                <p className="text-[11px] text-neutral-500 italic font-sans min-h-[32px]">
                  {product.notes}
                </p>

                <div className="flex justify-between items-end pt-4 border-t border-neutral-100 mt-3 font-sans text-xs text-neutral-800">
                  <div>
                    <span>{product.size}</span>
                    <span className="mx-2">|</span>
                    <span>€{product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Editorial Content Block: Reinterpretation */}
      <section className="max-w-6xl mx-auto px-6 my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-neutral-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80"
            alt="Ernesto Reinterpretation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 md:pl-8">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] uppercase font-light leading-snug">
            A MASTERFUL REINTERPRETATION OF ERNESTO
          </h2>
          <p className="text-xs font-sans text-neutral-600 leading-relaxed">
            Renowned for its profound tobacco-leather accord, Ernesto has become one of Trudon's most emblematic scents. Carmen is not created as a literal olfactory replica, instead a new interpretation that preserves the spirit while embracing a more sensual and refined expression.
          </p>
          <p className="text-xs font-sans text-neutral-500 italic">
            A faithful evolution, liberated from duplication.
          </p>
        </div>
      </section>

      {/* 6. Perfumer Bio Block */}
      <section className="max-w-6xl mx-auto px-6 my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:pr-8 order-2 md:order-1">
          <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-neutral-400">
            CREATED BY ÉMILIE BOUGE
          </span>
          <blockquote className="text-sm font-sans italic text-neutral-700 leading-relaxed border-l-2 border-black pl-4">
            "Imagining Ernesto on the skin was both a challenge and an obvious choice. I wanted to capture its strength and character, translating it in the most intimate way possible."
          </blockquote>
          <p className="text-xs font-sans text-neutral-600 leading-relaxed">
            Émilie Bouge draws her inspiration from the balance between discipline and creativity, between urban life and nature. Trained at ISIPCA, she has developed a strong affinity for natural raw materials, essential to the authenticity of her creations.
          </p>
        </div>
        <div className="aspect-square bg-neutral-100 overflow-hidden order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80"
            alt="Perfumer Émilie Bouge"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>
    </main>
  );
}