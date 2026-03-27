import React, { useState } from "react";

const trek = {
  name: "Thatharana Trek",
  state: "Himachal Pradesh",
  duration: "2D / 1N",
  difficulty: "Easy",
  altitude: "9,500 ft",
  season: "Year-round",
  startPoint: "Kareri Village",
  price: 1499,
  rating: 4.6,
  reviews: 90,
  overview:
    "Thatharana Trek is a perfect short trekking experience in Himachal Pradesh, offering breathtaking views of the Kangra Valley and the majestic Dhauladhar ranges. It's ideal for beginners seeking a quick escape into nature.",
  highlights: [
    "Panoramic views of Kangra Valley",
    "Camping with valley views",
    "Perfect beginner trek",
    "Stunning sunrise & sunset",
  ],
  inclusions: ["Meals", "Trek Guide", "Camping", "Sleeping Bags"],
  exclusions: ["Personal Expenses", "Travel Insurance"],
  itinerary: [
    {
      day: 1,
      title: "Kareri Village to Thatharana",
      activities: [
        "Start trek from Kareri Village",
        "Begin trek through dense forest",
        "Reach Thatharana campsite",
        "Overnight camping",
      ],
    },
    {
      day: 2,
      title: "Thatharana to Kareri Village",
      activities: [
        "Enjoy beautiful sunrise view",
        "Descend back to Kareri Village",
        "Trip ends",
      ],
    },
  ],
};

const quickInfoItems = [
  { icon: "⏱️", label: "Duration", value: trek.duration },
  { icon: "📶", label: "Difficulty", value: trek.difficulty },
  { icon: "⛰️", label: "Max Altitude", value: trek.altitude },
  { icon: "🌤️", label: "Best Season", value: trek.season },
  { icon: "📍", label: "Start Point", value: trek.startPoint },
];

const Thatharnatrek = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPeople, setSelectedPeople] = useState(2);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  const total = trek.price * selectedPeople;

  const galleryImages = [
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
  ];

  const T = {
    darkBg: "#0F1B2D",
    cardBg: "#1E2937",
    cardBorder: "rgba(255,255,255,0.08)",
    text: "#E2E8F0",
    muted: "#94A3B8",
    accent: "#F97316",
    red: "#EF4444",
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: T.darkBg }}>

      {/* HERO SECTION */}
      <div className="relative h-[520px] md:h-[620px] overflow-hidden">
        <img
          src={galleryImages[selectedImage]}
          alt="Thatharana Trek"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.65)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="absolute top-6 left-6 md:left-12 z-10">
          <div className="flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase">
            <span>Home</span><span>/</span><span>Trekking</span><span>/</span>
            <span className="text-white">Thatharana Trek</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                {trek.duration}
              </span>
              <span className="backdrop-blur-md bg-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
                {trek.difficulty}
              </span>
              <span className="backdrop-blur-md bg-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
                ★ {trek.rating} · {trek.reviews} reviews
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-3">
              Thatharana Trek
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-base">
              <span>📍</span>
              <span>{trek.state}, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY THUMBNAIL STRIP */}
      <div 
        className="border-b -mt-4 relative z-30 rounded-t-3xl mx-4 md:mx-8 max-w-6xl"
        style={{ backgroundColor: T.cardBg, borderColor: T.cardBorder }}
      >
        <div className="px-6 md:px-12 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`flex-shrink-0 w-28 md:w-36 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                selectedImage === idx 
                  ? "ring-2 ring-orange-500 border-orange-500" 
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* STICKY TABS */}
      <div 
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: T.darkBg, borderColor: T.cardBorder }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {["overview", "highlights", "itinerary", "inclusions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-8 py-4 text-sm font-semibold tracking-wide capitalize border-b-2 transition-all ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-8">

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {quickInfoItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 text-center transition-all hover:-translate-y-1"
                style={{ backgroundColor: T.cardBg, border: `1px solid ${T.cardBorder}` }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: T.muted }}>
                  {item.label}
                </div>
                <div className="text-sm font-semibold" style={{ color: T.text }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          {activeTab === "overview" && (
            <div className="rounded-3xl p-8" style={{ backgroundColor: T.cardBg, border: `1px solid ${T.cardBorder}` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-2xl font-bold" style={{ color: T.text }}>Overview</h2>
              </div>
              <p className="text-base leading-relaxed" style={{ color: T.muted }}>
                {trek.overview}
              </p>
            </div>
          )}

          {/* Highlights */}
          {activeTab === "highlights" && (
            <div className="rounded-3xl p-8" style={{ backgroundColor: T.cardBg, border: `1px solid ${T.cardBorder}` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-2xl font-bold" style={{ color: T.text }}>Highlights</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trek.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ backgroundColor: "#0F1B2D", border: `1px solid rgba(249,115,22,0.2)` }}
                  >
                    <span className="text-orange-500 text-xl mt-0.5">✓</span>
                    <span className="text-sm" style={{ color: T.muted }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary */}
          {activeTab === "itinerary" && (
            <div className="rounded-3xl p-8" style={{ backgroundColor: T.cardBg, border: `1px solid ${T.cardBorder}` }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-2xl font-bold" style={{ color: T.text }}>Itinerary</h2>
              </div>
              <div className="space-y-10">
                {trek.itinerary.map((day, idx) => (
                  <div key={day.day} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-9 h-9 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {day.day}
                    </div>
                    {idx < trek.itinerary.length - 1 && (
                      <div className="absolute left-[18px] top-11 bottom-[-40px] w-0.5 bg-white/10" />
                    )}
                    <div className="font-bold text-xl mb-4" style={{ color: T.text }}>
                      {day.title}
                    </div>
                    <div className="space-y-3">
                      {day.activities.map((act, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm md:text-base" style={{ color: T.muted }}>
                          <span className="text-orange-400 mt-1 text-lg">▸</span>
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions & Exclusions */}
          {activeTab === "inclusions" && (
            <div className="rounded-3xl p-8" style={{ backgroundColor: T.cardBg, border: `1px solid ${T.cardBorder}` }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-2xl font-bold" style={{ color: T.text }}>Inclusions & Exclusions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6" style={{ backgroundColor: "#0F1B2D", border: `1px solid rgba(34,197,151,0.3)` }}>
                  <h3 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                    Included
                  </h3>
                  <div className="space-y-3" style={{ color: T.muted }}>
                    {trek.inclusions.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-emerald-500">✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ backgroundColor: "#0F1B2D", border: `1px solid rgba(239,68,68,0.3)` }}>
                  <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">✕</span>
                    Excluded
                  </h3>
                  <div className="space-y-3" style={{ color: T.muted }}>
                    {trek.exclusions.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-red-400">✕</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - Booking Card */}
        <div className="lg:col-span-4">
          <div 
            className="sticky top-8 rounded-3xl overflow-hidden border shadow-2xl"
            style={{ backgroundColor: T.cardBg, borderColor: T.cardBorder }}
          >
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 text-white">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black">₹{trek.price}</span>
                <span className="text-red-200 text-base">/ person</span>
              </div>
              <div className="text-red-100 text-sm mt-1">
                ★ {trek.rating} • {trek.reviews} reviews
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: T.muted }}>
                  Select Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full rounded-2xl px-4 py-3.5 text-sm"
                  style={{ backgroundColor: "#0F1B2D", color: T.text, border: `1px solid ${T.cardBorder}` }}
                >
                  <option value="">Choose a date</option>
                  <option value="2025-03-10">10 Mar 2025</option>
                  <option value="2025-06-15">15 Jun 2025</option>
                  <option value="2025-09-20">20 Sep 2025</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: T.muted }}>
                  Number of People
                </label>
                <div className="flex items-center rounded-2xl p-1" style={{ backgroundColor: "#0F1B2D", border: `1px solid ${T.cardBorder}` }}>
                  <button
                    onClick={() => setSelectedPeople(Math.max(1, selectedPeople - 1))}
                    className="w-12 h-12 text-3xl text-orange-500 hover:bg-white/10 rounded-xl transition-all"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center font-bold text-lg" style={{ color: T.text }}>
                    {selectedPeople} {selectedPeople === 1 ? "Person" : "People"}
                  </div>
                  <button
                    onClick={() => setSelectedPeople(Math.min(10, selectedPeople + 1))}
                    className="w-12 h-12 text-3xl text-orange-500 hover:bg-white/10 rounded-xl transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="rounded-2xl p-4 flex justify-between items-center" style={{ backgroundColor: "#0F1B2D", border: `1px solid rgba(249,115,22,0.2)` }}>
                <span style={{ color: T.muted }}>Total Amount</span>
                <span className="text-2xl font-black text-orange-500">₹{total}</span>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl text-white font-bold text-base transition-all active:scale-[0.97]">
                Book Now →
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/919876543210?text=Hi, I'm interested in Thatharana Trek for ${selectedPeople} person(s)`,
                    "_blank"
                  )
                }
                className="w-full bg-[#25D366] hover:bg-[#20b859] py-3.5 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 transition-all"
              >
                WhatsApp Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t py-10" style={{ backgroundColor: "#0A1321", borderColor: T.cardBorder }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center text-sm" style={{ color: T.muted }}>
          © 2025 FHolidays • All Rights Reserved • +91 98765 43210
        </div>
      </footer>
    </div>
  );
};

export default Thatharnatrek;