import React from 'react'
import { Link } from "react-router-dom";
import Map from './Map'

function Footer() {
    return (
        <>
            {/* Map Section with its own styling */}
            <Map />
            
            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-300 pt-14">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Contact Info
                            </h3>

                            <div className="space-y-3">
                                <p className="flex items-start gap-3">
                                    <span className="font-semibold text-white min-w-[80px]">Call Now:</span>
                                    <a
                                        href="tel:+918351846490"
                                        className="hover:text-blue-400 transition break-all"
                                    >
                                        +91-83518-46490
                                    </a>
                                </p>

                                <p className="flex items-start gap-3">
                                    <span className="font-semibold text-white min-w-[80px]">Email:</span>
                                    <a
                                        href="mailto:holidaysflyingfeet@gmail.com"
                                        className="hover:text-blue-400 transition break-all text-sm"
                                    >
                                        holidaysflyingfeet@gmail.com
                                    </a>
                                </p>

                                <p className="flex items-start gap-3">
                                    <span className="font-semibold text-white min-w-[80px]">Address:</span>
                                    <span className="text-sm leading-relaxed">
                                        Near Bus Stand, Bhagsunag Rd, McLeod Ganj, Dharamshala, HP 176219
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                                </svg>
                                Quick Links
                            </h3>

                            <ul className="space-y-2">
                                <li><Link to="/" className="hover:text-blue-400 hover:pl-2 transition-all block">Home</Link></li>
                                <li><Link to="/packages" className="hover:text-blue-400 hover:pl-2 transition-all block">Packages</Link></li>
                                <li><Link to="/destinations" className="hover:text-blue-400 hover:pl-2 transition-all block">Destination</Link></li>
                                <li><Link to="/about" className="hover:text-blue-400 hover:pl-2 transition-all block">About</Link></li>
                            </ul>
                        </div>

                        {/* Gallery */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Travel Gallery
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                <img src="https://www.adotrip.com/public/images/areas/master_images/5d2c28c322915-McLeod_Ganj_Attractions.jpg" 
                                     alt="McLeod Ganj" 
                                     className="rounded-lg object-cover h-20 w-full hover:scale-105 hover:shadow-xl transition-all duration-300" />
                                <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/21115556/athirapally-waterfall.jpeg" 
                                     alt="Waterfall" 
                                     className="rounded-lg object-cover h-20 w-full hover:scale-105 hover:shadow-xl transition-all duration-300" />
                                <img src="https://assets.vogue.in/photos/5ce44d78b13c9fed0d4f609a/16:9/w_1280,c_limit/Vogue-guide-to-Goa.jpg" 
                                     alt="Goa" 
                                     className="rounded-lg object-cover h-20 w-full hover:scale-105 hover:shadow-xl transition-all duration-300" />
                                <img src="https://happygotrips.com/wp-content/uploads/2020/10/Atal_Rohtang_Tunnel.jpg" 
                                     alt="Rohtang Tunnel" 
                                     className="rounded-lg object-cover h-20 w-full hover:scale-105 hover:shadow-xl transition-all duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} Flying Feet Holidays. All Rights Reserved.</p>
                        <p className="mt-2 text-xs">
                            Designed with ❤️ for travelers
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer