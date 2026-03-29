import React, { useState } from "react";

const trek = {
  name: "Hampta Pass Trek",
  state: "Himachal Pradesh",
  duration: "5D / 4N",
  difficulty: "Easy to Moderate",
  altitude: "14,100 ft",
  season: "Jun - Sep",
  startPoint: "Jobra (via Manali)",
  price: 7500,
  rating: 4.8,
  reviews: 210,
  overview:
    "Hampta Pass Trek is the adventurous crossover trek from the lush green valleys of Kullu to the arid landscapes of Spiti. This varied landscape including green meadows, snow-covered passes, and rugged terrains, is perfect for both beginners and experienced trekkers. The highlight of the trek is a visit to the stunning Chandratal Lake, one of the most beautiful high-altitude lakes in India.",
  highlights: [
    "Lush green valleys of Kullu",
    "Cross the snow-covered Hampta Pass",
    "Camping at Chandratal Lake",
    "Rugged terrain of Spiti Valley",
  ],
  inclusions: ["Transport", "All Meals", "Trek Guide", "Camping", "Sleeping Bags"],
  exclusions: ["Personal Expenses", "Travel Insurance", "Porter Charges"],
  itinerary: [
    {
      day: 1,
      title: "Manali to Jobra to Chika",
      activities: [
        "Drive from Manali to Jobra",
        "Start trek to Chika campsite",
        "River side scenic walk",
        "Overnight camping",
      ],
    },
    {
      day: 2,
      title: "Chika to Balu Ka Ghera",
      activities: [
        "Trek through lush green meadows",
        "Cross small streams",
        "Reach Balu Ka Ghera campsite",
        "Overnight camping",
      ],
    },
    {
      day: 3,
      title: "Balu Ka Ghera to Hampta Pass to Shea Goru",
      activities: [
        "Early morning trek",
        "Climb to Hampta Pass (14,100 ft)",
        "Enjoy panoramic mountain views",
        "Descend to Shea Goru",
        "Overnight camping",
      ],
    },
    {
      day: 4,
      title: "Shea Goru to Chhatru",
      activities: [
        "Trek down through rocky terrain",
        "Follow river trails",
        "Reach Chhatru campsite",
        "Overnight camping",
      ],
    },
    {
      day: 5,
      title: "Chhatru to Chandratal to Manali",
      activities: [
        "Drive to Chandratal Lake",
        "Explore & enjoy lake views",
        "Return drive to Manali",
        "Trip ends",
      ],
    },
  ],
  relatedTreks: [
    { name: "Triund Trek", price: 2999, rating: 4.8, reviews: 180, badge: "Popular", duration: "2D/1N", location: "Himachal" },
    { name: "Kedarkantha Trek", price: 5500, rating: 4.9, reviews: 150, badge: "Bestseller", duration: "5D/4N", location: "Uttarakhand" },
    { name: "Kheerganga Trek", price: 1800, rating: 4.7, reviews: 195, badge: "Serene", duration: "3D/2N", location: "Himachal" },
  ],
};

const quickInfoItems = [
  { icon: "⏱️", label: "Duration", value: trek.duration },
  { icon: "📶", label: "Difficulty", value: trek.difficulty },
  { icon: "⛰️", label: "Max Altitude", value: trek.altitude },
  { icon: "🌤️", label: "Best Season", value: trek.season },
  { icon: "📍", label: "Start Point", value: trek.startPoint },
];

const galleryImages = [
  "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2101136/pexels-photo-2101136.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2084795/pexels-photo-2084795.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const Hemantatrek = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPeople, setSelectedPeople] = useState(2);
  const [selectedImage, setSelectedImage] = useState(0);

  const total = trek.price * selectedPeople;

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">

      {/* HERO */}
      <div className="relative h-64 sm:h-80 md:h-[480px] lg:h-[560px] overflow-hidden">
        <img
          src={galleryImages[selectedImage]}
          alt="Hampta Pass Trek"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 md:left-10 z-20">
          <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span>/</span>
            <span>Trekking</span>
            <span>/</span>
            <span className="text-white font-semibold">Hampta Pass Trek</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-12 pb-8 md:pb-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {trek.duration}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                {trek.difficulty} · {trek.altitude}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                ★ {trek.rating} ({trek.reviews} reviews)
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                🏔️ Crossover Trek
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-2">
              Hampta Pass Trek
            </h1>
            <div className="flex flex-wrap gap-3 text-white/80 text-xs sm:text-sm">
              <span>📍 {trek.state}, India</span>
              <span>🌿 Kullu to Spiti Crossover</span>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY THUMBNAILS */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex gap-2 overflow-x-auto">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === idx
                  ? "border-orange-500 ring-2 ring-orange-300 scale-105"
                  : "border-gray-200 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-8">

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {quickInfoItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:-translate-y-0.5 transition-transform"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-800">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* ── OVERVIEW ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Overview</h2>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {trek.overview}
                </p>
              </div>
            </section>

            {/* ── HIGHLIGHTS ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Highlights</h2>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trek.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100"
                    >
                      <span className="text-orange-500 font-bold mt-0.5 text-sm">✓</span>
                      <span className="text-sm text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── ITINERARY ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Itinerary</h2>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm space-y-6">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-5 border-l-2 border-orange-200">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{day.day}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 ml-1">
                      Day {day.day} — {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((act, ai) => (
                        <li key={ai} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-orange-400 mt-0.5">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── INCLUSIONS & EXCLUSIONS ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-orange-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Inclusions & Exclusions</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-100 shadow-sm">
                  <h3 className="font-bold text-emerald-600 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                    What's Included
                  </h3>
                  <ul className="space-y-2.5">
                    {trek.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="text-emerald-500 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-red-100 shadow-sm">
                  <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">✕</span>
                    What's Excluded
                  </h3>
                  <ul className="space-y-2.5">
                    {trek.exclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="text-red-400 font-bold">✕</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN — Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Price Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5 sm:p-6 text-white">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black">₹{trek.price.toLocaleString()}</span>
                  <span className="text-orange-100 text-sm">/ person</span>
                </div>
                <div className="flex items-center gap-2 text-orange-100 text-xs mt-1">
                  <span>★ {trek.rating}</span>
                  <span>·</span>
                  <span>{trek.reviews}+ reviews</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                {/* Date Picker */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                    Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50"
                  >
                    <option value="">Choose a date</option>
                    <option value="2026-06-10">10 Jun 2026</option>
                    <option value="2026-06-25">25 Jun 2026</option>
                    <option value="2026-07-15">15 Jul 2026</option>
                    <option value="2026-08-05">05 Aug 2026</option>
                    <option value="2026-08-25">25 Aug 2026</option>
                  </select>
                </div>

                {/* People Counter */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                    Travellers
                  </label>
                  <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-2 bg-gray-50">
                    <button
                      onClick={() => setSelectedPeople(Math.max(1, selectedPeople - 1))}
                      className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-lg flex items-center justify-center hover:bg-orange-200 transition"
                    >−</button>
                    <span className="flex-1 text-center font-bold text-gray-800 text-base">{selectedPeople}</span>
                    <button
                      onClick={() => setSelectedPeople(Math.min(10, selectedPeople + 1))}
                      className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-lg flex items-center justify-center hover:bg-orange-200 transition"
                    >+</button>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between py-3 border-t border-b border-gray-100">
                  <span className="text-sm text-gray-500">Total ({selectedPeople} person{selectedPeople > 1 ? "s" : ""})</span>
                  <span className="text-xl font-black text-gray-900">₹{total.toLocaleString()}</span>
                </div>

                {/* Book Now */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all text-sm sm:text-base shadow-md shadow-orange-200 active:scale-95">
                  Book Now →
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/919876543210?text=Hi, I'm interested in Hampta Pass Trek for ${selectedPeople} person(s)`,
                      "_blank"
                    )
                  }
                  className="w-full bg-[#25D366] hover:bg-[#20b859] text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition text-sm"
                >
                  💬 WhatsApp Inquiry
                </button>

                <p className="text-xs text-gray-400 text-center">Free cancellation up to 7 days before departure</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RELATED TREKS */}
      <div className="bg-white border-t border-gray-100 py-10 md:py-14 mt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-orange-500 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Similar Treks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trek.relatedTreks.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition group cursor-pointer">
                <div className="relative h-36 sm:h-44 overflow-hidden bg-gray-200">
                  <img
                    src={galleryImages[i] || galleryImages[0]}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {t.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">{t.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span>📍 {t.location}</span>
                    <span>·</span>
                    <span>{t.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-orange-600">₹{t.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400">★ {t.rating} ({t.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center text-sm text-gray-400">
          © 2025 FHolidays • All Rights Reserved • +91 98765 43210
        </div>
      </footer>

    </div>
  );
};

export default Hemantatrek;