import { useState } from "react";

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

const T = {
  navy: "#0a1028",
  navyLight: "#0f1c35",
  red: "#e53e3e",
  text: "#e2e8f0",
  muted: "#94a3b8",
  border: "rgba(255,255,255,0.08)",
  cardBg: "#f8fafc",        // Light off-white for cards
  cardBorder: "#e2e8f0",
};

/* ─── Duration Badge (Red Top) ─── */
function DurationBadge({ duration }) {
  return (
    <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-br-xl shadow-md z-10">
      {duration}
    </div>
  );
}

/* ─── Trek Card - Light Card on Dark Background ─── */
function TrekCard({ trek }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border"
      style={{
        background: T.cardBg,
        borderColor: T.cardBorder,
      }}
    >
      {/* Image Section */}
      <div className="relative h-56">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover"
        />
        <DurationBadge duration={trek.duration} />

        {/* Bottom gradient for better text visibility if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 mb-1 leading-tight">
          {trek.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <span className="text-red-500">📍</span>
          <span className="text-sm font-medium">{trek.state}</span>
        </div>

        {/* Rating + Price */}
        <div className="flex justify-between items-end mb-5">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-2xl leading-none">★</span>
              <span className="text-2xl font-bold text-gray-900">{trek.rating}</span>
            </div>
            <div className="text-sm text-gray-500">({trek.reviews} reviews)</div>
          </div>

          <div className="text-right">
            <div className="text-xs text-gray-500 tracking-wide">STARTING FROM</div>
            <div className="text-3xl font-black text-red-600">
              ₹{trek.price.toLocaleString("en-IN")}
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <div className="space-y-2 mb-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-lg">✔</span>
            Meals Included
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-lg">✔</span>
            Guide Included
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={trek.detailUrl}
            className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl text-center transition-colors"
          >
            View Details
          </a>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/919876543210?text=Hi, I'm interested in booking ${trek.name}`,
                "_blank"
              )
            }
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            Book Now <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function TrekkingPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTreks = treks.filter((t) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "easy") return true; // You can add difficultyLevel back if needed
    if (activeFilter === "moderate") return true;
    if (activeFilter === "hp") return t.state === "Himachal Pradesh";
    if (activeFilter === "uk") return t.state === "Uttarakhand";
    if (activeFilter === "short") return ["2D / 1N", "3D / 2N"].includes(t.duration);
    if (activeFilter === "long") return ["5D / 4N", "6D / 5N"].includes(t.duration);
    return true;
  });

  return (
    <div className="min-h-screen font-sans" style={{ background: T.navy }}>
      {/* Filter Bar */}
      <div
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{
          background: `${T.navyLight}f0`,
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 flex-wrap">
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: T.muted }}>
            Filter:
          </span>
          {filters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive ? "bg-red-600 text-white" : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold" style={{ color: T.text }}>
            All Trekking Packages
          </h2>
          <span
            className="px-5 py-2 rounded-full text-sm"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: T.muted,
              border: `1px solid ${T.border}`,
            }}
          >
            {filteredTreks.length} Treks Available
          </span>
        </div>

        {filteredTreks.length === 0 ? (
          <div className="text-center py-20" style={{ color: T.muted }}>
            <div className="text-6xl mb-4">🏔</div>
            <p>No treks found for this filter.</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-6 text-red-400 underline"
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

      <footer
        className="text-center py-10 text-sm"
        style={{ color: T.muted, borderTop: `1px solid ${T.border}` }}
      >
        © 2025 FHolidays • All Rights Reserved • +91 98765 43210
      </footer>
    </div>
  );
}