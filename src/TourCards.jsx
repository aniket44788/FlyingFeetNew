import triund from "../src/assets/Swipper/triund.jpg";
import shimla from "../src/assets/Swipper/shimla.jpg";
import dshala from "../src/assets/Swipper/dshala.jpg";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export const tours = [
  {
    id: 1,
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    duration: "6D/5N",
    rating: 4.7,
    reviews: 180,
    price: 12500,
    image: shimla,
    features: ["Hotel Stay Included", "Sightseeing Included" ,"Pickup & Drop Included"],
    tagColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Kashmir Tour Package",
    location: "Kashmir",
    duration: "6D/5N",
    rating: 4.8,
    reviews: 240,
    price: 18500,
    image: triund,
    features: ["Hotel Stay Included", "Sightseeing Included" ,"Pickup & Drop Included"],
    tagColor: "bg-red-500",
  },
  {
    id: 3,
    title: "Dharamshala Dalhousie Tour Package",
    location: "Himachal Pradesh",
    duration: "6D/5N",
    rating: 4.6,
    reviews: 140,
    price: 12500,
    image: dshala,
    features: ["Hotel Stay Included", "Sightseeing Included" ,"Pickup & Drop Included"],
    tagColor: "bg-red-500",
  },
];

const EMAIL_CONFIG = {
  SERVICE_ID: "service_wrif919",
  TEMPLATE_ID: "template_hy3cy8d",
  PUBLIC_KEY: "GwTM7Gy-N7kgmfsnV",
};

export default function TourCards() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          destination: selectedTour,
          message: formData.message,
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );
      alert("Enquiry Sent Successfully!");
      setShowPopup(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry");
    }
  };

  const openEnquiry = (tourName) => {
    setSelectedTour(tourName);
    setShowPopup(true);
  };

  return (
    <>
      {/* Heading */}
      <div className="w-full flex bg-[#0f1b2d] items-center justify-center">
        <h4 className="text-2xl mt-5 sm:text-3xl lg:text-5xl leading-[1.05] font-black text-white text-center">
          <span className="text-red-500">Our Popular Tours</span>
        </h4>
      </div>

      {/* Cards */}
      <div className="w-full bg-[#0f1b2d] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white w-full max-w-sm rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {tour.duration}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-800">{tour.title}</h2>
                    <h3 className="text-xl font-black text-red-600">
                      ₹{tour.price.toLocaleString()}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    📍 {tour.location}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500 font-semibold">⭐ {tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews} reviews)</span>
                  </div>

                  <div className="mt-3 space-y-1">
                    {tour.features.map((feat, i) => (
                      <p key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-green-500">✔</span> {feat}
                      </p>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                      View Details
                    </button>
                    <button
                      onClick={() => openEnquiry(tour.title)}
                      className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600"
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

      {/* Explore More */}
      <div className="flex justify-center bg-[#0f1b2d]">
        <button className="w-[80%] mb-5 text-white bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-sm sm:text-base">
          Explore more tours
        </button>
      </div>

      {/* ENQUIRY POPUP — rendered once, outside the card loop */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300">
          <div className="bg-white rounded-3xl w-full max-w-md relative animate-in fade-in zoom-in duration-300 shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
            >
              ×
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-t-3xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">Travel Enquiry</h2>
              <p className="text-red-100 text-sm">Let's plan your dream journey</p>
            </div>

            {/* Selected Tour Badge */}
            <div className="px-6 pt-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6c0 2.887 1.474 5.523 3.5 7.5A8.5 8.5 0 0010 18a8.5 8.5 0 003.5-2.5c2.026-1.977 3.5-4.613 3.5-7.5a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="text-red-700 font-medium text-sm break-all">
                  {selectedTour}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">

              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:border-red-500 focus:outline-none transition-colors"
                />
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
                  placeholder=" "
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:border-red-500 focus:outline-none transition-colors"
                />
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
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:border-red-500 focus:outline-none transition-colors"
                />
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
                  placeholder=" "
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 pt-5 peer focus:border-red-500 focus:outline-none transition-colors resize-none"
                />
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
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Enquiry
              </button>
            </form>

            {/* Footer */}
            <div className="px-6 pb-6 text-center">
              <p className="text-xs text-gray-400">We'll get back to you within 24 hours</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}