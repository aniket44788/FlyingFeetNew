import React from "react";


const reviews = [
  {
    name: "Rahi Ritik",
    text: "I recently visited Kareri Lake with Flying Feet Holidays, and it was an amazing experience. Everything was well organized.",
    rating: 5,
    time: "3 hours ago",
  },
  {
    name: "Priyanshu Kumar",
    text: "Great experience and very good hospitality. Guides were very helpful throughout the trek.",
    rating: 5,
    time: "18 hours ago",
  },
  {
    name: "Palak Kamboj",
    text: "The Kareri Trek was absolutely wonderful with stunning views and peaceful environment.",
    rating: 5,
    time: "2 days ago",
  },
  {
    name: "Rishu Kamboj",
    text: "Peaceful, raw and refreshing experience. One of the best treks I have done so far.",
    rating: 5,
    time: "2 days ago",
  },
  {
    name: "Sumit Sharma",
    text: "Excellent arrangement, good food, and very supportive trek leaders. Highly recommended.",
    rating: 5,
    time: "3 days ago",
  },
  {
    name: "Anjali Verma",
    text: "The view from Kareri Lake is breathtaking. Perfect trip for nature lovers.",
    rating: 5,
    time: "4 days ago",
  },
  {
    name: "Aman Thakur",
    text: "Everything was smooth from booking to trek completion. Loved the experience.",
    rating: 5,
    time: "5 days ago",
  },
  {
    name: "Neha Sharma",
    text: "Beautiful location, well-managed camps, and friendly guides made the trip memorable.",
    rating: 5,
    time: "1 week ago",
  },
  {
    name: "Rahul Mehta",
    text: "A bit challenging trek but totally worth it for the scenic beauty.",
    rating: 4,
    time: "1 week ago",
  },
  {
    name: "Karan Singh",
    text: "Amazing adventure with great group coordination and helpful staff.",
    rating: 5,
    time: "2 weeks ago",
  },
  {
    name: "Sneha Patil",
    text: "Loved the peaceful atmosphere and natural beauty of Kareri Lake.",
    rating: 5,
    time: "2 weeks ago",
  },
  {
    name: "Vikram Chauhan",
    text: "Very well organized trek. Food and stay were better than expected.",
    rating: 5,
    time: "3 weeks ago",
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
    <div className="w-full bg-[#0f1b2d]  py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-800">
        What Our Travelers Say
      </h2>

      {/* RESPONSIVE SCROLL CONTAINER */}
      <div className="overflow-x-auto px-4 scrollbar-hide">
        <div className="flex gap-5 w-max">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0
               rounded-2xl shadow-md border border-gray-100
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