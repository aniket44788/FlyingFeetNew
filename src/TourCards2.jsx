import triund from "../src/assets/Swipper/triund.jpg"

export const tours = [
    {
        id: 1,
        title: "Triund Trek",
        location: "Himachal Pradesh",
        duration: "2D/1N",
        rating: 4.8,
        reviews: 120,
        price: 2999,
        image: triund,
        features: ["Meals Included", "Guide Included"],
        tagColor: "bg-red-500"
    },
    {
        id: 2,
        title: "Kedarkantha Trek",
        location: "Uttarakhand",
        duration: "6D/5N",
        rating: 4.9,
        reviews: 150,
        price: 8999,
        image: triund,
        features: ["Meals Included", "Guide Included"],
        tagColor: "bg-red-500"
    },
    {
        id: 3,
        title: "Hampta Pass Trek",
        location: "Himachal Pradesh",
        duration: "5D/4N",
        rating: 4.8,
        reviews: 100,
        price: 7999,
        image: triund,
        features: ["Meals Included", "Guide Included"],
        tagColor: "bg-red-500"
    }
];

export default function TourCards2() {
    return (
        <>
            <div className="w-full bg-[#0f1b2d] flex items-center justify-center">
                <h4 className="text-2xl mt-5 sm:text-3xl lg:text-5xl leading-[1.05] font-black text-white text-center">
                    <span className="text-red-500">
                        Our Popular Tracks
                    </span>
                </h4>

            </div>
            <div className="max-w-7xl bg-[#0f1b2d] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

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
            <div className="flex justify-center bg-[#0f1b2d]">
                <button className="w-[80%] mb-5 text-white bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-sm sm:text-base">
                    Explore more packages
                </button>
            </div>
        </>

    );
}