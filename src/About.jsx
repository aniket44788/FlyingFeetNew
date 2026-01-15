import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaFacebook,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import logo from "./assets/logo.jpeg"

const SERVICE_ID = "service_a74zlnf";
const TEMPLATE_ID = "template_qe2jgen";
const PUBLIC_KEY = "aG1J-USjBV4O6JSSb";

function About() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    ...formData,
                    tour: "Contact Form Submission",
                },
                PUBLIC_KEY
            );

            alert("✅ Message sent successfully! We will contact you soon.");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } catch (error) {
            console.error("❌ EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
                        Get In Touch With Us
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                        We're here to help you plan your perfect Himalayan adventure. Reach out to us anytime!
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Logo & Branding */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                                <img
                                    src={logo}
                                    alt="Flying Feet Holidays"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Flying Feet Holidays
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">
                                Flying Feet Holidays
                            </p>
                            <p className="text-sm text-gray-700 italic mb-6">
                                "Your gateway to Himalayan adventures"
                            </p>

                            {/* Social Icons */}
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61571662029360"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                                >
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a
                                    href="https://www.instagram.com/flying_feet_holidays?igsh=NHlxbHV3ZHZ2Nmpi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                                >
                                    <FaInstagram className="text-xl" />
                                </a>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-indigo-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Why Choose Us
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "20+ Years of Experience",
                                    "Local Expert Guides",
                                    "Best Price Guarantee",
                                    "24/7 Customer Support",
                                    "Customized Packages"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Middle Column - Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                                    Send Us A Message
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Fill out the form and we'll get back to you shortly
                                </p>
                            </div>

                            <div className="space-y-5">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            placeholder="Enter your full name"
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Email *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <FaEnvelope className="text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            placeholder="your.email@example.com"
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-10 sm:h-11 px-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                                {/* Message Textarea */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            rows="5"
                                            placeholder="Tell us about your travel plans..."
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Phone Numbers */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaPhoneAlt className="text-green-600 text-sm" />
                                </div>
                                Landline
                            </h3>
                            <div className="space-y-2">
                                <a href="tel:8351846490" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
                                    <FaPhoneAlt className="text-indigo-600" />
                                    <span className="font-medium">8351846490</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <MdPhoneInTalk className="text-blue-600 text-lg" />
                                </div>
                                Mobile
                            </h3>
                            <div className="space-y-2">
                                <a href="tel:+918351846490" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
                                    <MdPhoneInTalk className="text-indigo-600 text-lg" />
                                    <span className="font-medium">+91 8351846490</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <MdPhoneInTalk className="text-purple-600 text-lg" />
                                </div>
                                Delhi Sales
                            </h3>
                            <div className="space-y-2">
                                <a href="tel:+918351846490" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
                                    <MdPhoneInTalk className="text-indigo-600 text-lg" />
                                    <span className="font-medium">+91 8351846490</span>
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                    <FaEnvelope className="text-red-600 text-sm" />
                                </div>
                                Email Us
                            </h3>
                            <a
                                href="mailto:holidaysflyingfeet@gmail.com"
                                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50 break-all"
                            >
                                <FaEnvelope className="text-indigo-600 flex-shrink-0" />
                                <span className="font-medium text-sm">holidaysflyingfeet@gmail.com</span>
                            </a>
                        </div>

                        {/* Address */}
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-indigo-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-indigo-600 text-sm" />
                                </div>
                                Visit Us
                            </h3>
                            <div className="flex items-start gap-3 text-gray-700">
                                <FaMapMarkerAlt className="text-indigo-600 flex-shrink-0 mt-1" />
                                <p className="font-medium text-sm leading-relaxed">
                                    Mcleodganj, Front of Dalai Lama Temple,<br />
                                    Kangra, Himachal Pradesh 176215
                                </p>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Mcleodganj+Dalai+Lama+Temple"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm sm:text-base mb-2">
                        © 2021 All rights reserved <span className="font-bold">Flying Feet Holidays</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                        Website Designed & Developed by Flying Feet Holidays
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;