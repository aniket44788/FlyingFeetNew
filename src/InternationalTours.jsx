// InternationalTours.jsx
import React, { useState } from "react";

// Import images (add your actual image paths)
import dubaiImg from "../src/assets/Swipper/dshala.jpg";

const InternationalTours = () => {
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState(null);

  // International Tours Data
  const internationalData = {
    hero: {
      badge: "Flying Feet Holidays",
      title: "International Tours",
      highlight: "Explore the World",
      description:
        "Embark on a journey of a lifetime with our curated international tour packages. From the romantic streets of Paris to the pristine beaches of Maldives, experience the best of global destinations with Flying Feet Holidays.",
      stats: {
        countries: "30+",
        travelers: "25,000+",
        satisfaction: "96%",
      },
    },

    features: [
      {
        icon: "🌍",
        title: "Global Destinations",
        description: "Covering 30+ countries across 5 continents",
      },
      {
        icon: "✈️",
        title: "Visa Assistance",
        description: "End-to-end visa processing support",
      },
      {
        icon: "🏨",
        title: "Luxury Stays",
        description: "Premium hotels & resorts worldwide",
      },
      {
        icon: "🗺️",
        title: "Expert Guides",
        description: "Local guides for authentic experiences",
      },
    ],

    continents: [
      { name: "All", count: 32, icon: "🌏" },
      { name: "Asia", count: 12, icon: "🏯" },
      { name: "Europe", count: 10, icon: "🏰" },
      { name: "Middle East", count: 5, icon: "🕌" },
      { name: "Oceania", count: 3, icon: "🏝️" },
      { name: "Africa", count: 2, icon: "🦁" },
    ],

    popularPackages: [
      {
        name: "Dubai - City of Gold",
        duration: "4 Nights / 5 Days",
        price: "49999",
        originalPrice: "69999",
        rating: 4.9,
        reviews: 2156,
        highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise", "Miracle Garden"],
        image: dubaiImg,
        slug: "/dubai-tour-package",
        continent: "Middle East",
        bestSeason: "Nov-Mar",
        included: ["Visa", "Flights", "Hotels", "Transfers"],
      },
      {
        name: "Bali - Island of Gods",
        duration: "5 Nights / 6 Days",
        price: "45999",
        originalPrice: "64999",
        rating: 4.8,
        reviews: 1876,
        highlights: ["Rice Terraces", "Beach Clubs", "Water Sports", "Temple Tour"],
        image: dubaiImg,
        slug: "/bali-tour-package",
        continent: "Asia",
        bestSeason: "Apr-Oct",
        included: ["Flights", "Hotels", "Sightseeing", "Breakfast"],
      },
      {
        name: "Thailand - Land of Smiles",
        duration: "5 Nights / 6 Days",
        price: "35999",
        originalPrice: "49999",
        rating: 4.7,
        reviews: 3245,
        highlights: ["Phi Phi Islands", "Bangkok City", "Thai Massage", "Night Markets"],
        image: dubaiImg,
        slug: "/thailand-tour-package",
        continent: "Asia",
        bestSeason: "Nov-Feb",
        included: ["Flights", "Hotels", "Cruise", "Transfers"],
      },
      {
        name: "Switzerland - Alpine Paradise",
        duration: "6 Nights / 7 Days",
        price: "129999",
        originalPrice: "159999",
        rating: 4.9,
        reviews: 987,
        highlights: ["Jungfraujoch", "Interlaken", "Lucerne", "Zurich"],
        image: dubaiImg,
        slug: "/switzerland-tour-package",
        continent: "Europe",
        bestSeason: "Jun-Sep",
        included: ["Flights", "Hotels", "Swiss Pass", "Sightseeing"],
      },
      {
        name: "Maldives - Tropical Paradise",
        duration: "4 Nights / 5 Days",
        price: "89999",
        originalPrice: "129999",
        rating: 4.9,
        reviews: 1543,
        highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise", "Spa"],
        image: dubaiImg,
        slug: "/maldives-tour-package",
        continent: "Asia",
        bestSeason: "Nov-Apr",
        included: ["Speedboat Transfer", "All Meals", "Water Villa"],
      },
      {
        name: "Singapore - Futuristic City",
        duration: "3 Nights / 4 Days",
        price: "39999",
        originalPrice: "54999",
        rating: 4.8,
        reviews: 2341,
        highlights: ["Marina Bay", "Sentosa", "Universal Studios", "Gardens by Bay"],
        image: dubaiImg,
        slug: "/singapore-tour-package",
        continent: "Asia",
        bestSeason: "Feb-Apr",
        included: ["Flights", "Hotels", "Entry Tickets", "Transfers"],
      },
      {
        name: "Paris - City of Love",
        duration: "5 Nights / 6 Days",
        price: "99999",
        originalPrice: "139999",
        rating: 4.8,
        reviews: 1245,
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine Cruise", "Versailles"],
        image: dubaiImg,
        slug: "/paris-tour-package",
        continent: "Europe",
        bestSeason: "Apr-Oct",
        included: ["Flights", "Hotels", "Museum Pass", "Train Transfers"],
      },
      {
        name: "Vietnam - Hidden Gem",
        duration: "6 Nights / 7 Days",
        price: "49999",
        originalPrice: "69999",
        rating: 4.7,
        reviews: 876,
        highlights: ["Ha Long Bay", "Hanoi Old Quarter", "Hoi An", "Mekong Delta"],
        image: dubaiImg,
        slug: "/vietnam-tour-package",
        continent: "Asia",
        bestSeason: "Sep-Apr",
        included: ["Flights", "Hotels", "Cruise", "Local Tours"],
      },
    ],

    additionalDestinations: [
      { name: "Japan", icon: "🗾", price: "89999", duration: "7 Days" },
      { name: "Turkey", icon: "🕌", price: "69999", duration: "6 Days" },
      { name: "Greece", icon: "🏛️", price: "89999", duration: "7 Days" },
      { name: "Italy", icon: "🍕", price: "99999", duration: "8 Days" },
      { name: "Australia", icon: "🦘", price: "119999", duration: "7 Days" },
      { name: "Egypt", icon: "🐫", price: "79999", duration: "6 Days" },
    ],

    testimonials: [
      {
        name: "Aisha Khan",
        location: "Mumbai",
        rating: 5,
        text: "Dubai trip was spectacular! Everything was perfectly arranged. The desert safari and Burj Khalifa were highlights. Highly recommend Flying Feet!",
        image: "/api/placeholder/60/60",
        package: "Dubai Tour",
      },
      {
        name: "Rohan Mehta",
        location: "Delhi",
        rating: 5,
        text: "Switzerland exceeded our expectations. The team handled everything from visa to local transport. Jungfraujoch was magical!",
        image: "/api/placeholder/60/60",
        package: "Switzerland Tour",
      },
      {
        name: "Sneha Reddy",
        location: "Hyderabad",
        rating: 5,
        text: "Bali was a dream come true! Great itinerary, amazing hotels, and perfect coordination. Will definitely book again for Europe!",
        image: "/api/placeholder/60/60",
        package: "Bali Tour",
      },
    ],

    cta: {
      title: "Ready to Explore the World?",
      description: "Book your international tour today and get exclusive discounts on flight + hotel packages.",
      buttonText: "Plan Your International Trip",
      offer: "Early bird discount up to 25% + Free travel insurance",
    },
  };

  const { hero, features, continents, popularPackages, additionalDestinations, testimonials, cta } = internationalData;

  // Filter packages based on selected continent
  const filteredPackages = selectedContinent === "all" 
    ? popularPackages 
    : popularPackages.filter(pkg => pkg.continent === selectedContinent);

  const handleWhatsApp = (pkg) => {
    const message = `
🌍 *INTERNATIONAL TOUR ENQUIRY - FLYING FEET HOLIDAYS*

━━━━━━━━━━━━━━━━━━━━
✈️ *Destination:* ${pkg.name}
🗓️ *Duration:* ${pkg.duration}
💰 *Price:* ₹${parseInt(pkg.price).toLocaleString()}/Person
⭐ *Rating:* ${pkg.rating} ⭐ (${pkg.reviews}+ reviews)
🌏 *Region:* ${pkg.continent}
🌸 *Best Season:* ${pkg.bestSeason}
━━━━━━━━━━━━━━━━━━━━

✨ *Package Highlights:*
${pkg.highlights.map((item) => `✓ ${item}`).join("\n")}

🎁 *Package Inclusions:*
${pkg.included.map((item) => `• ${item}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━
*Hello Flying Feet Holidays Team,*

I am interested in the *${pkg.name}* international package.

Could you please share:
• Detailed day-wise itinerary
• Available departure dates from India
• Hotel details with photos
• Visa assistance process
• Payment plans & EMI options

*Traveler Details:*
👤 Name: [Your Name]
📞 Phone: [Your Number]
👥 Number of travelers: [Number]
🗓️ Preferred travel month: [Month]
🛂 Passport Status: [Yes/No]

Looking forward to an amazing international trip!

*Reference:* International Tours Page
━━━━━━━━━━━━━━━━━━━━
    `;

    window.open(
      `https://wa.me/918351846490?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('international-packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1622] via-[#1a2a4a] to-[#2a3a5a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
              {hero.title}
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-base sm:text-lg">
              {hero.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">{hero.stats.countries}</div>
                <div className="text-xs text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">{hero.stats.travelers}</div>
                <div className="text-xs text-gray-400">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">{hero.stats.satisfaction}</div>
                <div className="text-xs text-gray-400">Satisfaction Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button 
                onClick={scrollToPackages}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore International Packages
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-200">
                Get Visa Assistance
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
              Why Fly International With Us?
            </h2>
            <p className="text-gray-600 mt-3">Making global travel accessible and memorable</p>
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

      {/* Continent Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {continents.map((continent, index) => (
              <button
                key={index}
                onClick={() => setSelectedContinent(continent.name === "All" ? "all" : continent.name)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                  (continent.name === "All" && selectedContinent === "all") || (continent.name !== "All" && selectedContinent === continent.name)
                    ? "bg-blue-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
              >
                <span>{continent.icon}</span>
                <span>{continent.name}</span>
                <span className={`text-xs ${(continent.name === "All" && selectedContinent === "all") || (continent.name !== "All" && selectedContinent === continent.name) ? "text-white" : "text-gray-400"}`}>
                  ({continent.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section id="international-packages" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Best Selling International Packages
            </h2>
            <p className="text-gray-600 mt-3">Curated experiences for the global traveler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPackages.map((pkg, index) => (
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
                    <span className="text-xs font-bold text-blue-600">⭐ {pkg.rating}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs text-white">{pkg.reviews}+ reviews</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    {pkg.continent}
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
                    <span className="text-2xl font-bold text-blue-600">
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

                  {/* Inclusions */}
                  <div className="mb-4 p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-1">✨ Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.included.slice(0, 2).map((item, i) => (
                        <span key={i} className="text-xs text-green-600">✓ {item}</span>
                      ))}
                      {pkg.included.length > 2 && (
                        <span className="text-xs text-gray-500">+{pkg.included.length - 2}</span>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.location.href = pkg.slug}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm"
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

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No packages found for this region.</p>
            </div>
          )}
        </div>
      </section>

      {/* More Destinations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              More International Destinations
            </h2>
            <p className="text-gray-600 mt-3">Coming soon - Custom packages available on request</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalDestinations.map((dest, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{dest.icon}</div>
                <h3 className="font-bold text-gray-800">{dest.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{dest.duration}</p>
                <p className="text-sm font-bold text-blue-600 mt-1">₹{dest.price}</p>
                <button className="mt-2 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full hover:bg-blue-600 hover:text-white transition">
                  Enquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              International Travel Tips
            </h2>
            <p className="text-gray-600 mt-3">Make your global journey smooth and memorable</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🛂</div>
              <h3 className="font-bold mb-2">Visa First</h3>
              <p className="text-sm text-gray-600">Apply for visa at least 4-6 weeks before travel</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Currency Exchange</h3>
              <p className="text-sm text-gray-600">Carry local currency & international card</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Stay Connected</h3>
              <p className="text-sm text-gray-600">Get local SIM or international roaming</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold mb-2">Travel Insurance</h3>
              <p className="text-sm text-gray-600">Essential for international travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Global Traveler Stories
            </h2>
            <p className="text-gray-600 mt-3">Experiences from our international travelers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <p className="text-xs text-blue-600">{testimonial.package}</p>
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
      <section className="relative bg-gradient-to-r from-[#0a1622] to-[#1a2a4a] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-blue-500/30">
              Limited Time Offer
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {cta.title}
          </h2>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            {cta.description}
          </p>
          
          <p className="text-blue-400 font-semibold mt-2">
            🎉 {cta.offer}
          </p>

          <button 
            onClick={scrollToPackages}
            className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 sm:px-12 py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            {cta.buttonText}
          </button>
        </div>
      </section>
    </>
  );
};

export default InternationalTours;