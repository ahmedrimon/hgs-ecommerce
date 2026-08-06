"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

// Dynamically import Leaflet Map to avoid Next.js SSR hydration errors
const StoreMap = dynamic(() => import("../components/StoreMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-neutral-100 flex items-center justify-center font-serif text-xs text-neutral-400">
      Loading map...
    </div>
  ),
});

export const storesData = [
  {
    id: "aventura",
    name: "AVENTURA",
    address: "19501 Biscayne Boulevard, Suite 1523 Upper Level",
    city: "FL 33180 Aventura",
    country: "United States",
    type: "Trudon",
    lat: 25.9566,
    lng: -80.1415,
  },
  {
    id: "rockefeller",
    name: "TRUDON BOUTIQUE ROCKEFELLER CENTER",
    address: "620 Fifth Ave - Suite 7",
    city: "10020 New York",
    country: "United States",
    type: "Trudon",
    lat: 40.7587,
    lng: -73.9787,
  },
  {
    id: "paris-rive-droite",
    name: "PARIS RIVE DROITE",
    address: "11 rue Sainte-Croix de la Bretonnerie",
    city: "75004 Paris",
    country: "France",
    type: "Trudon",
    lat: 48.8576,
    lng: 2.3571,
  },
  {
    id: "bon-marche",
    name: "LE BON MARCHÉ",
    address: "24 rue de Sèvres",
    city: "75007 Paris",
    country: "France",
    type: "Trudon Reseller",
    lat: 48.8508,
    lng: 2.3248,
  },
  {
    id: "melbourne",
    name: "MELBOURNE ROYAL ARCADE",
    address: "Shop 12 / 335 Bourke Street",
    city: "3000 Melbourne",
    country: "Australia",
    type: "Trudon",
    lat: -37.8136,
    lng: 144.9631,
  },
];

export default function StoreLocatorPage() {
  const [addressFilter, setAddressFilter] = useState("");
  const [storeTypeFilter, setStoreTypeFilter] = useState("");
  const [selectedStore, setSelectedStore] = useState(null);

  const filteredStores = useMemo(() => {
    return storesData.filter((store) => {
      const matchesAddress =
        !addressFilter ||
        store.name.toLowerCase().includes(addressFilter.toLowerCase()) ||
        store.address.toLowerCase().includes(addressFilter.toLowerCase()) ||
        store.city.toLowerCase().includes(addressFilter.toLowerCase());

      const matchesType =
        !storeTypeFilter || store.type === storeTypeFilter;

      return matchesAddress && matchesType;
    });
  }, [addressFilter, storeTypeFilter]);

  const handleReset = () => {
    setAddressFilter("");
    setStoreTypeFilter("");
    setSelectedStore(null);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-24">
      {/* Title */}
      <div className="text-center py-6 border-b border-neutral-100">
        <h1 className="text-xl md:text-2xl tracking-[0.35em] uppercase font-light">
          STORE LOCATOR | TRUDON
        </h1>
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-160px)] min-h-[600px]">
        
        {/* Left Sidebar Filter & List */}
        <div className="w-full md:w-96 border-r border-neutral-200 p-6 flex flex-col h-full bg-white overflow-y-auto">
          
          {/* Inputs */}
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="text"
                placeholder="Type an address"
                value={addressFilter}
                onChange={(e) => setAddressFilter(e.target.value)}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest text-neutral-500 uppercase mb-1">
                FILTER BY STORE TYPE
              </label>
              <select
                value={storeTypeFilter}
                onChange={(e) => setStoreTypeFilter(e.target.value)}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black bg-white"
              >
                <option value="">Please Select</option>
                <option value="Trudon">Trudon</option>
                <option value="Trudon Reseller">Trudon Reseller</option>
              </select>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 border border-neutral-300 text-xs tracking-widest uppercase hover:bg-neutral-50 transition-colors"
              >
                RESET
              </button>
              <button
                className="flex-1 py-2.5 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                FILTER
              </button>
            </div>
          </div>

          {/* Stores List */}
          <div className="space-y-4 flex-1">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                onClick={() => setSelectedStore(store)}
                className={`p-4 border transition-all cursor-pointer ${
                  selectedStore?.id === store.id
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white hover:border-neutral-400 text-neutral-900"
                }`}
              >
                <h3 className="text-xs tracking-[0.2em] font-medium uppercase mb-1">
                  {store.name}
                </h3>
                <p className="text-[11px] opacity-80 font-light leading-relaxed">
                  {store.address}<br />
                  {store.city}
                </p>

                <Link
                  href={`/store-locator/${store.id}`}
                  className="inline-block mt-3 text-[10px] tracking-widest uppercase underline underline-offset-4"
                >
                  Details +
                </Link>
              </div>
            ))}

            {filteredStores.length === 0 && (
              <p className="text-xs text-neutral-400 text-center py-6">
                No stores match your criteria.
              </p>
            )}
          </div>
        </div>

        {/* Right Map */}
        <div className="flex-1 h-full relative">
          <StoreMap stores={filteredStores} selectedStore={selectedStore} />
        </div>

      </div>
    </div>
  );
}