"use client";

import { use } from "react";
import Link from "next/link";
import { storesData } from "../page";

export default function StoreDetailPage({ params }) {
  const resolvedParams = use(params);
  const store = storesData.find((s) => s.id === resolvedParams.id) || storesData[0];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-5xl mx-auto px-6">
      
      {/* Back Link */}
      <Link
        href="/store-locator"
        className="text-xs tracking-widest text-neutral-500 uppercase hover:text-black mb-8 inline-block"
      >
        ← Back to Store Locator
      </Link>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-6">
        
        {/* Left Showcase Image Slider / Banner */}
        <div className="space-y-4">
          <div className="aspect-4/3 bg-neutral-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
              alt={store.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl tracking-[0.3em] font-light uppercase text-neutral-900">
              {store.name}
            </h1>
            <p className="text-xs text-neutral-600 tracking-wider mt-2 leading-relaxed">
              {store.address}<br />
              {store.city}<br />
              {store.country}
            </p>
          </div>

          {/* Opening Hours */}
          <div className="border-t border-b border-neutral-200 py-6 space-y-2 text-xs font-light text-neutral-700">
            <div className="flex justify-between"><span>Monday:</span><span>10:00 - 21:00</span></div>
            <div className="flex justify-between"><span>Tuesday:</span><span>10:00 - 21:00</span></div>
            <div className="flex justify-between"><span>Wednesday:</span><span>10:00 - 21:00</span></div>
            <div className="flex justify-between"><span>Thursday:</span><span>10:00 - 21:00</span></div>
            <div className="flex justify-between"><span>Friday:</span><span>10:00 - 21:00</span></div>
            <div className="flex justify-between"><span>Saturday:</span><span>10:00 - 20:00</span></div>
            <div className="flex justify-between"><span>Sunday:</span><span>12:00 - 19:00</span></div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-2 pt-2 text-xs tracking-widest">
            <p className="text-neutral-500">(973) 605-2303</p>
            <a href="mailto:contact@trudon.com" className="block text-neutral-900 underline uppercase">
              Contact by email
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(store.address + ' ' + store.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-neutral-900 underline uppercase"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}