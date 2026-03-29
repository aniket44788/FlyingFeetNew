import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_a74zlnf";
const TEMPLATE_ID = "template_qe2jgen";
const PUBLIC_KEY = "aG1J-USjBV4O6JSSb";

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
    description: "Escape to the queen of hills, Shimla. Enjoy colonial charm, toy train rides, mall road shopping, and breathtaking Himalayan views.",
    highlights: ["Toy Train Experience", "Mall Road Shopping", "Kufri Adventure", "Colonial Architecture Tour"],
  },
  {
    id: 3,
    image: "https://happygotrips.com/wp-content/uploads/2020/10/Atal_Rohtang_Tunnel.jpg",
    title: "Atal Tunnel Adventure",
    location: "Manali, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    price: "₹10,999",
    description: "Traverse the world's longest highway tunnel above 10,000 ft. Explore Rohtang Pass, Solang Valley, and experience thrilling adventures.",
    highlights: ["Atal Tunnel Drive", "Rohtang Pass", "Solang Valley Paragliding", "Hot Springs Visit"],
  },
  {
    id: 4,
    image: "https://images7.alphacoders.com/742/thumb-1920-742688.jpg",
    title: "Aerial India Discovery",
    location: "Pan-India Flight Tour",
    duration: "7 Days / 6 Nights",
    price: "₹19,999",
    description: "Soar above India's diverse landscapes. This aerial tour offers breathtaking views of mountains, coasts, and cities from premium flights.",
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

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[30vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
          alt="Travel landscapes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
            Flying Feet Holidays
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Explore Our <span className="text-orange-500">Exclusive</span> Packages
          </h1>
         
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            CURATED JOURNEYS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Featured <span className="text-orange-500">Packages</span>
          </h2>
        </div>

        <div className="space-y-12">
          {packages.map((pkg, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={pkg.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all bg-white`}
              >
                {/* Image */}
                <div className="lg:w-5/12 relative overflow-hidden rounded-3xl lg:rounded-r-none h-80 lg:h-auto">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Price Badge */}
                  <div className="absolute top-6 right-6 bg-orange-500 text-white font-bold px-5 py-2 rounded-2xl shadow-lg text-lg">
                    {pkg.price}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-4 py-2 rounded-2xl flex items-center gap-2 shadow">
                    <span>⏱️</span>
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-orange-500">📍</span>
                      <span className="text-sm font-medium text-gray-600">{pkg.location}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {pkg.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-7 text-[15px]">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest">WHAT'S INCLUDED</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {pkg.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                              ✓
                            </div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setIsEnquiryOpen(true);
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-8 rounded-2xl transition-all active:scale-95 flex-1"
                    >
                      Send Enquiry
                    </button>
                    <button
                      onClick={() => alert("Booking feature coming soon!")}
                      className="border border-gray-300 hover:border-orange-500 hover:text-orange-600 font-semibold py-3.5 px-8 rounded-2xl transition-all active:scale-95"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 sm:px-8 py-6 border-b bg-orange-50 flex justify-between items-center">
              <div>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">ENQUIRY FORM</p>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mt-1">{selectedPackage?.title}</h3>
              </div>
              <button 
                onClick={() => setIsEnquiryOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 resize-y"
                  placeholder="Any special requests or preferred dates?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-bold py-4 rounded-2xl transition-all mt-4"
              >
                {isLoading ? "Sending Enquiry..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;