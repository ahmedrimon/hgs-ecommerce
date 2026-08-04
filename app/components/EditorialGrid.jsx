"use client";

import Link from "next/link";

const editorialData = [
  {
    id: "belles-matieres",
    title: "BELLES MATIÈRES",
    description: "A collection of sunlit scents inspired by distant landscapes and summer escapes.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    link: "/collections/belles-matieres",
  },
  {
    id: "summer-essential",
    title: "SUMMER ESSENTIAL",
    description: "The art of fragrance on the move, in travel-ready formats to take everywhere.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    link: "/collections/travel-sizes",
  },
];

export default function EditorialGrid() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {editorialData.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-center text-center bg-neutral-50/50 border border-neutral-100 p-6 md:p-8"
          >
            {/* Image Box */}
            <div className="w-full aspect-[4/3] overflow-hidden mb-8 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Typography & Details */}
            <div className="flex-1 flex flex-col justify-between items-center max-w-md space-y-4">
              <div className="space-y-3">
                <h3 className="font-serif text-sm md:text-base tracking-[0.3em] font-medium text-neutral-900 uppercase">
                  {item.title}
                </h3>
                <p className="font-serif text-xs leading-relaxed tracking-wider text-neutral-600 font-light">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  href={item.link}
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