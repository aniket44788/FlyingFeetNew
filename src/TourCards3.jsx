import triund from "../src/assets/Swipper/triund.jpg"


export const tours = [
  {
    id: 1,
    title: "McLeodganj & Triund Weekend Trip",
    location: "Dharamshala, Himachal Pradesh",
    duration: "2D/1N",
    rating: 4.8,
    reviews: 180,
    price: 3499,
    image: triund,
    features: ["Trekking Included", "Camping Stay", "Guide Included"],
    tagColor: "bg-red-500"
  },
  {
    id: 2,
    title: "Jibhi & Tirthan Valley Escape",
    location: "Banjar, Himachal Pradesh",
    duration: "3D/2N",
    rating: 4.7,
    reviews: 150,
    price: 4999,
    image: triund,
    features: ["River Stay", "Waterfall Visit", "Nature Walks"],
    tagColor: "bg-red-500"
  },
  {
    id: 3,
    title: "Chopta & Tungnath Trek",
    location: "Rudraprayag, Uttarakhand",
    duration: "3D/2N",
    rating: 4.9,
    reviews: 210,
    price: 5999,
    image: triund,
    features: ["Temple Trek", "Snow Views", "Camping Included"],
    tagColor: "bg-red-500"
  },
];

export default function TourCards3() {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <h4 className="text-2xl mt-5 sm:text-3xl lg:text-5xl leading-[1.05] font-black text-white text-center">
                    <span className="text-red-500">
                        Weekend Trips 
                    </span>
                </h4>

            </div>
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl">

                {tours.map((tour) => (
                    <div
                        key={tour.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300"
                    >
                        {/* IMAGE */}
                        <div className="relative">
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-52 object-cover"
                            />

                            {/* DURATION BADGE */}
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                {tour.duration}
                            </span>
                        </div>

                        {/* CONTENT */}
                        <div className="p-4">


                            <div className="flex items-center justify-between">

                                <h2 className="text-lg font-bold text-gray-800">
                                    {tour.title}
                                </h2>

                                <h3 className="text-xl font-black text-red-600">
                                    ₹{tour.price.toLocaleString()}
                                </h3>

                            </div>

                            {/* LOCATION */}
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                📍 {tour.location}
                            </p>

                            {/* RATING */}
                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span className="text-yellow-500 font-semibold">
                                    ⭐ {tour.rating}
                                </span>
                                <span className="text-gray-500">
                                    ({tour.reviews} reviews)
                                </span>
                            </div>


                            {/* FEATURES */}
                            <div className="mt-3 space-y-1">
                                {tour.features.map((feat, i) => (
                                    <p key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="text-green-500">✔</span> {feat}
                                    </p>
                                ))}
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    View Details
                                </button>
                                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="w-[80%] mb-5 text-white bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-sm sm:text-base">
                    Explore more weekendtrips
                </button>
            </div>
        </>

    );
}