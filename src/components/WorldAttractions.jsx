import React, { useState, useEffect } from "react";

// Images
import image1 from "../assets/images/destinations/image.png";
import image2 from "../assets/images/destinations/image-1.png";
import image3 from "../assets/images/destinations/image-2.png";
import image4 from "../assets/images/destinations/image3.png";
import image5 from "../assets/images/destinations/image4.png";
import image6 from "../assets/images/destinations/image5.png";
import image7 from "../assets/images/destinations/image-6.png";
import image8 from "../assets/images/destinations/image-7.png";
import image9 from "../assets/images/destinations/image-8.png";
import image10 from "../assets/images/destinations/image-9.png";
import image11 from "../assets/images/destinations/image-10.png";

const regions = ["Asia", "Middle-East", "Europe", "America", "Africa"];

const destinations = [
  "Bangkok - Thailand",
  "Phuket - Thailand",
  "Krabi - Singapore",
  "Khoo Lak - Lagos",
  "Koh Lanta - Vietnam",
  "Koh Samui - Thailand",
  "Hua Tin - Thailand",
  "Pattaya - Thailand",
  "Koh Chang - Vietnam",
  "Kanchanaburi - Vietnam",
  // "Chang Mai - Vietnam",
  // "Chang Rai - Lagos",
];

// Map images to destinations
const destinationImages = [
  image1,
  image4,
  image2,
  image3,

  image4,
  image5,
  image7,
  image6,

  image10,
  image1,
  // image9,
  // image10,
];

const WorldAttractions = () => {
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <section className="flex flex-col items-center gap-6 px-4 sm:px-6 md:px-8 py-10 w-full">
      {/* Heading */}
      <div className="flex flex-col items-start gap-2 w-full animate-fadeIn">
        <h2 className="text-center md:text-left text-black text-[32px] font-roboto font-bold">
          Discover World’s Popular Cities & Attractions
        </h2>
        <p className="text-[#4E4E4E] text-[20px] font-roboto font-normal max-w-[1200px]">
          Explore iconic landmarks and must-see destinations world wide with
          curated holidays from our travel partners.
        </p>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-col items-start gap-[30px] w-full">
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`h-[50px] px-[36px] py-[16px] flex justify-center items-center gap-[10px] rounded transition-all duration-300 ${
                activeRegion === region
                  ? "bg-[#2A2929] text-white"
                  : "bg-white text-black border border-[#D3D3D3] hover:shadow-md"
              }`}
            >
              <span className="text-[16px] font-roboto font-semibold uppercase">
                {region}
              </span>
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div
          className="grid gap-[10px] w-full animate-fadeInUp"
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(270px, 1fr))`,
          }}
        >
          {destinations.map((place, idx) => (
            <div
              key={idx}
              className="relative w-full h-[215px] overflow-hidden rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <img
                src={destinationImages[idx] || "https://placehold.co/337x215"}
                alt={place}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <span className="absolute left-[14px] bottom-[14px] text-white text-[18px] font-roboto font-semibold">
                {place}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WorldAttractions;
