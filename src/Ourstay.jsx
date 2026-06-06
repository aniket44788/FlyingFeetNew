// OurStay.jsx
import React, { useState } from "react";

// Import images (add your actual image paths)
import luxuryResortImg from "../src/assets/Swipper/dshala.jpg";

const OurStay = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllStays, setShowAllStays] = useState(false);

  // Stays Data
  const staysData = {
    hero: {
      badge: "Flying Feet Holidays",
      title: "Our Stays",
      highlight: "Experience Comfort Like Never Before",
      description:
        "Discover our handpicked collection of premium accommodations across India. From luxury resorts to cozy homestays, we ensure your stay is as memorable as your journey.",
      stats: {
        properties: "200+",
        cities: "50+",
        guests: "100,000+",
      },
    },

    categories: [
      { name: "All", count: 24, icon: "🏨" },
      { name: "Luxury Resorts", count: 8, icon: "✨" },
      { name: "Boutique Hotels", count: 6, icon: "🏩" },
      { name: "Heritage Properties", count: 4, icon: "🏰" },
      { name: "Mountain Cottages", count: 3, icon: "🏔️" },
      { name: "Beach Resorts", count: 3, icon: "🏖️" },
    ],

    featuredStays: [
      {
        name: "The Himalayan Bliss Resort",
        location: "Manali, Himachal Pradesh",
        price: "4999",
        originalPrice: "8999",
        rating: 4.9,
        reviews: 1234,
        category: "Luxury Resorts",
        type: "Mountain Resort",
        highlights: ["Mountain View", "Spa", "Fine Dining", "Adventure Activities"],
        amenities: ["Free WiFi", "Parking", "Restaurant", "Room Service", "Bonfire"],
        image: luxuryResortImg,
        slug: "/stay/himalayan-bliss",
        bestTime: "May-Oct",
        included: ["Breakfast", "Welcome Drink", "Evening Tea"],
      },
      {
        name: "Pinewood Mountain Cottage",
        location: "Kasol, Himachal Pradesh",
        price: "2999",
        originalPrice: "4999",
        rating: 4.7,
        reviews: 856,
        category: "Mountain Cottages",
        type: "Cottage",
        highlights: ["River View", "Bonfire", "Campsite", "Trekking"],
        amenities: ["Free WiFi", "Parking", "Garden", "BBQ Facilities"],
        image: luxuryResortImg,
        slug: "/stay/pinewood-cottage",
        bestTime: "Apr-Oct",
        included: ["Breakfast", "Complimentary Tea/Coffee"],
      },
      {
        name: "Sea Breeze Beach Resort",
        location: "Goa",
        price: "6999",
        originalPrice: "11999",
        rating: 4.8,
        reviews: 2156,
        category: "Beach Resorts",
        type: "Beach Resort",
        highlights: ["Private Beach", "Pool", "Water Sports", "Nightlife"],
        amenities: ["Free WiFi", "Swimming Pool", "Beach Access", "Bar", "Restaurant"],
        image: luxuryResortImg,
        slug: "/stay/sea-breeze",
        bestTime: "Nov-Feb",
        included: ["Breakfast", "Pool Access", "Beach Towels"],
      },
      {
        name: "Royal Heritage Palace",
        location: "Jaipur, Rajasthan",
        price: "8999",
        originalPrice: "14999",
        rating: 4.9,
        reviews: 987,
        category: "Heritage Properties",
        type: "Heritage Hotel",
        highlights: ["Palace Stay", "Royal Dining", "Cultural Shows", "Folk Music"],
        amenities: ["Free WiFi", "Parking", "Restaurant", "Spa", "Pool"],
        image: luxuryResortImg,
        slug: "/stay/royal-heritage",
        bestTime: "Oct-Mar",
        included: ["Breakfast", "Palace Tour", "Welcome Gift"],
      },
      {
        name: "Wilderness Jungle Lodge",
        location: "Jim Corbett, Uttarakhand",
        price: "5999",
        originalPrice: "9999",
        rating: 4.8,
        reviews: 654,
        category: "Luxury Resorts",
        type: "Jungle Resort",
        highlights: ["Wildlife Safari", "Nature Walk", "Bird Watching", "Bonfire"],
        amenities: ["Free WiFi", "Parking", "Restaurant", "Jungle View"],
        image: luxuryResortImg,
        slug: "/stay/jungle-lodge",
        bestTime: "Nov-Jun",
        included: ["Breakfast", "Dinner", "Safari Booking"],
      },
      {
        name: "Backwater Heritage Houseboat",
        location: "Alleppey, Kerala",
        price: "7999",
        originalPrice: "12999",
        rating: 4.9,
        reviews: 1432,
        category: "Luxury Resorts",
        type: "Houseboat",
        highlights: ["Houseboat Stay", "Backwater Cruise", "Kerala Cuisine", "Sunset View"],
        amenities: ["Air Conditioning", "Private Chef", "Sun Deck", "Fishing"],
        image: luxuryResortImg,
        slug: "/stay/houseboat",
        bestTime: "Sep-Mar",
        included: ["All Meals", "Cruise", "Welcome Drink"],
      },
      {
        name: "Stargazer Glamping Resort",
        location: "Rishikesh, Uttarakhand",
        price: "3999",
        originalPrice: "6999",
        rating: 4.7,
        reviews: 543,
        category: "Luxury Resorts",
        type: "Glamping",
        highlights: ["Luxury Tents", "River Rafting", "Yoga", "Stargazing"],
        amenities: ["Free WiFi", "Parking", "Bonfire", "Yoga Deck"],
        image: luxuryResortImg,
        slug: "/stay/glamping",
        bestTime: "Sep-Jun",
        included: ["Breakfast", "Evening Snacks", "Bonfire"],
      },
      {
        name: "The Artisan Boutique Hotel",
        location: "Udaipur, Rajasthan",
        price: "4999",
        originalPrice: "7999",
        rating: 4.8,
        reviews: 765,
        category: "Boutique Hotels",
        type: "Boutique Hotel",
        highlights: ["Lake View", "Rooftop Restaurant", "Art Gallery", "Heritage Walk"],
        amenities: ["Free WiFi", "Parking", "Restaurant", "Rooftop Terrace"],
        image: luxuryResortImg,
        slug: "/stay/artisan-boutique",
        bestTime: "Sep-Mar",
        included: ["Breakfast", "City Tour Map", "Welcome Drink"],
      },
      {
        name: "Lake Paradise Resort",
        location: "Nainital, Uttarakhand",
        price: "4499",
        originalPrice: "7499",
        rating: 4.6,
        reviews: 432,
        category: "Luxury Resorts",
        type: "Lake Resort",
        highlights: ["Lake View", "Boating", "Mountain Views", "Garden"],
        amenities: ["Free WiFi", "Parking", "Restaurant", "Lake Access"],
        image: luxuryResortImg,
        slug: "/stay/lake-paradise",
        bestTime: "Mar-Jun",
        included: ["Breakfast", "Boating Discount"],
      },
      {
        name: "Sahara Desert Camp",
        location: "Jaisalmer, Rajasthan",
        price: "3499",
        originalPrice: "5999",
        rating: 4.7,
        reviews: 876,
        category: "Heritage Properties",
        type: "Desert Camp",
        highlights: ["Desert Safari", "Cultural Night", "Camel Ride", "Stargazing"],
        amenities: ["Free Parking", "Cultural Shows", "Bonfire", "Tent Stay"],
        image: luxuryResortImg,
        slug: "/stay/desert-camp",
        bestTime: "Oct-Mar",
        included: ["Dinner", "Cultural Program", "Breakfast"],
      },
    ],

    whyChooseOurStays: [
      {
        title: "Premium Locations",
        description: "Best locations with stunning views and easy access",
        icon: "📍",
      },
      {
        title: "Handpicked Properties",
        description: "Curated selection of top-rated accommodations",
        icon: "⭐",
      },
      {
        title: "Best Price Guarantee",
        description: "Lowest rates with exclusive deals and offers",
        icon: "💰",
      },
      {
        title: "24/7 Guest Support",
        description: "Round-the-clock assistance for your comfort",
        icon: "🎧",
      },
    ],

    testimonials: [
      {
        name: "Aditya Sharma",
        location: "Delhi",
        rating: 5,
        text: "The Himalayan Bliss Resort was incredible! The views, service, and food exceeded expectations. Highly recommend!",
        stay: "Himalayan Bliss Resort",
      },
      {
        name: "Neha Kapoor",
        location: "Mumbai",
        rating: 5,
        text: "Royal Heritage Palace made us feel like royalty. Amazing experience and great hospitality!",
        stay: "Royal Heritage Palace",
      },
      {
        name: "Vikram Singh",
        location: "Bangalore",
        rating: 5,
        text: "Backwater Houseboat stay was magical. The food, scenery, and comfort were perfect for a relaxing getaway.",
        stay: "Backwater Heritage Houseboat",
      },
    ],

    cta: {
      title: "Ready for a Perfect Stay?",
      description: "Book your dream accommodation with Flying Feet Holidays and get exclusive discounts.",
      buttonText: "Book Your Stay Now",
      offer: "Early booking discount up to 30%",
    },
  };

  const { hero, categories, featuredStays, whyChooseOurStays, testimonials, cta } = staysData;

  // Filter stays based on selected category
  const filteredStays = selectedCategory === "all" 
    ? featuredStays 
    : featuredStays.filter(stay => stay.category === selectedCategory);

  const displayedStays = showAllStays ? filteredStays : filteredStays.slice(0, 6);

  const handleWhatsApp = (stay) => {
    const message = `
🏨 *STAY ENQUIRY - FLYING FEET HOLIDAYS*

━━━━━━━━━━━━━━━━━━━━
📍 *Property:* ${stay.name}
🗺️ *Location:* ${stay.location}
💰 *Price:* ₹${parseInt(stay.price).toLocaleString()}/Night
⭐ *Rating:* ${stay.rating} ⭐ (${stay.reviews}+ reviews)
🏷️ *Category:* ${stay.category}
🏕️ *Type:* ${stay.type}
🌸 *Best Season:* ${stay.bestTime}
━━━━━━━━━━━━━━━━━━━━

✨ *Property Highlights:*
${stay.highlights.map((item) => `✓ ${item}`).join("\n")}

🛋️ *Amenities:*
${stay.amenities.map((item) => `• ${item}`).join("\n")}

🎁 *Inclusions:*
${stay.included.map((item) => `→ ${item}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━
*Hello Flying Feet Holidays Team,*

I am interested in staying at *${stay.name}*.

Could you please share:
• Room availability for [dates]
• Room categories and photos
• Family/group package options
• Check-in/check-out policies
• Nearby attractions

*Guest Details:*
👤 Name: [Your Name]
📞 Phone: [Your Number]
👥 Number of guests: [Number]
🗓️ Check-in Date: [Date]
📆 Check-out Date: [Date]

Looking forward to a comfortable stay!

*Reference:* Our Stays Page
━━━━━━━━━━━━━━━━━━━━
    `;

    window.open(
      `https://wa.me/918351846490?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToStays = () => {
    const staysSection = document.getElementById('stays-section');
    if (staysSection) {
      staysSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1622] via-[#1a2a2a] to-[#2a3a2a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
              {hero.title}
              <span className="block bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-base sm:text-lg">
              {hero.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">{hero.stats.properties}</div>
                <div className="text-xs text-gray-400">Premium Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">{hero.stats.cities}</div>
                <div className="text-xs text-gray-400">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">{hero.stats.guests}</div>
                <div className="text-xs text-gray-400">Happy Guests</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button 
                onClick={scrollToStays}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Stays
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-200">
                Customize Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Stays */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Why Choose Our Stays?
            </h2>
            <p className="text-gray-600 mt-3">Curated for comfort, quality, and memorable experiences</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseOurStays.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name === "All" ? "all" : category.name)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                  (category.name === "All" && selectedCategory === "all") || (category.name !== "All" && selectedCategory === category.name)
                    ? "bg-green-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-xs ${(category.name === "All" && selectedCategory === "all") || (category.name !== "All" && selectedCategory === category.name) ? "text-white" : "text-gray-400"}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stays Section */}
      <section id="stays-section" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Featured Accommodations
            </h2>
            <p className="text-gray-600 mt-3">Handpicked properties for unforgettable experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedStays.map((stay, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs font-bold text-green-600">⭐ {stay.rating}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs text-white">{stay.reviews}+ reviews</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    {stay.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    {stay.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-800 mb-1 line-clamp-1">
                    {stay.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {stay.location}
                  </p>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{parseInt(stay.price).toLocaleString()}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{parseInt(stay.originalPrice).toLocaleString()}
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      /night
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {stay.highlights.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                    {stay.highlights.length > 3 && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        +{stay.highlights.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Amenities Preview */}
                  <div className="mb-4 p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-1">🛋️ Top Amenities:</p>
                    <div className="flex flex-wrap gap-1">
                      {stay.amenities.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-xs text-gray-600">• {item}</span>
                      ))}
                      {stay.amenities.length > 3 && (
                        <span className="text-xs text-gray-500">+{stay.amenities.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Best Time Badge */}
                  <div className="mb-4">
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
                      🌸 Best Season: {stay.bestTime}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.location.href = stay.slug}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsApp(stay)}
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

          {/* View More Button */}
          {filteredStays.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllStays(!showAllStays)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {showAllStays ? "View Less ↑" : `View All ${filteredStays.length} Properties ↓`}
              </button>
            </div>
          )}

          {filteredStays.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No properties found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stay Types Highlight */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Types of Stays We Offer
            </h2>
            <p className="text-gray-600 mt-3">Something for every traveler and budget</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏨</div>
              <p className="font-semibold text-sm">Luxury Resorts</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏔️</div>
              <p className="font-semibold text-sm">Mountain Cottages</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏖️</div>
              <p className="font-semibold text-sm">Beach Resorts</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏰</div>
              <p className="font-semibold text-sm">Heritage Hotels</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏕️</div>
              <p className="font-semibold text-sm">Glamping</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">🛶</div>
              <p className="font-semibold text-sm">Houseboats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]">
              Guest Experiences
            </h2>
            <p className="text-gray-600 mt-3">What our guests say about their stay</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <p className="text-xs text-green-600">{testimonial.stay}</p>
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
      <section className="relative bg-gradient-to-r from-[#0a1622] to-[#1a2a2a] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-green-500/30">
              Limited Time Offer
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {cta.title}
          </h2>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            {cta.description}
          </p>
          
          <p className="text-green-400 font-semibold mt-2">
            🎉 {cta.offer}
          </p>

          <button 
            onClick={scrollToStays}
            className="mt-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 sm:px-12 py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            {cta.buttonText}
          </button>
        </div>
      </section>
    </>
  );
};

export default OurStay;