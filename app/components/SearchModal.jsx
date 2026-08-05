"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

const suggestions = [
  {
    id: "figuerie",
    title: "THE DIFFUSER FIGUERIE",
    subtitle: "Royal Fig, in the shade of the greenhouses",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "ernesto",
    title: "THE SMALL CANDLE ERNESTO",
    subtitle: "Leather and Tobacco",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "medie",
    title: "SCENTED HAND SOAP MÉDIE",
    subtitle: "Grapefruit, Sambac Jasmine and Cedarwood",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=200&q=80",
  },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e?.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/catalogsearch/result?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full p-8 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300">
        
        {/* Close Button */}
        <div className="flex justify-between items-center pb-6">
          <div className="w-6" />
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Search Input */}
        <div className="flex-1 space-y-8 pt-4">
          <form onSubmit={handleSearch} className="relative border-b border-neutral-300 pb-2 flex items-center">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent font-serif text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <button type="submit" className="text-neutral-600 hover:text-neutral-900 ml-2">
              <Search size={18} strokeWidth={1.5} />
            </button>
          </form>

          {/* Recommended Suggestions */}
          <div className="space-y-6">
            <h4 className="font-serif text-[11px] tracking-[0.25em] text-neutral-500 uppercase">
              You may also like
            </h4>

            <div className="space-y-5">
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    router.push(`/catalogsearch/result?q=${encodeURIComponent(item.title)}`);
                  }}
                  className="flex items-center space-x-4 cursor-pointer group"
                >
                  <img src={item.image} alt={item.title} className="w-14 h-14 object-cover bg-neutral-100" />
                  <div>
                    <h5 className="font-serif text-xs tracking-wider text-neutral-900 group-hover:underline">
                      {item.title}
                    </h5>
                    <p className="font-serif text-[11px] text-neutral-500 font-light mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}