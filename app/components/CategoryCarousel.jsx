"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "THE SCENTED CANDLES",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    link: "/collections/scented-candles",
  },
  {
    title: "THE DIFFUSERS",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    link: "/collections/diffusers",
  },
  {
    title: "THE EAUX DE PARFUM",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    link: "/collections/eaux-de-parfum",
  },
  {
    title: "THE SCENTED HAND SOAPS",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    link: "/collections/hand-soaps",
  },
  {
    title: "THE ALABASTERS",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    link: "/collections/alabasters",
  },
  {
    title: "LA PROMENEUSE",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
    link: "/collections/la-promeneuse",
  },
  {
    title: "THE ACCESSORIES",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    link: "/collections/accessories",
  },
  {
    title: "THE ROOM SPRAYS",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    link: "/collections/room-sprays",
  },
];

export default function CategoryCarousel() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of container width
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-16 bg-white border-t border-neutral-100">
      <div className="relative group">
        
        {/* Left Scroll Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-12 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-start flex flex-col items-center bg-neutral-50 group/card border border-neutral-100/60 pb-6 transition-all"
            >
              {/* Image Box */}
              <div className="w-full aspect-square overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
              </div>

              {/* Title & Discover Button */}
              <div className="mt-6 text-center space-y-4 px-4 flex-1 flex flex-col justify-between">
                <h3 className="font-serif text-xs tracking-[0.25em] font-semibold text-neutral-900 uppercase">
                  {cat.title}
                </h3>
                <div>
                  <Link
                    href="/category/eaux-de-parfum"
                    className="inline-block px-6 py-2.5 border border-neutral-900 text-[10px] tracking-[0.2em] font-semibold text-neutral-900 uppercase hover:bg-neutral-900 hover:text-white transition-colors duration-300"
                  >
                    Discover
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  );
}