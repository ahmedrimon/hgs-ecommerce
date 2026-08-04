"use client";

import Link from "next/link";

const storyCards = [
  {
    id: "history",
    title: "HISTORY",
    description: "Trudon's story begins in 1643. Let's go back in time and discover the history of the House.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    link: "/history",
  },
  {
    id: "know-how",
    title: "KNOW-HOW",
    description: "Walk through the necessary and essentials steps to manufacture the Trudon candles in the workshops in Normandy.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    link: "/know-how",
  },
  {
    id: "services-for-professionals",
    title: "SERVICES FOR PROFESSIONALS",
    description: "Trudon partners with prestigious hotels and restaurants around the globe to offer elegant and distinctive scents, contributing to reinventing customer experience.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    link: "/services-for-professionals",
  },
];

export default function BrandStoryGrid() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 border-t border-neutral-100">
      {/* 3-Column Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {storyCards.map((card) => (
          <div
            key={card.id}
            className="group flex flex-col items-center text-center bg-white p-4 sm:p-6"
          >
            {/* Square Aspect Ratio Image Container */}
            <div className="w-full aspect-square overflow-hidden mb-8 relative bg-neutral-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Typography & Details */}
            <div className="flex-1 flex flex-col justify-between items-center max-w-xs space-y-4">
              <div className="space-y-3">
                <h3 className="font-serif text-sm tracking-[0.25em] font-semibold text-neutral-900 uppercase">
                  {card.title}
                </h3>
                <p className="font-serif text-xs leading-relaxed tracking-wider text-neutral-600 font-light">
                  {card.description}
                </p>
              </div>

              {/* Discover Action Button */}
              <div className="pt-6">
                <Link
                  href={card.link}
                  className="inline-block px-8 py-3 border border-neutral-900 text-[10px] tracking-[0.25em] font-medium text-neutral-900 uppercase hover:bg-neutral-900 hover:text-white transition-colors duration-300"
                >
                  Discover
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}