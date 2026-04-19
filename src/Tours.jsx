import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const image1 =
  "https://imgs.search.brave.com/tufiQ3l7c9afcrm1R2TFHAjMkBUxxNfOYniTTxSlJng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWRlbGl2ZXJ5Lm5l/dC9iNUJhTHNqNFZR/dmVyUjFCMUJ0U293/LzI3NjFjNjBiLTBl/ZTAtNGQxNC1mZWYx/LTdjNjEzOTFiMTgw/MC93PTY0MCxxPTgw";

const SERVICE_ID = "service_wrif919";
const TEMPLATE_ID = "template_hy3cy8d";
const PUBLIC_KEY = "GwTM7Gy-N7kgmfsnV";

const QUICK_TAGS = ["Manali", "Triund", "Kedarkantha", "Kasol", "Spiti"];

const tours = [
  {
    id: 1,
    image:
      "https://www.asapholidays.com/blog/wp-content/uploads/2024/05/3nbup.jpg",
    title: "Kashmir – Paradise on Earth",
    location: "Jammu & Kashmir",
    duration: "5 Days / 4 Nights",
    price: "₹13,999",
    rating: "4.8",
    reviews: "1.2k",
    description:
      "Experience the breathtaking beauty of Kashmir with snow-capped mountains, serene Dal Lake, and lush valleys.",
    highlights: [
      "Dal Lake Shikara Ride",
      "Gulmarg Gondola",
      "Mughal Gardens",
      "Pahalgam Valley",
    ],
    badge: "Popular",
  },
  {
    id: 2,
    image:
      "https://assets.vogue.in/photos/5ce44d78b13c9fed0d4f609a/16:9/w_1280,c_limit/Vogue-guide-to-Goa.jpg",
    title: "Goa – Beach Paradise",
    location: "Goa",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    rating: "4.7",
    reviews: "980",
    description: "Discover the vibrant beaches and Portuguese heritage of Goa.",
    highlights: [
      "Beach Hopping",
      "Water Sports",
      "Fort Aguada",
      "Night Markets",
    ],
    badge: "Trending",
  },
  {
    id: 3,
    image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/21115556/athirapally-waterfall.jpeg",
    title: "Kerala – God's Own Country",
    location: "Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹15,999",
    rating: "4.9",
    reviews: "1.5k",
    description:
      "Immerse yourself in Kerala's backwaters, tea plantations, and tranquil beaches.",
    highlights: [
      "Houseboat Stay",
      "Tea Plantations",
      "Ayurvedic Spa",
      "Kathakali Show",
    ],
    badge: "Best Seller",
  },
  {
    id: 4,
    image:
      "https://www.roadaffair.com/wp-content/uploads/2022/09/queen-of-hills-darjeeling-india-shutterstock_1335267536.jpg",
    title: "Darjeeling – Queen of Hills",
    location: "West Bengal",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    rating: "4.6",
    reviews: "850",
    description:
      "Witness the majestic Kanchenjunga and enjoy the famous toy train ride.",
    highlights: [
      "Tiger Hill Sunrise",
      "Toy Train Ride",
      "Tea Garden Tour",
      "Himalayan Zoo",
    ],
    badge: "New",
  },
  {
    id: 5,
    image:
      "https://www.adotrip.com/public/images/areas/master_images/5d2c28c322915-McLeod_Ganj_Attractions.jpg",
    title: "McLeodGanj – Triund Trek",
    location: "Kangra, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    price: "₹4,999",
    rating: "4.6",
    reviews: "850",
    description:
      "Experience vibrant Tibetan culture and the spiritual atmosphere of the Himalayas.",
    highlights: [
      "Triund Trek",
      "Dalai Lama Temple",
      "Bhagsu Waterfall",
      "Tibetan Market",
    ],
    badge: "Popular",
  },
];

const badgeColor = {
  Popular: "#f97316",
  Trending: "#d97706",
  "Best Seller": "#0d9488",
  New: "#2563eb",
};

export default function Tours() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...formData, tour: selectedTour?.title || "" },
        PUBLIC_KEY,
      );
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
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* HERO SECTION */}


      {/* TOURS SECTION */}
      <section className="py-5 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1b2d] ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-orange-100 text-orange-600">
              EXPLORE DESTINATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our Latest <span className="text-orange-500">Tours</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base">
              Handpicked destinations designed to create unforgettable memories
            </p>
          </div>

          {/* Tour Cards */}
          <div className="space-y-12">
            {tours.map((tour, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={tour.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all bg-white`}
                >
                  {/* Image */}
                  <div className="lg:w-5/12 relative overflow-hidden rounded-3xl lg:rounded-r-none h-80 lg:h-auto">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <span
                      className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-md"
                      style={{
                        backgroundColor: badgeColor[tour.badge] || "#f97316",
                      }}
                    >
                      {tour.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-1.5 text-xs font-medium bg-orange-50 text-orange-600 rounded-full">
                        📍 {tour.location}
                      </span>
                      <span className="px-4 py-1.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                        ⏱️ {tour.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <p className="uppercase text-xs font-semibold text-gray-500 mb-3 tracking-wider">
                        Highlights
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                        {tour.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-3 text-sm text-gray-700"
                          >
                            <span className="text-orange-500 text-lg leading-none">
                              ✓
                            </span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & Buttons */}
                    <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Starting from</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {tour.price}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => navigate("/packages")}
                          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all active:scale-[0.97]"
                        >
                          Book Now
                        </button>

                        <button
                          onClick={() => {
                            setSelectedTour(tour);
                            setIsEnquiryOpen(true);
                          }}
                          className="border border-gray-300 hover:border-orange-500 hover:text-orange-600 font-semibold px-8 py-3.5 rounded-2xl transition-all"
                        >
                          Get Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="px-6 sm:px-8 py-6 border-b bg-orange-50 flex justify-between items-center">
              <div>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                  SEND ENQUIRY
                </p>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mt-1 pr-8">
                  {selectedTour?.title}
                </h3>
              </div>
              <button
                onClick={() => setIsEnquiryOpen(false)}
                className="text-2xl text-gray-400 hover:text-gray-600 p-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-sm"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 resize-y text-sm"
                  placeholder="Tell us about your travel plans..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-bold py-4 rounded-2xl transition-all text-base mt-2"
              >
                {isLoading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
