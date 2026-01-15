import React, { useState } from 'react';

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    const destinations = [
        {
            id: 1,
            name: "Manali",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
            tagline: "The Valley of Gods",
            description: "Nestled in the mountains of Himachal Pradesh, Manali is a high-altitude Himalayan resort town famous for its breathtaking beauty and adventure activities.",
            bestTime: "October to June",
            altitude: "2,050 m",
            temperature: "10°C to 25°C (Summer)",
            attractions: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali", "Vashisht Hot Springs"],
            activities: ["Paragliding", "River Rafting", "Skiing", "Trekking", "Mountain Biking"],
            howToReach: "Nearest airport is Bhuntar (50 km). Well connected by road from Delhi and Chandigarh.",
            quickFacts: ["Popular honeymoon destination", "Gateway to Ladakh", "Adventure sports hub"]
        },
        {
            id: 2,
            name: "Shimla",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://cdn1.goibibo.com/voy_ing/t_fs/himachal-pradesh-shimla-147616947938o.jpeg",
            tagline: "The Queen of Hills",
            description: "The capital city of Himachal Pradesh, Shimla is a charming hill station known for its colonial architecture, pleasant weather, and scenic beauty.",
            bestTime: "March to June, December to February",
            altitude: "2,276 m",
            temperature: "15°C to 30°C (Summer)",
            attractions: ["Mall Road", "The Ridge", "Jakhu Temple", "Christ Church", "Kufri"],
            activities: ["Toy Train Ride", "Ice Skating", "Shopping", "Nature Walks", "Horse Riding"],
            howToReach: "Nearest airport is Chandigarh (113 km). Kalka-Shimla toy train available.",
            quickFacts: ["Former summer capital of British India", "UNESCO World Heritage Railway", "Apple orchards"]
        },
        {
            id: 3,
            name: "Dharamshala",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://www.tripsavvy.com/thmb/klDyE0x1mhNIFzpFm75ravpeP3c=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/india--dharamsala-105137790-3c6e2f8cc6a7456bad0b24d3118c905f.jpg",
            tagline: "Little Lhasa of India",
            description: "Home to the Dalai Lama and the Tibetan government-in-exile, Dharamshala offers a unique blend of Indian and Tibetan culture amidst stunning Himalayan scenery.",
            bestTime: "March to June, September to December",
            altitude: "1,457 m",
            temperature: "22°C to 38°C (Summer)",
            attractions: ["McLeod Ganj", "Namgyal Monastery", "Bhagsunag Waterfall", "Dal Lake", "Triund Trek"],
            activities: ["Trekking", "Meditation", "Tibetan Culture Tours", "Camping", "Rock Climbing"],
            howToReach: "Nearest airport is Gaggal (15 km). Well connected by road from Delhi and Chandigarh.",
            quickFacts: ["Home of Dalai Lama", "Tibetan culture hub", "Cricket stadium at highest altitude"]
        },
        {
            id: 4,
            name: "Kullu",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
            tagline: "Valley of Gods",
            description: "Famous for its temples, natural beauty, and the annual Dussehra festival, Kullu Valley is a paradise for nature lovers and adventure enthusiasts.",
            bestTime: "October to June",
            altitude: "1,230 m",
            temperature: "10°C to 24°C (Summer)",
            attractions: ["Great Himalayan National Park", "Raghunath Temple", "Bijli Mahadev", "Kasol", "Manikaran"],
            activities: ["River Rafting", "Trekking", "Camping", "Fishing", "Temple Tours"],
            howToReach: "Nearest airport is Bhuntar (10 km). Connected by road from major cities.",
            quickFacts: ["Famous for Dussehra festival", "Apple and pear orchards", "Gateway to Parvati Valley"]
        },
        {
            id: 5,
            name: "Triund",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            tagline: "Crown Jewel of Dharamshala",
            description: "A popular trekking destination offering panoramic views of the Dhauladhar ranges and Kangra valley. Perfect for beginners and experienced trekkers alike.",
            bestTime: "March to June, September to November",
            altitude: "2,828 m",
            temperature: "0°C to 15°C (Trek season)",
            attractions: ["Triund Top", "Snowline", "Ilaqa Got", "Laka Glacier", "Moon Peak"],
            activities: ["Trekking", "Camping", "Photography", "Stargazing", "Nature Walks"],
            howToReach: "Trek starts from McLeod Ganj, which is 9 km from Dharamshala.",
            quickFacts: ["9 km moderate trek", "Spectacular sunrise views", "Overnight camping spot"]
        },
        {
            id: 6,
            name: "Rishikesh",
            state: "Uttarakhand",
            category: "uttarakhand",
            image: "https://th.bing.com/th/id/R.f2257da2442701aba39349eb1128cc2a?rik=H%2fq3tvjE5DCHDA&riu=http%3a%2f%2frishikesh.net%2fwp-content%2fuploads%2f2019%2f11%2fbigstock-Rishikesh-India-Circa-April-329638714.jpg&ehk=Uptj5ZNmgYbgnXdTnXB21UeyOAYxRd7N2uJYsT4MWHM%3d&risl=1&pid=ImgRaw&r=0",
            tagline: "Yoga Capital of the World",
            description: "A spiritual hub on the banks of the Ganges, Rishikesh is renowned for yoga, meditation, and adventure sports. Gateway to the Himalayas.",
            bestTime: "September to November, March to May",
            altitude: "372 m",
            temperature: "20°C to 35°C (Summer)",
            attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat", "Neer Garh Waterfall"],
            activities: ["River Rafting", "Bungee Jumping", "Yoga Retreats", "Cliff Jumping", "Camping"],
            howToReach: "Nearest airport is Dehradun (35 km). Well connected by rail and road.",
            quickFacts: ["International yoga festival", "Vegetarian town", "Gateway to Char Dham"]
        },
        {
            id: 7,
            name: "Mussoorie",
            state: "Uttarakhand",
            category: "uttarakhand",
            image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
            tagline: "Queen of the Hills",
            description: "A charming hill station offering stunning views of the Himalayas and Doon Valley. Known for its Victorian-era architecture and pleasant climate.",
            bestTime: "April to June, September to November",
            altitude: "2,005 m",
            temperature: "10°C to 30°C (Summer)",
            attractions: ["Gun Hill", "Kempty Falls", "Lal Tibba", "Camel's Back Road", "Company Garden"],
            activities: ["Cable Car Ride", "Boating", "Shopping", "Nature Walks", "Photography"],
            howToReach: "Nearest airport is Dehradun (60 km). Connected by road from Delhi.",
            quickFacts: ["British-era architecture", "Writers' and artists' retreat", "Panoramic mountain views"]
        },
        {
            id: 8,
            name: "Nainital",
            state: "Uttarakhand",
            category: "uttarakhand",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
            tagline: "Lake District of India",
            description: "A picturesque hill station centered around the beautiful Naini Lake, surrounded by mountains and offering spectacular views of the Himalayas.",
            bestTime: "March to June, September to November",
            altitude: "2,084 m",
            temperature: "10°C to 27°C (Summer)",
            attractions: ["Naini Lake", "Naina Devi Temple", "Snow View Point", "Tiffin Top", "Eco Cave Gardens"],
            activities: ["Boating", "Yachting", "Horse Riding", "Cable Car Ride", "Shopping"],
            howToReach: "Nearest airport is Pantnagar (65 km). Connected by road from Delhi.",
            quickFacts: ["Heart-shaped lake", "Former British summer retreat", "Astronomical observatory"]
        },
        {
            id: 9,
            name: "Auli",
            state: "Uttarakhand",
            category: "uttarakhand",
            image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
            tagline: "Skiing Paradise of India",
            description: "A premier skiing destination with pristine slopes and panoramic views of Nanda Devi and other Himalayan peaks. Perfect for winter sports enthusiasts.",
            bestTime: "December to February (Skiing), April to June",
            altitude: "2,800 m",
            temperature: "-3°C to 15°C (Winter)",
            attractions: ["Auli Ski Resort", "Gurso Bugyal", "Chattrakund Lake", "Nanda Devi Peak", "Valley of Flowers"],
            activities: ["Skiing", "Snowboarding", "Cable Car Ride", "Trekking", "Camping"],
            howToReach: "Nearest airport is Dehradun (290 km). Cable car from Joshimath available.",
            quickFacts: ["India's best skiing destination", "Asia's longest cable car", "Training center for Indo-Tibetan Border Police"]
        },
        {
            id: 10,
            name: "Kasol",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://media2.thrillophilia.com/images/photos/000/252/058/original/1607938557_shutterstock_1837999738.jpg?w=753&h=450&dpr=1.5",
            tagline: "Mini Israel of India",
            description: "A quaint village in Parvati Valley, popular among backpackers for its scenic beauty, Israeli cafes, and as a base for treks to Kheerganga and Tosh.",
            bestTime: "March to June, October to December",
            altitude: "1,640 m",
            temperature: "10°C to 30°C (Summer)",
            attractions: ["Parvati River", "Manikaran Sahib", "Tosh Village", "Malana Village", "Kheerganga"],
            activities: ["Trekking", "Camping", "Cafe Hopping", "River Side Walks", "Village Tours"],
            howToReach: "Nearest airport is Bhuntar (31 km). Buses available from Manali and Delhi.",
            quickFacts: ["Backpacker's paradise", "Israeli cuisine hotspot", "Gateway to Parvati Valley treks"]
        },
        {
            id: 11,
            name: "Dhanaulti",
            state: "Uttarakhand",
            category: "uttarakhand",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            tagline: "Serene Hill Escape",
            description: "A quiet hill station perfect for those seeking peace away from crowded tourist spots. Surrounded by deodar and oak forests.",
            bestTime: "Throughout the year",
            altitude: "2,286 m",
            temperature: "10°C to 25°C (Summer)",
            attractions: ["Eco Park", "Surkanda Devi Temple", "Apple Orchards", "Potato Farm", "Dashavatar Temple"],
            activities: ["Nature Walks", "Camping", "Photography", "Meditation", "Village Tourism"],
            howToReach: "Nearest airport is Dehradun (83 km). Well connected by road.",
            quickFacts: ["Less commercialized", "Dense forests", "Adventure camping activities"]
        },
        {
            id: 12,
            name: "Spiti Valley",
            state: "Himachal Pradesh",
            category: "himachal",
            image: "https://www.tripsavvy.com/thmb/aUgWsuQq_gu1zmarPc0s5solung=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-676106126-5943bd015f9b58d58a8cd2f4.jpg",
            tagline: "Little Tibet",
            description: "A cold desert mountain valley with stark, dramatic landscapes, ancient monasteries, and unique Tibetan Buddhist culture. For the adventurous traveler.",
            bestTime: "June to September",
            altitude: "3,810 m",
            temperature: "-30°C to 15°C (varies by season)",
            attractions: ["Key Monastery", "Chandratal Lake", "Kibber Village", "Pin Valley", "Tabo Monastery"],
            activities: ["High Altitude Trekking", "Monastery Tours", "Photography", "Camping", "Stargazing"],
            howToReach: "Accessible via Manali or Shimla. Roads open only in summer.",
            quickFacts: ["World's highest village (Komic)", "Ancient Buddhist monasteries", "Fossil-rich region"]
        }
    ];

    const filteredDestinations = activeTab === 'all'
        ? destinations
        : destinations.filter(d => d.category === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="relative h-64 sm:h-80 lg:h-96  overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')] bg-cover bg-center mix-blend-overlay opacity-40"></div>

                <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">
                        Discover the Himalayas
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-center max-w-3xl mb-6 drop-shadow-md">
                        Explore the breathtaking destinations of Himachal Pradesh & Uttarakhand
                    </p>

                    {/* Tab Filters */}
                    <div className="flex gap-2 sm:gap-4 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/20">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === 'all'
                                ? 'bg-white text-indigo-900 shadow-lg'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            All Destinations
                        </button>
                        <button
                            onClick={() => setActiveTab('himachal')}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === 'himachal'
                                ? 'bg-white text-indigo-900 shadow-lg'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            Himachal
                        </button>
                        <button
                            onClick={() => setActiveTab('uttarakhand')}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === 'uttarakhand'
                                ? 'bg-white text-indigo-900 shadow-lg'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            Uttarakhand
                        </button>
                    </div>
                </div>
            </div>

            {/* Destinations Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredDestinations.map((destination) => (
                        <div
                            key={destination.id}
                            onClick={() => setSelectedDestination(destination)}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 group"
                        >
                            {/* Image */}
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                {/* State Badge */}
                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    <span className="text-xs font-semibold text-indigo-900">
                                        {destination.state}
                                    </span>
                                </div>

                                {/* Name & Tagline */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {destination.name}
                                    </h3>
                                    <p className="text-sm text-white/90 italic">
                                        {destination.tagline}
                                    </p>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="p-4 sm:p-5">
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">{destination.bestTime.split(',')[0]}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">{destination.altitude}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                                    {destination.description}
                                </p>

                                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                                    <span>Explore Details</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            {selectedDestination && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedDestination(null)}
                    />

                    <div className="relative w-full max-w-4xl my-8 transform transition-all">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            {/* Header Image */}
                            <div className="relative h-64 sm:h-80 lg:h-96">
                                <img
                                    src={selectedDestination.image}
                                    alt={selectedDestination.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                <button
                                    onClick={() => setSelectedDestination(null)}
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-lg"
                                >
                                    <svg className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {selectedDestination.state}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                                        {selectedDestination.name}
                                    </h2>
                                    <p className="text-lg sm:text-xl text-white/90 italic">
                                        {selectedDestination.tagline}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                                {/* Description */}
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                                    {selectedDestination.description}
                                </p>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-indigo-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-semibold text-gray-900">Best Time</h4>
                                        </div>
                                        <p className="text-sm text-gray-700">{selectedDestination.bestTime}</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-semibold text-gray-900">Altitude</h4>
                                        </div>
                                        <p className="text-sm text-gray-700">{selectedDestination.altitude}</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-semibold text-gray-900">Temperature</h4>
                                        </div>
                                        <p className="text-sm text-gray-700">{selectedDestination.temperature}</p>
                                    </div>
                                </div>

                                {/* Attractions */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Top Attractions
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedDestination.attractions.map((attraction, index) => (
                                            <span
                                                key={index}
                                                className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-900 px-3 py-1.5 rounded-full text-sm font-medium"
                                            >
                                                {attraction}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Activities */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                        Activities & Adventures
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {selectedDestination.activities.map((activity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-900 px-3 py-2 rounded-lg text-sm"
                                            >
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-medium">{activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* How to Reach */}
                                <div className="mb-6 bg-blue-50 border border-blue-200 p-4 rounded-xl">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                                        </svg>
                                        How to Reach
                                    </h3>
                                    <p className="text-gray-700 text-sm">{selectedDestination.howToReach}</p>
                                </div>

                                {/* Quick Facts */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        Quick Facts
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedDestination.quickFacts.map((fact, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2 text-gray-700 text-sm"
                                            >
                                                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{fact}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Button */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                        <span>Plan Your Trip</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Destination;