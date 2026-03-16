import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./assets/halicoptor.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 shadow-lg" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

            {/* ── TOP ROW ── dark navy background */}
            <div style={{ backgroundColor: "#0f1b2d" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">

                        {/* Logo */}
                        <Link to="/" className="flex items-center flex-shrink-0">
                            <img
                                src={logo2}
                                alt="Flying Feet Holidays"
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Main Nav Links */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {[
                                { label: "Home", to: "/" },
                                { label: "About", to: "/about" },
                                { label: "Packages", to: "/packages" },
                                { label: "Trekking", to: "/trekking" },
                                { label: "Domestic", to: "/domestic" },
                                { label: "International", to: "/international" },
                                { label: "Our Stay", to: "/our-stay" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="relative text-white text-sm lg:text-base font-medium px-3 lg:px-4 py-2 transition-all duration-200 group"
                                    style={{ letterSpacing: "0.01em" }}
                                >
                                    {item.label}
                                    {/* Underline accent on hover */}
                                    <span
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 rounded-full"
                                        style={{ backgroundColor: "#e63946" }}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Right CTAs */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Call Now button */}
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-2 border border-white text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                                </svg>
                                Call Now
                            </a>

                            {/* Phone number CTA */}
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90"
                                style={{ backgroundColor: "#1a9e5c" }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                                </svg>
                                +91 9876 43210
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {open ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── SECONDARY ROW ── slightly lighter navy */}
            <div className="hidden md:block" style={{ backgroundColor: "#0a1628", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-10">

                        {/* Secondary links */}
                        <div className="flex items-center gap-6">
                            {/* List Us dropdown placeholder */}
                            <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors duration-200">
                                List Us
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors duration-200">
                                List Your Property
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                                Contact
                            </Link>
                        </div>

                        {/* Right utility icons */}
                        <div className="flex items-center gap-4">
                            {/* Reviews / Chat icon */}
                            <button className="text-gray-400 hover:text-white transition-colors duration-200" title="Reviews">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </button>
                            {/* Testimonials icon */}
                            <button className="text-gray-400 hover:text-white transition-colors duration-200" title="Testimonials">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                            {/* Location icon */}
                            <button className="text-gray-400 hover:text-white transition-colors duration-200" title="Location">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MOBILE MENU ── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                style={{ backgroundColor: "#0f1b2d" }}
            >
                <div className="border-t border-white/10">
                    <div className="flex flex-col px-4 py-3 space-y-1">
                        {[
                            { label: "Home", to: "/" },
                            { label: "About", to: "/about" },
                            { label: "Packages", to: "/packages" },
                            { label: "Trekking", to: "/trekking" },
                            { label: "Domestic", to: "/domestic" },
                            { label: "International", to: "/international" },
                            { label: "Our Stay", to: "/our-stay" },
                            { label: "Contact", to: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className="text-white hover:text-red-400 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/5"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile CTAs */}
                        <div className="flex gap-2 pt-2">
                            <a
                                href="tel:+919876543210"
                                className="flex-1 flex items-center justify-center gap-2 border border-white text-white text-sm font-semibold py-2.5 rounded-full"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                                </svg>
                                Call Now
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 rounded-full"
                                style={{ backgroundColor: "#1a9e5c" }}
                            >
                                +91 9876 43210
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;