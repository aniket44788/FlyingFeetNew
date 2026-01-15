import React from 'react'

import kila from "./assets/travel.jpeg"
import minar from "./assets/travel.jpeg"
import tajmahal from "./assets/travel.jpeg"
import mountain from "./assets/travel.jpeg"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-14">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Contact Info
                        </h3>

                        <p className="mb-2">
                            <span className="font-semibold text-white">Call Now:</span>{" "}
                            <a
                                href="tel:+918351846490"
                                className="hover:text-blue-400 transition"
                            >
                                +91-83518-46490
                            </a>
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold text-white">Email:</span>{" "}
                            <a
                                href="mailto:holidaysflyingfeet@gmail.com"
                                className="hover:text-blue-400 transition"
                            >
                                holidaysflyingfeet@gmail.com
                            </a>
                        </p>

                        <p className="text-sm leading-relaxed">
                            <span className="font-semibold text-white">Address:</span> Near Bus
                            Stand, Bhagsunag Rd, McLeod Ganj, Dharamshala, Himachal Pradesh
                            176219
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link to="/packages" className="hover:text-blue-400">Packages</Link></li>
                            <li><Link to="/destinations" className="hover:text-blue-400">Destination</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                        </ul>
                    </div>

                    {/* Gallery */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Travel Gallery
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                            <img src="https://www.adotrip.com/public/images/areas/master_images/5d2c28c322915-McLeod_Ganj_Attractions.jpg" alt="Gallery" className="rounded-lg object-cover h-24 w-full hover:scale-105 transition" />
                            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/21115556/athirapally-waterfall.jpeg" alt="Gallery" className="rounded-lg object-cover h-24 w-full hover:scale-105 transition" />
                            <img src="https://assets.vogue.in/photos/5ce44d78b13c9fed0d4f609a/16:9/w_1280,c_limit/Vogue-guide-to-Goa.jpg" alt="Gallery" className="rounded-lg object-cover h-24 w-full hover:scale-105 transition" />
                            <img src="https://happygotrips.com/wp-content/uploads/2020/10/Atal_Rohtang_Tunnel.jpg" alt="Gallery" className="rounded-lg object-cover h-24 w-full hover:scale-105 transition" />
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Flying Feet Holidays. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer