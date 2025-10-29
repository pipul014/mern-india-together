// import React from "react";

// const KidsFriendlyRestaurants = () => {
//   return (
//     <section className="w-full bg-[#F1F1F1] px-[30px] py-[60px] flex flex-col gap-5 overflow-hidden">
//       {/* Header */}
//       <div className="flex flex-col gap-[10px] items-start">
//         <h2 className="text-[32px] font-bold text-black text-center">
//           Kids Friendly Restaurants
//         </h2>
//         <p className="text-[20px] text-[#4E4E4E] text-center">
//           Discover the best kids friendly restaurants popular among kids & teens
//         </p>
//       </div>

//       {/* Arrows */}
//       <div className="flex flex-col items-end gap-[30px] w-full">
//         <div className="flex gap-[10px] items-center">
//           <div className="w-[40px] h-[40px] relative rounded-full border border-[#DC3545] overflow-hidden flex items-center justify-center">
//             <div className="w-[8px] h-[15px] bg-[#DC3545] absolute left-[15px] top-[12px]" />
//           </div>
//           <div className="w-[40px] h-[40px] relative rounded-full border border-[#DC3545] overflow-hidden flex items-center justify-center rotate-180">
//             <div className="w-[8px] h-[15px] bg-[#DC3545] absolute left-[17px] top-[12px]" />
//           </div>
//         </div>

//         {/* Cards Container */}
//         <div className="w-full flex gap-[20px] overflow-hidden">
//           {[1, 2, 3, 4].map((item, i) => (
//             <div
//               key={i}
//               className="w-[273px] h-[465px] relative overflow-hidden"
//             >
//               {/* Card */}
//               <div className="absolute top-0 left-0 inline-flex flex-col shadow-[0_5px_8px_rgba(102,102,102,0.20)]">
//                 {/* Image */}
//                 <div className="w-[273px] h-[280px] relative overflow-hidden">
//                   <img
//                     src="https://placehold.co/273x280"
//                     alt="Restaurant"
//                     className="w-full h-full absolute top-0 left-0 object-cover"
//                   />
//                   <div className="absolute top-[14px] left-[126px] bg-[rgba(0,0,0,0.34)] rounded-full flex items-center gap-[6px] px-[10px] py-[5px] h-[30px]">
//                     <div className="w-[14px] h-[12px] border border-white" />
//                     <span className="text-white text-[14px] font-normal">
//                       Add To Wishlist
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="bg-white border border-[#DDDDDD] px-[14px] py-[14px] flex flex-col gap-[14px] w-full">
//                   {/* Tags */}
//                   <div className="flex gap-[5px]">
//                     <div className="flex gap-[16px] items-end">
//                       <div className="flex gap-[8px]">
//                         <div className="bg-black text-white text-[12px] font-semibold px-[8px] py-[5px]">
//                           Eat & Drink
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-[#838383] text-white text-[12px] font-semibold px-[8px] py-[5px]">
//                       Restaurant
//                     </div>
//                   </div>

//                   {/* Details */}
//                   <div className="flex flex-col gap-[20px] w-full">
//                     <div className="flex flex-col gap-[6px]">
//                       <h3 className="text-[18px] font-medium text-black">
//                         Chennai Sweets
//                       </h3>
//                       <div className="flex items-center gap-[4px]">
//                         <span className="text-[14px] text-[#4E4E4E]">4.5</span>
//                         <div className="w-[18px] h-[18px] relative bg-[#DC3545] rounded-full border border-black">
//                           <div className="w-[6.38px] h-[8.93px] absolute top-[4.2px] left-[6.6px] bg-[#FFD633] border border-[#FFCC00]" />
//                         </div>
//                       </div>
//                       <p className="text-[14px] text-[#4E4E4E]">
//                         12/2 Rohit Street-2nd, Madurai
//                       </p>
//                     </div>
//                     <div>
//                       <span className="text-[14px] font-medium text-black">
//                         Famous for:{" "}
//                       </span>
//                       <span className="text-[14px] text-[#838383]">
//                         Indian Thali, Rajma Chawal, Chhole-Chawal
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Kids Love Badge */}
//               <div
//                 className={`absolute top-[206px] left-[189px] w-[70px] h-[64px] shadow-md overflow-hidden ${
//                   i === 0
//                     ? "bg-[#58A5FF]"
//                     : i === 1
//                     ? "bg-[#2B5A90]"
//                     : i === 2
//                     ? "bg-[#38BC73]"
//                     : "bg-[#FF9B00]"
//                 } border border-white`}
//               >
//                 <div className="absolute top-[20.82px] left-[18.92px] flex flex-col items-center">
//                   <div className="text-[14.19px] text-white uppercase text-center font-['Road Rage'] tracking-[0.71px]">
//                     Kids
//                   </div>
//                   <div className="text-[14.19px] text-white uppercase font-['Road Rage']">
//                     Love IT !
//                   </div>
//                 </div>
//               </div>

//               {/* "One of the Best" Badge */}
//               <div className="absolute top-0 left-[20px] bg-[#DC3545] px-[8px] py-[5px] flex flex-col gap-[2px] text-white uppercase">
//                 <div className="text-[12px] font-semibold leading-[16px]">
//                   One
//                   <br />
//                   of the <br /> Best
//                 </div>
//                 <div className="text-[10px] font-normal">in Town</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KidsFriendlyRestaurants;

// import React from "react";

// const restaurants = [
//   {
//     id: 1,
//     name: "Chennai Sweets",
//     rating: 4.5,
//     location: "12/2 Rohit Street-2nd, Madurai",
//     famousFor: "Indian Thali, Rajma Chawal, Chhole-Chawal",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 2,
//     name: "Spicy Garden",
//     rating: 4.2,
//     location: "3/4, 5th Avenue, Chennai",
//     famousFor: "Pizza, Pasta",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 3,
//     name: "Burger King",
//     rating: 4.8,
//     location: "8/2, North Street, Delhi",
//     famousFor: "Burgers, Fries",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 4,
//     name: "Taco Fiesta",
//     rating: 4.6,
//     location: "15/3, Beach Road, Goa",
//     famousFor: "Tacos, Nachos",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 5,
//     name: "Spicy Garden",
//     rating: 4.2,
//     location: "3/4, 5th Avenue, Chennai",
//     famousFor: "Pizza, Pasta",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 6,
//     name: "Burger King",
//     rating: 4.8,
//     location: "8/2, North Street, Delhi",
//     famousFor: "Burgers, Fries",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 7,
//     name: "Taco Fiesta",
//     rating: 4.6,
//     location: "15/3, Beach Road, Goa",
//     famousFor: "Tacos, Nachos",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
// ];

// const badgeColors = [
//   "bg-[#58A5FF]",
//   "bg-[#2B5A90]",
//   "bg-[#38BC73]",
//   "bg-[#FF9B00]",
// ];

// const KidsFriendlyRestaurants = () => {
//   return (
//     <section className="w-full bg-[#F1F1F1] px-[30px] py-[60px] flex flex-col gap-5 overflow-hidden">
//       {/* Header */}
//       <div className="flex flex-col gap-[10px] items-start">
//         <h2 className="text-[32px] font-bold text-black text-center">
//           Kids Friendly Restaurants
//         </h2>
//         <p className="text-[20px] text-[#4E4E4E] text-center">
//           Discover the best kids friendly restaurants popular among kids & teens
//         </p>
//       </div>

//       {/* Arrows */}
//       <div className="flex flex-col items-end gap-[30px] w-full">
//         <div className="flex gap-[10px] items-center">
//           <div className="w-[40px] h-[40px] relative rounded-full border border-[#DC3545] overflow-hidden flex items-center justify-center">
//             <div className="w-[8px] h-[15px] bg-[#DC3545] absolute left-[15px] top-[12px]" />
//           </div>
//           <div className="w-[40px] h-[40px] relative rounded-full border border-[#DC3545] overflow-hidden flex items-center justify-center rotate-180">
//             <div className="w-[8px] h-[15px] bg-[#DC3545] absolute left-[17px] top-[12px]" />
//           </div>
//         </div>

//         {/* Cards Container */}
//         <div className="w-full flex gap-[20px] overflow-hidden">
//           {restaurants.map((restaurant, i) => (
//             <article
//               key={restaurant.id}
//               className="w-[273px] h-[465px] relative overflow-hidden"
//             >
//               {/* Card */}
//               <div className="absolute top-0 left-0 inline-flex flex-col shadow-[0_5px_8px_rgba(102,102,102,0.20)]">
//                 {/* Image */}
//                 <div className="w-[273px] h-[280px] relative overflow-hidden">
//                   <img
//                     src={restaurant.imageUrl}
//                     alt={restaurant.name}
//                     className="w-full h-full absolute top-0 left-0 object-cover"
//                   />
//                   <div className="absolute top-[14px] left-[126px] bg-[rgba(0,0,0,0.34)] rounded-full flex items-center gap-[6px] px-[10px] py-[5px] h-[30px]">
//                     <div className="w-[14px] h-[12px] border border-white" />
//                     <span className="text-white text-[14px] font-normal">
//                       Add To Wishlist
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="bg-white border border-[#DDDDDD] px-[14px] py-[14px] flex flex-col gap-[14px] w-full">
//                   {/* Tags */}
//                   <div className="flex gap-[5px]">
//                     {restaurant.tags.map((tag, idx) => (
//                       <div
//                         key={idx}
//                         className={`bg-[#838383] text-white text-[12px] font-semibold px-[8px] py-[5px]`}
//                       >
//                         {tag}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Details */}
//                   <div className="flex flex-col gap-[20px] w-full">
//                     <div className="flex flex-col gap-[6px]">
//                       <h3 className="text-[18px] font-medium text-black">
//                         {restaurant.name}
//                       </h3>
//                       <div className="flex items-center gap-[4px]">
//                         <span className="text-[14px] text-[#4E4E4E]">
//                           {restaurant.rating}
//                         </span>
//                         <div className="w-[18px] h-[18px] relative bg-[#DC3545] rounded-full border border-black">
//                           <div className="w-[6.38px] h-[8.93px] absolute top-[4.2px] left-[6.6px] bg-[#FFD633] border border-[#FFCC00]" />
//                         </div>
//                       </div>
//                       <p className="text-[14px] text-[#4E4E4E]">
//                         {restaurant.location}
//                       </p>
//                     </div>
//                     <div>
//                       <span className="text-[14px] font-medium text-black">
//                         Famous for:{" "}
//                       </span>
//                       <span className="text-[14px] text-[#838383]">
//                         {restaurant.famousFor}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Kids Love Badge */}
//               <div
//                 className={`absolute top-[206px] left-[189px] w-[70px] h-[64px] shadow-md overflow-hidden ${badgeColors[i]} border border-white`}
//               >
//                 <div className="absolute top-[20.82px] left-[18.92px] flex flex-col items-center">
//                   <div className="text-[14.19px] text-white uppercase text-center font-['Road Rage'] tracking-[0.71px]">
//                     Kids
//                   </div>
//                   <div className="text-[14.19px] text-white uppercase font-['Road Rage']">
//                     Love IT !
//                   </div>
//                 </div>
//               </div>

//               {/* "One of the Best" Badge */}
//               <div className="absolute top-0 left-[20px] bg-[#DC3545] px-[8px] py-[5px] flex flex-col gap-[2px] text-white uppercase">
//                 <div className="text-[12px] font-semibold leading-[16px]">
//                   One
//                   <br />
//                   of the <br /> Best
//                 </div>
//                 <div className="text-[10px] font-normal">in Town</div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KidsFriendlyRestaurants;

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const restaurants = [
//   {
//     id: 1,
//     name: "Chennai Sweets",
//     rating: 4.5,
//     location: "12/2 Rohit Street-2nd, Madurai",
//     famousFor: "Indian Thali, Rajma Chawal, Chhole-Chawal",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 2,
//     name: "Spicy Garden",
//     rating: 4.2,
//     location: "3/4, 5th Avenue, Chennai",
//     famousFor: "Pizza, Pasta",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 3,
//     name: "Burger King",
//     rating: 4.8,
//     location: "8/2, North Street, Delhi",
//     famousFor: "Burgers, Fries",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 4,
//     name: "Taco Fiesta",
//     rating: 4.6,
//     location: "15/3, Beach Road, Goa",
//     famousFor: "Tacos, Nachos",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 5,
//     name: "Spicy Garden",
//     rating: 4.2,
//     location: "3/4, 5th Avenue, Chennai",
//     famousFor: "Pizza, Pasta",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 6,
//     name: "Burger King",
//     rating: 4.8,
//     location: "8/2, North Street, Delhi",
//     famousFor: "Burgers, Fries",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
//   {
//     id: 7,
//     name: "Taco Fiesta",
//     rating: 4.6,
//     location: "15/3, Beach Road, Goa",
//     famousFor: "Tacos, Nachos",
//     imageUrl: "https://placehold.co/273x280",
//     tags: ["Eat & Drink", "Restaurant"],
//   },
// ];

// const badgeColors = [
//   "bg-[#58A5FF]",
//   "bg-[#2B5A90]",
//   "bg-[#38BC73]",
//   "bg-[#FF9B00]",
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
//     <section className="w-full bg-[#F1F1F1] px-[30px] py-[60px] flex flex-col gap-5 overflow-hidden mt-8">
//       {/* Header */}
//       <div className="flex flex-col gap-[10px] items-start">
//         <h2 className="text-[32px] font-bold text-black text-center">
//           Kids Friendly Restaurants
//         </h2>
//         <p className="text-[20px] text-[#4E4E4E] text-center">
//           Discover the best kids friendly restaurants popular among kids & teens
//         </p>
//       </div>

//       {/* Arrows */}
//       <div className="flex flex-col items-end gap-[30px] w-full">
//         <div className="flex gap-[10px] items-center">
//           <button
//             onClick={handlePrev}
//             disabled={currentPage === 0}
//             className="w-[40px] h-[40px] rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50"
//           >
//             <ChevronLeft size={20} className="text-[#DC3545]" />
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentPage === totalPages - 1}
//             className="w-[40px] h-[40px] rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50"
//           >
//             <ChevronRight size={20} className="text-[#DC3545]" />
//           </button>
//         </div>

//         {/* Cards Container */}
//         <div className="w-full flex gap-[20px] overflow-hidden">
//           {visibleRestaurants.map((restaurant, i) => (
//             <article
//               key={restaurant.id}
//               className="w-[273px] h-[465px] relative overflow-hidden"
//             >
//               {/* Card */}
//               <div className="absolute top-0 left-0 inline-flex flex-col shadow-[0_5px_8px_rgba(102,102,102,0.20)]">
//                 {/* Image */}
//                 <div className="w-[273px] h-[280px] relative overflow-hidden">
//                   <img
//                     src={restaurant.imageUrl}
//                     alt={restaurant.name}
//                     className="w-full h-full absolute top-0 left-0 object-cover"
//                   />
//                   <div className="absolute top-[14px] left-[126px] bg-[rgba(0,0,0,0.34)] rounded-full flex items-center gap-[6px] px-[10px] py-[5px] h-[30px]">
//                     <div className="w-[14px] h-[12px] border border-white" />
//                     <span className="text-white text-[14px] font-normal">
//                       Add To Wishlist
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="bg-white border border-[#DDDDDD] px-[14px] py-[14px] flex flex-col gap-[14px] w-full">
//                   {/* Tags */}
//                   <div className="flex gap-[5px]">
//                     {restaurant.tags.map((tag, idx) => (
//                       <div
//                         key={idx}
//                         className={`bg-[#838383] text-white text-[12px] font-semibold px-[8px] py-[5px]`}
//                       >
//                         {tag}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Details */}
//                   <div className="flex flex-col gap-[20px] w-full">
//                     <div className="flex flex-col gap-[6px]">
//                       <h3 className="text-[18px] font-medium text-black">
//                         {restaurant.name}
//                       </h3>
//                       <div className="flex items-center gap-[4px]">
//                         <span className="text-[14px] text-[#4E4E4E]">
//                           {restaurant.rating}
//                         </span>
//                         <div className="w-[18px] h-[18px] relative bg-[#DC3545] rounded-full border border-black">
//                           <div className="w-[6.38px] h-[8.93px] absolute top-[4.2px] left-[6.6px] bg-[#FFD633] border border-[#FFCC00]" />
//                         </div>
//                       </div>
//                       <p className="text-[14px] text-[#4E4E4E]">
//                         {restaurant.location}
//                       </p>
//                     </div>
//                     <div>
//                       <span className="text-[14px] font-medium text-black">
//                         Famous for:{" "}
//                       </span>
//                       <span className="text-[14px] text-[#838383]">
//                         {restaurant.famousFor}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Kids Love Badge */}
//               <div
//                 className={`absolute top-[206px] left-[189px] w-[70px] h-[64px] shadow-md overflow-hidden ${
//                   badgeColors[i % badgeColors.length]
//                 } border border-white`}
//               >
//                 <div className="absolute top-[20.82px] left-[18.92px] flex flex-col items-center">
//                   <div className="text-[14.19px] text-white uppercase text-center font-['Road Rage'] tracking-[0.71px]">
//                     Kids
//                   </div>
//                   <div className="text-[14.19px] text-white uppercase font-['Road Rage']">
//                     Love IT !
//                   </div>
//                 </div>
//               </div>

//               {/* "One of the Best" Badge */}
//               <div className="absolute top-0 left-[20px] bg-[#DC3545] px-[8px] py-[5px] flex flex-col gap-[2px] text-white uppercase">
//                 <div className="text-[12px] font-semibold leading-[16px]">
//                   One
//                   <br />
//                   of the <br /> Best
//                 </div>
//                 <div className="text-[10px] font-normal">in Town</div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KidsFriendlyRestaurants;

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
//     <section className="w-full bg-[#F1F1F1] px-[30px] py-[60px] flex flex-col gap-6 overflow-hidden">
//       {/* Header */}
//       <div className="flex flex-col gap-2 items-start">
//         <h2 className="text-[32px] font-bold text-black">
//           Kids Friendly Restaurants
//         </h2>
//         <p className="text-[20px] text-[#4E4E4E]">
//           Discover the best kids friendly restaurants popular among kids & teens
//         </p>
//       </div>

//       {/* Arrows */}
//       <div className="flex justify-end gap-3 mb-4">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 0}
//           className="w-[40px] h-[40px] rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 hover:bg-[#DC3545]/10 transition"
//         >
//           <ChevronLeft size={20} className="text-[#DC3545]" />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages - 1}
//           className="w-[40px] h-[40px] rounded-full border border-[#DC3545] flex items-center justify-center disabled:opacity-50 hover:bg-[#DC3545]/10 transition"
//         >
//           <ChevronRight size={20} className="text-[#DC3545]" />
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="flex gap-6 overflow-hidden justify-between">
//         {visibleRestaurants.map((restaurant, i) => {
//           const vector = vectors[i % vectors.length];
//           return (
//             <article
//               key={restaurant.id}
//               className="relative w-[273px] h-[465px] bg-white border border-[#DDD]  shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
//             >
//               {/* Image */}
//               <div className="relative w-full h-[280px] overflow-hidden">
//                 <img
//                   src={restaurant.imageUrl}
//                   alt={restaurant.name}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                 />

//                 {/* Wishlist Badge */}
//                 <div className="absolute top-[12px] left-1/2 -translate-x-1/2 bg-black/40 rounded-full flex items-center gap-2 px-[10px] py-[5px]">
//                   <div className="w-[14px] h-[12px] border border-white" />
//                   <span className="text-white text-[13px]">
//                     Add To Wishlist
//                   </span>
//                 </div>

//                 {/* Vector Tag */}
//                 <div className="absolute bottom-[8px] right-[8px] w-[85px] h-[70px] flex items-center justify-center">
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
//               <div className="p-4 flex flex-col gap-4">
//                 {/* Tags */}
//                 <div className="flex gap-2">
//                   {restaurant.tags.map((tag, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-[#838383] text-white text-[12px] font-semibold px-[8px] py-[4px] rounded-sm"
//                     >
//                       {tag}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Details */}
//                 <div className="flex flex-col gap-[10px]">
//                   <h3 className="text-[18px] font-medium text-black">
//                     {restaurant.name}
//                   </h3>

//                   <div className="flex items-center gap-[6px]">
//                     <span className="text-[14px] text-[#4E4E4E]">
//                       {restaurant.rating}
//                     </span>
//                     <div className="w-[18px] h-[18px] relative bg-[#DC3545] rounded-full border border-black">
//                       <div className="w-[6.38px] h-[8.93px] absolute top-[4.2px] left-[6.6px] bg-[#FFD633] border border-[#FFCC00]" />
//                     </div>
//                   </div>

//                   <p className="text-[14px] text-[#4E4E4E] leading-tight">
//                     {restaurant.location}
//                   </p>

//                   <p className="text-[14px]">
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
//               <div className="absolute top-0 left-[20px] bg-[#DC3545] px-[8px] py-[5px] text-white uppercase text-[12px] font-semibold leading-tight shadow-md">
//                 One <br /> of the <br /> Best
//                 <div className="text-[10px] font-normal mt-[2px]">in Town</div>
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
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        {visibleRestaurants.map((restaurant, i) => {
          const vector = vectors[i % vectors.length];
          return (
            <article
              key={restaurant.id}
              className="relative w-full sm:w-[45%] md:w-[40%] lg:w-[273px] h-auto bg-white border border-[#DDD] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
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
