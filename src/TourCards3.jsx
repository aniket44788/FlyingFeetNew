import { Link } from "react-router-dom";
import triund from "../src/assets/Swipper/triund.jpg"
import mclo from "../src/assets/mclo.jpeg"

import emailjs from "@emailjs/browser";
import { useState } from "react";


export const tours = [
  {
    id: 1,
    title: "McLeodganj Triund",
    location: "Himachal Pradesh",
    duration: "5D/4N",
    rating: 4.8,
    reviews: 180,
    price: 6599,
    image: mclo,
    features: ["Trekking Included", "Camping Stay", "Guide Included"],
    tagColor: "bg-red-500"
  },
  {
    id: 2,
    title: "Jibhi Tirthan",
    location: "Banjar, Himachal Pradesh",
    duration: "5D/4N",
    rating: 4.7,
    reviews: 150,
    price: 6500,
    image: triund,
    features: ["River Stay", "Waterfall Visit", "Nature Walks"],
    tagColor: "bg-red-500"
  },
  {
    id: 3,
    title: "Chopta Tungnath Chandrashila",
    location: "Rudraprayag, Uttarakhand",
    duration: "5D/4N",
    rating: 4.9,
    reviews: 210,
    price: 5999,
    image: triund,
    features: ["Temple Trek", "Snow Views", "Camping Included"],
    tagColor: "bg-red-500"
  },
];

  
const EMAIL_CONFIG = {
  SERVICE_ID: "service_wrif919",
  TEMPLATE_ID: "template_hy3cy8d",
  PUBLIC_KEY: "GwTM7Gy-N7kgmfsnV",
};
export default function TourCards3() {


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
      console.log({
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        destination: selectedTour,
        message: formData.message,
      });

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

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
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
      <div className="w-full bg-[#0f1b2d] flex items-center justify-center">
        <h4 className="text-2xl mt-5 sm:text-3xl lg:text-5xl leading-[1.05] font-black text-white text-center">
          <span className="text-red-500">
            Weekend Trips
          </span>
        </h4>

      </div>
      <div className="w-full bg-[#0f1b2d] py-14">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100
          hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-52 object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                    {tour.duration}
                  </span>
                </div>


                {/* CONTENT */}
                <div className="p-5">

                  {/* TITLE + PRICE */}
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-bold text-gray-800 leading-snug">
                      {tour.title}
                    </h2>

                    <h3 className="text-xl font-black text-red-600 whitespace-nowrap">
                      ₹{tour.price.toLocaleString()}
                    </h3>
                  </div>

                  {/* LOCATION */}
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                    📍 {tour.location}
                  </p>

                  {/* RATING */}
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500 font-semibold">
                      ⭐ {tour.rating}
                    </span>
                    <span className="text-gray-500">
                      ({tour.reviews} reviews)
                    </span>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-4 space-y-1">
                    {tour.features.map((feat, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-[2px]">✔</span>
                        <span className="leading-snug">{feat}</span>
                      </p>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-5">
                    <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                      View Details
                    </button>

                    <button
                      onClick={() => openEnquiry(tour.title)}
                      className="flex-1 bg-red-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition"
                    >
                      Book Now
                    </button>

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

                          {/* Header with Gradient */}
                          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-t-3xl p-6 text-white">
                            <h2 className="text-2xl font-bold mb-1">
                              Travel Enquiry
                            </h2>
                            <p className="text-red-100 text-sm">
                              Let's plan your dream journey
                            </p>
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

                            {/* Name Input */}
                            <div className="relative">
                              <input
                                type="text"
                                placeholder=" "
                                required
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                                className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:border-red-500 focus:outline-none transition-colors"
                              />

                              <label
                                className="
      absolute left-3 bg-white px-1
      top-1/2 -translate-y-1/2
      text-gray-500
      transition-all duration-200
      pointer-events-none

      peer-focus:top-0
      peer-focus:text-xs
      peer-focus:text-red-500

      peer-[:not(:placeholder-shown)]:top-0
      peer-[:not(:placeholder-shown)]:text-xs
    "
                              >
                                Full Name
                              </label>
                            </div>

                            {/* Phone Input */}

                            <div className="relative">
                              <input
                                type="tel"
                                placeholder=" "
                                required
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({ ...formData, phone: e.target.value })
                                }
                                className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:border-red-500 focus:outline-none transition-colors"
                              />

                              <label
                                className="
      absolute left-3 bg-white px-1
      top-1/2 -translate-y-1/2
      text-gray-500
      transition-all duration-200
      pointer-events-none

      peer-focus:top-0
      peer-focus:translate-y-[-50%]
      peer-focus:text-xs
      peer-focus:text-red-500

      peer-[:not(:placeholder-shown)]:top-0
      peer-[:not(:placeholder-shown)]:translate-y-[-50%]
      peer-[:not(:placeholder-shown)]:text-xs
    "
                              >
                                Phone Number
                              </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                              <input
                                type="email"
                                placeholder=" "
                                className="peer w-full rounded-xl border border-gray-300 px-4 pt-6 pb-2 focus:border-red-500 focus:outline-none"
                              />

                              <label
                                className="
      absolute left-4 top-1/2 -translate-y-1/2
      text-gray-500 bg-white px-1
      transition-all duration-200
      peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-500
      peer-[:not(:placeholder-shown)]:top-0
      peer-[:not(:placeholder-shown)]:text-xs
      pointer-events-none
    "
                              >
                                Email Address
                              </label>
                            </div>

                            {/* Message Textarea */}
                            <div className="relative">
                              <textarea
                                placeholder=" "
                                rows="4"
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({ ...formData, message: e.target.value })
                                }
                                className="w-full border-2 border-gray-200 rounded-xl p-3 pt-5 peer focus:border-red-500 focus:outline-none transition-colors resize-none"
                              />
                              <label className="absolute left-3 top-4 text-gray-500 text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                Your Message
                              </label>
                            </div>

                            {/* Submit Button */}
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

                          {/* Footer Note */}
                          <div className="px-6 pb-6 text-center">
                            <p className="text-xs text-gray-400">
                              We'll get back to you within 24 hours
                            </p>
                          </div>

                        </div>
                      </div>
                    )}



                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#0f1b2d] ">
        <button className="w-[80%] mb-5 text-white bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-sm sm:text-base">
          Explore more weekendtrips
        </button>
      </div>
    </>

  );
}