import React from "react";
import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";
import { Heart } from "lucide-react";

const MonumentCardTribal = ({
  title = "3 Days Golden Triangle Tour with Elephant Ride",
  rating = "4.5",
  tags = ["Things To Do", "Customised Tour"],
  // badge = ["100%", "Tribal"],
  img1 = "https://placehold.co/418x190",
  offer = "₹500",
  originalPrice = "₹20,000",
  pricePerPerson = "₹15,000",
  discount = "30% off",
  totalPrice = "₹30,000",
}) => {
  return (
    <div
      className="group w-full sm:w-full md:max-w-[300px] bg-white flex flex-col  shadow-sm overflow-hidden
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* --- Image Section --- */}
      <div className="relative">
        <img
          src={img1}
          alt={title}
          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Popular Tag */}
        <div className="absolute top-2 left-2">
          <div className="inline-flex flex-col justify-start items-start gap-0.5 px-2 py-1 bg-red-600">
            <div className="text-white text-[12px] font-semibold uppercase leading-4 break-words font-['Roboto']">
              Popular
            </div>
            <div className="text-white text-[12px] font-semibold uppercase leading-4 break-words font-['Roboto']">
              Among
            </div>
            <div className="text-white text-[12px] font-semibold uppercase leading-4 break-words font-['Roboto']">
              Tourists
            </div>
          </div>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-[#00000070] text-white text-xs px-3 py-2 rounded-full flex items-center gap-1 hover:bg-opacity-80 transition">
          <Heart size={14} /> Add To Wishlist
        </button>

        {/* Tribal Badge */}
        <div className="flex flex-col absolute bottom-2 right-2 ">
          <div className="w-[55px] h-[55px] p-2 bg-[#DC3545] rounded-full outline outline-white outline-offset-[-1px] inline-flex justify-center items-center gap-2">
            <div className="text-center">
              <span className="text-white text-[16px] font-bold block leading-none">
                100%
                <br />
              </span>
              <span className="text-white text-[11px] font-bold leading-none">
                Tribal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-3 flex flex-col gap-2">
        {/* Tags */}
        <div className="flex items-center gap-2 text-xs">
          <div className="px-2 py-1 bg-black flex justify-center items-center gap-2">
            <div className="text-white text-xs font-semibold">{tags[0]}</div>
          </div>
          <div className="px-2 py-1 bg-gray-500 flex justify-center items-center gap-2">
            <div className="text-white text-xs font-semibold">{tags[1]}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-black text-lg font-medium">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            {rating}
            <img
              src={thumbUpIcon}
              alt="Thumb Up"
              className="w-4 h-4 object-contain inline-block"
            />
          </span>
        </div>

        {/* Deposit */}
        <p className="text-[#0EB100] text-sm">Book with {offer} deposit</p>

        {/* Pricing */}
        <div className="flex flex-col gap-[2px] text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm line-through">
              {originalPrice}
            </span>
            <div className="px-1.5 py-0.5 bg-[#0EB100] rounded flex justify-center items-center gap-2">
              <div className="text-white text-xs font-bold">{discount}</div>
            </div>
          </div>
          <div className="text-black text-xl font-bold">
            {pricePerPerson}
            <span className="w-17 h-4 text-gray-500 text-sm">/Person</span>
          </div>
          <div className="text-start text-gray-500 text-sm">
            Total Price {totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonumentCardTribal;
