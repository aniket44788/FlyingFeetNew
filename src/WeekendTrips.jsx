// weekendTripsData.js
import dshala from "../src/assets/Swipper/dshala.jpg";

export const weekendTripsData = {
  hero: {
    badge: "Flying Feet Holidays",
    title: "Weekend Trips",
    highlight: "From Delhi & Chandigarh",
    description:
      "Escape the city chaos and explore the most breathtaking weekend getaways including Kasol, Jibhi, Manali, Tirthan Valley, Dharamshala, Bir Billing and many more. Perfect for adventure seekers and nature lovers.",
    stats: {
      trips: "50+",
      travelers: "10,000+",
      satisfaction: "98%",
    },
  },

  features: [
    {
      icon: "🏔️",
      title: "Handpicked Destinations",
      description: "Curated experiences at the best offbeat locations",
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "Lowest price guaranteed, no hidden charges",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round the clock assistance for your safety",
    },
    {
      icon: "🚌",
      title: "Comfortable Travel",
      description: "AC coaches, sanitized and well-maintained",
    },
  ],

  popularPackages: [
    {
      name: "Kasol & Kheerganga Trek",
      duration: "2 Nights / 3 Days",
      price: "4999",
      originalPrice: "7999",
      rating: 4.8,
      reviews: 234,
      highlights: ["Camping", "Hot Springs", "Trekking"],
      image: dshala,
      slug: "/kasol-kheerganga-trek",
    },
    {
      name: "Manali Adventure",
      duration: "3 Nights / 4 Days",
      price: "6999",
      originalPrice: "9999",
      rating: 4.9,
      reviews: 456,
      highlights: ["Snow Activities", "River Rafting", "Paragliding"],
      image: dshala,
      slug: "/manali-adventure",
    },
    {
      name: "Jibhi - Tirthan Valley",
      duration: "2 Nights / 3 Days",
      price: "5499",
      originalPrice: "8499",
      rating: 4.7,
      reviews: 189,
      highlights: ["Jalori Pass", "Serolsar Lake", "Fishing"],
      image: dshala,
      slug: "/jibhi-tirthan-valley",
    },
    {
      name: "Bir Billing Paragliding",
      duration: "2 Nights / 3 Days",
      price: "5999",
      originalPrice: "8999",
      rating: 4.9,
      reviews: 567,
      highlights: ["Paragliding", "Monastery Visit", "Camping"],
      image: dshala,
      slug: "/bir-billing-paragliding",
    },
  ],

  destinations: [
    { name: "Kasol", trips: 12, difficulty: "Easy", bestTime: "Mar-Jun" },
    { name: "Manali", trips: 24, difficulty: "Moderate", bestTime: "Oct-Feb" },
    { name: "Jibhi", trips: 8, difficulty: "Easy", bestTime: "Apr-Jun" },
    { name: "Tirthan Valley", trips: 10, difficulty: "Easy", bestTime: "Mar-May" },
    { name: "Bir Billing", trips: 15, difficulty: "Moderate", bestTime: "Sep-Nov" },
    { name: "Dharamshala", trips: 18, difficulty: "Easy", bestTime: "Sep-Jun" },
    { name: "McLeodganj", trips: 20, difficulty: "Easy", bestTime: "Sep-Jun" },
    { name: "Triund", trips: 14, difficulty: "Moderate", bestTime: "Mar-Jun" },
    { name: "Kareri Lake", trips: 6, difficulty: "Hard", bestTime: "May-Oct" },
    { name: "Spiti Valley", trips: 8, difficulty: "Hard", bestTime: "Jun-Sep" },
    { name: "Shimla", trips: 30, difficulty: "Easy", bestTime: "Mar-Jun" },
    { name: "Kullu", trips: 16, difficulty: "Easy", bestTime: "Sep-Nov" },
  ],

  whyChooseUs: [
    {
      title: "Expert Trip Planners",
      description: "10+ years of experience in organizing memorable trips",
      icon: "🎯",
    },
    {
      title: "Safety First",
      description: "Travel insured with 24/7 emergency support",
      icon: "🛡️",
    },
    {
      title: "Best Price",
      description: "No hidden costs, best deals on accommodations",
      icon: "💎",
    },
    {
      title: "Local Experts",
      description: "Local guides who know every trail and secret spot",
      icon: "🗺️",
    },
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      location: "Delhi",
      rating: 5,
      text: "Amazing experience with Flying Feet! The Kheerganga trek was perfectly organized. Will definitely book again.",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      rating: 5,
      text: "Best weekend getaway I've ever had. The team was very supportive and the arrangements were top-notch.",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Amit Kumar",
      location: "Chandigarh",
      rating: 5,
      text: "Jibhi trip was magical! Perfect for nature lovers. Highly recommend Flying Feet Holidays.",
      image: "/api/placeholder/60/60",
    },
  ],

  cta: {
    title: "Ready For Your Next Weekend Adventure?",
    description:
      "Book your trip today and explore the mountains with Flying Feet Holidays. Limited seats available!",
    buttonText: "Book Your Trip Now",
    offer: "Early bird discount up to 20%",
  },
};

import React, { useState } from "react";

const WeekendTrips = () => {
  const { hero, features, popularPackages, destinations, whyChooseUs, testimonials, cta } = weekendTripsData;
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const displayedDestinations = showAllDestinations ? destinations : destinations.slice(0, 6);

  const handleWhatsApp = (pkg) => {
    const message = `
🏔️ *TRIP ENQUIRY - FLYING FEET HOLIDAYS*

━━━━━━━━━━━━━━━━━━━━
📍 *Package:* ${pkg.name}
🗓️ *Duration:* ${pkg.duration}
💰 *Price:* ₹${pkg.price}/Person
⭐ *Rating:* ${pkg.rating} ⭐
👥 *Reviews:* ${pkg.reviews}+ happy travelers
━━━━━━━━━━━━━━━━━━━━

✨ *Package Highlights:*
${pkg.highlights.map((item) => `✓ ${item}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━
*Hello Flying Feet Holidays Team,*

I am interested in the *${pkg.name}* package.

Could you please share:
• Complete itinerary
• Availability for next weekend
• Group discount options
• Payment details

*Traveler Details:*
👤 Name: [Your Name]
📞 Phone: [Your Number]
👥 Number of travelers: [Number]

Looking forward to your response!

*Reference:* Weekend Trips Page
━━━━━━━━━━━━━━━━━━━━
    `;

    window.open(
      `https://wa.me/918351846490?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1622] via-[#0f1b2d] to-[#1a2a3a] text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-red-500/30">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
              {hero.title}
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-base sm:text-lg">
              {hero.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{hero.stats.trips}</div>
                <div className="text-xs text-gray-400">Weekend Trips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{hero.stats.travelers}</div>
                <div className="text-xs text-gray-400">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{hero.stats.satisfaction}</div>
                <div className="text-xs text-gray-400">Satisfaction Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button 
                onClick={scrollToPackages}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Trips
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section id="packages-section" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Popular Weekend Packages
            </h2>
            <p className="text-gray-600 mt-3">Most booked experiences this season</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow">
                    <span className="text-xs font-bold text-red-600">
                      ⭐ {pkg.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs text-white">{pkg.reviews}+ reviews</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {pkg.duration}
                  </p>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-red-600">
                      ₹{parseInt(pkg.price).toLocaleString()}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{parseInt(pkg.originalPrice).toLocaleString()}
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      Save ₹{parseInt(pkg.originalPrice - pkg.price).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.location.href = pkg.slug}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsApp(pkg)}
                      className="flex-1 bg-[#25D366] hover:bg-[#20b859] text-white py-2.5 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm flex items-center justify-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.885 3.148.886h.003c3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.728-5.767-5.728zm3.392 8.244c-.144.405-.837.795-1.416.865-.308.037-.713.066-1.127-.045-.306-.082-.622-.208-.944-.384-1.209-.662-2.065-1.907-2.187-2.045-.121-.139-.516-.68-.516-1.297 0-.617.324-.919.44-1.043.121-.124.264-.166.377-.166.112 0 .224 0 .324.052.099.052.26.166.396.542.137.376.437 1.299.476 1.394.04.095.059.206.019.312-.04.105-.07.166-.139.267-.069.1-.14.167-.209.267-.079.105-.165.231-.249.396-.084.165-.042.33.04.495.197.428.878 1.399 1.877 1.916.26.135.499.216.668.272.168.056.32.056.442.034.122-.022.376-.154.43-.302.054-.148.054-.272.038-.376-.016-.105-.06-.18-.125-.247-.065-.067-.136-.125-.207-.182-.071-.057-.158-.125-.226-.191-.135-.105-.27-.224-.154-.469.116-.245.516-1.019.591-1.222.075-.203.038-.376-.038-.498-.076-.122-.168-.19-.224-.238-.056-.048-.112-.076-.144-.095-.032-.019-.064-.038-.095-.076-.031-.038-.033-.076-.005-.152.028-.076.126-.361.169-.475.043-.114.086-.19.135-.228.048-.038.105-.057.162-.057.057 0 .114 0 .171.019.057.019.124.057.19.152.066.095.247.315.333.643.086.328.086.622.067.781-.019.159-.076.285-.114.361-.038.076-.076.133-.114.171-.038.038-.076.076-.114.114z"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Why Travel With Us?
            </h2>
            <p className="text-gray-600 mt-3">
              Trusted by thousands of travellers across India
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Destinations Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Popular Weekend Destinations
            </h2>
            <p className="text-gray-600 mt-3">
              {destinations.length}+ amazing destinations to choose from
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedDestinations.map((destination, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 text-center shadow hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-200">
                <div className="text-3xl mb-2">🏔️</div>
                <h3 className="font-bold text-[#0f1b2d] group-hover:text-red-600 transition-colors">
                  {destination.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full">{destination.trips} trips</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full">{destination.bestTime}</span>
                </div>
                <div className="mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    destination.difficulty === 'Easy' ? 'bg-green-100 text-green-600' :
                    destination.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {destination.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {destinations.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllDestinations(!showAllDestinations)}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors inline-flex items-center gap-2"
              >
                {showAllDestinations ? (
                  <>View Less ↑</>
                ) : (
                  <>View All {destinations.length} Destinations ↓</>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600 mt-3">Real experiences from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-[#0f1b2d] to-[#1a2a3a] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-red-500/30">
              Limited Time Offer
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {cta.title}
          </h2>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            {cta.description}
          </p>
          
          <p className="text-red-400 font-semibold mt-2">
            🎉 {cta.offer}
          </p>

          <button 
            onClick={scrollToPackages}
            className="mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 sm:px-12 py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            {cta.buttonText}
          </button>
        </div>
      </section>
    </>
  );
};

export default WeekendTrips;