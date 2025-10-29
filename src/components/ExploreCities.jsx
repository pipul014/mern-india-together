import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import image1 from "../assets/images/destinations/image-5.png";
import image2 from "../assets/images/destinations/image-4.png";
import image3 from "../assets/images/destinations/image-3.png";

// Sample data
const cities = [
  { name: "Varanasi", desc: "Spiritual Heartbeat of India", img: image1 },
  { name: "New Delhi", desc: "Where History meets Modernity", img: image2 },
  { name: "Jaipur", desc: "The Royal Heritage City", img: image1 },
  { name: "Mumbai", desc: "City of Dreams", img: image3 },
  { name: "Kolkata", desc: "The Intellectual & Artistic soul", img: image1 },
  { name: "Agra", desc: "The city of love", img: image2 },
  { name: "Guwahati", desc: "Cultural & Commercial Hub", img: image3 },
  { name: "Shillong", desc: "The land of khasi tribes", img: image2 },
  { name: "Amritsar", desc: "Home of the Golden Temple", img: image3 },
  { name: "Madurai", desc: "The temple city of South India", img: image2 },
  { name: "Bhubaneshwar", desc: "The city of temples.", img: image1 },
  { name: "Udaipur", desc: "The Venice of the East", img: image2 },
  { name: "Haridwar & Rishikesh", desc: "The spiritual Retreats", img: image1 },
  { name: "Imphal", desc: "Birthplace to polo start", img: image2 },
  { name: "Lucknow", desc: "The city of Nawabs", img: image1 },
];

export default function ExploreCities() {
  const [page, setPage] = useState(0);

  // Desktop: 2 rows x 5 cards = 10 per page
  const cardsPerPage = 10;
  const totalPages = Math.ceil(cities.length / cardsPerPage);
  const currentCities = cities.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  const handlePrev = () => page > 0 && setPage(page - 1);
  const handleNext = () => page < totalPages - 1 && setPage(page + 1);

  return (
    <section className="w-full bg-[#F1F1F1] px-4 sm:px-8 md:px-12 py-12 md:py-14 flex flex-col items-start gap-8">
      {/* Heading */}
      <div className="flex flex-col items-start gap-2 md:gap-3 text-center md:text-left w-full max-w-[1380px] mx-auto">
        <h2 className="text-black text-[28px] sm:text-[32px] md:text-[36px] font-bold font-roboto animate-fadeIn">
          Explore Cities that tell the Story of India
        </h2>
        <p className="text-[#4E4E4E] text-[16px] sm:text-[18px] md:text-[20px] font-normal font-roboto animate-fadeIn delay-100">
          Travellers, we aim to showcase cities that embody the essence of India
          - culturally, historically, & spiritually.
        </p>
      </div>

      {/* Navigation & Cards */}
      <div className="flex flex-col items-end gap-6 w-full max-w-[1380px] mx-auto">
        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 md:gap-4 mb-2 animate-fadeIn delay-200">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#DC3545] transition-all duration-300 ${
              page === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#DC3545]/10"
            }`}
          >
            <ChevronLeft size={20} className="text-[#DC3545]" />
          </button>
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#DC3545] transition-all duration-300 ${
              page === totalPages - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#DC3545]/10"
            }`}
          >
            <ChevronRight size={20} className="text-[#DC3545]" />
          </button>
        </div>

        {/* Card Grid */}
        <div className="relative w-full min-h-[600px]">
          <div
            key={page}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 animate-fadeIn transition-all duration-500"
          >
            {currentCities.map((city, i) => (
              <div
                key={i}
                className="relative w-full h-[280px] sm:h-[300px] md:h-[270px] lg:h-[270px] overflow-hidden rounded-md shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                {/* Image */}
                <img
                  src={city.img}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Wishlist */}
                {/* <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.34)] rounded-full p-2 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaHeart size={14} className="text-white" />
                </div> */}

                {/* Text Overlay */}
                <div className="absolute left-3 bottom-3 flex flex-col gap-1 text-white font-roboto">
                  <span className="text-[16px] sm:text-[18px] md:text-[18px] font-bold">
                    {city.name}
                  </span>
                  <span className="text-[12px] sm:text-[14px] md:text-[14px] font-normal">
                    {city.desc}
                  </span>
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
            animation: fadeIn 0.6s ease forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </section>
  );
}
