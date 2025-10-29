import React from "react";
import thumbUpIcon from "../assets/images/destinations/thumb-up_svgrepo.com.svg";
const MonumentCard = ({
  title = "Taj Mahal",
  location = "Agra, Uttar Pradesh",
  rating = "4.5",
  reviews = 30,
  yearBuilt = 1650,
  img1 = "https://placehold.co/195x190",
  img2 = thumbUpIcon,
  description = "One of the finest monuments of its time, Taj Mahal built with white marble on the banks of river Yamuna, is known for its craftsmanship...",
}) => {
  return (
    <div
      className="group w-full sm:w-full md:max-w-[418px] bg-white p-3 sm:p-4 flex flex-col gap-5 border border-gray-300 shadow-sm overflow-hidden
                 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Top Images Section */}
      <div className="flex gap-1 relative">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={img1}
            alt={title}
            className="w-full h-[190px] object-cover rounded-sm transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        {/* Right Image with overlay and wishlist */}
        <div className="relative flex-1 overflow-hidden rounded-sm">
          <img
            src={img2}
            alt={`${title} detail`}
            className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />

          {/* Wishlist Button */}
          <button
            aria-label="Add to Wishlist"
            className="absolute top-2 left-2 flex items-center gap-1 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium
                       transition-all duration-300 hover:bg-black/60 active:scale-95"
          >
            <div className="w-3.5 h-3.5 border border-white rounded-sm" />
            Add To Wishlist
          </button>
        </div>
      </div>

      {/* Title and Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-lg font-semibold leading-snug">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {/* Rating */}

            {/* ✅ Rating row with thumb-up beside rating */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm flex items-center gap-1">
                {rating}
                <img
                  src={thumbUpIcon}
                  alt="Thumb Up"
                  className="w-4 h-4 inline-block object-contain"
                />
              </span>
              <span className="text-gray-400 text-sm">({reviews} Reviews)</span>
            </div>

            <span className="text-gray-500 text-sm">({reviews} Reviews)</span>
          </div>

          <span className="text-gray-700 text-sm">{location}</span>
        </div>

        {/* Built Year */}
        <div className="bg-gray-200 px-2 py-1 rounded text-center mt-1 sm:mt-0">
          <span className="block text-black text-[10px] tracking-wider">
            BUILT IN
          </span>
          <span className="text-black text-lg font-bold tracking-[1.5px] leading-none">
            {yearBuilt}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-black text-sm leading-relaxed">{description}</p>

      {/* Read More */}
      <div>
        <button className="text-black text-sm font-medium underline underline-offset-2 hover:opacity-80 transition-opacity duration-200">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default MonumentCard;
