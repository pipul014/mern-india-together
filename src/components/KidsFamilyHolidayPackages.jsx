import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vector1 from "../assets/images/kidspecial/Vector-1.svg";
import vector2 from "../assets/images/kidspecial/Vector-2.svg";
import vector3 from "../assets/images/kidspecial/Vector-3.svg";
import vector4 from "../assets/images/kidspecial/Vector-4.svg";

import image1 from "../assets/images/kidspecial/image-1.png";
import image2 from "../assets/images/kidspecial/image-2.jpg";

const vectors = [vector1, vector2, vector3, vector4, vector1];

const packages = [
  /* ... same package objects as you had ... */
  {
    id: 1,
    title: "3 Days Golden Triangle Tour with Elephant Ride",
    rating: 4.5,
    oldPrice: 20000,
    newPrice: 15000,
    discount: "30% off",
    deposit: 500,
    type1: "Things To Do",
    type2: "Customised Tour",
    tagText: "Kids Love It!",
    image: image1,
    totalPrice: 30000,
  },
  {
    id: 2,
    title: "Full Day sightseeing tour of Jaipur",
    rating: 4.5,
    oldPrice: 7000,
    newPrice: 1500,
    discount: "30% off",
    deposit: 500,
    type1: "Things To Do",
    type2: "Same Day Tour",
    tagText: "Kids Love It!",
    image: image2,
    totalPrice: 3000,
  },
  {
    id: 3,
    title: "3 Days Golden Triangle Tour with Elephant Ride",
    rating: 4.5,
    oldPrice: 53000,
    newPrice: 53000,
    deposit: 500,
    type1: "Things To Do",
    type2: "Customised Tour",
    tagText: "Kids Love It!",
    image: image1,
    totalPrice: 60000,
  },
  {
    id: 4,
    title: "Full Day sightseeing tour of Jaipur",
    rating: 4.5,
    oldPrice: 7000,
    newPrice: 1500,
    discount: "30% off",
    deposit: 500,
    type1: "Things To Do",
    type2: "Same Day Tour",
    tagText: "Kids Love It!",
    image: image2,
    totalPrice: 3000,
  },
  {
    id: 5,
    title: "3 Days Golden Triangle Tour with Elephant Ride",
    rating: 4.5,
    oldPrice: 53000,
    newPrice: 53000,
    deposit: 500,
    type1: "Things To Do",
    type2: "Customised Tour",
    tagText: "Kids Love It!",
    image: image1,
    totalPrice: 60000,
  },
  {
    id: 6,
    title: "Extra Package 1",
    rating: 4.2,
    oldPrice: 10000,
    newPrice: 8000,
    discount: "20% off",
    deposit: 500,
    type1: "Things To Do",
    type2: "Special Tour",
    tagText: "Kids Love It!",
    image: image2,
    totalPrice: 12000,
  },
  {
    id: 7,
    title: "Extra Package 2",
    rating: 4.6,
    oldPrice: 20000,
    newPrice: 16000,
    discount: "20% off",
    deposit: 500,
    type1: "Things To Do",
    type2: "Special Tour",
    tagText: "Kids Love It!",
    image: image1,
    totalPrice: 22000,
  },
];

const KidsFamilyPackages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () =>
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  const handleNext = () =>
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, packages.length - itemsPerPage)
    );

  const visiblePackages = packages.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="bg-[#F1F1F1] py-8 px-4 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-black text-3xl font-bold">
          Kids & Family Holiday Packages
        </h2>
        <p className="text-[#4E4E4E] text-xl">
          Travelling with kids & family? Discover the best activities to do.
        </p>
      </div>

      {/* Arrows */}
      <div className="flex gap-3 justify-end mb-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="w-[40px] h-[40px] rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 transition hover:bg-[#DC3545]/10"
        >
          <ChevronLeft size={20} className="text-[#DC3545]" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= packages.length}
          className="w-[40px] h-[40px] rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 transition hover:bg-[#DC3545]/10"
        >
          <ChevronRight size={20} className="text-[#DC3545]" />
        </button>
      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-hidden justify-between">
        {visiblePackages.map((pkg, index) => {
          const vector = vectors[index % vectors.length];
          return (
            <div
              key={pkg.id}
              className="relative w-[273px] flex-shrink-0 shadow-md  overflow-hidden group bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section: KEEP relative so tag anchors to image area */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1 bg-black/40 rounded-full backdrop-blur-sm">
                  <div className="w-3.5 h-3.5 rounded-full border border-white" />
                  <span className="text-white text-sm font-light">
                    Add To Wishlist
                  </span>
                </div>

                {/* Vector Tag — anchored relative to image area for consistent placement */}
                <div
                  className="absolute right-0"
                  style={{
                    // use CSS variables for easy per-theme adjustments
                    // --tag-right: how far from the right edge of the image to place the badge
                    // --tag-bottom: distance from bottom of image
                    // tweak these if needed per breakpoint
                    right: "8px",
                    bottom: "14px",
                  }}
                >
                  <div
                    className="tag-wrapper grid place-items-center"
                    style={{
                      width: 86,
                      height: 72,
                      // helpful small corrective offset if SVG has visible whitespace
                      transform: "translateY(0)",
                    }}
                  >
                    {/* svg as img centered inside small container */}
                    <img
                      src={vector}
                      alt="tag"
                      className="max-w-[86px] max-h-[72px] w-auto h-auto object-contain pointer-events-none transition-transform duration-300"
                      // helpful per-SVG nudge (if certain vectors need it)
                      // you can add data attributes to vector list and inspect which needs nudge
                    />
                    <div
                      className="absolute z-10 flex flex-col items-center justify-center text-white text-[10px] font-semibold text-center leading-[1.05] px-1"
                      style={{ width: 78 }}
                    >
                      <span style={{ lineHeight: 1 }}>Kids</span>
                      <span style={{ lineHeight: 1 }}>Love It!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-between h-[230px] border-t border-gray-100 p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-black text-white text-xs font-semibold rounded">
                      {pkg.type1}
                    </span>
                    <span className="px-2 py-1 bg-gray-500 text-white text-xs font-semibold rounded">
                      {pkg.type2}
                    </span>
                  </div>

                  <h3 className="text-black font-medium text-[17px] leading-tight line-clamp-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-sm">{pkg.rating}</span>
                    <div className="w-4 h-4 rounded-full bg-red-600 relative">
                      <div className="absolute w-[6px] h-[9px] bg-yellow-400 top-[4px] left-[7px]" />
                    </div>
                  </div>

                  <span className="text-green-600 text-sm">
                    Book with ₹{pkg.deposit} deposit
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    {pkg.discount && (
                      <>
                        <span className="line-through text-gray-500 text-sm">
                          ₹ {pkg.oldPrice.toLocaleString()}
                        </span>
                        <span className="px-1 bg-green-600 text-white text-xs rounded">
                          {pkg.discount}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-black font-normal text-base">
                      ₹ {pkg.newPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm">/Person</span>
                  </div>
                  <span className="text-gray-500 text-sm text-center">
                    Total ₹{pkg.totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* small style helpers (optional; keep in component or move to global CSS) */}
      <style>{`
        /* If you want to fine tune per SVG, add a small CSS class or data-attribute and nudge via transform */
        .tag-wrapper img[data-nudge='-2'] { transform: translateY(-2px); }
        .tag-wrapper img[data-nudge='2'] { transform: translateY(2px); }
      `}</style>
    </section>
  );
};

export default KidsFamilyPackages;
