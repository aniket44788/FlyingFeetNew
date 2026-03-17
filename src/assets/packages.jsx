import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_a74zlnf";
const TEMPLATE_ID = "template_qe2jgen";
const PUBLIC_KEY = "aG1J-USjBV4O6JSSb";

/* ── Theme tokens (matches Footer + Tours + About) ── */
const T = {
  navy: "#0a1028",
  navyLight: "#0f1c35",
  navyCard: "#111827",
  red: "#e53e3e",
  redHover: "#c53030",
  text: "#e2e8f0",
  muted: "#94a3b8",
  border: "rgba(255,255,255,0.08)",
};

const packages = [
  {
    id: 1,
    image: "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
    title: "Taj Mahal Majesty",
    location: "Agra, Uttar Pradesh",
    duration: "3 Days / 2 Nights",
    price: "₹8,999",
    description: "Witness the eternal symbol of love, the Taj Mahal, in all its glory. Explore the Mughal architecture, visit Agra Fort, and enjoy a sunset view of this UNESCO World Heritage site.",
    highlights: ["Guided Taj Mahal Tour", "Agra Fort Visit", "Local Cuisine Tasting", "Sunset Photography"],
  },
  {
    id: 2,
    image: "https://www.treebo.com/blog/wp-content/uploads/2017/06/Places-to-visit-in-Shimla_1.jpg",
    title: "Shimla Snow Escape",
    location: "Shimla, Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    price: "₹12,999",
    description: "Escape to the queen of hills, Shimla. Enjoy colonial charm, toy train rides, mall road shopping, and breathtaking Himalayan views in this perfect winter getaway.",
    highlights: ["Toy Train Experience", "Mall Road Shopping", "Kufri Adventure", "Colonial Architecture Tour"],
  },
  {
    id: 3,
    image: "https://happygotrips.com/wp-content/uploads/2020/10/Atal_Rohtang_Tunnel.jpg",
    title: "Atal Tunnel Adventure",
    location: "Manali, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    price: "₹10,999",
    description: "Traverse the world's longest highway tunnel above 10,000 ft. Explore Rohtang Pass, Solang Valley, and experience thrilling adventures in the Himalayan wilderness.",
    highlights: ["Atal Tunnel Drive", "Rohtang Pass", "Solang Valley Paragliding", "Hot Springs Visit"],
  },
  {
    id: 4,
    image: "https://images7.alphacoders.com/742/thumb-1920-742688.jpg",
    title: "Aerial India Discovery",
    location: "Pan-India Flight Tour",
    duration: "7 Days / 6 Nights",
    price: "₹19,999",
    description: "Soar above India's diverse landscapes. This aerial tour offers breathtaking views of mountains, coasts, and cities from the comfort of premium flights with guided commentary.",
    highlights: ["Scenic Flights", "Aerial Photography", "Multiple Destinations", "Luxury In-Flight Experience"],
  },
];

function Packages() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
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
        { ...formData, tour: selectedPackage?.title || "" },
        PUBLIC_KEY
      );
      alert("✅ Enquiry sent successfully! We will contact you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsEnquiryOpen(false);
    } catch {
      alert("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px 12px 44px",
    borderRadius: "12px",
    border: `1px solid ${T.border}`,
    background: "rgba(255,255,255,0.05)",
    color: T.text,
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: T.navy, color: T.text, minHeight: "100vh" }}>

      {/* ══ HERO ══ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "50vh" }}>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
          alt="Travel landscapes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,16,40,0.55) 0%, rgba(10,16,40,0.85) 70%, rgba(10,16,40,1) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3" style={{ color: T.red }}>
            Flying Feet Holidays
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Explore Our <span style={{ color: T.red }}>Exclusive</span> Packages
          </h1>
          <p className="text-base max-w-2xl" style={{ color: T.muted }}>
            Discover handpicked travel packages tailored for unforgettable experiences. From historical wonders to adventurous escapes, find your perfect journey.
          </p>
          {/* Divider */}
          <div className="flex items-center gap-2 mt-6">
            <span className="w-10 h-px" style={{ background: T.border }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: T.red }} />
            <span className="w-10 h-px" style={{ background: T.border }} />
          </div>
        </div>
      </section>

      {/* ══ PACKAGES ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {packages.map((pkg, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={pkg.id}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} rounded-3xl overflow-hidden group transition-all duration-500`}
              style={{
                background: T.navyLight,
                border: `1px solid ${T.border}`,
                boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 48px rgba(229,62,62,0.18)`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,0,0,0.35)")}
            >
              {/* ── Image ── */}
              <div className="relative w-full lg:w-5/12 overflow-hidden" style={{ minHeight: "300px" }}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ minHeight: "300px" }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-300" />

                {/* Price badge */}
                <div
                  className="absolute top-5 right-5 font-bold px-4 py-2 rounded-full text-white text-sm shadow-lg"
                  style={{ background: T.red }}
                >
                  {pkg.price}
                </div>

                {/* Duration badge */}
                <div
                  className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold shadow-lg"
                  style={{ background: "rgba(10,16,40,0.85)", backdropFilter: "blur(8px)", border: `1px solid ${T.border}` }}
                >
                  <svg className="w-4 h-4" style={{ color: T.red }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {pkg.duration}
                </div>
              </div>

              {/* ── Content ── */}
              <div className="w-full lg:w-7/12 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* Location chip */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {pkg.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                    {pkg.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: T.muted }}>
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: T.muted }}>
                      <svg className="w-4 h-4" style={{ color: T.red }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Tour Highlights
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pkg.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-xl"
                          style={{ background: "rgba(229,62,62,0.07)", border: `1px solid rgba(229,62,62,0.12)`, color: T.text }}
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                            style={{ background: "rgba(229,62,62,0.18)", color: T.red }}
                          >
                            ✓
                          </span>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 pt-4" style={{ borderTop: `1px solid ${T.border}` }}>
                  <button
                    onClick={() => { setSelectedPackage(pkg); setIsEnquiryOpen(true); }}
                    className="flex items-center gap-2 text-white font-bold text-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md group/btn"
                    style={{ background: T.red }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = T.redHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = T.red)}
                  >
                    Book Your Adventure
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ══ ENQUIRY MODAL ══ */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10,16,40,0.80)", backdropFilter: "blur(6px)" }}
            onClick={() => !isLoading && setIsEnquiryOpen(false)}
          />
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl my-8"
            style={{ background: T.navyLight, border: `1px solid ${T.border}` }}
          >
            {/* Modal header */}
            <div
              className="px-8 py-6 flex justify-between items-start"
              style={{ background: "rgba(229,62,62,0.10)", borderBottom: `1px solid ${T.border}` }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: T.red }}>
                  Book Your Trip
                </p>
                <h2 className="text-lg font-extrabold text-white leading-tight">
                  {selectedPackage?.title}
                </h2>
                <p className="text-xs mt-1 flex items-center gap-1" style={{ color: T.muted }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {selectedPackage?.location}
                </p>
              </div>
              <button
                onClick={() => !isLoading && setIsEnquiryOpen(false)}
                disabled={isLoading}
                className="transition-colors mt-1 disabled:opacity-50"
                style={{ color: T.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.muted)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", required: true },
                  { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", required: true },
                  { label: "Email (Optional)", name: "email", type: "email", placeholder: "you@example.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", required: false },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1" style={{ color: T.muted }}>
                      {f.label}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4" style={{ color: T.muted }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d={f.icon} />
                        </svg>
                      </div>
                      <input
                        type={f.type}
                        name={f.name}
                        value={formData[f.name]}
                        onChange={handleInputChange}
                        required={f.required}
                        disabled={isLoading}
                        placeholder={f.placeholder}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = T.red)}
                        onBlur={(e) => (e.target.style.borderColor = T.border)}
                      />
                    </div>
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1" style={{ color: T.muted }}>
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 pointer-events-none">
                      <svg className="w-4 h-4" style={{ color: T.muted }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      rows={4}
                      placeholder="Any special requests or questions?"
                      style={{ ...inputStyle, paddingLeft: "44px", paddingTop: "12px", resize: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = T.red)}
                      onBlur={(e) => (e.target.style.borderColor = T.border)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex justify-center items-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: T.red }}
                  onMouseEnter={(e) => !isLoading && (e.currentTarget.style.background = T.redHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = T.red)}
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
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

export default Packages;