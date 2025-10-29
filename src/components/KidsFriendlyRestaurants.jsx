// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import vector1 from "../assets/images/kidspecial/Vector-1.svg";
// import vector2 from "../assets/images/kidspecial/Vector-2.svg";
// import vector3 from "../assets/images/kidspecial/Vector-3.svg";
// import vector4 from "../assets/images/kidspecial/Vector-4.svg";
// import burger from "../assets/images/kidspecial/burger.png";

// const vectors = [vector1, vector2, vector3, vector4];

// const restaurants = [
//   {
//     id: 1,
//     name: "Chennai Sweets",
//     rating: 4.5,
//     location: "12/2 Rohit Street-2nd, Madurai",
//     famousFor: "Indian Thali, Rajma Chawal, Chhole-Chawal",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 2,
//     name: "Spicy Garden",
//     rating: 4.2,
//     location: "3/4, 5th Avenue, Chennai",
//     famousFor: "Pizza, Pasta",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 3,
//     name: "Burger King",
//     rating: 4.8,
//     location: "8/2, North Street, Delhi",
//     famousFor: "Burgers, Fries",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 4,
//     name: "Taco Fiesta",
//     rating: 4.6,
//     location: "15/3, Beach Road, Goa",
//     famousFor: "Tacos, Nachos",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 5,
//     name: "Urban Diner",
//     rating: 4.3,
//     location: "22/A, Main Street, Mumbai",
//     famousFor: "Continental & Grill",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 6,
//     name: "The Veg Hub",
//     rating: 4.4,
//     location: "9/B, Park Avenue, Kolkata",
//     famousFor: "South Indian, Vegan Meals",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 7,
//     name: "Ocean View Cafe",
//     rating: 4.7,
//     location: "3rd Floor, Seaside Mall, Goa",
//     famousFor: "Coffee, Desserts",
//     imageUrl: burger,
//     tags: ["Eat & Drink", "Restaurant"],
//   },
// ];

// const KidsFriendlyRestaurants = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(restaurants.length / itemsPerPage);

//   const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
//   const handleNext = () =>
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

//   const visibleRestaurants = restaurants.slice(
//     currentPage * itemsPerPage,
//     currentPage * itemsPerPage + itemsPerPage
//   );

//   return (
//     <section className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-12 py-12 flex flex-col gap-8 overflow-hidden mt-8">
//       {/* Header */}
//       <div className="flex flex-col gap-2 items-start w-full">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
//           Kids Friendly Restaurants
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl text-[#4E4E4E]">
//           Discover the best kids friendly restaurants popular among kids & teens
//         </p>
//       </div>

//       {/* Arrows */}
//       <div className="flex justify-end gap-3 mb-4">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 0}
//           className="w-10 h-10 rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 hover:bg-[#DC3545]/10 transition"
//         >
//           <ChevronLeft size={20} className="text-[#DC3545]" />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages - 1}
//           className="w-10 h-10 rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 hover:bg-[#DC3545]/10 transition"
//         >
//           <ChevronRight size={20} className="text-[#DC3545]" />
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-wrap justify-center lg:justify-between gap-6">
//         {visibleRestaurants.map((restaurant, i) => {
//           const vector = vectors[i % vectors.length];
//           return (
//             <article
//               key={restaurant.id}
//               className="relative w-full sm:w-[45%] md:w-[40%] lg:w-[273px] h-auto bg-white border border-[#DDD] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
//             >
//               {/* Image */}
//               <div className="relative w-full h-[280px] overflow-hidden">
//                 <img
//                   src={restaurant.imageUrl}
//                   alt={restaurant.name}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                 />

//                 {/* Wishlist Badge */}
//                 <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full flex items-center gap-2 px-2.5 py-1.5">
//                   <div className="w-3.5 h-3 border border-white" />
//                   <span className="text-white text-xs">Add To Wishlist</span>
//                 </div>

//                 {/* Vector Tag */}
//                 <div className="absolute bottom-2 right-2 w-20 h-16 flex items-center justify-center">
//                   <img
//                     src={vector}
//                     alt="vector"
//                     className="absolute inset-0 w-full h-full object-contain pointer-events-none"
//                   />
//                   <div className="relative z-10 flex flex-col items-center justify-center text-white text-[10px] font-semibold text-center leading-[1.05] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
//                     <span>Kids</span>
//                     <span>Love It!</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4 flex flex-col gap-3 flex-1">
//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2">
//                   {restaurant.tags.map((tag, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-[#838383] text-white text-xs font-semibold px-2 py-1 rounded-sm"
//                     >
//                       {tag}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Details */}
//                 <div className="flex flex-col gap-2">
//                   <h3 className="text-sm sm:text-base md:text-lg font-medium text-black">
//                     {restaurant.name}
//                   </h3>

//                   <div className="flex items-center gap-2">
//                     <span className="text-xs sm:text-sm text-[#4E4E4E]">
//                       {restaurant.rating}
//                     </span>
//                     <div className="w-4 h-4 relative bg-[#DC3545] rounded-full border border-black">
//                       <div className="w-[6px] h-[9px] absolute top-[4px] left-[6px] bg-[#FFD633] border border-[#FFCC00]" />
//                     </div>
//                   </div>

//                   <p className="text-xs sm:text-sm text-[#4E4E4E] leading-tight">
//                     {restaurant.location}
//                   </p>

//                   <p className="text-xs sm:text-sm">
//                     <span className="font-semibold text-black">
//                       Famous for:{" "}
//                     </span>
//                     <span className="text-[#838383]">
//                       {restaurant.famousFor}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {/* One of the Best Tag */}
//               <div className="absolute top-0 left-5 bg-[#DC3545] px-2 py-1 text-white uppercase text-xs font-semibold leading-tight shadow-md">
//                 One <br /> of the <br /> Best
//                 <div className="text-[10px] font-normal mt-0.5">in Town</div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default KidsFriendlyRestaurants;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vector1 from "../assets/images/kidspecial/Vector-1.svg";
import vector2 from "../assets/images/kidspecial/Vector-2.svg";
import vector3 from "../assets/images/kidspecial/Vector-3.svg";
import vector4 from "../assets/images/kidspecial/Vector-4.svg";
import burger from "../assets/images/kidspecial/burger.png";

const vectors = [vector1, vector2, vector3, vector4];

const restaurants = [
  {
    id: 1,
    name: "Chennai Sweets",
    rating: 4.5,
    location: "12/2 Rohit Street-2nd, Madurai",
    famousFor: "Indian Thali, Rajma Chawal, Chhole-Chawal",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
  {
    id: 2,
    name: "Spicy Garden",
    rating: 4.2,
    location: "3/4, 5th Avenue, Chennai",
    famousFor: "Pizza, Pasta",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
  {
    id: 3,
    name: "Burger King",
    rating: 4.8,
    location: "8/2, North Street, Delhi",
    famousFor: "Burgers, Fries",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    rating: 4.6,
    location: "15/3, Beach Road, Goa",
    famousFor: "Tacos, Nachos",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
  {
    id: 5,
    name: "Urban Diner",
    rating: 4.3,
    location: "22/A, Main Street, Mumbai",
    famousFor: "Continental & Grill",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
  {
    id: 6,
    name: "The Veg Hub",
    rating: 4.4,
    location: "9/B, Park Avenue, Kolkata",
    famousFor: "South Indian, Vegan Meals",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
  {
    id: 7,
    name: "Ocean View Cafe",
    rating: 4.7,
    location: "3rd Floor, Seaside Mall, Goa",
    famousFor: "Coffee, Desserts",
    imageUrl: burger,
    tags: ["Eat & Drink", "Restaurant"],
  },
];

const KidsFriendlyRestaurants = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  const visibleRestaurants = restaurants.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-12 py-12 flex flex-col gap-8 overflow-hidden mt-8">
      {/* Header */}
      <div className="flex flex-col gap-2 items-start w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Kids Friendly Restaurants
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#4E4E4E]">
          Discover the best kids friendly restaurants popular among kids & teens
        </p>
      </div>

      {/* Arrows */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="w-10 h-10 rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 hover:bg-[#DC3545]/10 transition"
        >
          <ChevronLeft size={20} className="text-[#DC3545]" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="w-10 h-10 rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 hover:bg-[#DC3545]/10 transition"
        >
          <ChevronRight size={20} className="text-[#DC3545]" />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleRestaurants.map((restaurant, i) => {
          const vector = vectors[i % vectors.length];
          return (
            <article
              key={restaurant.id}
              className="relative w-full bg-white border border-[#DDD] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[280px] overflow-hidden">
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Wishlist Badge */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full flex items-center gap-2 px-2.5 py-1.5">
                  <div className="w-3.5 h-3 border border-white" />
                  <span className="text-white text-xs">Add To Wishlist</span>
                </div>

                {/* Vector Tag */}
                <div className="absolute bottom-2 right-2 w-20 h-16 flex items-center justify-center">
                  <img
                    src={vector}
                    alt="vector"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center text-white text-[10px] font-semibold text-center leading-[1.05] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    <span>Kids</span>
                    <span>Love It!</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {restaurant.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-[#838383] text-white text-xs font-semibold px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-black">
                    {restaurant.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-[#4E4E4E]">
                      {restaurant.rating}
                    </span>
                    <div className="w-4 h-4 relative bg-[#DC3545] rounded-full border border-black">
                      <div className="w-[6px] h-[9px] absolute top-[4px] left-[6px] bg-[#FFD633] border border-[#FFCC00]" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4E4E4E] leading-tight">
                    {restaurant.location}
                  </p>

                  <p className="text-xs sm:text-sm">
                    <span className="font-semibold text-black">
                      Famous for:{" "}
                    </span>
                    <span className="text-[#838383]">
                      {restaurant.famousFor}
                    </span>
                  </p>
                </div>
              </div>

              {/* One of the Best Tag */}
              <div className="absolute top-0 left-5 bg-[#DC3545] px-2 py-1 text-white uppercase text-xs font-semibold leading-tight shadow-md">
                One <br /> of the <br /> Best
                <div className="text-[10px] font-normal mt-0.5">in Town</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default KidsFriendlyRestaurants;
