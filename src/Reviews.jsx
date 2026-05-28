import React from "react";

const reviews = [
  {
    name: "Rahi Ritik",
    text: "I recently visited Kareri Lake with Flying Feet Holidays, and it was an amazing experience.",
    rating: 5,
    time: "3 hours ago",
  },
  {
    name: "Priyanshu Kumar",
    text: "Great experience and very good hospitality. Guides were very helpful.",
    rating: 5,
    time: "18 hours ago",
  },
  {
    name: "Palak Kamboj",
    text: "The Kareri Trek was absolutely wonderful with stunning views.",
    rating: 5,
    time: "2 days ago",
  },
  {
    name: "Rishu Kamboj",
    text: "Peaceful, raw and refreshing experience. Highly recommended.",
    rating: 5,
    time: "2 days ago",
  },
];

const Stars = ({ rating }) => (
  <div className="flex gap-1 text-yellow-400 text-sm">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

function Reviews() {
  return (
    <div className="w-full bg-gray-50 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Travelers Say
      </h2>

      {/* RESPONSIVE SCROLL CONTAINER */}
      <div className="overflow-x-auto px-4 scrollbar-hide">
        <div className="flex gap-5 w-max">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0
              bg-white rounded-2xl shadow-md border border-gray-100
              p-5 flex flex-col justify-between
              hover:shadow-xl transition-all duration-300"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Stars rating={r.rating} />
                  <span className="text-xs text-gray-400">{r.time}</span>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed break-words">
                  {r.text}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {r.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900">
                    {r.name}
                  </h4>
                  <p className="text-xs text-gray-400">Verified Traveler</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default Reviews;