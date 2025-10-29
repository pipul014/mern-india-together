// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ using Lucide icons
// import Jaipur from "../assets/images/destinations/jaipur.png";
// import Jodhpur from "../assets/images/destinations/Jodhpur.png";
// import udaipur from "../assets/images/destinations/udaipur.png";
// import agra from "../assets/images/destinations/agra.png";
// import delhi from "../assets/images/destinations/delhi.png";

// import heritage from "../assets/images/destinations/monument_svgrepo.com.svg";
// import adventure from "../assets/images/destinations/car-side_svgrepo.com.svg";
// import beach from "../assets/images/destinations/beach-umbrella-1_svgrepo.com.svg";
// import tribal from "../assets/images/destinations/spiral-31_svgrepo.com.svg";
// import hillStations from "../assets/images/destinations/mountain_svgrepo.com.svg";
// import spiritual from "../assets/images/destinations/folded-hands_svgrepo.com.svg";

// const regions = [
//   { name: "Heritage", icon: heritage },
//   { name: "Adventure", icon: adventure },
//   { name: "Beach", icon: beach },
//   { name: "Tribal", icon: tribal },
//   { name: "Hill Stations", icon: hillStations },
//   { name: "Spiritual", icon: spiritual },
// ];

// const cities = [
//   { name: "Jaipur", tours: 15, img: Jaipur },
//   { name: "Jodhpur", tours: 10, img: Jodhpur },
//   { name: "Delhi", tours: 14, img: delhi },
//   { name: "Agra", tours: 15, img: agra },
//   { name: "Udaipur", tours: 10, img: udaipur },
// ];

// export default function Journeys() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCards = 5;

//   const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   const nextSlide = () =>
//     setCurrentIndex((prev) => Math.min(prev + 1, cities.length - visibleCards));

//   return (
//     <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 py-8">
//       {/* Title & Description */}
//       <div className="flex flex-col gap-2 text-center md:text-left opacity-0 animate-fadeIn">
//         <h2 className="text-black text-2xl sm:text-3xl font-bold">
//           Countless amazing journeys through India
//         </h2>
//         <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[900px] mx-auto md:mx-0">
//           Discover incredible cities & choose from countless holidays handpicked
//           from our trusted travel partners.
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6 relative">
//         {/* Left Region List */}
//         <div className="w-full sm:w-[280px] lg:w-[220px] flex flex-col gap-4 pb-8 lg:pb-12 mt-2 text-center lg:text-left">
//           {regions.map((region, idx) => (
//             <div
//               key={idx}
//               className="flex items-center gap-2 opacity-0 animate-stagger"
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               <img src={region.icon} alt={region.name} className="w-6 h-6" />
//               <span
//                 className={`text-black text-base sm:text-lg ${
//                   idx === 0 ? "font-bold" : "font-normal"
//                 }`}
//               >
//                 {region.name}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Right Destination Cards */}
//         <div className="w-full lg:w-[1140px] relative">
//           {/* Navigation Buttons (Desktop/Tablet) */}
//           <div className="absolute right-0 top-0 flex gap-2 z-10 -translate-y-[120%] md:-translate-y-[110%] hidden sm:flex">
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 hover:bg-red-50 hover:scale-110 transition-transform duration-200"
//               aria-label="Previous"
//             >
//               <ChevronLeft size={20} strokeWidth={2} /> {/* ✅ Lucide icon */}
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 hover:bg-red-50 hover:scale-110 transition-transform duration-200"
//               aria-label="Next"
//             >
//               <ChevronRight size={20} strokeWidth={2} /> {/* ✅ Lucide icon */}
//             </button>
//           </div>

//           {/* Destination Grid / Scrollable Container */}
//           <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">
//             {cities
//               .slice(currentIndex, currentIndex + visibleCards)
//               .map((city, idx) => (
//                 <div
//                   key={idx}
//                   className="snap-start flex-shrink-0 w-[180px] sm:w-[220px] h-[280px] relative rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
//                 >
//                   <img
//                     src={city.img}
//                     alt={city.name}
//                     className="w-full h-full object-cover rounded-md"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full p-2 text-white text-sm sm:text-base font-semibold bg-gradient-to-t from-black/60 to-transparent">
//                     {city.name}
//                     <span className="block text-xs">{city.tours} Tours</span>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.8s ease forwards;
//           }
//           .animate-stagger {
//             animation: fadeIn 0.6s ease forwards;
//           }
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//           .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//         `}
//       </style>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ using Lucide icons
import Jaipur from "../assets/images/destinations/jaipur.png";
import Jodhpur from "../assets/images/destinations/jodhpur.png";
import udaipur from "../assets/images/destinations/udaipur.png";
import agra from "../assets/images/destinations/agra.png";
import delhi from "../assets/images/destinations/delhi.png";

import heritage from "../assets/images/destinations/monument_svgrepo.com.svg";
import adventure from "../assets/images/destinations/car-side_svgrepo.com.svg";
import beach from "../assets/images/destinations/beach-umbrella-1_svgrepo.com.svg";
import tribal from "../assets/images/destinations/spiral-31_svgrepo.com.svg";
import hillStations from "../assets/images/destinations/mountain_svgrepo.com.svg";
import spiritual from "../assets/images/destinations/folded-hands_svgrepo.com.svg";

const regions = [
  { name: "Heritage", icon: heritage },
  { name: "Adventure", icon: adventure },
  { name: "Beach", icon: beach },
  { name: "Tribal", icon: tribal },
  { name: "Hill Stations", icon: hillStations },
  { name: "Spiritual", icon: spiritual },
];

const cities = [
  { name: "Jaipur", tours: 15, img: Jaipur },
  { name: "Jodhpur", tours: 10, img: Jodhpur },
  { name: "Delhi", tours: 14, img: delhi },
  { name: "Agra", tours: 15, img: agra },
  { name: "Udaipur", tours: 10, img: udaipur },

  { name: "Jodhpur", tours: 10, img: Jodhpur },
  { name: "Delhi", tours: 14, img: delhi },
  { name: "Agra", tours: 15, img: agra },
  { name: "Udaipur", tours: 10, img: udaipur },
];

export default function Journeys() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, cities.length - visibleCards));

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 py-8">
      {/* Title & Description */}
      <div className="flex flex-col gap-2 text-center md:text-left opacity-0 animate-fadeIn">
        <h2 className="text-black text-2xl sm:text-3xl font-bold">
          Countless amazing journeys through India
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[900px] mx-auto md:mx-0">
          Discover incredible cities & choose from countless holidays handpicked
          from our trusted travel partners.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Left Region List */}
        <div className="w-full sm:w-[280px] lg:w-[220px] flex flex-col gap-4 pb-8 lg:pb-12 mt-2 text-center lg:text-left">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 opacity-0 animate-stagger"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img src={region.icon} alt={region.name} className="w-6 h-6" />
              <span
                className={`text-black text-base sm:text-lg ${
                  idx === 0 ? "font-bold" : "font-normal"
                }`}
              >
                {region.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Destination Cards */}
        <div className="w-full relative">
          {/* Navigation Buttons (Desktop/Tablet) */}
          <div className="absolute right-0 top-0 flex gap-2 z-10 -translate-y-[120%] md:-translate-y-[110%] hidden sm:flex">
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
              disabled={currentIndex >= cities.length - visibleCards}
              className={`w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 hover:bg-red-50 hover:scale-110 transition-transform duration-200 ${
                currentIndex >= cities.length - visibleCards
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
            {cities
              .slice(currentIndex, currentIndex + visibleCards)
              .map((city, idx) => (
                <div
                  key={idx}
                  className={`relative
                    w-full
                    sm:max-w-[180px]
                    md:max-w-[200px]
                    h-[240px] sm:h-[260px] md:h-[270px]
                    overflow-hidden
                    rounded-xl
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-300
                    opacity-0
                    animate-stagger
                    cursor-pointer
                    group
                    ${
                      idx % 2 !== 0
                        ? "mt-4 sm:mt-6 md:mt-8"
                        : "mt-0 sm:mt-0 md:mt-0"
                    }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-xl group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${city.img})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Label */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm sm:text-base font-semibold">
                      {city.name}
                    </p>
                    <span className="block text-xs">{city.tours} Tours</span>
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
