import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const SERVICE_ID = "service_wrif919";
const TEMPLATE_ID = "template_hy3cy8d";
const PUBLIC_KEY = "GwTM7Gy-N7kgmfsnV";

const trek = {
  name: "Hampta Pass Trek",
  state: "Himachal Pradesh",
  duration: "5D / 4N",
  difficulty: "Easy to Moderate",
  altitude: "14,100 ft",
  season: "Jun – Sep",
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
    "Panoramic mountain views",
    "Diverse landscape crossover",
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
    { name: "Triund Trek", slug: "/treks/triund-trek", price: 2999, rating: 4.8, reviews: 180, badge: "Popular", duration: "2D/1N", location: "Himachal" },
    { name: "Kedarkantha Trek", slug: "/treks/kedarkantha-trek", price: 5500, rating: 4.9, reviews: 150, badge: "Bestseller", duration: "5D/4N", location: "Uttarakhand" },
    { name: "Kheerganga Trek", slug: "/treks/kheerganga-trek", price: 1800, rating: 4.7, reviews: 195, badge: "Serene", duration: "3D/2N", location: "Himachal" },
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

const Hamptatrek = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID, TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          destination: trek.name,
          date: selectedDate || "Not specified",
        },
        PUBLIC_KEY
      );
      alert("✅ Enquiry sent successfully! We will contact you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setShowEnquiry(false);
    } catch {
      alert("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#0f1b2d] text-white">

      {/* HERO */}
      <div className="relative h-64 sm:h-80 md:h-[480px] lg:h-[540px] overflow-hidden">
        <img
          src={galleryImages[selectedImage]}
          alt="Hampta Pass Trek"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{ filter: "brightness(0.75)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d] via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 md:left-10 z-20">
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span>/</span>
            <span>Trekking</span>
            <span>/</span>
            <span className="text-white font-semibold">Hampta Pass Trek</span>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-12 pb-8 md:pb-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {trek.duration}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                {trek.difficulty} · {trek.altitude}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                ⭐ {trek.rating} ({trek.reviews} reviews)
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                🏔️ Crossover Trek
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-2">
              Hampta Pass Trek
            </h1>
            <div className="flex flex-wrap gap-3 text-white/70 text-xs sm:text-sm">
              <span>📍 {trek.state}, India</span>
              <span>🌿 Kullu to Spiti Crossover</span>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY THUMBNAILS */}
      <div className="bg-[#0f1b2d] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex gap-2 overflow-x-auto">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === idx
                  ? "border-red-500 ring-2 ring-red-400 scale-105"
                  : "border-white/20 opacity-50 hover:opacity-100"
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
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:-translate-y-0.5 transition-transform">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-0.5">{item.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            {/* OVERVIEW */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-red-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Overview</h2>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7">
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{trek.overview}</p>
              </div>
            </section>

            {/* HIGHLIGHTS */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-red-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Highlights</h2>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trek.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                      <span className="text-sm text-white/80">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ITINERARY */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-red-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Itinerary</h2>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 space-y-6">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-5 border-l-2 border-red-500/40">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{day.day}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-3 ml-1">
                      Day {day.day} — {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((act, ai) => (
                        <li key={ai} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* INCLUSIONS & EXCLUSIONS */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-red-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Inclusions & Exclusions</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-green-500/20 rounded-2xl p-5 sm:p-6">
                  <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
                    What's Included
                  </h3>
                  <ul className="space-y-2.5">
                    {trek.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                        <span className="text-green-400 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-red-500/20 rounded-2xl p-5 sm:p-6">
                  <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">✕</span>
                    What's Excluded
                  </h3>
                  <ul className="space-y-2.5">
                    {trek.exclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
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
            <div className="sticky top-6 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

              {/* Price Header */}
              <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
                <div className="relative z-10">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">₹{trek.price.toLocaleString()}</span>
                    <span className="text-red-100 text-sm font-medium">/ person</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-red-100 text-xs">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                      <span className="font-semibold">{trek.rating}</span>
                      <span className="text-red-200">· {trek.reviews}+ reviews</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Instant confirmation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-5">

                {/* Trust features */}
                <div className="space-y-3 pb-3 border-b border-gray-100">
                  {["Best price guarantee", "Free cancellation available", "24/7 customer support"].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              

                {/* Price info */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base price</span>
                    <span className="font-semibold">₹{trek.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes & fees</span>
                    <span className="font-semibold text-green-600">Included</span>
                  </div>
                 
                </div>

                {/* Book Now */}
                <button
                  onClick={() => setShowEnquiry(true)}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-200 text-sm flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 18v3"/>
                  </svg>
                  Book Now
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/8351846490?text=Hi, I'm interested in ${trek.name}${selectedDate ? ` on ${selectedDate}` : ""}`,
                      "_blank"
                    )
                  }
                  className="w-full bg-[#25D366] hover:bg-[#20b859] text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition text-sm"
                >
                  💬 WhatsApp Inquiry
                </button>

                {/* Trust badges */}
                <div className="flex justify-center gap-4 pt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Secure booking</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300 my-auto" />
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    <span>Easy refunds</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 text-center">Free cancellation up to 7 days before departure</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RELATED TREKS */}
      <div className="border-t border-white/10 py-10 md:py-14 mt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-red-500 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Similar Treks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trek.relatedTreks.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300 border border-gray-100 cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={galleryImages[i] || galleryImages[0]}
                    alt={t.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {t.badge}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-gray-800 leading-snug">{t.name}</h3>
                    <span className="text-red-600 font-black text-base whitespace-nowrap">₹{t.price.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">📍 {t.location}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500 font-semibold">⭐ {t.rating}</span>
                    <span className="text-gray-400">({t.reviews} reviews)</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Link
                      to={t.slug}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => setShowEnquiry(true)}
                      className="flex-1 bg-red-500 text-white py-2 rounded-lg text-xs font-medium hover:bg-red-600 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center text-sm text-white/40">
          © 2025 Flying Feet Holidays • All Rights Reserved • +91 98765 43210
        </div>
      </footer>

      {/* ENQUIRY POPUP */}
      {showEnquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowEnquiry(false)}
        >
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">

            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-t-3xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">Travel Enquiry</h2>
              <p className="text-red-100 text-sm">Let's plan your dream journey</p>
            </div>

            <div className="px-6 pt-4 space-y-2">
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6c0 2.887 1.474 5.523 3.5 7.5A8.5 8.5 0 0010 18a8.5 8.5 0 003.5-2.5c2.026-1.977 3.5-4.613 3.5-7.5a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="text-red-700 font-medium text-sm">{trek.name}</span>
              </div>
              {selectedDate && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-600">
                  📅 Selected date: <span className="font-semibold text-gray-800">{selectedDate}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">

              <div className="relative">
                <input type="text" name="name" placeholder=" " required value={formData.name} onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-3 bg-white px-1 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-500
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
              </div>

              <div className="relative">
                <input type="tel" name="phone" placeholder=" " required value={formData.phone} onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-3 bg-white px-1 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-xs peer-focus:text-red-500
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-[-50%] peer-[:not(:placeholder-shown)]:text-xs">Phone Number</label>
              </div>

              <div className="relative">
                <input type="email" name="email" placeholder=" " required value={formData.email} onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-500
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
              </div>

              <div className="relative">
                <textarea name="message" placeholder=" " rows="3" value={formData.message} onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors resize-none" />
                <label className="absolute left-3 top-4 text-gray-500 text-sm transition-all pointer-events-none
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">Your Message</label>
              </div>

              <button type="submit" disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 disabled:from-red-300 disabled:to-red-300 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Enquiry
                  </>
                )}
              </button>
            </form>

            <div className="px-6 pb-6 flex items-center justify-between">
              <p className="text-xs text-gray-400">We'll get back to you within 24 hours</p>
              <button onClick={() => setShowEnquiry(false)} className="text-gray-400 hover:text-gray-600 text-sm underline">
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Hamptatrek;