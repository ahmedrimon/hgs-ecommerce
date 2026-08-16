"use client";

// app/page.jsx
import Link from "next/link";
import CategoryCarousel from "./components/CategoryCarousel";
import EditorialGrid from "./components/EditorialGrid";
import BrandStoryGrid from "./components/BrandStoryGrid";
import CandlesAndHome from "./components/CandlesAndHome";
import NewsletterSection from "./components/NewsletterSection";

const galleryItems = [
  {
    title: "CLASSIC CANDLES",
    subtitle: "Timeless Scented Wax",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    link: "/collections/classic-candles",
  },
  {
    title: "EAUX DE PARFUM",
    subtitle: "High Fragrance Formulations",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    link: "/collections/perfumes",
  },
  {
    title: "ROOM SPRAYS & REFILLS",
    subtitle: "Atmospheric Scents",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    link: "/collections/room-sprays",
  },
  {
    title: "ALABASTERS",
    subtitle: "Sculpted Diffusers",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    link: "/collections/alabasters",
  },
];

export default function Home() {

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-16 px-8 md:px-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1920&q=80" 
            alt="Trianon Candle Collection" 
            className="w-full h-full object-cover object-center"
          />
          {/* Soft Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-xl text-white space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.25em] font-light uppercase">
            TRIANON
          </h2>
          <p className="font-serif text-sm tracking-wider text-neutral-200">
            Formerly a Limited Edition, Trianon Now Joins Les Exclusives.
          </p>
          <div className="pt-2">
            <Link 
              href="/category/eaux-de-parfum" 
              className="inline-block px-8 py-3 border border-white text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Discover
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: GALLERY / COLLECTION GRID */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h3 className="font-serif text-2xl tracking-[0.3em] uppercase text-neutral-900">
            THE COLLECTIONS
          </h3>
          <p className="font-serif text-xs tracking-widest text-neutral-500 uppercase">
            Crafted with French Heritage Since 1643
          </p>
        </div>

        {/* Grid layout mirroring luxury store galleries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-white shadow-xs">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center space-y-2">
                <h4 className="font-serif text-xs tracking-[0.2em] font-semibold text-neutral-900 uppercase">
                  {item.title}
                </h4>
                <p className="font-serif text-[11px] text-neutral-500 italic">
                  {item.subtitle}
                </p>
                <div className="pt-2">
                  <Link 
                    href={item.link}
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-800 hover:text-amber-900 transition-colors border-b border-neutral-300 pb-1"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: CATEGORY CAROUSEL */}
      <CategoryCarousel/>

      {/* 2-Column Section */}
      <EditorialGrid />

      {/* History, Know-How, Services Section */}
      <BrandStoryGrid />

      {/* Candles and Home + 4-Column Service Perks */}
      <CandlesAndHome />

      {/* Newsletter Follow Us Section */}
      <NewsletterSection />

    </div>
  );
}