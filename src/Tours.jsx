
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const SERVICE_ID = "service_wrif919";
const TEMPLATE_ID = "template_hy3cy8d";
const PUBLIC_KEY = "GwTM7Gy-N7kgmfsnV";

const QUICK_TAGS = ["Manali", "Triund", "Kedarkantha", "Kasol", "Spiti",];

const heroImage =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop";

const Tours = () => {

  return (
    <>

      <section className="relative  overflow-hidden bg-[#07152c]">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <img
            src={heroImage}
            alt="hero"
            className="w-full h-[500px]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152c]/95 via-[#07152c]/70 to-[#07152c]/30" />

        </div>

        {/* ================= HERO CONTENT ================= */}

        <div className="relative z-20 max-w-7xl h-[500px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-14 flex items-start">
          <div className="max-w-2xl w-full"> 

          
            {/* HEADING */}
            <h4 className=" text-2xl sm:text-3xl lg:text-5xl leading-[1.05] font-black text-white">

              Explore The Himalayas With{" "}

              <span className="text-red-500">
                Flying Feet Holidays
              </span>

            </h4>

            {/* SUBTITLE */}
            <p className="mt-4 text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">

              Trekking |  Weekend Trips | Tour Packages | Stays

            </p>

            {/* SEARCH BOX */}
            <div className="mt-5 bg-white rounded-[24px] p-3 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">

              {/* SEARCH AREA */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* INPUT */}
                <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-4">

                  <span className="text-lg text-red-500">
                    🔍
                  </span>
    
                  <input
                    type="text"
                    placeholder="Search Trek / Destination"
                    className="w-full bg-transparent py-3 outline-none text-gray-700 text-sm"
                  />

                </div>

                {/* BUTTON */}
                <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base">

                  BOOK NOW →

                </button>

              </div>

              {/* QUICK TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">

                {QUICK_TAGS.map((tag) => (

                  <button
                    key={tag}
                    className="bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-all text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium"
                  >

                    {tag}

                  </button>

                ))}

              </div>

            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">

              {/* PRIMARY */}
              <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-[0_8px_20px_rgba(239,68,68,0.35)] text-sm sm:text-base">

                Explore Treks →

              </button>

              {/* SECONDARY */}
              <button className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-white font-medium px-6 py-3 rounded-xl text-sm sm:text-base">

                View Packages →

              </button>

            </div>

      

          </div>

        </div>

      </section>


      
    </>


  );
}




export default Tours
