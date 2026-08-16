"use client";

import { useState, useEffect, useMemo } from "react";
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Accordion open state inside the drawer
  const [openAccordions, setOpenAccordions] = useState({
    capacity: true,
    selection: false,
    price: false,
  });

  // Selected filter states
  const [selectedCapacity, setSelectedCapacity] = useState([]);
  const [selectedSelection, setSelectedSelection] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // Detect scroll to trigger navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Filter products based on sub-nav tab & filter drawer choices
  const filteredProducts = useMemo(() => {
    return PERFUMES_DATA.filter((product) => {
      // 1. Sub-nav Tab Filtering
      if (activeTab === "travel" && product.size !== "15ml") return false;

      // 2. Capacity Filter
      if (
        selectedCapacity.length > 0 &&
        !selectedCapacity.includes(product.size)
      ) {
        return false;
      }

      // 3. Selection Filter
      if (
        selectedSelection.length > 0 &&
        !selectedSelection.includes(product.badge)
      ) {
        return false;
      }

      // 4. Price Filter Range
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some((range) => {
          if (range === "0-50") return product.price >= 0 && product.price <= 50;
          if (range === "50-100") return product.price > 50 && product.price <= 100;
          if (range === "100-200") return product.price > 100 && product.price <= 200;
          if (range === "200-250") return product.price > 200 && product.price <= 250;
          if (range === "250+") return product.price > 250;
          return false;
        });
        if (!matchesPrice) return false;
      }

      return true;
    });
  }, [activeTab, selectedCapacity, selectedSelection, selectedPriceRanges]);

  return (
    <main className="min-h-screen bg-white text-neutral-900 relative">
      {/* 1. Hero Header Container */}
      <div className="relative h-[380px] md:h-[450px] w-full overflow-hidden flex items-end justify-center pb-16 bg-neutral-900">
        <img
          src={HEADER_BG_IMAGE}
          alt="The Eaux De Parfum Header"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />
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

          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors"
          >
            <span>FILTERS</span>
            <span>≡</span>
          </button>
        </div>
      </div>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto border-l border-neutral-200">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <SafeProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center font-serif text-neutral-400 text-xs tracking-widest uppercase">
            No products match the selected filters.
          </div>
        )}
      </section>

      {/* 4. Filter Drawer Backdrop Overlay */}
      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}

      {/* 5. Trudon-Style Slide-Over Filter Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-neutral-200 flex justify-between items-center">
          <h2 className="text-xs uppercase tracking-[0.25em] font-semibold font-serif">
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
          {/* Capacity Section */}
          <div className="py-4">
            <button
              onClick={() => toggleAccordion("capacity")}
              className="w-full flex justify-between items-center font-serif uppercase tracking-wider text-left py-1"
            >
              Capacity <span>{openAccordions.capacity ? "ˆ" : "ˇ"}</span>
            </button>
            {openAccordions.capacity && (
              <div className="grid grid-cols-2 gap-2 pt-3">
                {["15ml", "100ml"].map((cap) => (
                  <button
                    key={cap}
                    onClick={() =>
                      handleCheckboxToggle(cap, selectedCapacity, setSelectedCapacity)
                    }
                    className={`py-2 text-center border text-xs transition-colors ${
                      selectedCapacity.includes(cap)
                        ? "border-black bg-neutral-900 text-white"
                        : "border-neutral-200 hover:border-black text-neutral-600"
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Selection Section */}
          <div className="py-4">
            <button
              onClick={() => toggleAccordion("selection")}
              className="w-full flex justify-between items-center font-serif uppercase tracking-wider text-left py-1"
            >
              Selection <span>{openAccordions.selection ? "ˆ" : "ˇ"}</span>
            </button>
            {openAccordions.selection && (
              <div className="space-y-2 pt-3">
                {["ICONS"].map((item) => (
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

          {/* Price Section */}
          <div className="py-4">
            <button
              onClick={() => toggleAccordion("price")}
              className="w-full flex justify-between items-center font-serif uppercase tracking-wider text-left py-1"
            >
              Price <span>{openAccordions.price ? "ˆ" : "ˇ"}</span>
            </button>
            {openAccordions.price && (
              <div className="space-y-2.5 pt-3">
                {[
                  { label: "€0.00 - €50.00", value: "0-50" },
                  { label: "€50.00 - €100.00", value: "50-100" },
                  { label: "€100.00 - €200.00", value: "100-200" },
                  { label: "€200.00 - €250.00", value: "200-250" },
                  { label: "€250.00 and above", value: "250+" },
                ].map((range) => (
                  <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range.value)}
                      onChange={() =>
                        handleCheckboxToggle(
                          range.value,
                          selectedPriceRanges,
                          setSelectedPriceRanges
                        )
                      }
                      className="accent-black"
                    />
                    <span className="text-neutral-600">{range.label}</span>
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