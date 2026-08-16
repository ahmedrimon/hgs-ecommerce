"use client";

import { useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";

const HAND_LOTIONS_DATA = [
  {
    id: "scented-hand-lotion-vixi",
    name: "SCENTED HAND LOTION VIXI",
    notes: "Petitgrain, Sage Natural Essence and Organic Sandalwood",
    size: "350ml",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1608248597262-838249719143?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    selection: "New",
    olfactoryFamily: "Woody",
  },
  {
    id: "scented-hand-lotion-medie",
    name: "SCENTED HAND LOTION MÉDIE",
    notes: "Grapefruit, Sambac Jasmine and Cedarwood",
    size: "350ml",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    badge: "NEW",
    selection: "New",
    olfactoryFamily: "Fruity",
  },
];

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group relative flex flex-col justify-between border-b border-r border-neutral-200 p-8 transition-all bg-white hover:shadow-sm">
      <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-serif text-neutral-500 mb-4">
        <span>{product?.badge || "NEW"}</span>
        <button aria-label="Add to wishlist" className="hover:text-black transition-colors">
          ♡
        </button>
      </div>

      <div className="relative w-full aspect-square flex items-center justify-center my-4 overflow-hidden bg-neutral-50 rounded-sm">
        <img
          src={product?.image}
          alt={product?.name || "Hand Lotion"}
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
        <p className="text-[11px] text-neutral-500 italic font-sans min-h-[32px]">
          {product?.notes}
        </p>

        <div className="flex justify-between items-end pt-4 border-t border-neutral-100 mt-3 font-sans text-xs text-neutral-800">
          <div>
            <span>{product?.size}</span>
            <span className="mx-2">1</span>
            <span>€{product?.price ? product.price.toFixed(2) : "0.00"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ScentedHandLotionsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter state inside drawer
  const [openAccordions, setOpenAccordions] = useState({
    selection: true,
    olfactory: true,
  });

  const [selectedSelection, setSelectedSelection] = useState([]);
  const [selectedOlfactory, setSelectedOlfactory] = useState([]);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckboxToggle = (value, state, setState) => {
    setState(
      state.includes(value)
        ? state.filter((item) => item !== value)
        : [...state, value]
    );
  };

  // Filter products state logic
  const filteredProducts = useMemo(() => {
    return HAND_LOTIONS_DATA.filter((product) => {
      // Sub-nav tab
      if (activeTab === "soaps" && !product.name.toLowerCase().includes("soap")) return false;

      // Selection filter
      if (
        selectedSelection.length > 0 &&
        !selectedSelection.includes(product.selection)
      ) {
        return false;
      }

      // Olfactory family filter
      if (
        selectedOlfactory.length > 0 &&
        !selectedOlfactory.includes(product.olfactoryFamily)
      ) {
        return false;
      }

      return true;
    });
  }, [activeTab, selectedSelection, selectedOlfactory]);

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 relative font-serif">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Collection Title */}
        <div className="text-center my-10">
          <h1 className="text-2xl md:text-3xl tracking-[0.35em] font-light uppercase">
            THE SCENTED HAND LOTIONS
          </h1>
        </div>

        {/* Sub-navigation Header & Filter Bar */}
        <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-8 text-xs uppercase tracking-widest">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("soaps")}
              className={`pb-1 transition-all ${
                activeTab === "soaps"
                  ? "border-b-2 border-black font-medium text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Scented Hand Soaps
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-1 transition-all ${
                activeTab === "all"
                  ? "border-b-2 border-black font-medium text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Scented Hand Lotions
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className="pb-1 text-neutral-400 hover:text-black transition-all"
            >
              See all
            </button>
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors"
          >
            <span>Filters</span>
            <span>≡</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="border-l border-neutral-200">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-neutral-400 text-xs tracking-widest uppercase">
              No products match the selected filters.
            </div>
          )}
        </div>

        {/* Products Count Indicator */}
        <div className="mt-12 text-center text-xs font-sans text-neutral-500">
          <p className="pb-2">{filteredProducts.length} out of {HAND_LOTIONS_DATA.length} products</p>
          <div className="w-32 h-[1px] bg-neutral-900 mx-auto" />
        </div>
      </div>

      {/* Filter Drawer Backdrop */}
      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}

      {/* Slide-Over Filter Panel (Reflecting Trudon Site Options) */}
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

        <div className="flex-1 overflow-y-auto px-6 divide-y divide-neutral-200 text-xs font-sans">
          
          {/* Selection Filter */}
          <div className="py-4">
            <button
              onClick={() => toggleAccordion("selection")}
              className="w-full flex justify-between items-center font-serif uppercase tracking-wider text-left py-1"
            >
              Selection <span>{openAccordions.selection ? "ˆ" : "ˇ"}</span>
            </button>
            {openAccordions.selection && (
              <div className="space-y-2 pt-3">
                {["New"].map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSelection.includes(item)}
                      onChange={() =>
                        handleCheckboxToggle(item, selectedSelection, setSelectedSelection)
                      }
                      className="accent-black"
                    />
                    <span className="text-neutral-600">{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Olfactory Family Filter */}
          <div className="py-4">
            <button
              onClick={() => toggleAccordion("olfactory")}
              className="w-full flex justify-between items-center font-serif uppercase tracking-wider text-left py-1"
            >
              Olfactory family <span>{openAccordions.olfactory ? "ˆ" : "ˇ"}</span>
            </button>
            {openAccordions.olfactory && (
              <div className="space-y-2.5 pt-3">
                {["Floral", "Fruity", "Woody"].map((family) => (
                  <label key={family} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedOlfactory.includes(family)}
                      onChange={() =>
                        handleCheckboxToggle(family, selectedOlfactory, setSelectedOlfactory)
                      }
                      className="accent-black"
                    />
                    <span className="text-neutral-600">{family}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Apply Button */}
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