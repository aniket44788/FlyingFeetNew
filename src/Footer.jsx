import React from 'react';
import { Link } from "react-router-dom";

// If you have a Map component, import it:
import Map from './Map';

function Footer() {
    return (
        <>
            {/* Map Section */}
            <Map />

            <footer className="relative font-sans bg-white text-gray-900">


                {/* ── Main Footer Body ── */}
                <div className="bg-white pt-12 pb-10 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-6">

                        {/* ── Grid: 4 columns on desktop, stacked on mobile ── */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                            {/* ── Column 1: Brand ── */}
                            <div className="space-y-4">
                                {/* Logo */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" rx="8" fill="#f97316"/>
                                            <path d="M8 22 L20 10 L32 22 L26 22 L26 30 L22 30 L22 25 L18 25 L18 30 L14 30 L14 22 Z"
                                                fill="white" opacity="0.95"/>
                                        </svg>
                                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                                            Flying Feet Holidays
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Explore the <strong className="text-gray-900">Himalayas</strong> with trusted trekking and tour experts. We provide trekking, weekend trips, domestic &amp; international tour packages with the best travel experience.
                                </p>

                                {/* Contact details */}
                                <div className="space-y-2 pt-3">
                                    <p className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-orange-500">📍</span>
                                        McLeodganj, <strong className="text-gray-900">Himachal Pradesh</strong>
                                    </p>
                                    <p className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-orange-500">☎</span>
                                        <a href="tel:+918351846490" className="hover:text-orange-600 transition-colors">
                                            +91 83518 46490
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-orange-500">✉</span>
                                        <a href="mailto:holidaysflyingfeet@gmail.com" 
                                           className="hover:text-orange-600 transition-colors break-all">
                                            holidaysflyingfeet@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* ── Column 2: Quick Links ── */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-5">Quick Links</h3>
                                <ul className="space-y-2">
                                    {[
                                        { label: 'Home', to: '/' },
                                        { label: 'About Us', to: '/about' },
                                        { label: 'Trekking', to: '/trekking' },
                                        { label: 'Tour Packages', to: '/packages' },
                                        { label: 'Domestic Tours', to: '/domestic' },
                                        { label: 'International Tours', to: '/international' },
                                        { label: 'Our Stay', to: '/stay' },
                                    ].map(({ label, to }) => (
                                        <li key={label}>
                                            <Link
                                                to={to}
                                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
                                            >
                                                <span className="text-orange-500 group-hover:translate-x-1 transition-transform">→</span>
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ── Column 3: Popular Treks ── */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-5">Popular Treks</h3>
                                <ul className="space-y-2">
                                    {[
                                        'Triund Trek',
                                        'Kareri Lake Trek',
                                        'Bhrigu Lake Trek',
                                        'Hampta Pass Trek',
                                        'Kedarkantha Trek',
                                        'Spiti Valley Tour',
                                    ].map((trek) => (
                                        <li key={trek}>
                                            <Link
                                                to="/packages"
                                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
                                            >
                                                <span className="text-orange-500 group-hover:translate-x-1 transition-transform">→</span>
                                                {trek}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ── Column 4: Newsletter + Social ── */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                                    Get Travel Deals &amp; Trekking Updates
                                </h3>

                                {/* Email subscribe */}
                                <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-300 focus-within:border-orange-500 transition-all">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white text-gray-700 placeholder-gray-400 px-4 py-3 text-sm outline-none"
                                    />
                                    <button
                                        className="px-5 py-3 text-sm font-semibold text-white flex-shrink-0 hover:bg-orange-600 transition-all"
                                        style={{ backgroundColor: '#f97316' }}
                                    >
                                        Subscribe
                                    </button>
                                </div>

                                {/* Follow Us */}
                                <h4 className="text-base font-semibold text-gray-900 mb-4">Follow Us</h4>
                                <div className="flex gap-3 flex-wrap">
                                    {/* Facebook */}
                                    <a href="#" aria-label="Facebook"
                                        className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-all text-white"
                                        style={{ backgroundColor: '#1877f2' }}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a href="#" aria-label="Instagram"
                                        className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-all text-white"
                                        style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>

                                    {/* YouTube */}
                                    <a href="#" aria-label="YouTube"
                                        className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-all text-white"
                                        style={{ backgroundColor: '#ff0000' }}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                    </a>

                                    {/* WhatsApp */}
                                    <a href="https://wa.me/918351846490" aria-label="WhatsApp"
                                        className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-all text-white"
                                        style={{ backgroundColor: '#25d366' }}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── Bottom Bar ── */}
                        <div
                            className="mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500"
                            style={{ borderColor: '#e5e7eb' }}
                        >
                            <p>© {new Date().getFullYear()} <strong className="text-gray-900">Flying Feet Holidays</strong>. All Rights Reserved.</p>
                            <div className="flex gap-6">
                                <Link to="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
                                <Link to="/terms" className="hover:text-orange-600 transition-colors">Terms &amp; Conditions</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;