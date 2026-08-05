"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SlidersHorizontal } from "lucide-react";

const mockProducts = [
  {
    id: "1",
    title: "REVOLUTION",
    subtitle: "Elemi, Angelica and Cade",
    details: "100ml | €210.00",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    badge: null,
    sizes: "+1 size",
  },
  {
    id: "2",
    title: "REVOLUTION (15ML)",
    subtitle: "Elemi, Angelica and Cade",
    details: "15ml | €42.00",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    badge: "LES EXCLUSIVES",
    sizes: "+1 size",
  },
  {
    id: "3",
    title: "THE CLASSIC CANDLE ODALISQUE",
    subtitle: "Orange Blossom",
    details: "Classic 270g | €95.00",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
    badge: "PERSONALIZED SET",
    sizes: "+1 size",
  },
  {
    id: "4",
    title: "THE SMALL CANDLE ODALISQUE",
    subtitle: "Orange Blossom",
    details: "Small 70g | €40.00",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    badge: "PERSONALIZED SET",
    sizes: "+1 size",
  },
];

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-7xl mx-auto px-6">
      
      {/* Search Header */}
      <div className="text-center py-10 my-4">
        <h1 className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase">
          SEARCH RESULTS FOR: '{query}'
        </h1>
      </div>

      {/* Filter */}
      <div className="flex justify-end items-center border-b border-neutral-200 pb-4 mb-10">
        <button className="flex items-center space-x-2 text-xs tracking-widest text-neutral-700 uppercase">
          <span>Filters</span>
          <SlidersHorizontal size={14} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="group space-y-3">
            <div className="relative aspect-square bg-neutral-100 overflow-hidden">
              {product.badge && (
                <span className="absolute top-2 left-2 z-10 bg-white/90 px-2 py-1 text-[9px] tracking-widest uppercase">
                  {product.badge}
                </span>
              )}
              <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-xs tracking-[0.2em] font-medium uppercase">{product.title}</h3>
              <p className="text-[11px] text-neutral-500 italic">{product.subtitle}</p>
              <p className="text-[11px] text-neutral-800">{product.details}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center font-serif">Loading...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}