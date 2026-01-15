import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import travel from "./assets/travel.jpeg";
import goa from "./assets/travel.jpeg";
import kerala from "./assets/travel.jpeg";
import darjeeling from "./assets/travel.jpeg";
import mcleodganj from "./assets/travel.jpeg";
import kashmir from "./assets/travel.jpeg";
import { useNavigate } from 'react-router-dom';

const SERVICE_ID = "service_a74zlnf";     // ✅ Your EmailJS Service ID
const TEMPLATE_ID = "template_qe2jgen";     // ❗ Replace from EmailJS
const PUBLIC_KEY = "aG1J-USjBV4O6JSSb";        // ❗ Replace from EmailJS

function Tours() {
    const navigate = useNavigate()
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
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

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    ...formData,
                    tour: selectedTour?.title || '',
                },
                PUBLIC_KEY
            );

            alert("✅ Enquiry sent successfully! We will contact you soon.");
            setFormData({ name: "", phone: "", email: "", message: "" });
            setIsEnquiryOpen(false);
        } catch (error) {
            console.error("❌ EmailJS Error:", error);
            alert("Failed to send enquiry. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const tours = [
        {
            id: 1,
            image: "https://www.asapholidays.com/blog/wp-content/uploads/2024/05/3nbup.jpg",
            title: "Kashmir - Paradise on Earth",
            location: "Jammu & Kashmir",
            duration: "5 Days / 4 Nights",
            price: "₹13,999",
            rating: "4.8",
            reviews: "1.2k",
            description: "Experience the breathtaking beauty of Kashmir with snow-capped mountains, serene Dal Lake, and lush valleys. Explore Srinagar's houseboats, Gulmarg's skiing slopes, and Pahalgam's meadows.",
            highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Mughal Gardens", "Pahalgam Valley"],
            badge: "Popular"
        },
        {
            id: 2,
            image: "https://assets.vogue.in/photos/5ce44d78b13c9fed0d4f609a/16:9/w_1280,c_limit/Vogue-guide-to-Goa.jpg",
            title: "Goa - Beach Paradise",
            location: "Goa",
            duration: "4 Days / 3 Nights",
            price: "₹9,999",
            rating: "4.7",
            reviews: "980",
            description: "Discover the vibrant beaches and Portuguese heritage of Goa. Enjoy water sports, beach parties, historic churches, and delicious seafood. Perfect blend of relaxation and adventure.",
            highlights: ["Beach Hopping", "Water Sports", "Fort Aguada", "Night Markets"],
            badge: "Trending"
        },
        {
            id: 3,
            image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/21115556/athirapally-waterfall.jpeg",
            title: "Kerala - God's Own Country",
            location: "Kerala",
            duration: "5 Days / 4 Nights",
            price: "₹15,999",
            rating: "4.9",
            reviews: "1.5k",
            description: "Immerse yourself in Kerala's backwaters, tea plantations, and tranquil beaches. Experience traditional houseboats, ayurvedic treatments, and the rich cultural heritage of South India.",
            highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa", "Kathakali Show"],
            badge: "Best Seller"
        },
        {
            id: 4,
            image: "https://www.roadaffair.com/wp-content/uploads/2022/09/queen-of-hills-darjeeling-india-shutterstock_1335267536.jpg",
            title: "Darjeeling - Queen of Hills",
            location: "West Bengal",
            duration: "5 Days / 4 Nights",
            price: "₹14,999",
            rating: "4.6",
            reviews: "850",
            description: "Witness the majestic Kanchenjunga from Darjeeling's hills. Ride the famous toy train, visit tea estates, and explore Buddhist monasteries. A perfect hill station getaway.",
            highlights: ["Tiger Hill Sunrise", "Toy Train Ride", "Tea Garden Tour", "Himalayan Zoo"],
            badge: "New"
        },
        {
            id: 5,
            image: "https://www.adotrip.com/public/images/areas/master_images/5d2c28c322915-McLeod_Ganj_Attractions.jpg",
            title: "Mcleodganj - Triund tour with us",
            location: "Kangra , Himachal Pradesh",
            duration: "4 Days / 3 Nights",
            price: "₹4,999",
            rating: "4.6",
            reviews: "850",
            description: "Experience the vibrant Tibetan culture of McLeodGanj. Visit ancient monasteries, enjoy peaceful cafes, explore local markets, and soak in the spiritual atmosphere of the Himalayas.",
            highlights: ["Triund Trek", "Dalai Lama Temple", "Bhagsu Waterfall", "Local Tibetan Market"],
            badge: "Popular"
        }
    ];

    const handleEnquiryClick = (tour) => {
        setSelectedTour(tour);
        setIsEnquiryOpen(true);
    };

    const plantrip = () => {
        navigate("/packages")
    }
    return (
        <div className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
            {/* Hero Section */}
            <div className="relative w-full min-h-screen flex items-center justify-center">
                {/* Subtle background image with overlay for better readability */}
                <div className="absolute inset-0">
                    <img
                        src={travel}
                        alt="Scenic Travel Background"
                        className="w-full h-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 backdrop-blur-sm"></div>
                </div>

                {/* Centered content container with improved spacing and responsiveness */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-16 md:py-24">
                    {/* Centered image with caption overlay */}
                    <div className="relative w-full max-w-3xl mb-8 md:mb-12">
                        <img
                            src={travel}
                            alt="Explore Breathtaking Destinations"
                            className="w-full h-auto rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        {/* Caption overlay on the image */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 text-gray-800 font-semibold px-6 py-2 rounded-full shadow-md text-sm md:text-base">
                            Discover Hidden Gems Around the World
                        </div>
                    </div>

                    {/* Hero content with refined typography and animations */}
                    <div className="text-gray-900">
                        <div className="inline-flex items-center gap-2 mb-4 md:mb-6 animate-fade-in">
                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                            <span className="text-xs md:text-sm font-medium text-teal-600 uppercase tracking-widest">Adventure Awaits</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent leading-tight tracking-tight animate-fade-in-up">
                            Embark on Your Next Journey
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide animate-fade-in-up delay-200">
                            From stunning beaches to majestic mountains, uncover the world's most captivating destinations and create memories that last a lifetime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button onClick={plantrip} className="bg-teal-500 text-white font-semibold py-3 cursor-pointer px-8 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                                Plan Your Trip
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Tours Section */}
            <section className="tours-section py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
                <div className="tours-container max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="section-header text-center mb-12">
                        <span className="badge inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-600 font-medium text-sm mb-4">Explore Destinations</span>
                        <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Latest <span className="gradient-text bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">Tours</span>
                        </h2>
                        <p className="subheading text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                            Discover our handpicked destinations and create unforgettable memories
                        </p>
                        <div className="divider flex items-center justify-center">
                            <span className="line w-16 h-px bg-gray-300"></span>
                            <span className="dot w-2 h-2 bg-teal-500 rounded-full mx-2"></span>
                        </div>
                    </div>

                    {/* Alternating Tours */}
                    <div className="tours-grid grid grid-cols-1 gap-8">
                        {tours.map((tour, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <article
                                    key={tour.id}
                                    className={`tour-item flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500`}
                                >
                                    {/* Image Side */}
                                    <div className="tour-image-wrapper relative w-full md:w-1/2">
                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            className="tour-image w-full h-full object-cover"
                                        />
                                        <div className="image-overlay absolute inset-0 bg-black/20"></div>

                                        {/* Badge & Price on Image */}
                                        <div className="badge-on-image absolute top-4 left-4 px-3 py-1 rounded-full bg-teal-500 text-white text-sm font-medium">{tour.badge}</div>

                                        <div className="rating-badge absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-sm font-medium shadow-md">
                                            <svg className="star w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572 .955-4.756 4.635 1.123 6.545z" /></svg>
                                            <span>{tour.rating}</span>
                                            <small>({tour.reviews})</small>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="tour-content w-full md:w-1/2 p-6 flex flex-col justify-between">
                                        <h3 className="tour-title text-xl md:text-2xl font-bold text-gray-900 mb-4">{tour.title}</h3>

                                        <div className="info-chips flex flex-wrap gap-2 mb-4">
                                            <div className="chip location flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                                                <div className="chip-icon w-2 h-2 rounded-full bg-blue-500"></div>
                                                {tour.location}
                                            </div>
                                            <div className="chip duration flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
                                                <div className="chip-icon w-2 h-2 rounded-full bg-purple-500"></div>
                                                {tour.duration}
                                            </div>
                                        </div>

                                        <p className="tour-desc text-gray-600 mb-6 leading-relaxed">{tour.description}</p>

                                        <div className="highlights-box mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <span className="highlight-bar w-1 h-6 bg-teal-500 rounded-full"></span> Tour Highlights
                                            </h4>
                                            <div className="highlights-grid grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {tour.highlights.slice(0, 6).map((h, i) => (
                                                    <div key={i} className="highlight-item flex items-center gap-2 text-gray-700 text-sm">
                                                        <div className="check-icon w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                                                        <span>{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="action-buttons flex flex-wrap gap-4">
                                            <button className="btn-primary price-btn flex items-center gap-2 bg-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                                                {tour.price}
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                            </button>

                                            <button
                                                className="btn-primary enquiry-btn flex items-center gap-2 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                                                onClick={() => handleEnquiryClick(tour)}
                                            >
                                                Get Enquiry
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                            </button>

                                            <button className="btn-favorite p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-all duration-300">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

            </section>

            {/* Enquiry Modal (Inline Implementation) */}
            {isEnquiryOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    {/* Background */}
                    <div
                        className="absolute inset-0 backdrop-blur-xl bg-black/30"
                        onClick={() => setIsEnquiryOpen(false)}
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-4 sm:mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-indigo-600">
                                    Enquiry for {selectedTour?.title}
                                </h2>
                                <button
                                    onClick={() => setIsEnquiryOpen(false)}
                                    disabled={isLoading}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full h-10 sm:h-11 px-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full h-10 sm:h-11 px-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                        placeholder="Enter phone number"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full h-10 sm:h-11 px-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                        placeholder="Enter email"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 resize-y"
                                        placeholder="Write your message"
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex justify-center items-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        "Submit Now"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Add subtle animations via Tailwind keyframes */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
            `}</style>
        </div>
    );
}

export default Tours;