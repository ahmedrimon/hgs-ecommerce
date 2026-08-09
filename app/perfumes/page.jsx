"use client";

import { useState } from "react";
import { perfumes } from "../data/product";
import ProductCard from "../components/ProductCard";

export default function PerfumesPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-20">
      {/* Hero Banner Header */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden flex items-center justify-center bg-neutral-900">
        <img
          src="https://trudon.com/media/catalog/category/Eaux_de_parfum_header.jpg"
          alt="The Eaux De Parfum"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white space-y-2">
          <h1 className="font-serif text-2xl md:text-4xl tracking-[0.3em] font-light uppercase">
            THE EAUX DE PARFUM
          </h1>
        </div>
      </div>

      {/* Sub-navigation Filter Bar */}
      <div className="border-b border-neutral-200 bg-white sticky top-16 z-20 px-6 py-4 flex flex-wrap justify-between items-center text-xs font-serif uppercase tracking-widest">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-1 transition-border ${
              activeTab === "all" ? "border-b-2 border-black font-semibold" : "text-neutral-500"
            }`}
          >
            Eaux de Parfum
          </button>
          <button
            onClick={() => setActiveTab("travel")}
            className={`pb-1 transition-border ${
              activeTab === "travel" ? "border-b-2 border-black font-semibold" : "text-neutral-500"
            }`}
          >
            Travel sizes
          </button>
          <button
            onClick={() => setActiveTab("gifts")}
            className={`pb-1 transition-border ${
              activeTab === "gifts" ? "border-b-2 border-black font-semibold" : "text-neutral-500"
            }`}
          >
            Perfume Gift Sets
          </button>
        </div>

        <button className="flex items-center gap-2 text-neutral-600 hover:text-black">
          <span>Filters</span>
          <span>≡</span>
        </button>
      </div>

      {/* Product Grid Layout */}
      <section className="max-w-7xl mx-auto border-l border-neutral-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {perfumes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}