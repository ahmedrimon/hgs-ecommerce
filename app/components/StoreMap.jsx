"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Crest Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function MapController({ selectedStore }) {
  const map = useMap();

  useEffect(() => {
    if (selectedStore) {
      map.flyTo([selectedStore.lat, selectedStore.lng], 12, { duration: 1.5 });
    }
  }, [selectedStore, map]);

  return null;
}

export default function StoreMap({ stores, selectedStore }) {
  const defaultCenter = [30.0, 0.0]; // World view

  return (
    <MapContainer
      center={defaultCenter}
      zoom={2}
      scrollWheelZoom={true}
      className="w-full h-full z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <MapController selectedStore={selectedStore} />

      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.lat, store.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="font-serif p-1 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                {store.name}
              </h4>
              <p className="text-[11px] text-neutral-600 leading-tight">
                {store.address}<br />
                {store.city}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}