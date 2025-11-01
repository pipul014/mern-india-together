import React, { useRef, useState } from "react";
import MonumentCard from "../MonumentCard";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/images/TribalPackage/image1.jpg";
import image2 from "../../assets/images/TribalPackage/image2.jpg";
import image3 from "../../assets/images/TribalPackage/image3.png";
import MonumentCardAttraction from "../TribalPackage/MonumentCardTribal";

const monuments = [
  {
    title: "3 Days Golden Triangle Tour with Elephant Ride",
    tags: ["Things To Do", "Customised Tour"],
    label: "Popular Among Tourists",
    badge: "100% Tribal",
    rating: 4.5,
    offer: "₹500 ",
    originalPrice: "₹20,000",
    discount: "30% off",
    pricePerPerson: "₹15,000",
    totalPrice: "₹30,000",
    img1: image1,
  },
  {
    title: "Full Day Sightseeing Tour of Jaipur",
    tags: ["Things To Do", "Same Day Tour"],
    badge: "100% Tribal",
    rating: 4.5,
    offer: "₹500 ",
    originalPrice: "₹7,000",
    discount: "30% off",
    pricePerPerson: "₹1,500",
    totalPrice: "₹3,000",
    img1: image2,
  },
  {
    title: "3 Days Golden Triangle Tour with Elephant Ride",
    tags: ["Things To Do", "Customised Tour"],
    badge: "100% Tribal",
    rating: 4.5,
    offer: "₹500 ",
    pricePerPerson: "₹53,000",
    totalPrice: "₹60,000",
    img1: image3,
  },
  {
    title: "Full Day Sightseeing Tour of Jaipur",
    tags: ["Things To Do", "Same Day Tour"],
    badge: "100% Tribal",
    rating: 4.5,
    offer: "₹500 ",
    originalPrice: "₹7,000",
    discount: "30% off",
    pricePerPerson: "₹1,500",
    totalPrice: "₹3,000",
    img1: image2,
  },
  {
    title: "3 Days Golden Triangle Tour with Elephant Ride",
    tags: ["Things To Do", "Customised Tour"],
    badge: "100% Tribal",
    rating: 4.5,
    offer: "₹500 ",
    pricePerPerson: "₹53,000",
    totalPrice: "₹60,000",
    img1: image3,
  },
];

const TribalTourPackages = () => {
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollByCard = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector("div")?.offsetWidth || 350;
    const newIndex =
      direction === "left"
        ? Math.max(scrollIndex - 1, 0)
        : Math.min(scrollIndex + 1, monuments.length - 1);

    setScrollIndex(newIndex);
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mt-14 bg-[#F1F1F1] py-8">
        {/* <div className="px-4 sm:px-6 md:px-8 pt-16 pb-10">
          <div>
            <h1 className="text-3xl font-bold">Indian Tribal Tour Packages</h1>
            <p className="text-gray-700 mt-1">
              Experience the unexplored, tradition and vibrant tribals of India
            </p>
          </div>
        </div> */}
        <div className="inline-flex flex-col items-start justify-start gap-2.5 px-4 sm:px-6 md:px-8 pb-10 ">
          <div className="text-black text-2xl sm:text-3xl font-bold font-['Roboto'] text-center break-words">
            North-East India Tribal Tour Packages
          </div>
          <div className="text-[#4E4E4E] text-lg sm:text-xl font-normal font-['Roboto'] break-words">
            Explore north-east India’s native tribes. Visit their villages or
            experience vibrant haats.
          </div>
        </div>

        {/* Carousel with Arrows */}
        <div className="relative flex flex-col gap-6 px-4 sm:px-6 md:px-8">
          {/* Navigation Arrows */}
          <div className="absolute right-6  -top-10 flex gap-3 z-20">
            <button
              onClick={() => scrollByCard("left")}
              disabled={scrollIndex === 0}
              aria-label="Previous"
              className={`group w-10 h-10 rounded-full border border-red-600 flex justify-center items-center transition-all ${
                scrollIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-red-600 hover:scale-105"
              }`}
            >
              <ChevronLeft
                size={18}
                className={`${
                  scrollIndex === 0
                    ? "text-red-600"
                    : "text-red-600 group-hover:text-white transition-colors"
                }`}
              />
            </button>

            <button
              onClick={() => scrollByCard("right")}
              disabled={scrollIndex >= monuments.length - 3}
              aria-label="Next"
              className={`group w-10 h-10 rounded-full border border-red-600 flex justify-center items-center transition-all ${
                scrollIndex >= monuments.length - 3
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-red-600 hover:scale-105"
              }`}
            >
              <ChevronRight
                size={18}
                className={`${
                  scrollIndex >= monuments.length - 3
                    ? "text-red-600"
                    : "text-red-600 group-hover:text-white transition-colors"
                }`}
              />
            </button>
          </div>

          {/* Cards Container */}
          <div
            ref={containerRef}
            className="flex overflow-hidden scroll-smooth pb-4 pt-4 gap-4"
          >
            {monuments.map((monument, index) => (
              <motion.div
                key={index}
                className="min-w-[90%]  md:min-w-[22%] flex justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <MonumentCardAttraction
                  {...monument}
                  isFirstCard={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TribalTourPackages;
