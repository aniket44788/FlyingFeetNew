import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const SERVICE_ID = "service_wrif919";
const TEMPLATE_ID = "template_hy3cy8d";
const PUBLIC_KEY = "GwTM7Gy-N7kgmfsnV";

/* ─── Quick-search tags shown inside the search bar ─── */
const QUICK_TAGS = ["Manali", "Triund", "Kedarkantha", "Kasol", "Spiti"];

/* ─── Tour data ─── */
const tours = [
  {
    id: 1,
    image: "https://www.asapholidays.com/blog/wp-content/uploads/2024/05/3nbup.jpg",
    title: "Kashmir – Paradise on Earth",
    location: "Jammu & Kashmir",
    duration: "5 Days / 4 Nights",
    price: "₹13,999",
    rating: "4.8",
    reviews: "1.2k",
    description:
      "Experience the breathtaking beauty of Kashmir with snow-capped mountains, serene Dal Lake, and lush valleys. Explore Srinagar's houseboats, Gulmarg's skiing slopes, and Pahalgam's meadows.",
    highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Mughal Gardens", "Pahalgam Valley"],
    badge: "Popular",
  },
  {
    id: 2,
    image: "https://assets.vogue.in/photos/5ce44d78b13c9fed0d4f609a/16:9/w_1280,c_limit/Vogue-guide-to-Goa.jpg",
    title: "Goa – Beach Paradise",
    location: "Goa",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    rating: "4.7",
    reviews: "980",
    description:
      "Discover the vibrant beaches and Portuguese heritage of Goa. Enjoy water sports, beach parties, historic churches, and delicious seafood.",
    highlights: ["Beach Hopping", "Water Sports", "Fort Aguada", "Night Markets"],
    badge: "Trending",
  },
  {
    id: 3,
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/21115556/athirapally-waterfall.jpeg",
    title: "Kerala – God's Own Country",
    location: "Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹15,999",
    rating: "4.9",
    reviews: "1.5k",
    description:
      "Immerse yourself in Kerala's backwaters, tea plantations, and tranquil beaches. Experience traditional houseboats and ayurvedic treatments.",
    highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa", "Kathakali Show"],
    badge: "Best Seller",
  },
  {
    id: 4,
    image: "https://www.roadaffair.com/wp-content/uploads/2022/09/queen-of-hills-darjeeling-india-shutterstock_1335267536.jpg",
    title: "Darjeeling – Queen of Hills",
    location: "West Bengal",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    rating: "4.6",
    reviews: "850",
    description:
      "Witness the majestic Kanchenjunga. Ride the famous toy train, visit tea estates, and explore Buddhist monasteries.",
    highlights: ["Tiger Hill Sunrise", "Toy Train Ride", "Tea Garden Tour", "Himalayan Zoo"],
    badge: "New",
  },
  {
    id: 5,
    image: "https://www.adotrip.com/public/images/areas/master_images/5d2c28c322915-McLeod_Ganj_Attractions.jpg",
    title: "McLeodGanj – Triund Trek",
    location: "Kangra, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    price: "₹4,999",
    rating: "4.6",
    reviews: "850",
    description:
      "Experience vibrant Tibetan culture. Visit ancient monasteries, enjoy peaceful cafes, and soak in the spiritual atmosphere of the Himalayas.",
    highlights: ["Triund Trek", "Dalai Lama Temple", "Bhagsu Waterfall", "Tibetan Market"],
    badge: "Popular",
  },
];

/* ─── Badge colour map ─── */
const badgeColor = {
  Popular: "#e63946",
  Trending: "#f4a261",
  "Best Seller": "#2a9d8f",
  New: "#457b9d",
};

export default function Tours() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...formData, tour: selectedTour?.title || "" }, PUBLIC_KEY);
      alert("✅ Enquiry sent! We'll contact you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsEnquiryOpen(false);
    } catch {
      alert("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ══════════════════════════════════════════
          HERO SECTION  – matches reference image
      ══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>

        {/* Background mountain photo */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Himalayan mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay – left darker so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.45) 55%, rgba(10,22,40,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">

          {/* Headline */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#e63946" }}
          >
            #1 Trekking &amp; Tour Company
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          >
            Explore The Himalayas<br />
            With{" "}
            <span style={{ color: "#e63946" }}>Flying Feet</span>
          </h1>

          {/* Sub-tags */}
          <div className="flex flex-wrap gap-3 mb-8 text-white/80 text-sm font-medium">
            {["Trekking", "Weekend Trips", "Tour Packages", "Homestays"].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <span style={{ color: "#e63946" }}>|</span> {t}
              </span>
            ))}
          </div>

          {/* Search bar */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 w-full max-w-2xl rounded-full overflow-hidden shadow-2xl"
            style={{ background: "white" }}
          >
            {/* Search icon + input */}
            <div className="flex items-center flex-1 px-5 py-3 gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#9ca3af" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Trek / Destination"
                className="flex-1 outline-none text-gray-700 text-sm bg-transparent placeholder-gray-400"
              />
              {/* Quick tags – visible on larger screens */}
              <div className="hidden lg:flex items-center gap-2">
                {QUICK_TAGS.slice(0, 3).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearch(tag)}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-500 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Now button */}
            <button
              onClick={() => navigate("/packages")}
              className="flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base px-7 py-3 sm:py-0 transition-all duration-200 hover:opacity-90"
              style={{ background: "#e63946", minWidth: "140px" }}
            >
              BOOK NOW
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate("/trekking")}
              className="flex items-center gap-2 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "#e63946" }}
            >
              Explore Treks
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button
              onClick={() => navigate("/packages")}
              className="flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full border-2 border-white text-white hover:bg-white transition-all duration-300 hover:scale-105"
              style={{ "--tw-text-opacity": 1 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0f1b2d")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              View Packages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: "500+", label: "Happy Trekkers" },
              { value: "50+", label: "Destinations" },
              { value: "10+", label: "Years Experience" },
              { value: "4.9★", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LATEST TOURS SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "#f8f1ff", color: "#e63946" }}
            >
              Explore Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#0f1b2d" }}>
              Our Latest{" "}
              <span style={{ color: "#e63946" }}>Tours</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Handpicked destinations designed to create unforgettable memories
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-10 h-px bg-gray-300" />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#e63946" }} />
              <span className="w-10 h-px bg-gray-300" />
            </div>
          </div>

          {/* Tour cards – alternating layout */}
          <div className="flex flex-col gap-10">
            {tours.map((tour, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={tour.id}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                  style={{ background: "white" }}
                >
                  {/* Image */}
                  <div className="relative w-full md:w-5/12 overflow-hidden" style={{ minHeight: "280px" }}>
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ minHeight: "280px" }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

                    {/* Badge */}
                    <span
                      className="absolute top-5 left-5 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wide shadow"
                      style={{ background: badgeColor[tour.badge] || "#e63946" }}
                    >
                      {tour.badge}
                    </span>

                    {/* Rating */}
                    <div className="absolute bottom-5 right-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow text-sm font-semibold text-gray-800">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      {tour.rating}
                      <span className="text-gray-400 text-xs font-normal">({tour.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-7/12 p-8 flex flex-col justify-between">
                    <div>
                      {/* Location + Duration chips */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#eff6ff", color: "#1d4ed8" }}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {tour.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                          </svg>
                          {tour.duration}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-extrabold mb-3" style={{ color: "#0f1b2d" }}>
                        {tour.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{tour.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tour Highlights</p>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                          {tour.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                                style={{ background: "#dcfce7", color: "#16a34a" }}>✓</span>
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400 font-medium">Starting from</p>
                        <p className="text-2xl font-extrabold" style={{ color: "#0f1b2d" }}>{tour.price}</p>
                      </div>

                      <button
                        onClick={() => navigate("/packages")}
                        className="flex items-center gap-2 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-md"
                        style={{ background: "#e63946" }}
                      >
                        Book Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>

                      <button
                        onClick={() => { setSelectedTour(tour); setIsEnquiryOpen(true); }}
                        className="flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full border-2 transition-all duration-300 hover:scale-105"
                        style={{ borderColor: "#0f1b2d", color: "#0f1b2d" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#0f1b2d"; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0f1b2d"; }}
                      >
                        Get Enquiry
                      </button>

                      {/* Wishlist */}
                      <button className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-all duration-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ENQUIRY MODAL
      ══════════════════════════════════════════ */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsEnquiryOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Modal header */}
            <div className="px-8 py-6 flex justify-between items-start" style={{ background: "#0f1b2d" }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#e63946" }}>
                  Send Enquiry
                </p>
                <h2 className="text-lg font-extrabold text-white leading-tight">
                  {selectedTour?.title}
                </h2>
              </div>
              <button
                onClick={() => setIsEnquiryOpen(false)}
                className="text-white/60 hover:text-white transition-colors mt-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form body */}
            <div className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", required: true },
                  { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
                  { label: "Email", name: "email", type: "email", placeholder: "you@example.com", required: false },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={formData[f.name]}
                      onChange={handleInputChange}
                      required={f.required}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200"
                      style={{ "--tw-ring-color": "#e63946" }}
                      onFocus={(e) => (e.target.style.borderColor = "#e63946")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your travel plans…"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none resize-none transition-all duration-200"
                    onFocus={(e) => (e.target.style.borderColor = "#e63946")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex justify-center items-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "#e63946" }}
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Submit Enquiry →"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}