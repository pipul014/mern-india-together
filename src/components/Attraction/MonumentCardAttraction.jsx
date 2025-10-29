import React from "react";
import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";
import { Heart } from "lucide-react";

const MonumentCardAttraction = ({
  title = "Taj Mahal",
  location = "Agra, Uttar Pradesh",
  rating = "4.5",
  reviews = 30,
  yearBuilt = 1650,
  img1 = "https://placehold.co/418x190",
  description = "One of the finest monuments of its time, Taj Mahal built with white marble on the banks of river Yamuna, is known for its craftsmanship...",
}) => {
  return (
    <div
      className="group w-full sm:w-full md:max-w-[300px] bg-white flex flex-col  shadow-sm overflow-hidden
                 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* ✅ Single Image Section */}
      <div className="relative">
        <img
          src={img1}
          alt={title}
          className="w-full h-[250px] object-fill transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-[#00000057] bg-opacity-50 text-white text-sm  px-3 py-2 rounded-full flex items-center gap-1 hover:bg-opacity-70 transition">
          <Heart size={16} />
          <p className="">Add To Wishlist</p>
        </button>
      </div>

      {/* Title and Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start p-3 sm:items-center gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-lg font-semibold leading-snug">
            {title}
          </h3>

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
            {/* <span className="text-gray-400 text-sm">({reviews} Reviews)</span> */}
          </div>

          <span className="text-green-500 text-sm">Book with ₹500 deposit</span>
        </div>

        {/* Built Year
        <div className="bg-gray-200 px-2 py-1 rounded text-center mt-1 sm:mt-0 ">
          <span className="block text-black text-[10px] tracking-wider">
            BUILT IN
          </span>
          <span className="text-black text-lg font-bold tracking-[1.5px] leading-none">
            {yearBuilt}
          </span>
        </div> */}
      </div>

      {/* Description */}
      <p className="text-black text-sm leading-relaxed p-3">{description}</p>

      {/* Read More */}
      <div>
        <button className="text-black text-sm p-3 font-medium underline underline-offset-2 hover:opacity-80 transition-opacity duration-200">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default MonumentCardAttraction;
