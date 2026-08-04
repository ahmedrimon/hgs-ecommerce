"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Search, 
  User, 
  MapPin, 
  ShoppingBag, 
  ChevronRight, 
  ChevronLeft 
} from "lucide-react";
import { navData } from "../data/navData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(navData[0]);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll event to trigger dynamic header style change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileSubOpen(false);
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setMobileSubOpen(true);
  };

  return (
    <>
      {/* SCROLL-REACTIVE HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "bg-white/95 text-neutral-900 border-b border-neutral-200 py-3 shadow-xs backdrop-blur-md" 
            : "bg-gradient-to-b from-black/40 via-black/20 to-transparent text-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Left: Menu Trigger */}
          <button 
            onClick={toggleMenu} 
            className="flex items-center space-x-2 text-xs tracking-[0.2em] font-medium uppercase hover:opacity-75 transition-opacity focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Center: Brand Logo */}
          <Link href="/" className="text-center group">
            <h1 className="font-serif text-2xl tracking-[0.35em] font-medium uppercase">TRVDON</h1>
            <p className={`text-[10px] tracking-widest font-serif italic ${isScrolled ? "text-neutral-500" : "text-neutral-300"}`}>
              .1643.
            </p>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hover:opacity-75 transition-opacity cursor-pointer" aria-label="Search">
              <Search size={18} />
            </button>
            <Link href="/account" className="hidden sm:block hover:opacity-75 transition-opacity" aria-label="Account">
              <User size={18} />
            </Link>
            <Link href="/stores" className="hidden sm:block hover:opacity-75 transition-opacity" aria-label="Stores">
              <MapPin size={18} />
            </Link>
            <button className="hover:opacity-75 transition-opacity relative cursor-pointer" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className={`absolute -top-1 -right-2 text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold ${
                isScrolled ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
              }`}>
                0
              </span>
            </button>
            <span className={`text-xs font-serif tracking-wider hidden md:inline ${isScrolled ? "text-neutral-600" : "text-neutral-300"}`}>
              FR | €
            </span>
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-xs transition-opacity duration-300"
        />
      )}

      {/* NAVIGATION DRAWER */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-50 bg-white text-neutral-900 w-full max-w-4xl shadow-2xl flex flex-col md:flex-row transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* DRAWER CLOSE BUTTON */}
        <div className="absolute top-5 left-6 z-20">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
        </div>

        {/* LEVEL 1: MAIN CATEGORIES */}
        <div className="w-full md:w-80 border-r border-neutral-100 pt-20 pb-8 px-8 flex flex-col justify-between overflow-y-auto shrink-0">
          <nav className="space-y-4">
            {navData.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                onMouseEnter={() => setActiveCategory(category)}
                className={`w-full flex items-center justify-between text-left py-2 font-serif text-xs tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory?.id === category.id 
                    ? "text-amber-900 font-semibold translate-x-1" 
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                <span>{category.title}</span>
                <ChevronRight size={14} className={`transition-transform duration-200 ${activeCategory?.id === category.id ? "text-amber-900 translate-x-1" : "text-neutral-400"}`} />
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-neutral-200 space-y-3 font-serif text-xs tracking-wider text-neutral-600">
            <Link href="/account" className="block hover:underline">My Account</Link>
            <Link href="/stores" className="block hover:underline">Find a store</Link>
            <Link href="/contact" className="block hover:underline">Contact us</Link>
            <Link href="/accessibility" className="block hover:underline">Accessibility</Link>
          </div>
        </div>

        {/* LEVEL 2: SUBCATEGORIES & PROMOS */}
        <div 
          className={`w-full md:w-[calc(100%-20rem)] pt-20 pb-8 px-8 bg-neutral-50/50 overflow-y-auto flex-1 transition-transform duration-300 md:translate-x-0 ${
            mobileSubOpen ? "fixed inset-0 z-10 bg-white pt-20 md:relative md:inset-auto" : "hidden md:block"
          }`}
        >
          <button 
            onClick={() => setMobileSubOpen(false)} 
            className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest mb-6 text-neutral-600 cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>

          {activeCategory && (
            <div 
              key={activeCategory.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn"
            >
              <div className="space-y-8">
                {activeCategory.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="font-serif text-[11px] tracking-[0.2em] uppercase text-neutral-400 border-b border-neutral-200 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            href={item.href} 
                            onClick={toggleMenu}
                            className="text-xs tracking-wider font-serif text-neutral-700 hover:text-amber-950 transition-colors inline-block hover:translate-x-1"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {activeCategory.promoCards.map((card, cardIdx) => (
                  <div key={cardIdx} className="group relative overflow-hidden bg-neutral-100 shadow-xs">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-6 text-white text-center">
                      <h4 className="font-serif text-xs tracking-widest uppercase mb-3 font-medium">
                        {card.title}
                      </h4>
                      <div>
                        <Link 
                          href={card.link}
                          onClick={toggleMenu}
                          className="inline-block px-4 py-2 border border-white text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
                        >
                          Discover
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
