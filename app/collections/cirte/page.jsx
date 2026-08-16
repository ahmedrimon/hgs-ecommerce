"use client";

import { useCart } from "@/context/CartContext";

const CIRE_PRODUCTS = [
  {
    id: "cire-small-candle",
    name: "THE SMALL CANDLE CIRE",
    notes: "Beeswax Absolute",
    size: "Small 70g",
    price: 42.0,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80",
    badge: "ICONS",
    available: true,
  },
  {
    id: "cire-classic-candle",
    name: "THE CLASSIC CANDLE CIRE",
    notes: "Beeswax Absolute",
    size: "Classic 270g",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1608248597262-838249719143?w=800&auto=format&fit=crop&q=80",
    badge: "ICONS",
    available: true,
  },
  {
    id: "cire-intermezzo-candle",
    name: "THE INTERMEZZO CANDLE CIRE",
    notes: "Beeswax Absolute",
    size: "Intermezzo 800g",
    price: 250.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    badge: "BACK SOON",
    available: false,
  },
  {
    id: "cire-great-candle",
    name: "THE GREAT CANDLE CIRE",
    notes: "Beeswax Absolute",
    size: "Great 2.8kg",
    price: 520.0,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
    badge: "ICONS",
    available: true,
  },
  {
    id: "cire-bee-candle-topper",
    name: "BEE CANDLE TOPPER",
    notes: "Brass Accessory",
    size: "One Size",
    price: 140.0,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    available: true,
  },
  {
    id: "cire-bees-pedestal",
    name: "BEES PEDESTAL",
    notes: "Decorative Brass Pedestal",
    size: "One Size",
    price: 175.0,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80",
    badge: "BACK SOON",
    available: false,
  },
  {
    id: "cire-diffuser",
    name: "THE DIFFUSER CIRE",
    notes: "Beeswax Absolute",
    size: "350ml",
    price: 180.0,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=800&auto=format&fit=crop&q=80",
    badge: "ICONS",
    available: true,
  },
  {
    id: "cire-refill",
    name: "THE REFILL CIRE",
    notes: "Beeswax Absolute",
    size: "350ml",
    price: 85.0,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80",
    badge: "ICONS",
    available: true,
  },
  {
    id: "cire-room-spray",
    name: "THE ROOM SPRAY CIRE",
    notes: "Beeswax Absolute",
    size: "375ml",
    price: 200.0,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    available: true,
  },
  {
    id: "cire-cameo",
    name: "CIRE CAMEO",
    notes: "Beeswax Absolute",
    size: "4 cameos",
    price: 28.0,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=80",
    badge: "ICONS",
    available: true,
  },
];

export default function CireCollectionPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 font-serif">
      {/* 1. Header Section */}
      <section className="max-w-3xl mx-auto text-center px-6 my-12 space-y-6">
        <h1 className="text-3xl md:text-4xl tracking-[0.35em] font-light uppercase">
          CIRE COLLECTION
        </h1>
        <p className="text-xs md:text-sm font-sans text-neutral-600 leading-relaxed tracking-wide italic">
          The Cire collection is an olfactory illustration of the Trudon manufacture: evoke a blend of fragrant notes and warm waxes, its scope is symbolic. At the crossroads of ancestral craftsmanship, strong commitment, and contemporary vision, Cire reveals the scent of beeswax absolute.
        </p>
      </section>

      {/* 2. Hero Image Banner */}
      <section className="max-w-6xl mx-auto px-6 my-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1600&auto=format&fit=crop&q=80"
            alt="Cire Collection Display"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Olfactory Pyramid Section */}
      <section className="max-w-4xl mx-auto px-6 my-20 text-center border-y border-neutral-200 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
          <div className="space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">
              Head Notes
            </h3>
            <p className="text-xs text-neutral-500 italic">
              Bergamot, Waxed wood, Honey
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">
              Heart Notes
            </h3>
            <p className="text-xs text-neutral-500 italic">
              Beeswax absolute, Sandalwood essential oil, Cinnamon essential oil
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">
              Base Notes
            </h3>
            <p className="text-xs text-neutral-500 italic">
              Tonka Beans, Patchouli essential oil, Musk, Vanilla
            </p>
          </div>
        </div>
      </section>

      {/* 4. Collection Product Grid */}
      <section className="max-w-7xl mx-auto px-6 my-16">
        <div className="border-l border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CIRE_PRODUCTS.map((product) => (
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
                  className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    !product.available ? "opacity-60" : ""
                  }`}
                />

                {!product.available && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="bg-white px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-serif text-neutral-800 shadow-sm">
                      BACK SOON
                    </span>
                  </div>
                )}

                {product.available && (
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
                )}
              </div>

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Story Behind Cire */}
      <section className="max-w-6xl mx-auto px-6 my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-neutral-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80"
            alt="Bees and Beeswax"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 md:pl-8">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] uppercase font-light leading-snug">
            THE STORY BEHIND CIRE
          </h2>
          <p className="text-xs font-sans text-neutral-600 leading-relaxed">
            Bees and beeswax have always been at the heart of the manufacture's history: since the 17th century, Trudon's motto is "Deo regique laborant", which means: "they (the bees) work for God and the King".
          </p>
          <p className="text-xs font-sans text-neutral-600 leading-relaxed">
            2019 marks a turning point for the Maison, as Trudon decided to financially help the Orne Dark Bee Conservatory, with the partnership of the Perche Nature Park. 4 percent of all sales of the Maison's Cire candle will go toward the saving of Orne Dark Bees.
          </p>
        </div>
      </section>

      {/* 6. Perfumer Bio: Émilie Bouge */}
      <section className="max-w-6xl mx-auto px-6 my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:pr-8 order-2 md:order-1">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] uppercase font-light">
            CREATED BY ÉMILIE BOUGE
          </h2>
          <p className="text-xs font-sans text-neutral-600 leading-relaxed">
            Émilie draws her inspiration from the balance between discipline and creativity, between urban life and nature. Trained at ISIPCA, she has developed a strong affinity for natural raw materials, essential to the authenticity of her creations.
          </p>
          <p className="text-xs font-sans text-neutral-600 leading-relaxed">
            For Maison Trudon, she has crafted several iconic fragrances, including Ernesto, Cyrnos, Cire, Tuileries, and the Les Belles Matières collection.
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