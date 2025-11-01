// import React, { useRef, useState } from "react";
// import MonumentCard from "../MonumentCard";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import image1 from "../../assets/images/IndiaCenturiesSection/image1.png";
// import image2 from "../../assets/images/IndiaCenturiesSection/image2.png";
// import image3 from "../../assets/images/IndiaCenturiesSection/image3.png";
// import image4 from "../../assets/images/IndiaCenturiesSection/image4.png";
// import MonumentCardAttraction from "../Attraction/MonumentCardAttraction";

// const monuments = [
//   {
//     title: "Taj Mahal",
//     location: "Agra, Uttar Pradesh",
//     rating: "4.5",
//     reviews: 30,
//     yearBuilt: 1650,
//     img1: image1,
//     description:
//       "One of the finest monuments of its time, Taj Mahal built with white marble on the banks of river Yamuna, is known for its craftsmanship....",
//   },
//   {
//     title: "Meenakshi Temple",
//     location: "Madurai, Tamil Nadu",
//     rating: "4.5",
//     reviews: 30,
//     yearBuilt: 1550,
//     img1: image3,
//     description:
//       "One of the finest monuments of its time, Meenakshi Temple is known for its craftsmanship....",
//   },
//   {
//     title: "Qutub Minar",
//     location: "New Delhi",
//     rating: "4.6",
//     reviews: 40,
//     yearBuilt: 1193,
//     img1: image1,
//     description:
//       "A masterpiece of Indo-Islamic architecture, Qutub Minar is the world’s tallest brick minaret....",
//   },
//   {
//     title: "Charminar",
//     location: "Hyderabad, Telangana",
//     rating: "4.4",
//     reviews: 28,
//     yearBuilt: 1591,
//     img1: image3,
//     description:
//       "An iconic symbol of Hyderabad, Charminar stands tall in the heart of the city....",
//   },
//   {
//     title: "Hampi Temples",
//     location: "Hampi, Karnataka",
//     rating: "4.7",
//     reviews: 35,
//     yearBuilt: 1336,
//     img1: image1,
//     description:
//       "The ruins of Hampi showcase the architectural brilliance of the Vijayanagara Empire....",
//   },
// ];

// const TribalTourPackages = () => {
//   const containerRef = useRef(null);
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const scrollByCard = (direction) => {
//     const container = containerRef.current;
//     if (!container) return;

//     const cardWidth = container.querySelector("div")?.offsetWidth || 350;
//     const newIndex =
//       direction === "left"
//         ? Math.max(scrollIndex - 1, 0)
//         : Math.min(scrollIndex + 1, monuments.length - 1);

//     setScrollIndex(newIndex);
//     container.scrollTo({
//       left: newIndex * cardWidth,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <div className="mt-14 ">
//         <div className="px-4 sm:px-6 md:px-8 pt-16 pb-10">
//           <div>
//             <h1 className="text-3xl font-bold">Best Madurai Tour packages</h1>
//             <p className="text-gray-700 mt-1">
//               Discover top tours & packages highlighting the culture &
//               historical aspects of the city.
//             </p>
//           </div>
//         </div>

//         {/* Carousel with Arrows */}
//         <div className="relative flex flex-col gap-6 px-4 sm:px-6 md:px-8">
//           {/* Navigation Arrows */}
//           <div className="absolute right-6  -top-10 flex gap-3 z-20">
//             <button
//               onClick={() => scrollByCard("left")}
//               disabled={scrollIndex === 0}
//               aria-label="Previous"
//               className={`group w-10 h-10 rounded-full border border-red-600 flex justify-center items-center transition-all ${
//                 scrollIndex === 0
//                   ? "opacity-30 cursor-not-allowed"
//                   : "hover:bg-red-600 hover:scale-105"
//               }`}
//             >
//               <ChevronLeft
//                 size={18}
//                 className={`${
//                   scrollIndex === 0
//                     ? "text-red-600"
//                     : "text-red-600 group-hover:text-white transition-colors"
//                 }`}
//               />
//             </button>

//             <button
//               onClick={() => scrollByCard("right")}
//               disabled={scrollIndex >= monuments.length - 3}
//               aria-label="Next"
//               className={`group w-10 h-10 rounded-full border border-red-600 flex justify-center items-center transition-all ${
//                 scrollIndex >= monuments.length - 3
//                   ? "opacity-30 cursor-not-allowed"
//                   : "hover:bg-red-600 hover:scale-105"
//               }`}
//             >
//               <ChevronRight
//                 size={18}
//                 className={`${
//                   scrollIndex >= monuments.length - 3
//                     ? "text-red-600"
//                     : "text-red-600 group-hover:text-white transition-colors"
//                 }`}
//               />
//             </button>
//           </div>

//           {/* Cards Container */}
//           <div
//             ref={containerRef}
//             className="flex overflow-hidden scroll-smooth pb-4 pt-4 gap-4"
//           >
//             {monuments.map((monument, index) => (
//               <motion.div
//                 key={index}
//                 className="min-w-[90%]  md:min-w-[22%] flex justify-center"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               >
//                 <MonumentCardAttraction {...monument} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TribalTourPackages;

import React, { useRef, useState } from "react";
import MonumentCard from "../MonumentCard";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/images/TribalPackage/image1.jpg";
import image2 from "../../assets/images/TribalPackage/image2.jpg";
import image3 from "../../assets/images/TribalPackage/image3.png";
import MonumentCardAttraction from "../EatDrink/MonumentCardTribal";

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
      <div className="mt-14 ">
        <div className="px-4 sm:px-6 md:px-8 pt-16 pb-10">
          <div>
            <h1 className="text-3xl font-bold">Best Madurai Tour packages</h1>
            <p className="text-gray-700 mt-1">
              Discover top tours & packages highlighting the culture &
              historical aspects of the city.
            </p>
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
                <MonumentCardAttraction {...monument} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TribalTourPackages;
