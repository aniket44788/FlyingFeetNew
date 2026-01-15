import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./assets/logo2.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">

                    {/* Logo - Responsive sizing */}
                  <Link to="/" className="flex items-center flex-shrink-0">
  <img
    src={logo2}
    alt="Flying Feet Holidays"
    className="
      h-8
      sm:h-10
      md:h-12
      lg:h-16
      xl:h-18
      w-auto
      object-contain
    "
  />
</Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                        <Link
                            to="/"
                            className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/packages"
                            className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Packages
                        </Link>
                        <Link
                            to="/destinations"
                            className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Destinations
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            About
                        </Link>

                        <Link
                            to="/packages"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            // Close Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Smooth Animation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white border-t border-gray-100 shadow-lg">
                    <div className="flex flex-col space-y-1 px-4 py-3">
                        <Link
                            onClick={() => setOpen(false)}
                            to="/"
                            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => setOpen(false)}
                            to="/packages"
                            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                        >
                            Packages
                        </Link>
                        <Link
                            onClick={() => setOpen(false)}
                            to="/destinations"
                            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                        >
                            Destinations
                        </Link>
                        <Link
                            onClick={() => setOpen(false)}
                            to="/about"
                            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                        >
                            About
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/packages"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 shadow-md mt-2"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;