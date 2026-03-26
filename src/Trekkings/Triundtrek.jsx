import React, { useState } from "react";
import triundImg from "../assets/animemountain.png";

const trek = {
  name: "Triund Trek",
  state: "Himachal Pradesh",
  duration: "2D / 1N",
  difficulty: "Easy",
  altitude: "9350 ft",
  season: "Mar – Jun, Sep – Dec",
  startPoint: "McLeodganj",
  price: 2999,
  rating: 4.8,
  reviews: 180,
  overview:
    "Triund Trek is one of the most popular treks in Himachal Pradesh. It offers stunning views of the Dhauladhar range and is perfect for beginners looking for a short Himalayan adventure.",
  highlights: [
    "Stunning views of Dhauladhar Range",
    "Perfect beginner trek",
    "Camping under the stars",
    "Sunrise & sunset panoramas",
    "Guided forest trail walk",
    "Fully catered camp meals",
  ],
  inclusions: ["Transport", "All Meals", "Trek Guide", "Camping", "Sleeping Bags"],
  exclusions: ["Personal Expenses", "Travel Insurance"],
  itinerary: [
    {
      day: 1,
      title: "McLeodganj → Triund Top",
      activities: [
        "Early morning assembly at McLeodganj",
        "Trek through dense rhododendron forest trails",
        "Arrive at Triund Top — set up camp",
        "Sunset views over the Kangra Valley",
      ],
    },
    {
      day: 2,
      title: "Triund Top → McLeodganj",
      activities: [
        "Wake up to golden Himalayan sunrise",
        "Hot breakfast at camp",
        "Leisurely descent back to McLeodganj",
        "Trip concludes by afternoon",
      ],
    },
  ],
  relatedTreks: [
    { name: "Triund Trek", price: 2999, rating: 4.8, reviews: 180, badge: "Popular" },
    { name: "Kedarkantha Trek", price: 8999, rating: 4.9, reviews: 150, badge: "Bestseller" },
    { name: "Hampta Pass Trek", price: 6499, rating: 4.7, reviews: 210, badge: "Scenic" },
  ],
};

const quickInfoItems = [
  { icon: "⏱", label: "Duration", value: trek.duration },
  { icon: "📶", label: "Difficulty", value: trek.difficulty },
  { icon: "⛰", label: "Max Altitude", value: trek.altitude },
  { icon: "🌤", label: "Best Season", value: trek.season },
  { icon: "📍", label: "Start Point", value: trek.startPoint },
];

const Triundtrek = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPeople, setSelectedPeople] = useState(2);
  const [activeTab, setActiveTab] = useState("overview");

  const total = trek.price * selectedPeople;

  return (
    <div className="min-h-screen bg-[#f5f3ef] font-sans text-[#1a1a1a]">

      {/* ─── HERO ─── */}
      <div className="relative h-[520px] md:h-[620px] overflow-hidden">
        <img
          src={triundImg}
          alt="Triund Trek"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.72)" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 md:left-12 z-10">
          <div className="flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase">
            <span>Home</span>
            <span>/</span>
            <span>Trekking</span>
            <span>/</span>
            <span className="text-white">Triund Trek</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                {trek.duration}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                {trek.difficulty}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                ★ {trek.rating} · {trek.reviews} reviews
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-3"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-1px" }}
            >
              Triund Trek
            </h1>

            <div className="flex items-center gap-2 text-white/80 text-base">
              <span>📍</span>
              <span className="tracking-wide">{trek.state}, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── THUMBNAIL STRIP ─── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-3 flex gap-3 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-28 h-18 md:w-36 md:h-22 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                i === 1 ? "border-orange-500 opacity-100" : "border-transparent opacity-60 hover:opacity-90"
              }`}
              style={{ height: "72px" }}
            >
              <img src={triundImg} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── NAV TABS ─── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {["overview", "highlights", "itinerary", "inclusions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-4 text-sm font-semibold tracking-wide capitalize border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-8">

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {quickInfoItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{item.label}</div>
                <div className="text-sm font-bold text-gray-800 leading-tight">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-7 bg-orange-500 rounded-full" />
              <h2 className="text-xl md:text-2xl font-black tracking-tight">Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-[15px]">{trek.overview}</p>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 bg-orange-500 rounded-full" />
              <h2 className="text-xl md:text-2xl font-black tracking-tight">Highlights</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trek.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3"
                >
                  <span className="text-green-500 mt-0.5 text-lg leading-none">✓</span>
                  <span className="text-gray-700 text-sm font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-7 bg-orange-500 rounded-full" />
              <h2 className="text-xl md:text-2xl font-black tracking-tight">Itinerary</h2>
            </div>
            <div className="space-y-6">
              {trek.itinerary.map((day, idx) => (
                <div key={day.day} className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
                    {day.day}
                  </div>
                  {/* Vertical line */}
                  {idx < trek.itinerary.length - 1 && (
                    <div className="absolute left-3.5 top-8 bottom-[-24px] w-px bg-orange-200" />
                  )}
                  <div className="font-bold text-base md:text-lg text-gray-900 mb-3">{day.title}</div>
                  <div className="space-y-2">
                    {day.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-600 text-[14px]">
                        <span className="text-orange-400 mt-0.5">▸</span>
                        {act}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions / Exclusions */}
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-7 bg-orange-500 rounded-full" />
              <h2 className="text-xl md:text-2xl font-black tracking-tight">Inclusions & Exclusions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
                  Included
                </h3>
                <div className="space-y-2.5">
                  {trek.inclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-gray-700 text-sm">
                      <span className="text-green-500 text-base">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">✕</span>
                  Excluded
                </h3>
                <div className="space-y-2.5">
                  {trek.exclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-gray-700 text-sm">
                      <span className="text-red-400 text-base">✕</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR ─── */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 sticky top-[68px] overflow-hidden">

            {/* Price header */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black">₹{trek.price.toLocaleString()}</span>
                <span className="text-orange-100 text-sm">/ person</span>
              </div>
              <div className="flex items-center gap-1 text-orange-100 text-sm">
                <span>★ {trek.rating}</span>
                <span className="mx-1">·</span>
                <span>{trek.reviews} reviews</span>
              </div>
            </div>

            <div className="p-6 space-y-4">

              {/* Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Select Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100 bg-gray-50"
                >
                  <option value="">Choose a date</option>
                  <option value="2025-04-05">05 Apr 2025</option>
                  <option value="2025-04-12">12 Apr 2025</option>
                  <option value="2025-05-03">03 May 2025</option>
                  <option value="2025-05-17">17 May 2025</option>
                </select>
              </div>

              {/* People */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Number of People
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                  <button
                    onClick={() => setSelectedPeople(Math.max(1, selectedPeople - 1))}
                    className="px-4 py-3 text-orange-500 font-bold text-xl hover:bg-orange-50 transition-colors"
                  >−</button>
                  <div className="flex-1 text-center font-bold text-gray-800">
                    {selectedPeople} {selectedPeople === 1 ? "Person" : "People"}
                  </div>
                  <button
                    onClick={() => setSelectedPeople(Math.min(8, selectedPeople + 1))}
                    className="px-4 py-3 text-orange-500 font-bold text-xl hover:bg-orange-50 transition-colors"
                  >+</button>
                </div>
              </div>

              {/* Total */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Total Amount</span>
                <span className="text-xl font-black text-orange-600">₹{total.toLocaleString()}</span>
              </div>

              {/* Book button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all py-4 rounded-xl text-white font-bold text-base tracking-wide shadow-md shadow-orange-200">
                Book Now →
              </button>

              {/* WhatsApp */}
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/919876543210?text=Hi, I'm interested in Triund Trek`,
                    "_blank"
                  )
                }
                className="w-full bg-[#25d366] hover:bg-[#20bc5a] active:scale-[0.98] transition-all py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2.5 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.345-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                WhatsApp Inquiry
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 Secure booking · Free cancellation up to 7 days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RELATED TREKS ─── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-1 h-7 bg-orange-500 rounded-full" />
          <h2 className="text-xl md:text-2xl font-black tracking-tight">You Might Also Like</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {trek.relatedTreks.map((rt, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={triundImg}
                  alt={rt.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {rt.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-1">{rt.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-black text-orange-500">₹{rt.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{rt.rating}</span>
                    <span className="text-gray-400">({rt.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#111827] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="font-bold text-white text-lg tracking-tight">FHolidays</div>
          <div>© 2025 FHolidays. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+91 98764 32100</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Triundtrek;