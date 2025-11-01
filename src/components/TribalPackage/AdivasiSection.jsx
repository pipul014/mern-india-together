import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ Lucide icons
import { Link } from "react-router-dom"; // ✅ for linking to state pages

import newDelhiImg from "../../assets/images/Incredible/new-delhi.png";
import varanasiImg from "../../assets/images/Incredible/varanasi.png";
import pratapgarhImg from "../../assets/images/Incredible/pratapgarh.png";
import Jodhpur from "../../assets/images/Incredible/image-6.png";
import Kottayam from "../../assets/images/Incredible/image-7.png";

// ✅ Regions with page links
const regions = [
  { name: "Odisha", path: "/india-state?name=Odisha" },
  { name: "Nagaland", path: "/india-state?name=Nagaland" },
  { name: "Arunachal Pradesh", path: "/india-state?name=Arunachal+Pradesh" },
  { name: "West Bengal", path: "/india-state?name=West+Bengal" },
  { name: "Madhya Pradesh", path: "/india-state?name=Madhya+Pradesh" },
];

const destinations = [
  { name: "New Delhi", img: newDelhiImg },
  { name: "Jodhpur", img: Jodhpur },
  { name: "Kottayam", img: Kottayam },
  { name: "Varanasi", img: varanasiImg },
  { name: "Pratapgarh", img: pratapgarhImg },
  { name: "Kottayam", img: Kottayam },
  { name: "Varanasi", img: varanasiImg },
  { name: "Pratapgarh", img: pratapgarhImg },
];

export default function IncredibleIndia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;

  const maxIndex = Math.max(destinations.length - visibleCards, 0);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 py-8 mb-4">
      {/* Title & Description */}
      {/* Header Section */}
      <div className="flex flex-col items-start justify-start gap-2.5">
        <h2 className="text-black text-[32px] font-['Roboto'] font-bold">
          Adivasi’s of India
        </h2>
        <p className="text-[#4E4E4E] text-[20px] font-['Roboto'] font-normal">
          Discover & immerse in the untouched cultures, cuisines, art, & crafts
          of India’s tribal communities, deep into the jungles, <br />
          discover their uniqueness.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Left Region List */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full sm:w-[280px] lg:w-[220px] flex flex-col gap-2 pb-8 lg:pb-12 mt-2 text-center lg:text-left">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start opacity-0 animate-stagger font-roboto"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* ✅ Make region names clickable */}
                <Link
                  to={region.path}
                  className={`text-black text-base sm:text-lg hover:text-red-600 transition-colors duration-200 ${
                    idx === 0 ? "font-bold" : "font-normal"
                  }`}
                >
                  {region.name}
                </Link>

                {idx < regions.length - 1 && (
                  <div className="w-3/4 lg:w-full h-px bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Destination Cards */}
        <div className="w-full relative">
          {/* Navigation Buttons */}
          <div className="absolute right-0 top-0 flex gap-2 z-10 -translate-y-[120%] md:-translate-y-[70%] hidden sm:flex">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 hover:bg-red-50 hover:scale-110 transition-transform duration-200 ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed hover:scale-100 hover:bg-transparent"
                  : ""
              }`}
              aria-label="Previous"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 hover:bg-red-50 hover:scale-110 transition-transform duration-200 ${
                currentIndex >= maxIndex
                  ? "opacity-40 cursor-not-allowed hover:scale-100 hover:bg-transparent"
                  : ""
              }`}
              aria-label="Next"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Destination Grid */}
          <div
            className="grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-x-4 gap-y-6
              mt-2
              place-items-center
              px-2 sm:px-4 md:px-6 lg:px-0"
          >
            {destinations
              .slice(currentIndex, currentIndex + visibleCards)
              .map((dest, idx) => (
                <div
                  key={idx}
                  className={`relative
                    w-full
                    sm:max-w-[180px]
                    md:max-w-[200px]
                    h-[240px] sm:h-[260px] md:h-[270px]
                    overflow-hidden
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-300
                    opacity-0
                    animate-stagger
                    ${idx % 2 !== 0 ? "mt-4 sm:mt-6 md:mt-8" : ""}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center  hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${dest.img})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Destination Label */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm sm:text-base font-semibold">
                      {dest.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          .animate-stagger {
            animation: fadeIn 0.6s ease forwards;
          }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
}
