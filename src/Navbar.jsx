import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./assets/halicoptor.png";
import { PiPhoneCallFill } from "react-icons/pi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Packages", to: "/packages" },
    { label: "Trekking", to: "/trekking" },
    { label: "Weekend Trips", to: "/weekendtrips" },
    { label: "Domestic Tours", to: "/domestictours" },
    { label: "International Tours", to: "/internationaltours" },
    { label: "Our Stays", to: "/ourstay" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0f1b2d] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo2}
              alt="Flying Feet Holidays"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS (ONLY DESKTOP LG+) */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-white text-sm xl:text-base font-medium px-2 xl:px-3 py-2 relative group whitespace-nowrap"
              >
                {item.label}

                <span className="absolute left-1/2 bottom-0 h-0.5 w-0 -translate-x-1/2 bg-orange-500 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}
          </div>

          {/* PHONE BUTTON (MD+) ALWAYS RIGHT */}
          <div className="hidden md:flex items-center ml-auto">
            <a
              href="tel:+918351846490"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-3 lg:px-4 py-2 rounded-full"
            >
              <PiPhoneCallFill className="text-xl text-white" />
              <span className="text-white font-semibold text-sm lg:text-base whitespace-nowrap">
                +91 83518 46490
              </span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
          >
            {open ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[380px] bg-[#0f1b2d] z-50 transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col min-h-full">

          {/* TOP */}
          <div className="flex items-center justify-between mb-8">
            <img src={logo2} alt="logo" className="h-12 object-contain" />

            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl"
            >
              ×
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/10 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CALL BUTTON */}
          <div className="mt-auto pt-8">
            <a
              href="tel:+918351846490"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-2xl"
            >
              <PiPhoneCallFill className="text-2xl" />
              <span className="font-semibold text-lg">
                +91 83518 46490
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;