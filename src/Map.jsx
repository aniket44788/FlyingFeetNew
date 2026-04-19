import React from "react";

function Map() {
  return (
    <div className="w-full bg-[#0f1b2d]  py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Find Us Here
          </h3>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-white mt-4 text-sm md:text-base max-w-md mx-auto">
            Visit our office or get directions to plan your next Himalayan adventure
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:border-orange-200 transition-all duration-500">
          {/* Map Aspect Ratio Container */}
          <div className="relative w-full pt-[56.25%] md:pt-[45%] lg:pt-[40%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.7217087477275!2d76.32098427616228!3d32.23865891130308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b56d4f1c6c707%3A0x97c916cbfe8fbc72!2sFlying%20Feet%20Holidays!5e0!3m2!1sen!2sin!4v1764676100752!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flying Feet Holidays Location"
            ></iframe>
          </div>

          {/* Map Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:bottom-6 md:right-auto bg-white shadow-lg text-white p-5 rounded-2xl border-l-4 border-orange-500">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-base">Flying Feet Holidays</h4>
                <p className="text-sm text-white mt-1">
                  Near Bus Stand, Bhagsunag Rd, McLeod Ganj, Dharamshala
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://maps.google.com/?q=Flying+Feet+Holidays+Dharamshala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-md text-sm md:text-base"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </a>

          <a
            href="tel:+918351846490"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0f1b2d]  hover:bg-gray-200 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-md text-sm md:text-base"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Map;