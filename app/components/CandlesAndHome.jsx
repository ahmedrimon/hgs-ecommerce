"use client";

import Link from "next/link";
import { Truck, RotateCcw, Gift, Sparkles } from "lucide-react";

const valueProps = [
  {
    id: "free-shipping",
    title: "FREE SHIPPING",
    description: "For all orders over 100€",
    icon: Truck,
  },
  {
    id: "returns",
    title: "RETURNS OR REIMBURSEMENT",
    description: "We replace or reimburse your order if you are not completely satisfied",
    icon: RotateCcw,
  },
  {
    id: "gift",
    title: "PERSONALIZED PRESENT",
    description: "Gift wrapping available for all orders",
    icon: Gift,
  },
  {
    id: "samples",
    title: "FREE SAMPLES",
    description: "We are pleased to offer you a scented cameo and a perfume sample for each order",
    icon: Sparkles,
  },
];

export default function CandlesAndHome() {
  return (
    <div className="w-full bg-white">
      
      {/* SECTION 1: CANDLES AND HOME BANNER */}
      <section className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-neutral-100 flex justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1920&q=80"
            alt="Candles and Home"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white/95 backdrop-blur-xs max-w-2xl w-full p-8 md:p-12 text-center space-y-6 shadow-xl my-8">
          <h2 className="font-serif text-xl md:text-2xl tracking-[0.3em] font-semibold text-neutral-900 uppercase">
            CANDLES AND HOME
          </h2>

          <p className="font-serif text-xs md:text-sm leading-relaxed tracking-wider text-neutral-600 font-light max-w-xl mx-auto">
            Trudon’s scented creations for the home are emblematic of the House. The candles are crafted in our Normandy workshop, following exceptional know-how passed down by master candle-makers.
          </p>

          <div className="pt-2">
            <Link
              href="/collections/home-fragrances"
              className="inline-block px-8 py-3 border border-neutral-900 text-[10px] tracking-[0.25em] font-medium text-neutral-900 uppercase hover:bg-neutral-900 hover:text-white transition-colors duration-300"
            >
              Discover
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4-COLUMN VALUE PROPOSITIONS */}
      <section className="py-16 px-4 md:px-8 lg:px-12 border-t border-b border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {valueProps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center px-4 space-y-4 group"
              >
                {/* Icon Container */}
                <div className="text-neutral-800 transition-transform duration-300 group-hover:-translate-y-1">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xs tracking-[0.2em] font-semibold text-neutral-900 uppercase">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-[11px] leading-relaxed tracking-wider text-neutral-600 font-light max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}