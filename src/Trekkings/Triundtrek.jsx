import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const SERVICE_ID = "service_wrif919";
const TEMPLATE_ID = "template_hy3cy8d";
const PUBLIC_KEY = "GwTM7Gy-N7kgmfsnV";

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
    "Triund Trek is one of the most popular treks in Himachal Pradesh. It offers stunning views of the Dhauladhar range and is perfect for beginners looking for a short Himalayan adventure. The trail winds through dense rhododendron and oak forests before opening up to sweeping panoramas of the entire Kangra Valley below.",
  highlights: [
    "Stunning views of Dhauladhar Range",
    "Perfect beginner trek",
    "Camping under the stars",
    "Sunrise & sunset panoramas",
    "Guided forest trail walk",
    "Fully catered camp meals",
  ],
  inclusions: ["Transport", "All Meals", "Trek Guide", "Camping Equipment", "Sleeping Bags"],
  exclusions: ["Personal Expenses", "Travel Insurance", "Any kind of drinks"],
  itinerary: [
    {
      day: 1,
      title: "McLeodganj → Triund Top",
      activities: [
        "Early morning assembly at McLeodganj (9:00 AM)",
        "Trek through dense rhododendron forest trails (4-5 hrs)",
        "Arrive at Triund Top — set up camp",
        "Sunset views over the Kangra Valley",
        "Bonfire & dinner under starlit sky",
      ],
    },
    {
      day: 2,
      title: "Triund Top → McLeodganj",
      activities: [
        "Wake up to golden Himalayan sunrise",
        "Hot breakfast at camp with mountain views",
        "Leisurely descent back to McLeodganj",
        "Trip concludes by afternoon (1:00 PM)",
      ],
    },
  ],
  relatedTreks: [
    { name: "Kedarkantha Trek", slug: "/treks/kedarkantha-trek", price: 8999, rating: 4.9, reviews: 150, badge: "Bestseller", duration: "6D/5N", location: "Uttarakhand" },
    { name: "Hampta Pass Trek", slug: "/treks/hampta-pass-trek", price: 6499, rating: 4.7, reviews: 210, badge: "Scenic", duration: "5D/4N", location: "Himachal" },
  ],
};

const quickInfoItems = [
  { icon: "⏱️", label: "Duration", value: trek.duration },
  { icon: "📶", label: "Difficulty", value: trek.difficulty },
  { icon: "⛰️", label: "Altitude", value: trek.altitude },
  { icon: "🌤️", label: "Best Season", value: trek.season },
  { icon: "📍", label: "Start Point", value: trek.startPoint },
];

const galleryImages = [
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2101136/pexels-photo-2101136.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2084795/pexels-photo-2084795.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const Triundtrek = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPeople, setSelectedPeople] = useState(2);
  const [selectedImage, setSelectedImage] = useState(0);

  // Enquiry popup state
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const total = trek.price * selectedPeople;

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
          people: selectedPeople,
          total: `₹${total.toLocaleString()}`,
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
          alt="Triund Trek"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d] via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 md:left-10 z-20">
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span>/</span>
            <span>Trekking</span>
            <span>/</span>
            <span className="text-white font-semibold">Triund Trek</span>
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
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-2">
              Triund Trek
            </h1>
            <div className="flex flex-wrap gap-3 text-white/70 text-xs sm:text-sm">
              <span>📍 {trek.state}, India</span>
              <span>🏔️ Beginner Friendly</span>
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
              className={`flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${selectedImage === idx
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
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:-translate-y-0.5 transition-transform"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {item.value}
                  </div>
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
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {trek.overview}
                </p>
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
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
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
            <div className="sticky top-6 bg-white rounded-3xl overflow-hidden shadow-2xl">

              {/* Price Header */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-5 sm:p-6 text-white">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black">₹{trek.price.toLocaleString()}</span>
                  <span className="text-red-100 text-sm">/ person</span>
                </div>
                <div className="flex items-center gap-2 text-red-100 text-xs mt-1">
                  <span>⭐ {trek.rating}</span>
                  <span>·</span>
                  <span>{trek.reviews}+ reviews</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-5">


                {/* Book Now CTA */}
                <button
                  onClick={() => setShowEnquiry(true)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-md shadow-red-200 text-sm"
                >
                  Book Now
                </button>



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

      {/* ENQUIRY POPUP */}
      {showEnquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowEnquiry(false)}
        >
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-t-3xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">Travel Enquiry</h2>
              <p className="text-red-100 text-sm">Let's plan your dream journey</p>
            </div>

            {/* Tour + booking summary badge */}
            <div className="px-6 pt-4 space-y-2">
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6c0 2.887 1.474 5.523 3.5 7.5A8.5 8.5 0 0010 18a8.5 8.5 0 003.5-2.5c2.026-1.977 3.5-4.613 3.5-7.5a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="text-red-700 font-medium text-sm">{trek.name}</span>
              </div>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">

              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-3 bg-white px-1 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-500
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                  Full Name
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-3 bg-white px-1 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-xs peer-focus:text-red-500
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-[-50%] peer-[:not(:placeholder-shown)]:text-xs">
                  Phone Number
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-500
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs
                  pointer-events-none">
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder=" "
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 text-gray-900 bg-white focus:border-red-500 focus:outline-none transition-colors" />
                <label className="absolute left-3 top-4 text-gray-500 text-sm transition-all pointer-events-none
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Your Message
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
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

            {/* Close + footer */}
            <div className="px-6 pb-6 flex items-center justify-between">
              <p className="text-xs text-gray-400">We'll get back to you within 24 hours</p>
              <button
                onClick={() => setShowEnquiry(false)}
                className="text-gray-400 hover:text-gray-600 text-sm underline"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Triundtrek;