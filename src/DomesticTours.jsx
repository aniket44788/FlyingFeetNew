// DomesticTours.jsx
import React, { useState } from "react";

// Import images (add your actual image paths)
import kashmirImg from "../src/assets/Swipper/dshala.jpg";

const DomesticTours = () => {
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [selectedState, setSelectedState] = useState("all");
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Domestic Tours Data
  const domesticData = {
    hero: {
      badge: "Flying Feet Holidays",
      title: "Domestic Tours",
      highlight: "Explore Incredible India",
      description:
        "Discover the rich cultural heritage, diverse landscapes, and breathtaking beauty of India. From the snow-capped Himalayas to the sun-kissed beaches of Goa, experience the magic of your own country.",
      stats: {
        destinations: "25+",
        travelers: "50,000+",
        satisfaction: "97%",
      },
    },

    features: [
      {
        icon: "🇮🇳",
        title: "Pan India Coverage",
        description: "Tours across all major destinations in India",
      },
      {
        icon: "🏨",
        title: "Premium Accommodation",
        description: "3-5 star hotels & luxury resorts",
      },
      {
        icon: "🚐",
        title: "Private Transport",
        description: "Comfortable AC vehicles with expert drivers",
      },
      {
        icon: "🎯",
        title: "Customized Itineraries",
        description: "Tailor-made trips as per your preferences",
      },
    ],

    popularPackages: [
      {
        name: "Kashmir - Heaven on Earth",
        duration: "6 Nights / 7 Days",
        price: "24999",
        originalPrice: "34999",
        rating: 4.9,
        reviews: 1234,
        highlights: ["Houseboat Stay", "Gondola Ride", "Mughal Gardens", "Gulmarg Snow"],
        image: kashmirImg,
        slug: "/kashmir-tour-package",
        states: "Jammu & Kashmir",
        bestSeason: "Mar-Oct",
      },
      {
        name: "Kerala Backwaters & Beach",
        duration: "5 Nights / 6 Days",
        price: "19999",
        originalPrice: "28999",
        rating: 4.8,
        reviews: 987,
        highlights: ["Houseboat Cruise", "Ayurveda Massage", "Tea Gardens", "Beach Stay"],
        image: kashmirImg,
        slug: "/kerala-tour-package",
        states: "Kerala",
        bestSeason: "Sep-Mar",
      },
      {
        name: "Goa Beach Party",
        duration: "4 Nights / 5 Days",
        price: "15999",
        originalPrice: "22999",
        rating: 4.7,
        reviews: 2156,
        highlights: ["Beach Hopping", "Water Sports", "Night Parties", "Dolphin Safari"],
        image: kashmirImg,
        slug: "/goa-tour-package",
        states: "Goa",
        bestSeason: "Nov-Feb",
      },
      {
        name: "Royal Rajasthan",
        duration: "7 Nights / 8 Days",
        price: "29999",
        originalPrice: "42999",
        rating: 4.9,
        reviews: 876,
        highlights: ["Palace Stays", "Desert Safari", "Folk Dance", "Fort Visiting"],
        image: kashmirImg,
        slug: "/rajasthan-tour-package",
        states: "Rajasthan",
        bestSeason: "Oct-Mar",
      },
      {
        name: "Himachal Adventure",
        duration: "6 Nights / 7 Days",
        price: "21999",
        originalPrice: "31999",
        rating: 4.8,
        reviews: 1456,
        highlights: ["Manali", "Shimla", "River Rafting", "Paragliding"],
        image: kashmirImg,
        slug: "/himachal-tour-package",
        states: "Himachal Pradesh",
        bestSeason: "Mar-Jun, Dec-Feb",
      },
      {
        name: "Uttarakhand - Char Dham Yatra",
        duration: "10 Nights / 11 Days",
        price: "44999",
        originalPrice: "59999",
        rating: 4.9,
        reviews: 654,
        highlights: ["Spiritual Journey", "Mountain Views", "Holy Rivers", "Temple Visits"],
        image: kashmirImg,
        slug: "/uttarakhand-tour-package",
        states: "Uttarakhand",
        bestSeason: "May-Oct",
      },
      {
        name: "North East Explorer",
        duration: "7 Nights / 8 Days",
        price: "32999",
        originalPrice: "45999",
        rating: 4.7,
        reviews: 432,
        highlights: ["Living Root Bridges", "Tea Estates", "Wildlife", "Tribal Culture"],
        image: kashmirImg,
        slug: "/north-east-tour-package",
        states: "North East",
        bestSeason: "Oct-Apr",
      },
      {
        name: "Andaman Islands",
        duration: "5 Nights / 6 Days",
        price: "27999",
        originalPrice: "38999",
        rating: 4.8,
        reviews: 789,
        highlights: ["Scuba Diving", "Cellular Jail", "Radhanagar Beach", "Coral Reefs"],
        image: kashmirImg,
        slug: "/andaman-tour-package",
        states: "Andaman",
        bestSeason: "Oct-May",
      },
    ],

    states: [
      { name: "All India", count: 25, icon: "🇮🇳" },
      { name: "Jammu & Kashmir", count: 8, icon: "🏔️" },
      { name: "Himachal Pradesh", count: 12, icon: "⛰️" },
      { name: "Uttarakhand", count: 10, icon: "🏞️" },
      { name: "Rajasthan", count: 15, icon: "🏰" },
      { name: "Kerala", count: 9, icon: "🌴" },
      { name: "Goa", count: 6, icon: "🏖️" },
      { name: "North East", count: 7, icon: "🍃" },
    ],

    testimonials: [
      {
        name: "Neha Gupta",
        location: "Mumbai",
        rating: 5,
        text: "Best trip to Kashmir! Everything was perfectly organized. The houseboat stay was magical. Highly recommend Flying Feet!",
        image: "/api/placeholder/60/60",
        package: "Kashmir Tour",
      },
      {
        name: "Vikram Singh",
        location: "Delhi",
        rating: 5,
        text: "Rajasthan tour exceeded expectations. Our guide was knowledgeable and the hotels were superb. Will book again!",
        image: "/api/placeholder/60/60",
        package: "Rajasthan Tour",
      },
      {
        name: "Priya Menon",
        location: "Bangalore",
        rating: 5,
        text: "Kerala backwaters were breathtaking! The houseboat experience and Ayurvedic massage were highlights. 5 stars!",
        image: "/api/placeholder/60/60",
        package: "Kerala Tour",
      },
    ],

    cta: {
      title: "Ready to Explore Incredible India?",
      description: "Book your dream domestic tour today and create memories that last a lifetime.",
      buttonText: "Plan Your Trip Now",
      offer: "Customized group packages available",
    },
  };

  const { hero, features, popularPackages, states, testimonials, cta } = domesticData;

  // Filter packages based on selected state
  const filteredPackages = selectedState === "all" 
    ? popularPackages 
    : popularPackages.filter(pkg => pkg.states === selectedState || 
        (selectedState === "North East" && pkg.states === "North East"));

  const displayedPackages = filteredPackages;

  const handleWhatsApp = (pkg) => {
    const message = `
🇮🇳 *DOMESTIC TOUR ENQUIRY - FLYING FEET HOLIDAYS*

━━━━━━━━━━━━━━━━━━━━
📍 *Destination:* ${pkg.name}
🗓️ *Duration:* ${pkg.duration}
💰 *Price:* ₹${parseInt(pkg.price).toLocaleString()}/Person
⭐ *Rating:* ${pkg.rating} ⭐ (${pkg.reviews}+ reviews)
🏔️ *State:* ${pkg.states}
🌸 *Best Season:* ${pkg.bestSeason}
━━━━━━━━━━━━━━━━━━━━

✨ *Tour Highlights:*
${pkg.highlights.map((item) => `✓ ${item}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━
*Hello Flying Feet Holidays Team,*

I am interested in the *${pkg.name}* package.

Could you please share:
• Detailed itinerary
• Available departure dates
• Hotel details
• Payment & cancellation policy

*Traveler Details:*
👤 Name: [Your Name]
📞 Phone: [Your Number]
👥 Number of travelers: [Number]
🗓️ Preferred travel date: [Date]

Looking forward to exploring India with you!

*Reference:* Domestic Tours Page
━━━━━━━━━━━━━━━━━━━━
    `;

    window.open(
      `https://wa.me/918351846490?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('domestic-packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1622] via-[#0f1b2d] to-[#1a2a3a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
              {hero.title}
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-base sm:text-lg">
              {hero.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">{hero.stats.destinations}</div>
                <div className="text-xs text-gray-400">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">{hero.stats.travelers}</div>
                <div className="text-xs text-gray-400">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">{hero.stats.satisfaction}</div>
                <div className="text-xs text-gray-400">Satisfaction Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button 
                onClick={scrollToPackages}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Destinations
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-200">
                Customize Your Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Why Choose Flying Feet?
            </h2>
            <p className="text-gray-600 mt-3">Making your travel dreams come true since 2015</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {states.map((state, index) => (
              <button
                key={index}
                onClick={() => setSelectedState(state.name === "All India" ? "all" : state.name)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                  (state.name === "All India" && selectedState === "all") || (state.name !== "All India" && selectedState === state.name)
                    ? "bg-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
              >
                <span>{state.icon}</span>
                <span>{state.name}</span>
                <span className={`text-xs ${(state.name === "All India" && selectedState === "all") || (state.name !== "All India" && selectedState === state.name) ? "text-white" : "text-gray-400"}`}>
                  ({state.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section id="domestic-packages" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Popular Domestic Tour Packages
            </h2>
            <p className="text-gray-600 mt-3">Curated experiences across India's most beautiful destinations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPackages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs font-bold text-orange-600">⭐ {pkg.rating}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs text-white">{pkg.reviews}+ reviews</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    {pkg.states}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pkg.duration}
                    </p>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      Best: {pkg.bestSeason}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-orange-600">
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
                    {pkg.highlights.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        +{pkg.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.location.href = pkg.slug}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsApp(pkg)}
                      className="flex-1 bg-[#25D366] hover:bg-[#20b859] text-white py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm flex items-center justify-center gap-1"
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

          {displayedPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No packages found for this region.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why India Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Why Explore India with Us?
            </h2>
            <p className="text-gray-600 mt-3">Experience the diversity like never before</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="font-bold text-xl mb-2">Himalayan Adventures</h3>
              <p className="text-gray-600">Experience the majestic mountains and thrilling treks</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏖️</div>
              <h3 className="font-bold text-xl mb-2">Beach Getaways</h3>
              <p className="text-gray-600">Relax on India's most beautiful coastal destinations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏰</div>
              <h3 className="font-bold text-xl mb-2">Cultural Heritage</h3>
              <p className="text-gray-600">Explore ancient forts, palaces, and UNESCO sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Traveler Stories
            </h2>
            <p className="text-gray-600 mt-3">What our customers say about their journey with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <p className="text-xs text-orange-600">{testimonial.package}</p>
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

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#0f1b2d] to-[#1a2a3a] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-orange-500/30">
              Start Your Journey
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {cta.title}
          </h2>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            {cta.description}
          </p>
          
          <p className="text-orange-400 font-semibold mt-2">
            🎉 {cta.offer}
          </p>

          <button 
            onClick={scrollToPackages}
            className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 sm:px-12 py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            {cta.buttonText}
          </button>
        </div>
      </section>
    </>
  );
};

export default DomesticTours;