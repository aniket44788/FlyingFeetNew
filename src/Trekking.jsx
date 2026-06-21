import React, { useState } from "react";
import { Link } from "react-router-dom";
import kedarkantha from "../src/assets/kedarkantha.jpeg"
import hamptapass from "../src/assets/hamptapass.jpeg"

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
    image: kedarkantha,
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
    image: hamptapass,
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
  { label: "Himachal Pradesh", value: "hp" },
  { label: "Uttarakhand", value: "uk" },
  { label: "Short (2–3D)", value: "short" },
  { label: "Extended (5D+)", value: "long" },
];

function TrekCard({ trek }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 border border-gray-100">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-52 object-cover"
        />
        {/* Duration badge — matches your other cards exactly */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
          {trek.duration}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold text-gray-800 leading-snug">
            {trek.name}
          </h2>
          <h3 className="text-xl font-black text-red-600 whitespace-nowrap">
            ₹{trek.price.toLocaleString("en-IN")}
          </h3>
        </div>

        {/* Location */}
        <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
          📍 {trek.state}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="text-yellow-500 font-semibold">⭐ {trek.rating}</span>
          <span className="text-gray-500">({trek.reviews} reviews)</span>
        </div>

        {/* Inclusions */}
        <div className="mt-4 space-y-1">
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-green-500 mt-[2px]">✔</span>
            <span className="leading-snug">Meals Included</span>
          </p>
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-green-500 mt-[2px]">✔</span>
            <span className="leading-snug">Guide Included</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <Link
            to={trek.detailUrl}
            className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition text-center"
          >
            View Details
          </Link>
          <button
            onClick={() =>
              window.open(
                `https://wa.me/918351846490?text=Hi, I'm interested in booking ${trek.name}`,
                "_blank"
              )
            }
            className="flex-1 bg-red-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition"
          >
            Book Now
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
    if (activeFilter === "short") return ["2D / 1N", "3D / 2N"].includes(t.duration);
    if (activeFilter === "long") return ["5D / 4N", "6D / 5N"].includes(t.duration);
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0f1b2d] text-white">

      {/* HEADING */}
      <div className="w-full flex items-center justify-center pt-10 pb-2">
        <h4 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white text-center leading-[1.05]">
          <span className="text-red-500">All Trekking Packages</span>
        </h4>
      </div>

      {/* FILTER PILLS */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
                ${activeFilter === f.value
                  ? "bg-red-500 text-white border-red-500 shadow-md"
                  : "bg-transparent text-white/70 border-white/20 hover:border-red-400 hover:text-white"
                }`}
            >
              {f.label}
            </button>
          ))}

          {/* Count badge */}
          <span className="px-5 py-2 rounded-full text-sm bg-white/10 text-white/60 border border-white/10">
            {filteredTreks.length} Treks
          </span>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          {filteredTreks.length === 0 ? (
            <div className="text-center py-20 text-white/50">
              <div className="text-6xl mb-4">🏔️</div>
              <p className="text-xl">No treks found for this filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-6 text-red-400 hover:text-red-300 underline"
              >
                Show all treks
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* EXPLORE MORE BUTTON */}
      <div className="flex justify-center pb-10 px-4">
        <button className="w-full max-w-2xl text-white bg-red-500 hover:bg-red-600 transition px-4 py-2.5 rounded-lg text-sm sm:text-base font-medium">
          Explore more treks
        </button>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        © 2025 Flying Feet Holidays • All Rights Reserved • +91 98765 43210
      </footer>

    </div>
  );
}