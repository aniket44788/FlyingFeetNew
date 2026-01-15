import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import airoplane from "../assets/airoplane.png";
import atal from "../assets/atal.png";
import shimla from "../assets/shimla.png";
import tajmahal from "../assets/tajmahal.png";

const SERVICE_ID = "service_a74zlnf";    
const TEMPLATE_ID = "template_qe2jgen";   
const PUBLIC_KEY = "aG1J-USjBV4O6JSSb";

// ❗ Replace from EmailJS
function Packages() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            alert("✅ Enquiry sent successfully! We will contact you soon.");
            setFormData({ name: "", phone: "", email: "", message: "" });
            setIsEnquiryOpen(false);
            setIsLoading(false);
        }, 1500);
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
            highlights: ["Guided Taj Mahal Tour", "Agra Fort Visit", "Local Cuisine Tasting", "Sunset Photography"]
        },
        {
            id: 2,
            image: "https://www.treebo.com/blog/wp-content/uploads/2017/06/Places-to-visit-in-Shimla_1.jpg",
            title: "Shimla Snow Escape",
            location: "Shimla, Himachal Pradesh",
            duration: "5 Days / 4 Nights",
            price: "₹12,999",
            description: "Escape to the queen of hills, Shimla. Enjoy colonial charm, toy train rides, mall road shopping, and breathtaking Himalayan views in this perfect winter getaway.",
            highlights: ["Toy Train Experience", "Mall Road Shopping", "Kufri Adventure", "Colonial Architecture Tour"]
        },
        {
            id: 3,
            image: "https://happygotrips.com/wp-content/uploads/2020/10/Atal_Rohtang_Tunnel.jpg",
            title: "Atal Tunnel Adventure",
            location: "Manali, Himachal Pradesh",
            duration: "4 Days / 3 Nights",
            price: "₹10,999",
            description: "Traverse the world's longest highway tunnel above 10,000 ft. Explore Rohtang Pass, Solang Valley, and experience thrilling adventures in the Himalayan wilderness.",
            highlights: ["Atal Tunnel Drive", "Rohtang Pass", "Solang Valley Paragliding", "Hot Springs Visit"]
        },
        {
            id: 4,
            image: "https://images7.alphacoders.com/742/thumb-1920-742688.jpg",
            title: "Aerial India Discovery",
            location: "Pan-India Flight Tour",
            duration: "7 Days / 6 Nights",
            price: "₹19,999",
            description: "Soar above India's diverse landscapes. This aerial tour offers breathtaking views of mountains, coasts, and cities from the comfort of premium flights with guided commentary.",
            highlights: ["Scenic Flights", "Aerial Photography", "Multiple Destinations", "Luxury In-Flight Experience"]
        }
    ];

    const handleEnquiryClick = (pkg) => {
        setSelectedPackage(pkg);
        setIsEnquiryOpen(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-16 px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Explore Our Exclusive Packages
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                    Discover handpicked travel packages tailored for unforgettable experiences. From historical wonders to adventurous escapes, find your perfect journey.
                </p>
            </div>

            {/* Packages Grid - Alternating Layout */}
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
                {packages.map((pkg, index) => (
                    <div
                        key={pkg.id}
                        className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}
                    >
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            {/* Image Section */}
                            <div className="relative w-full mt-10 lg:w-1/2 h-64 sm:h-80 lg:h-96 overflow-hidden group">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full p-5 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Price Badge */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-base sm:text-lg shadow-lg border-2 border-indigo-100">
                                    {pkg.price}
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    {pkg.duration}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                                {/* Title and Location */}
                                <div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                                        {pkg.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">{pkg.location}</span>
                                    </div>

                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                                        {pkg.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6 sm:mb-8">
                                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            Tour Highlights
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                            {pkg.highlights.map((highlight, i) => (
                                                <div key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 bg-indigo-50 p-2 sm:p-3 rounded-lg">
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="leading-tight">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => handleEnquiryClick(pkg)}
                                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base group"
                                >
                                    <span>Book Your Adventure</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enquiry Modal */}
            {isEnquiryOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    {/* Background */}
                    <div
                        className="fixed inset-0 backdrop-blur-md bg-black/40 transition-opacity duration-300"
                        onClick={() => !isLoading && setIsEnquiryOpen(false)}
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md sm:max-w-lg transform transition-all duration-300 scale-100 opacity-100 my-8">
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden">

                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex-1">
                                    <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                                        Book Your Trip
                                    </h2>
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {selectedPackage?.title}
                                    </p>
                                </div>
                                <button
                                    onClick={() => !isLoading && setIsEnquiryOpen(false)}
                                    disabled={isLoading}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full h-12 pl-10 pr-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full h-12 pl-10 pr-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Email (Optional)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            disabled={isLoading}
                                            className="w-full h-12 pl-10 pr-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Message (Optional)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            disabled={isLoading}
                                            rows="4"
                                            className="w-full pl-10 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                                            placeholder="Any special requests or questions?"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold flex justify-center items-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Submit Enquiry
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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