// import React from "react";

// const deals = [
//   {
//     id: 1,
//     image: "https://placehold.co/447x240",
//     category: "Hotel",
//     tag: "Date Wise",
//     title:
//       "Stay at a 4 Star Hotel for two on full board basis (breakfast, lunch, dinner) & one complimentary transfer",
//     originalPrice: 7000,
//     discount: "30% off",
//     price: 53000,
//     per: "Per Night",
//     validity: "Travel from 1st - 31st March, 2025",
//     vendor: "Akbar Travels, New Delhi",
//   },
//   {
//     id: 2,
//     image: "https://placehold.co/447x240",
//     category: "Hotel",
//     tag: "Date Wise",
//     title: "Dinner for family, 50% discount on order of worth ₹5,000 & above",
//     originalPrice: 5000,
//     discount: "50% off",
//     price: 2500,
//     per: "Per Person",
//     validity: "Offer Ends on 20th April - 10th May, 2025",
//     vendor: "Crazy Burgers Restaurant, New Delhi",
//   },
//   {
//     id: 3,
//     image: "https://placehold.co/447x240",
//     category: "Airline",
//     tag: "",
//     title: "Virgin Atlantic Flight Offer",
//     originalPrice: null,
//     discount: null,
//     price: 80500,
//     per: "Person",
//     validity: "Valid from 1st - 31st March, 2025",
//     vendor: "Virgin Atlantic",
//   },
//   {
//     id: 4,
//     image: "https://placehold.co/447x240",
//     category: "Ticketing Agent",
//     tag: "",
//     title: "Fly - Air India: Delhi-London-Delhi",
//     originalPrice: null,
//     discount: null,
//     price: 80500,
//     per: "Person",
//     validity: "Offer Ends on 20th April - 10th May, 2025",
//     vendor: "Riya Travel, Delhi",
//   },
// ];

// const DealsGrid = () => {
//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div className="flex-1">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
//             Together 23, Monthly Travel & Entertainment Deals
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Your monthly bundle of big value - August Edition
//           </p>
//         </div>
//         {/*
//         <div className="relative w-24 h-24 sm:w-28 sm:h-28 shadow-md flex-shrink-0">
//           <div className="absolute w-full h-full bg-white border border-[#DC3545]" />
//           <div className="absolute left-2 top-3 flex flex-col items-end gap-1">
//             <div className="text-[#DC3545] text-[18px] sm:text-[20px] font-bold tracking-[0.4px]">
//               TOGETHER
//             </div>
//             <div className="flex items-end gap-1">
//               <div className="text-[#DC3545] text-[36px] sm:text-[48px] font-normal leading-[36px] sm:leading-[48px]">
//                 23
//               </div>
//               <div className="flex flex-col justify-start items-start text-[10px] sm:text-[12px] font-normal">
//                 <div className="text-[#DC3545]">Travel</div>
//                 <div className="text-[#DC3545]">Deals</div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 shadow-md flex-shrink-0">
//           {/* Background & Border */}
//           <div className="absolute inset-0 bg-white border border-[#DC3545] rounded-lg" />

//           {/* Text Content */}
//           <div className="absolute inset-0 flex flex-col justify-center items-end p-2 sm:p-3">
//             {/* TOGETHER Label */}
//             <div className="text-[#DC3545] text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-[0.4px]">
//               TOGETHER
//             </div>

//             {/* Number + Travel Deals */}
//             <div className="flex items-end gap-1 mt-1 sm:mt-2">
//               <div className="text-[#DC3545] text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-none sm:leading-tight md:leading-[48px]">
//                 23
//               </div>
//               <div className="flex flex-col justify-start items-start text-[8px] sm:text-[10px] md:text-[12px] font-normal leading-tight">
//                 <div className="text-[#DC3545]">Travel</div>
//                 <div className="text-[#DC3545]">Deals</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             className="relative bg-white shadow-lg rounded-lg overflow-hidden"
//           >
//             <div className="relative">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-44 sm:h-56 md:h-56 object-cover"
//               />
//               <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
//                 <div className="w-2 h-2 sm:w-3 sm:h-3 border-white border-[1.5px] rounded-sm" />
//                 Add To Wishlist
//               </div>
//             </div>

//             <div className="p-3 sm:p-4 flex flex-col gap-2">
//               <div className="flex gap-2 mb-1 flex-wrap">
//                 {deal.category && (
//                   <span className="bg-black text-white text-[10px] sm:text-[12px] font-semibold px-2 py-1 rounded">
//                     {deal.category}
//                   </span>
//                 )}
//                 {deal.tag && (
//                   <span className="bg-gray-500 text-white text-[10px] sm:text-[12px] font-semibold px-2 py-1 rounded">
//                     {deal.tag}
//                   </span>
//                 )}
//               </div>

//               <h3 className="text-sm sm:text-base font-medium text-black">
//                 {deal.title}
//               </h3>

//               {deal.originalPrice && (
//                 <div className="flex items-center gap-2 text-[10px] sm:text-sm">
//                   <span className="text-gray-500 line-through">
//                     ₹ {deal.originalPrice}
//                   </span>
//                   <span className="bg-green-600 text-white text-[10px] sm:text-xs px-1 py-0.5 rounded font-bold">
//                     {deal.discount}
//                   </span>
//                 </div>
//               )}

//               <div className="flex items-end gap-1 text-black text-lg sm:text-xl font-bold">
//                 ₹ {deal.price}{" "}
//                 <span className="text-gray-500 text-xs sm:text-sm font-normal">
//                   /{deal.per}
//                 </span>
//               </div>

//               <p className="text-gray-500 text-xs sm:text-sm">
//                 {deal.validity}
//               </p>
//               <p className="text-gray-800 text-xs sm:text-sm uppercase">
//                 {deal.vendor}
//               </p>
//             </div>

//             <div className="absolute top-2 left-2 bg-red-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
//               {deal.id}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-6">
//         <button className="bg-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded inline-flex items-center gap-2 text-sm sm:text-base">
//           <span>View More</span>
//           <span className="w-2 sm:w-3 h-2 sm:h-3 relative">
//             <div className="absolute w-2 sm:w-3 h-[5px] sm:h-[7.5px] bg-white rotate-45"></div>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DealsGrid;

// import React from "react";

// const TravelCard = () => {
//   return (
//     <div className="relative inline-flex flex-col items-center justify-start w-[446px] h-[516px] pb-5 outline outline-[1px] outline-[#C9C9C9] outline-offset-[-1px]">
//       {/* Image Section */}
//       <div className="relative w-full h-[239.82px]">
//         <img
//           src="https://placehold.co/447x240"
//           alt="Tour"
//           className="absolute top-0 left-0 w-[446.67px] h-[239.82px]"
//         />
//         {/* Wishlist Heart */}
//         <div className="absolute top-[14px] left-[293.67px] flex items-center gap-1.5 px-2.5 py-2 bg-black/30 rounded-full">
//           <div className="w-[14px] h-[12px] outline-[1.5px] outline-white outline-offset-[-0.75px]" />
//           <div className="text-white text-[14px] font-normal font-roboto">
//             Add To Wishlist
//           </div>
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="flex-1 flex flex-col justify-between items-end w-full">
//         <div className="flex flex-col justify-start items-start gap-3.5 w-[410px] p-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded">
//           {/* Tags */}
//           <div className="flex flex-col gap-4 w-full">
//             <div className="inline-flex gap-1">
//               <div className="flex gap-4">
//                 <div className="flex gap-2">
//                   <div className="flex justify-center items-center gap-2 px-2 py-1 bg-black">
//                     <div className="text-white text-[12px] font-semibold font-roboto">
//                       Hotel
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center gap-2 px-2 py-1 bg-gray-500">
//                 <div className="text-white text-[12px] font-semibold font-roboto">
//                   Package
//                 </div>
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-black text-[18px] font-medium font-roboto w-full">
//               Stay at a 4 Star Hotel for two on full board basis (breakfast,
//               lunch, dinner) & one complimentary transfer
//             </div>

//             {/* Pricing */}
//             <div className="flex flex-col gap-0.5">
//               <div className="inline-flex items-end gap-1">
//                 <div className="text-black font-roboto">
//                   <span className="text-[16px] font-normal">₹ </span>
//                   <span className="text-[20px] font-bold">53,000</span>
//                 </div>
//                 <div className="text-gray-500 text-[14px] w-[68px]">
//                   /Person
//                 </div>
//               </div>
//               <div className="text-gray-500 text-[14px] text-center">
//                 Total Price ₹60,000
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Travel Info */}
//         <div className="flex flex-col items-end gap-1">
//           <div className="text-gray-500 text-[12px] italic">
//             Travel from 1st - 31st March, 2025
//           </div>
//           <div className="text-black text-[12px] uppercase w-[178px]">
//             Akbar Travels, New Delhi
//           </div>
//         </div>
//       </div>

//       {/* Badge */}
//       <div className="absolute left-[361px] top-[198px] w-[44px] h-[44px] flex flex-col justify-center items-center gap-2 p-[9px] bg-red-600 rounded-full">
//         <div className="text-white text-[20px] font-bold text-center w-[23px] h-[22px]">
//           2
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelCard;

// import React from "react";

// const TogetherDeals = () => {
//   const cards = [
//     {
//       id: 1,
//       category: "Things To Do",
//       subCategory: "Same Day Tour",
//       title:
//         "Full Day Sightseeing of New Delhi Full Day Sightseeing of New Delhi",
//       originalPrice: "₹ 7,000",
//       discount: "30% off",
//       price: "₹ 1,500",
//       total: "Total Price ₹3,000",
//       validity: "Travel from 1st - 31st March, 2025",
//       vendor: "Akbar Travels, New Delhi",
//       img: "https://placehold.co/447x240",
//     },
//     {
//       id: 2,
//       category: "Hotel",
//       subCategory: "Package",
//       title:
//         "Stay at a 4 Star Hotel for two on full board basis (breakfast, lunch, dinner) & one complimentary transfer",
//       price: "₹ 53,000",
//       total: "Total Price ₹60,000",
//       validity: "Travel from 1st - 31st March, 2025",
//       vendor: "Akbar Travels, New Delhi",
//       img: "https://placehold.co/447x240",
//     },
//     {
//       id: 3,
//       category: "Shop",
//       subCategory: "Boutique",
//       title: "Summer Sale on handweaved cotton t-shirts from chanderi",
//       offers: [
//         "Credit Card Accepted",
//         "Plus 20% Off on buying 2 items from store",
//         "1 Cashback on order of ₹5,000.",
//       ],
//       validity: "Valid from 1st - 31st March, 2025",
//       vendor: "Logchamp Boutique, New Delhi",
//       img: "https://placehold.co/446x240",
//     },
//     {
//       id: 4,
//       category: "Eat & Drink",
//       subCategory: "Cafe",
//       title:
//         "Dinner for family, 50% discount on a order of worth ₹5,000 & above.",
//       offers: [
//         "Credit Card Accepted",
//         "Plus 20% Off on buying 2 items from store",
//         "1 Cashback on order of ₹5,000.",
//       ],
//       validity: "Offer Ends on 20th April - 10th May, 2025",
//       vendor: "Crazy Burgers Restaurant, New Delhi",
//       img: "https://placehold.co/446x240",
//     },
//   ];

//   return (
//     <div className="w-full px-8 py-16 bg-gray-100 flex flex-col gap-8">
//       {/* Header */}
//       <div className="flex justify-between items-center gap-8">
//         <div className="flex-1 flex flex-col gap-2">
//           <h2 className="text-black text-4xl font-bold">
//             Together 23, Monthly Travel & Entertainment Deals
//           </h2>
//           <p className="text-gray-600 text-lg font-normal">
//             Your monthly bundle of big value -{" "}
//             <span className="font-medium">August Edition</span>
//           </p>
//         </div>
//         <div className="relative w-28 h-24 shadow-md">
//           <div className="absolute w-full h-full bg-white border border-red-600"></div>
//           <div className="absolute top-3 left-1 flex flex-col items-end gap-1">
//             <div className="text-red-600 text-lg font-bold tracking-wide">
//               TOGETHER
//             </div>
//             <div className="flex items-end gap-1">
//               <div className="text-red-600 text-5xl font-normal">23</div>
//               <div className="flex flex-col text-red-600 text-xs font-normal">
//                 <span>Travel</span>
//                 <span>Deals</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="w-[326px] h-[396px] relative flex flex-col items-center pb-5 border border-gray-300 outline outline-1 outline-gray-300 outline-offset-[-1px]"
//           >
//             <div className="relative w-full h-1/2">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="absolute w-full h-full object-cover"
//               />
//               <div className="absolute top-3 right-6 bg-black bg-opacity-30 rounded-full px-3 py-2 flex items-center gap-1">
//                 <div className="w-3.5 h-3.5 border-[1.5px] border-white rounded-full"></div>
//                 <span className="text-white text-sm font-normal">
//                   Add To Wishlist
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col justify-between flex-1 w-[300px] z-10">
//               <div className="bg-white shadow-md rounded px-6 py-5 flex flex-col gap-4">
//                 <div className="flex flex-col gap-4">
//                   <div className="flex gap-2">
//                     <div className="px-2 py-1 bg-black text-white text-xs font-semibold">
//                       {card.category}
//                     </div>
//                     {card.subCategory && (
//                       <div className="px-2 py-1 bg-gray-500 text-white text-xs font-semibold">
//                         {card.subCategory}
//                       </div>
//                     )}
//                   </div>
//                   <h3 className="text-black text-lg font-medium">
//                     {card.title}
//                   </h3>
//                   {card.originalPrice && (
//                     <div className="flex flex-col gap-1">
//                       <div className="flex items-center gap-1">
//                         <span className="text-gray-500 line-through text-sm">
//                           {card.originalPrice}
//                         </span>
//                         {card.discount && (
//                           <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">
//                             {card.discount}
//                           </span>
//                         )}
//                       </div>
//                       <div className="flex items-end gap-1">
//                         <span className="text-black text-base font-normal">
//                           {card.price}
//                         </span>
//                         <span className="text-gray-500 text-sm">/Person</span>
//                       </div>
//                       {card.total && (
//                         <div className="text-gray-500 text-sm text-center">
//                           {card.total}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                   {card.offers && (
//                     <div className="flex flex-col gap-1">
//                       {card.offers.map((offer, index) => (
//                         <div key={index} className="flex items-center gap-2">
//                           <div className="w-6 h-6 relative overflow-hidden">
//                             <div className="absolute w-4 h-3.5 left-1 top-1 border-[1px] border-red-600"></div>
//                           </div>
//                           <span className="text-black text-sm">{offer}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="flex flex-col items-end gap-1 mt-2">
//                 <span className="text-gray-500 italic text-xs">
//                   {card.validity}
//                 </span>
//                 <span className="text-black text-xs uppercase">
//                   {card.vendor}
//                 </span>
//               </div>
//             </div>
//             <div className="absolute top-[198px] right-[-5px] w-11 h-11 bg-red-600 rounded-full flex items-center justify-center">
//               <span className="text-white text-xl font-bold">{card.id}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TogetherDeals;

// import React from "react";

// const TravelDealsSection = () => {
//   const deals = [
//     {
//       id: 1,
//       image: "https://placehold.co/447x240",
//       title: "Full Day Sightseeing of New Delhi",
//       tags: ["Things To Do", "Same Day Tour"],
//       oldPrice: "₹ 7,000",
//       discount: "30% off",
//       newPrice: "₹ 1,500",
//       total: "₹3,000",
//       travelDate: "Travel from 1st - 31st March, 2025",
//       vendor: "Akbar Travels, New Delhi",
//     },
//     {
//       id: 2,
//       image: "https://placehold.co/447x240",
//       title: "Sunset Boat Ride at Varanasi Ghat",
//       tags: ["Cultural", "Evening Tour"],
//       oldPrice: "₹ 4,000",
//       discount: "25% off",
//       newPrice: "₹ 1,200",
//       total: "₹2,400",
//       travelDate: "Travel from 1st - 15th April, 2025",
//       vendor: "Riverfront Tours, Varanasi",
//     },
//     {
//       id: 3,
//       image: "https://placehold.co/447x240",
//       title: "Jaipur City Palace & Amber Fort Tour",
//       tags: ["Heritage", "Full Day"],
//       oldPrice: "₹ 6,500",
//       discount: "20% off",
//       newPrice: "₹ 1,800",
//       total: "₹3,600",
//       travelDate: "Travel from 10th - 25th March, 2025",
//       vendor: "Pink City Travels, Jaipur",
//     },
//     {
//       id: 4,
//       image: "https://placehold.co/447x240",
//       title: "Trek to Triund, Dharamshala",
//       tags: ["Adventure", "Weekend Getaway"],
//       oldPrice: "₹ 8,000",
//       discount: "35% off",
//       newPrice: "₹ 2,000",
//       total: "₹4,000",
//       travelDate: "Travel from 1st - 30th May, 2025",
//       vendor: "HillTop Adventures, Dharamshala",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//         <div className="flex flex-col items-start gap-2 text-center lg:text-left">
//           <h2 className="text-[28px] sm:text-[32px] font-bold text-black">
//             Together 23, Monthly Travel & Entertainment Deals
//           </h2>
//           <p className="text-[#4E4E4E] text-[18px] sm:text-[20px]">
//             Your monthly bundle of big value -{" "}
//             <span className="font-medium">August Edition</span>
//           </p>
//         </div>

//         {/* Right Badge */}
//         <div className="relative w-[116px] h-[100px] shadow-md">
//           <div className="absolute inset-0 bg-white border border-[#DC3545]" />
//           <div className="absolute left-1 top-3 flex flex-col items-end gap-1">
//             <div className="text-[#DC3545] text-[20px] font-bold tracking-wide">
//               TOGETHER
//             </div>
//             <div className="flex items-end gap-2">
//               <div className="text-[#DC3545] text-[48px] font-daysone">23</div>
//               <div className="flex flex-col items-start leading-tight">
//                 <span className="text-[#DC3545] text-[12px]">Travel</span>
//                 <span className="text-[#DC3545] text-[12px]">Deals</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             className="relative w-full max-w-[446px] bg-white border border-[#C9C9C9] rounded-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-[240px] object-cover rounded-t-md"
//               />
//               {/* Wishlist Button */}
//               <button className="absolute top-3 right-3 bg-black/40 text-white text-sm flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-black/60 transition">
//                 <span className="w-3 h-3 border border-white rounded-sm"></span>
//                 Add To Wishlist
//               </button>
//             </div>

//             {/* Floating Info Card */}
//             <div className="absolute top-[190px] left-1/2 -translate-x-1/2 w-[90%] bg-white shadow-md rounded-md p-4 flex flex-col gap-3">
//               <div className="flex flex-wrap items-center gap-2">
//                 {deal.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className={`text-xs font-semibold text-white px-2 py-1 rounded ${
//                       idx === 0 ? "bg-black" : "bg-[#838383]"
//                     }`}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <h3 className="text-[16px] font-medium text-black leading-tight">
//                 {deal.title}
//               </h3>

//               <div className="flex flex-col gap-1">
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-500 text-sm line-through">
//                     {deal.oldPrice}
//                   </span>
//                   <span className="bg-[#0EB100] text-white text-xs font-bold px-2 py-1 rounded">
//                     {deal.discount}
//                   </span>
//                 </div>
//                 <div className="flex items-end gap-1">
//                   <span className="text-[20px] font-bold text-black">
//                     {deal.newPrice}
//                   </span>
//                   <span className="text-[14px] text-gray-500">/Person</span>
//                 </div>
//                 <p className="text-[14px] text-gray-500 text-center">
//                   Total Price {deal.total}
//                 </p>
//               </div>
//             </div>

//             {/* Red Number Bubble */}
//             <div className="absolute top-[200px] right-3 w-[44px] h-[44px] bg-[#DC3545] rounded-full flex items-center justify-center shadow-md">
//               <span className="text-white text-[20px] font-bold">
//                 {deal.id}
//               </span>
//             </div>

//             {/* Vendor Info */}
//             <div className="pt-[280px] pb-3 flex flex-col items-end px-4">
//               <p className="text-gray-500 text-xs italic">{deal.travelDate}</p>
//               <p className="text-black text-xs uppercase font-medium">
//                 {deal.vendor}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TravelDealsSection;

// import React from "react";

// const TravelDealsSection = () => {
//   const deals = [
//     {
//       id: 1,
//       image: "https://placehold.co/447x240",
//       title: "Full Day Sightseeing of New Delhi",
//       tags: ["Things To Do", "Same Day Tour"],
//       oldPrice: "₹ 7,000",
//       discount: "30% off",
//       newPrice: "₹ 1,500",
//       total: "₹3,000",
//       travelDate: "Travel from 1st - 31st March, 2025",
//       vendor: "Akbar Travels, New Delhi",
//     },
//     {
//       id: 2,
//       image: "https://placehold.co/447x240",
//       title: "Sunset Boat Ride at Varanasi Ghat",
//       tags: ["Cultural", "Evening Tour"],
//       oldPrice: "₹ 4,000",
//       discount: "25% off",
//       newPrice: "₹ 1,200",
//       total: "₹2,400",
//       travelDate: "Travel from 1st - 15th April, 2025",
//       vendor: "Riverfront Tours, Varanasi",
//     },
//     {
//       id: 3,
//       image: "https://placehold.co/447x240",
//       title: "Jaipur City Palace & Amber Fort Tour",
//       tags: ["Heritage", "Full Day"],
//       oldPrice: "₹ 6,500",
//       discount: "20% off",
//       newPrice: "₹ 1,800",
//       total: "₹3,600",
//       travelDate: "Travel from 10th - 25th March, 2025",
//       vendor: "Pink City Travels, Jaipur",
//     },
//     {
//       id: 4,
//       image: "https://placehold.co/447x240",
//       title: "Trek to Triund, Dharamshala",
//       tags: ["Adventure", "Weekend Getaway"],
//       oldPrice: "₹ 8,000",
//       discount: "35% off",
//       newPrice: "₹ 2,000",
//       total: "₹4,000",
//       travelDate: "Travel from 1st - 30th May, 2025",
//       vendor: "HillTop Adventures, Dharamshala",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
//       {/* Header */}
//       <div className="flex justify-between items-center gap-8">
//         <div className="flex-1 flex flex-col gap-2">
//           <h2 className="text-black text-4xl font-bold">
//             Together 23, Monthly Travel & Entertainment Deals
//           </h2>
//           <p className="text-gray-600 text-lg font-normal">
//             Your monthly bundle of big value -{" "}
//             <span className="font-medium">August Edition</span>
//           </p>
//         </div>
//         <div className="relative w-28 h-24 shadow-md">
//           <div className="absolute w-full h-full bg-white border border-red-600"></div>
//           <div className="absolute top-3 left-1 flex flex-col items-end gap-1">
//             <div className="text-red-600 text-lg font-bold tracking-wide">
//               TOGETHER
//             </div>
//             <div className="flex items-end gap-1">
//               <div className="text-red-600 text-5xl font-normal">23</div>
//               <div className="flex flex-col text-red-600 text-xs font-normal">
//                 <span>Travel</span>
//                 <span>Deals</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             className="relative w-full max-w-[446px] h-[440px]  shadow-md overflow-hidden bg-white flex flex-col"
//           >
//             {/* Top 50% Image */}
//             <div className="h-1/2 relative">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Floating Inner Card */}
//               <div className="absolute left-1/2 top-[90%] -translate-x-1/2 w-[90%] bg-white shadow-lg rounded-md p-4 flex flex-col gap-2 z-10">
//                 <div className="flex flex-wrap gap-2">
//                   {deal.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className={`text-xs font-semibold text-white px-2 py-1 rounded ${
//                         idx === 0 ? "bg-black" : "bg-gray-500"
//                       }`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-[16px] font-medium text-black leading-tight">
//                   {deal.title}
//                 </h3>
//                 <div className="flex justify-between items-center mt-2">
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500 text-sm line-through">
//                         {deal.oldPrice}
//                       </span>
//                       <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
//                         {deal.discount}
//                       </span>
//                     </div>
//                     <div className="flex items-end gap-1">
//                       <span className="text-[20px] font-bold text-black">
//                         {deal.newPrice}
//                       </span>
//                       <span className="text-[14px] text-gray-500">/Person</span>
//                     </div>
//                   </div>
//                   <p className="text-gray-500 text-sm text-right">
//                     Total: {deal.total}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom 50% Content */}
//             <div className="h-1/2 bg-gray-100 p-4 flex flex-col justify-end items-end">
//               <p className="text-gray-500 text-sm italic">{deal.travelDate}</p>
//               <p className="text-black text-sm font-medium">{deal.vendor}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TravelDealsSection;

// import React from "react";

// const TravelDealsSection = () => {
//   const deals = [
//     {
//       id: 1,
//       image: "https://placehold.co/447x240",
//       title: "Full Day Sightseeing of New Delhi",
//       tags: ["Things To Do", "Same Day Tour"],
//       oldPrice: "₹ 7,000",
//       discount: "30% off",
//       newPrice: "₹ 1,500",
//       total: "₹3,000",
//       travelDate: "Travel from 1st - 31st March, 2025",
//       vendor: "Akbar Travels, New Delhi",
//     },
//     {
//       id: 2,
//       image: "https://placehold.co/447x240",
//       title: "Sunset Boat Ride at Varanasi Ghat",
//       tags: ["Cultural", "Evening Tour"],
//       oldPrice: "₹ 4,000",
//       discount: "25% off",
//       newPrice: "₹ 1,200",
//       total: "₹2,400",
//       travelDate: "Travel from 1st - 15th April, 2025",
//       vendor: "Riverfront Tours, Varanasi",
//     },
//     {
//       id: 3,
//       image: "https://placehold.co/447x240",
//       title: "Jaipur City Palace & Amber Fort Tour",
//       tags: ["Heritage", "Full Day"],
//       oldPrice: "₹ 6,500",
//       discount: "20% off",
//       newPrice: "₹ 1,800",
//       total: "₹3,600",
//       travelDate: "Travel from 10th - 25th March, 2025",
//       vendor: "Pink City Travels, Jaipur",
//     },
//     {
//       id: 4,
//       image: "https://placehold.co/447x240",
//       title: "Trek to Triund, Dharamshala",
//       tags: ["Adventure", "Weekend Getaway"],
//       oldPrice: "₹ 8,000",
//       discount: "35% off",
//       newPrice: "₹ 2,000",
//       total: "₹4,000",
//       travelDate: "Travel from 1st - 30th May, 2025",
//       vendor: "HillTop Adventures, Dharamshala",
//     },
//     {
//       id: 5,
//       image: "https://placehold.co/447x240",
//       title: "Backwaters Cruise in Alleppey, Kerala",
//       tags: ["Relaxation", "Houseboat Stay"],
//       oldPrice: "₹ 12,000",
//       discount: "40% off",
//       newPrice: "₹ 3,000",
//       total: "₹6,000",
//       travelDate: "Travel from 10th - 20th June, 2025",
//       vendor: "Blue Lagoon Tours, Alleppey",
//     },
//     {
//       id: 6,
//       image: "https://placehold.co/447x240",
//       title: "Golden Temple & Wagah Border Tour, Amritsar",
//       tags: ["Spiritual", "Culture"],
//       oldPrice: "₹ 5,000",
//       discount: "25% off",
//       newPrice: "₹ 1,500",
//       total: "₹3,000",
//       travelDate: "Travel from 1st - 15th August, 2025",
//       vendor: "Punjab Heritage Travels, Amritsar",
//     },
//     {
//       id: 7,
//       image: "https://placehold.co/447x240",
//       title: "Goa Beach Getaway - 3 Nights Stay",
//       tags: ["Beach", "Leisure"],
//       oldPrice: "₹ 15,000",
//       discount: "45% off",
//       newPrice: "₹ 4,000",
//       total: "₹8,000",
//       travelDate: "Travel from 5th - 20th December, 2025",
//       vendor: "Sunset Holidays, Goa",
//     },
//     {
//       id: 8,
//       image: "https://placehold.co/447x240",
//       title: "Manali Snow Adventure Trip",
//       tags: ["Adventure", "Winter Tour"],
//       oldPrice: "₹ 10,000",
//       discount: "30% off",
//       newPrice: "₹ 2,800",
//       total: "₹5,600",
//       travelDate: "Travel from 10th - 25th January, 2025",
//       vendor: "Himalayan Routes, Manali",
//     },
//     {
//       id: 9,
//       image: "https://placehold.co/447x240",
//       title: "Meghalaya Waterfalls Exploration",
//       tags: ["Nature", "Road Trip"],
//       oldPrice: "₹ 11,000",
//       discount: "35% off",
//       newPrice: "₹ 3,200",
//       total: "₹6,400",
//       travelDate: "Travel from 1st - 20th July, 2025",
//       vendor: "NorthEast Expeditions, Shillong",
//     },
//     {
//       id: 10,
//       image: "https://placehold.co/447x240",
//       title: "Rann of Kutch White Desert Festival",
//       tags: ["Cultural", "Festival"],
//       oldPrice: "₹ 9,000",
//       discount: "20% off",
//       newPrice: "₹ 2,200",
//       total: "₹4,400",
//       travelDate: "Travel from 1st - 15th February, 2025",
//       vendor: "Gujarat Desert Trails, Bhuj",
//     },
//     {
//       id: 11,
//       image: "https://placehold.co/447x240",
//       title: "Andaman Islands Scuba Diving Experience",
//       tags: ["Adventure", "Water Sports"],
//       oldPrice: "₹ 18,000",
//       discount: "30% off",
//       newPrice: "₹ 5,000",
//       total: "₹10,000",
//       travelDate: "Travel from 1st - 20th October, 2025",
//       vendor: "Deep Blue Dive Club, Port Blair",
//     },
//     {
//       id: 12,
//       image: "https://placehold.co/447x240",
//       title: "Ladakh Road Expedition via Manali",
//       tags: ["Adventure", "Road Trip"],
//       oldPrice: "₹ 22,000",
//       discount: "40% off",
//       newPrice: "₹ 6,000",
//       total: "₹12,000",
//       travelDate: "Travel from 1st - 31st August, 2025",
//       vendor: "Nomad Riders, Leh",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//         <div className="flex-1 flex flex-col gap-2">
//           <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
//             Together 23, Monthly Travel & Entertainment Deals
//           </h2>
//           <p className="text-gray-600 text-base sm:text-lg font-normal">
//             Your monthly bundle of big value –{" "}
//             <span className="font-medium">August Edition</span>
//           </p>
//         </div>
//         <div className="relative w-24 h-20 sm:w-28 sm:h-24 shadow-md">
//           <div className="absolute w-full h-full bg-white border border-red-600"></div>
//           <div className="absolute top-3 left-1 flex flex-col items-end gap-1">
//             <div className="text-red-600 text-base sm:text-lg font-bold tracking-wide">
//               TOGETHER
//             </div>
//             <div className="flex items-end gap-1">
//               <div className="text-red-600 text-3xl sm:text-5xl font-normal">
//                 23
//               </div>
//               <div className="flex flex-col text-red-600 text-[10px] sm:text-xs font-normal">
//                 <span>Travel</span>
//                 <span>Deals</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             className="relative w-full max-w-[446px] min-h-[446px] shadow-md overflow-hidden bg-white flex flex-col"
//           >
//             {/* Top Image Section */}
//             <div className="h-1/2 relative">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Floating Inner Card */}
//               <div className="absolute left-1/2 top-[90%] -translate-x-1/2 w-[90%] bg-white shadow-lg rounded-md p-4 flex flex-col gap-2 z-10">
//                 <div className="flex flex-wrap gap-2">
//                   {deal.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className={`text-xs font-semibold text-white px-2 py-1 rounded ${
//                         idx === 0 ? "bg-black" : "bg-gray-500"
//                       }`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-sm sm:text-base font-medium text-black leading-tight">
//                   {deal.title}
//                 </h3>
//                 <div className="flex justify-between items-center mt-2">
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500 text-sm line-through">
//                         {deal.oldPrice}
//                       </span>
//                       <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
//                         {deal.discount}
//                       </span>
//                     </div>
//                     <div className="flex items-end gap-1">
//                       <span className="text-[18px] sm:text-[20px] font-bold text-black">
//                         {deal.newPrice}
//                       </span>
//                       <span className="text-[12px] sm:text-[14px] text-gray-500">
//                         /Person
//                       </span>
//                     </div>
//                   </div>
//                   <p className="text-gray-500 text-sm text-right">
//                     Total: {deal.total}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Content */}
//             <div className="h-1/2 bg-gray-100 p-4 flex flex-col justify-end items-end mt-auto">
//               <p className="text-gray-500 text-sm italic">{deal.travelDate}</p>
//               <p className="text-black text-sm font-medium">{deal.vendor}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TravelDealsSection;

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import image1 from "../assets/images/TravelDealsSection/image-5.png";
import image2 from "../assets/images/TravelDealsSection/image-3.png";
import image3 from "../assets/images/TravelDealsSection/image-4.png";
import image4 from "../assets/images/TravelDealsSection/image-1.png";
import image5 from "../assets/images/TravelDealsSection/image.png";

const TravelDealsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const deals = [
    {
      id: 1,
      image: image1,
      title: "Full Day Sightseeing of New Delhi",
      tags: ["Things To Do", "Same Day Tour"],
      oldPrice: "₹ 7,000",
      discount: "30% off",
      newPrice: "₹ 1,500",
      total: "₹3,000",
      travelDate: "Travel from 1st - 31st March, 2025",
      vendor: "Akbar Travels, New Delhi",
    },
    {
      id: 2,
      image: image1,
      title: "Sunset Boat Ride at Varanasi Ghat",
      tags: ["Cultural", "Evening Tour"],
      oldPrice: "₹ 4,000",
      discount: "25% off",
      newPrice: "₹ 1,200",
      total: "₹2,400",
      travelDate: "Travel from 1st - 15th April, 2025",
      vendor: "Riverfront Tours, Varanasi",
    },
    {
      id: 3,
      image: image2,
      title: "Jaipur City Palace & Amber Fort Tour",
      tags: ["Heritage", "Full Day"],
      oldPrice: "₹ 6,500",
      discount: "20% off",
      newPrice: "₹ 1,800",
      total: "₹3,600",
      travelDate: "Travel from 10th - 25th March, 2025",
      vendor: "Pink City Travels, Jaipur",
    },
    {
      id: 4,
      image: image3,
      title: "Trek to Triund, Dharamshala",
      tags: ["Adventure", "Weekend Getaway"],
      oldPrice: "₹ 8,000",
      discount: "35% off",
      newPrice: "₹ 2,000",
      total: "₹4,000",
      travelDate: "Travel from 1st - 30th May, 2025",
      vendor: "HillTop Adventures, Dharamshala",
    },
    {
      id: 5,
      image: image3,
      title: "Backwaters Cruise in Alleppey, Kerala",
      tags: ["Relaxation", "Houseboat Stay"],
      oldPrice: "₹ 12,000",
      discount: "40% off",
      newPrice: "₹ 3,000",
      total: "₹6,000",
      travelDate: "Travel from 10th - 20th June, 2025",
      vendor: "Blue Lagoon Tours, Alleppey",
    },
    {
      id: 6,
      image: image1,
      title: "Golden Temple & Wagah Border Tour, Amritsar",
      tags: ["Spiritual", "Culture"],
      oldPrice: "₹ 5,000",
      discount: "25% off",
      newPrice: "₹ 1,500",
      total: "₹3,000",
      travelDate: "Travel from 1st - 15th August, 2025",
      vendor: "Punjab Heritage Travels, Amritsar",
    },
    {
      id: 7,
      image: image1,
      title: "Goa Beach Getaway - 3 Nights Stay",
      tags: ["Beach", "Leisure"],
      oldPrice: "₹ 15,000",
      discount: "45% off",
      newPrice: "₹ 4,000",
      total: "₹8,000",
      travelDate: "Travel from 5th - 20th December, 2025",
      vendor: "Sunset Holidays, Goa",
    },
    {
      id: 8,
      image: image4,
      title: "Manali Snow Adventure Trip",
      tags: ["Adventure", "Winter Tour"],
      oldPrice: "₹ 10,000",
      discount: "30% off",
      newPrice: "₹ 2,800",
      total: "₹5,600",
      travelDate: "Travel from 10th - 25th January, 2025",
      vendor: "Himalayan Routes, Manali",
    },
    {
      id: 9,
      image: image5,
      title: "Meghalaya Waterfalls Exploration",
      tags: ["Nature", "Road Trip"],
      oldPrice: "₹ 11,000",
      discount: "35% off",
      newPrice: "₹ 3,200",
      total: "₹6,400",
      travelDate: "Travel from 1st - 20th July, 2025",
      vendor: "NorthEast Expeditions, Shillong",
    },
    {
      id: 10,
      image: image5,
      title: "Rann of Kutch White Desert Festival",
      tags: ["Cultural", "Festival"],
      oldPrice: "₹ 9,000",
      discount: "20% off",
      newPrice: "₹ 2,200",
      total: "₹4,400",
      travelDate: "Travel from 1st - 15th February, 2025",
      vendor: "Gujarat Desert Trails, Bhuj",
    },
    {
      id: 11,
      image: image1,
      title: "Andaman Islands Scuba Diving Experience",
      tags: ["Adventure", "Water Sports"],
      oldPrice: "₹ 18,000",
      discount: "30% off",
      newPrice: "₹ 5,000",
      total: "₹10,000",
      travelDate: "Travel from 1st - 20th October, 2025",
      vendor: "Deep Blue Dive Club, Port Blair",
    },
    {
      id: 12,
      image: image2,
      title: "Ladakh Road Expedition via Manali",
      tags: ["Adventure", "Road Trip"],
      oldPrice: "₹ 22,000",
      discount: "40% off",
      newPrice: "₹ 6,000",
      total: "₹12,000",
      travelDate: "Travel from 1st - 31st August, 2025",
      vendor: "Nomad Riders, Leh",
    },
  ];

  // Show only first 9 cards (3 rows × 3 cols) when collapsed
  const visibleDeals = showAll ? deals : deals.slice(0, 9);

  return (
    <div className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
            Together 23, Monthly Travel & Entertainment Deals
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-normal">
            Your monthly bundle of big value –{" "}
            <span className="font-medium">August Edition</span>
          </p>
        </div>
        <div className="relative w-24 h-20 sm:w-28 sm:h-24 shadow-md">
          <div className="absolute w-full h-full bg-white border border-red-600"></div>
          <div className="absolute top-3 left-1 flex flex-col items-end gap-1">
            <div className="text-red-600 text-base sm:text-lg font-bold tracking-wide">
              TOGETHER
            </div>
            <div className="flex items-end gap-1">
              <div className="text-red-600 text-3xl sm:text-5xl font-normal">
                23
              </div>
              <div className="flex flex-col text-red-600 text-[10px] sm:text-xs font-normal">
                <span>Travel</span>
                <span>Deals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center transition-all duration-500">
        {visibleDeals.map((deal) => (
          <div
            key={deal.id}
            className="relative w-full max-w-[446px] min-h-[446px] shadow-md overflow-hidden bg-white flex flex-col"
          >
            <div className="h-1/2 relative">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />

              {/* Floating Inner Card */}
              <div className="absolute left-1/2 top-[90%] -translate-x-1/2 w-[90%] bg-white shadow-lg rounded-md p-4 flex flex-col gap-2 z-10">
                <div className="flex flex-wrap gap-2">
                  {deal.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-semibold text-white px-2 py-1 rounded ${
                        idx === 0 ? "bg-black" : "bg-gray-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm sm:text-base font-medium text-black leading-tight">
                  {deal.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm line-through">
                        {deal.oldPrice}
                      </span>
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {deal.discount}
                      </span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-[18px] sm:text-[20px] font-bold text-black">
                        {deal.newPrice}
                      </span>
                      <span className="text-[12px] sm:text-[14px] text-gray-500">
                        /Person
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm text-right">
                    Total: {deal.total}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="h-1/2 bg-gray-100 p-4 flex flex-col justify-end items-end mt-auto">
              <p className="text-gray-500 text-sm italic">{deal.travelDate}</p>
              <p className="text-black text-sm font-medium">{deal.vendor}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {deals.length > 9 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            {showAll ? (
              <>
                View Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View More
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default TravelDealsSection;




// gggggggggggvtfghbngbhnnnnnnnnnnnnnnnnnn