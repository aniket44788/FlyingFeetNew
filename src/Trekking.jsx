import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import your local images
import animemountain from "./assets/animemountain.png";
import atal from "./assets/atal.png";

const treks = [
  {
    id: "triund",
    name: "Triund Trek",
    state: "Himachal Pradesh",
    duration: "2D / 1N",
    price: 2999,
    rating: 4.8,
    reviews: 120,
    image: animemountain,
    detailUrl: "/treks/triund-trek",
  },
  {
    id: "kedarkantha",
    name: "Kedarkantha Trek",
    state: "Uttarakhand",
    duration: "6D / 5N",
    price: 8999,
    rating: 4.9,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1544980913-3f1f4f9c8e0f",
    detailUrl: "/treks/kedarkantha-trek",
  },
  {
    id: "hampta",
    name: "Hampta Pass Trek",
    state: "Himachal Pradesh",
    duration: "5D / 4N",
    price: 7999,
    rating: 4.8,
    reviews: 100,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    detailUrl: "/treks/hampta-pass-trek",
  },
  {
    id: "kareri",
    name: "Kareri Lake Trek",
    state: "Himachal Pradesh",
    duration: "2D / 1N",
    price: 1500,
    rating: 4.7,
    reviews: 140,
    image: atal,
    detailUrl: "/treks/kareri-lake-trek",
  },
  {
    id: "kheerganga",
    name: "Kheerganga Trek",
    state: "Himachal Pradesh",
    duration: "3D / 2N",
    price: 1800,
    rating: 4.7,
    reviews: 195,
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e",
    detailUrl: "/treks/kheerganga-trek",
  },
  {
    id: "thatharana",
    name: "Thatharana Trek",
    state: "Himachal Pradesh",
    duration: "2D / 1N",
    price: 1499,
    rating: 4.6,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    detailUrl: "/treks/thatharana-trek",
  },
  {
    id: "sarpass",
    name: "Sar Pass Trek",
    state: "Himachal Pradesh",
    duration: "6D / 5N",
    price: 6499,
    rating: 4.8,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
    detailUrl: "/treks/sar-pass-trek",
  },
  {
    id: "nagtibba",
    name: "Nag Tibba Trek",
    state: "Uttarakhand",
    duration: "5D / 4N",
    price: 6499,
    rating: 4.7,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    detailUrl: "/treks/nag-tibba-trek",
  },
];

const filters = [
  { label: "All Treks", value: "all" },
  { label: "Easy", value: "easy" },
  { label: "Moderate", value: "moderate" },
  { label: "Himachal Pradesh", value: "hp" },
  { label: "Uttarakhand", value: "uk" },
  { label: "Short (2–3D)", value: "short" },
  { label: "Extended (5D+)", value: "long" },
];

function DurationBadge({ duration }) {
  return (
    <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-br-xl shadow-md z-10">
      {duration}
    </div>
  );
}

function TrekCard({ trek }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
      {/* Image Section */}
      <div className="relative h-56">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <DurationBadge duration={trek.duration} />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 leading-tight text-gray-900">
          {trek.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-5 text-gray-600">
          <span className="text-orange-500">📍</span>
          <span className="text-sm font-medium">{trek.state}</span>
        </div>

        {/* Rating + Price */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-3xl leading-none">★</span>
              <span className="text-3xl font-bold text-gray-900">
                {trek.rating}
              </span>
            </div>
            <div className="text-xs text-gray-500">
              ({trek.reviews} reviews)
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs tracking-widest text-gray-500">
              STARTING FROM
            </div>
            <div className="text-3xl font-black text-orange-500">
              ₹{trek.price.toLocaleString("en-IN")}
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <div className="space-y-2 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✔</span>
            Meals Included
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✔</span>
            Guide Included
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to={trek.detailUrl}
            className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold py-3.5 rounded-2xl text-center transition-all duration-200"
          >
            View Details
          </Link>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/919876543210?text=Hi, I'm interested in booking ${trek.name}`,
                "_blank",
              )
            }
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200"
          >
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TrekkingPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTreks = treks.filter((t) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "hp") return t.state === "Himachal Pradesh";
    if (activeFilter === "uk") return t.state === "Uttarakhand";
    if (activeFilter === "short")
      return ["2D / 1N", "3D / 2N"].includes(t.duration);
    if (activeFilter === "long")
      return ["5D / 4N", "6D / 5N"].includes(t.duration);
    return true;
  });

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            All Trekking Packages
          </h2>
          <span className="px-5 py-2 rounded-full text-sm bg-gray-100 text-gray-600">
            {filteredTreks.length} Treks Available
          </span>
        </div>

        {filteredTreks.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <div className="text-6xl mb-4">🏔️</div>
            <p className="text-xl">No treks found for this filter.</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-6 text-orange-500 hover:text-orange-600 underline"
            >
              Show all treks
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        © 2025 FHolidays • All Rights Reserved • +91 98765 43210
      </footer>
    </div>
  );
}
