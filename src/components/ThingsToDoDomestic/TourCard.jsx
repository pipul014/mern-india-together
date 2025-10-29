import React from "react";
import {
  BookText,
  CarFront,
  CarTaxiFront,
  HandPlatter,
  Heart,
  Hotel,
  Plane,
} from "lucide-react";
import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white  overflow-hidden shadow-md hover:shadow-md transition-all">
      {/* Image Section */}
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full object-cover"
        />
        <div className="absolute top-4 right-2 bg-black/40 text-white flex items-center gap-3 text-xs px-2 py-2 rounded-full">
          <Heart size={18} className="" />
          <p>Add To Wishlist</p>
        </div>
        <div className="absolute bottom-2 left-2 bg-white/20 text-white flex items-center gap-3 text-xs px-2 py-2 rounded">
          <p>Sponsored</p>
        </div>
        {/* <button className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow">
          <Heart size={16} className="text-gray-600" />
        </button> */}
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex gap-2 mb-2">
          <span className="bg-black text-white text-sm px-3 py-1 ">
            Things To Do
          </span>
          <span className="bg-[#838383] text-sm px-3 py-1 text-white">
            Customised Tour
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl mb-1 mt-2">{tour.title}</h3>

        {/* Rating & Nights */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          {tour.rating}
          <img
            src={thumbUpIcon}
            alt="Thumb Up"
            className="w-4 h-4 inline-block mx-2 object-contain"
          />
        </div>

        {/* Locations */}
        <p className="text-gray-600 text-sm mb-3 border-b-2 border-gray-300 pb-4">
          <span className="border p-1 border-gray-400 mr-3">{tour.nights}</span>
          {tour.locations}
        </p>

        {/* What's Included */}
        <p className="text-md text-gray-800 font-semibold mb-2">
          What’s Included?
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <p className="flex items-center gap-2">
            <Hotel className="bg-[#E3E3E3] rounded text-[#626262] p-1 w-8 h-8" />{" "}
            <span>4 Star Hotels</span>
          </p>
          <p className="flex items-center gap-2">
            <CarFront className="bg-[#E3E3E3] rounded text-[#626262] p-1 w-8 h-8" />{" "}
            <span>Intercity Car Transfers</span>
          </p>
          <p className="flex items-center gap-2">
            <HandPlatter className="bg-[#E3E3E3] rounded text-[#626262] p-1 w-8 h-8" />{" "}
            <span>Selected Meals</span>
          </p>
          <p className="flex items-center gap-2">
            <Plane className="bg-[#E3E3E3] rounded text-[#626262] p-1 w-8 h-8" />{" "}
            <span>Round Trip Flights</span>
          </p>
          <p className="flex items-center gap-2">
            <CarTaxiFront className="bg-[#E3E3E3] rounded text-[#626262] p-1 w-8 h-8" />{" "}
            <span>Airport Pickup & Drop</span>
          </p>
          <p className="flex items-center gap-2">
            <BookText className="bg-[#E3E3E3] rounded text-[#626262] p-1 w-8 h-8" />{" "}
            <span>Visa Services</span>
          </p>
        </div>

        {/* Price Section */}
        <div className="border-t-2 border-gray-300 flex justify-between items-center ">
          <div className="pt-10 flex flex-col gap-1">
            {tour.discount && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400 line-through">
                  ₹{tour.oldPrice.toLocaleString()}
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 text-xs font-semibold rounded">
                  {tour.discount}
                </span>
              </div>
            )}
            <p className="text-xl font-bold text-gray-800">
              <span className="text-sm pr-1">₹</span>
              {tour.price.toLocaleString()}{" "}
              <span className="text-sm font-medium text-gray-500">/Person</span>
            </p>
            <p className="text-md text-gray-500">
              Total Price ₹{tour.total.toLocaleString()}
            </p>
          </div>
          <button className="mt-3 px-10 bg-[#DC3545] text-white py-4 text-sm font-semibold hover:bg-red-700 transition">
            SEE MORE DETAILS
          </button>
        </div>

        {/* Button */}
      </div>
    </div>
  );
};

export default TourCard;
