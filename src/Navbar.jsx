import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./assets/halicoptor.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#0f1b2d] border-b border-white shadow-sm font-sans">

            {/* Main Navbar */}
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

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {[
                            { label: "Home", to: "/" },
                            { label: "About", to: "/about" },
                            { label: "Packages", to: "/packages" },
                            { label: "Trekking", to: "/trekking" },
                            // { label: "Domestic", to: "/domestic" },
                            // { label: "International", to: "/international" },
                            // { label: "Our Stay", to: "/our-stay" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="relative text-white hover:text-white text-sm lg:text-base font-medium px-4 py-2 transition-all duration-200 group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-orange-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Side */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-white transition-colors px-4 py-2"
                        >
                            <span>📞</span> Call Now
                        </a>

                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                        >
                            +91 98765 43210
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Slide in from RIGHT */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-80 bg-[#0f1b2d] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden border-l border-white ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center mb-8">
                        <Link to="/" onClick={() => setOpen(false)}>
                            <img
                                src={logo2}
                                alt="Flying Feet Holidays"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white  p-2"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="flex flex-col space-y-1">
                        {[
                            { label: "Home", to: "/" },
                            { label: "About", to: "/about" },
                            { label: "Packages", to: "/packages" },
                            { label: "Trekking", to: "/trekking" },
                            // { label: "Domestic", to: "/domestic" },
                            // { label: "International", to: "/international" },
                            // { label: "Our Stay", to: "/our-stay" },
                            // { label: "Contact", to: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className="px-4 py-4 text-white hover:text-orange-600 rounded-xl font-medium transition-all text-base"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile CTAs */}
                    <div className="mt-auto pt-8 space-y-3">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center gap-3 w-full border border-white text-white font-medium py-3.5 rounded-2xl hover:bg-white transition-all"
                        >
                            📞 Call Now
                        </a>

                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-2xl transition-all"
                        >
                            +91 98765 43210
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay when menu is open */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
}

export default Navbar;