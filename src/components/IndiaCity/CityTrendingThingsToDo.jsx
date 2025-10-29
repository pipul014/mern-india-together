// import React from "react";
// import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";

// const CityTrendingThingsToDo = () => {
//   const cards = [
//     {
//       tag: "Popular Among Tourists",
//       badge: "Things To Do",
//       subBadge: "Customised Tour",
//       title: "3 Days Golden Triangle Tour with Elephant Ride",
//       rating: 4.5,
//       price: { old: 20000, new: 15000, per: "Person", total: 30000 },
//       type: "Cultural",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//     {
//       badge: "Things To Do",
//       subBadge: "Same Day Tour",
//       title: "Full Day sightseeing tour of Jaipur",
//       rating: 4.5,
//       price: { old: 7000, new: 1500, per: "Person", total: 3000 },
//       type: "Adventure",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//     {
//       badge: "Things To Do",
//       subBadge: "Customised Tour",
//       title: "3 Days Golden Triangle Tour with Elephant Ride",
//       rating: 4.5,
//       price: { new: 53000, per: "Person", total: 60000 },
//       type: "Adventure",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#F1F1F1] py-16 px-8 flex flex-col items-center gap-8">
//       {/* Header */}
//       <div className="w-full flex flex-col gap-2 text-center">
//         <h2 className="text-3xl font-bold text-black">
//           Top Trending Things to Do in Madurai
//         </h2>
//         <p className="text-lg text-[#4E4E4E] max-w-2xl mx-auto">
//           Save big with exclusive deals on tour packages, available directly
//           from our trusted travel partners.
//         </p>
//       </div>

//       {/* Navigation */}
//       <div className="flex justify-between items-center w-full max-w-6xl">
//         <div className="flex gap-3">
//           <button className="w-10 h-10 flex justify-center items-center rounded-full border border-[#DC3545] text-[#DC3545] hover:bg-[#DC3545] hover:text-white transition">
//             <ChevronLeft size={18} />
//           </button>
//           <button className="w-10 h-10 flex justify-center items-center rounded-full border border-[#DC3545] text-[#DC3545] hover:bg-[#DC3545] hover:text-white transition">
//             <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="w-[273px] bg-white shadow-md flex flex-col overflow-hidden  border border-gray-200"
//           >
//             <div className="relative w-full h-[280px]">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Wishlist */}
//               <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full text-white text-sm">
//                 <Heart size={14} strokeWidth={1.5} /> Add To Wishlist
//               </div>

//               {/* Tag */}
//               {card.tag && (
//                 <div className="absolute top-0 left-5 bg-[#DC3545] text-white uppercase text-[12px] font-semibold p-2 rounded-b-md leading-4">
//                   {card.tag.split(" ").map((t, i) => (
//                     <div key={i}>{t}</div>
//                   ))}
//                 </div>
//               )}

//               {/* Percentage Circle */}
//               <div
//                 className={`absolute bottom-3 right-3 ${card.color} text-white text-center text-xs font-bold w-[55px] h-[55px] rounded-full flex flex-col justify-center items-center border border-white`}
//               >
//                 <span className="text-base">100%</span>
//                 <span className="text-[10px]">{card.type}</span>
//               </div>
//             </div>

//             <div className="p-4 flex flex-col gap-4">
//               {/* Badges */}
//               <div className="flex gap-2">
//                 <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
//                   {card.badge}
//                 </span>
//                 <span className="bg-[#838383] text-white text-xs font-semibold px-2 py-1 rounded">
//                   {card.subBadge}
//                 </span>
//               </div>

//               {/* Title & Rating */}
//               <div className="flex flex-col gap-1">
//                 <h3 className="text-lg font-medium text-black leading-snug">
//                   {card.title}
//                 </h3>
//                 <div className="flex items-center gap-1 text-gray-600 text-sm">
//                   <span>{card.rating}</span>
//                   <Star size={16} className="text-[#FFD633]" fill="#FFD633" />
//                 </div>
//                 <p className="text-[#0EB100] text-sm font-medium">
//                   Book with ₹500 deposit
//                 </p>
//               </div>

//               {/* Price Section */}
//               <div className="flex flex-col gap-1">
//                 {card.price.old && (
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-500 line-through text-sm">
//                       ₹ {card.price.old.toLocaleString()}
//                     </span>
//                     <span className="bg-[#0EB100] text-white text-xs font-bold px-2 py-0.5 rounded">
//                       30% off
//                     </span>
//                   </div>
//                 )}
//                 <div className="flex items-end gap-1">
//                   <span className="text-lg font-bold text-black">
//                     ₹ {card.price.new.toLocaleString()}
//                   </span>
//                   <span className="text-gray-500 text-sm">
//                     /{card.price.per}
//                   </span>
//                 </div>
//                 <p className="text-gray-500 text-sm">
//                   Total Price ₹{card.price.total.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CityTrendingThingsToDo;

// import React from "react";
// import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";

// const TrendingThingsToDo = () => {
//   const cards = [
//     {
//       tag: "Popular Among Tourists",
//       badge: "Things To Do",
//       subBadge: "Customised Tour",
//       title: "3 Days Golden Triangle Tour with Elephant Ride",
//       rating: 4.5,
//       price: { old: 20000, new: 15000, per: "Person", total: 30000 },
//       type: "Cultural",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//     {
//       badge: "Things To Do",
//       subBadge: "Same Day Tour",
//       title: "Full Day sightseeing tour of Jaipur",
//       rating: 4.5,
//       price: { old: 7000, new: 1500, per: "Person", total: 3000 },
//       type: "Adventure",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//     {
//       badge: "Things To Do",
//       subBadge: "Customised Tour",
//       title: "3 Days Golden Triangle Tour with Elephant Ride",
//       rating: 4.5,
//       price: { new: 53000, per: "Person", total: 60000 },
//       type: "Adventure",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//     {
//       badge: "Things To Do",
//       subBadge: "Customised Tour",
//       title: "Golden Triangle Express Trip",
//       rating: 4.5,
//       price: { old: 18000, new: 12000, per: "Person", total: 24000 },
//       type: "Cultural",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//     {
//       badge: "Things To Do",
//       subBadge: "Adventure Ride",
//       title: "Elephant Safari Experience",
//       rating: 4.6,
//       price: { new: 7000, per: "Person", total: 14000 },
//       type: "Adventure",
//       color: "bg-[#DC3545]",
//       img: "https://placehold.co/273x280",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-[#F1F1F1] py-16 px-6">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-black">
//           Top Trending Things to Do in Madurai
//         </h2>
//         <p className="text-lg text-[#4E4E4E] max-w-2xl mx-auto">
//           Save big with exclusive deals on tour packages, available directly
//           from our trusted travel partners.
//         </p>
//       </div>

//       {/* Navigation */}
//       <div className="absolute top-10 right-6 flex gap-3 z-10">
//         <button className="w-10 h-10 flex justify-center items-center rounded-full border border-[#DC3545] text-[#DC3545] hover:bg-[#DC3545] hover:text-white transition">
//           <ChevronLeft size={18} />
//         </button>
//         <button className="w-10 h-10 flex justify-center items-center rounded-full border border-[#DC3545] text-[#DC3545] hover:bg-[#DC3545] hover:text-white transition">
//           <ChevronRight size={18} />
//         </button>
//       </div>

//       {/* Grid Section (with partial scroll) */}
//       <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
//         <div
//           className="
//             grid grid-cols-[repeat(5,minmax(0,1fr))]
//             lg:grid-cols-[repeat(5,minmax(0,1fr))]
//             gap-6
//             min-w-[1300px]
//             pr-[10%]  /* This creates the '50% visible last card' effect */
//           "
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="w-[273px] bg-white shadow-md flex flex-col overflow-hidden rounded-md border border-gray-200"
//             >
//               <div className="relative w-full h-[280px]">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Wishlist */}
//                 <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full text-white text-sm">
//                   <Heart size={14} strokeWidth={1.5} /> Add To Wishlist
//                 </div>

//                 {/* Tag */}
//                 {card.tag && (
//                   <div className="absolute top-0 left-5 bg-[#DC3545] text-white uppercase text-[12px] font-semibold p-2 rounded-b-md leading-4">
//                     {card.tag.split(" ").map((t, i) => (
//                       <div key={i}>{t}</div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Percentage Circle */}
//                 <div
//                   className={`absolute bottom-3 right-3 ${card.color} text-white text-center text-xs font-bold w-[55px] h-[55px] rounded-full flex flex-col justify-center items-center border border-white`}
//                 >
//                   <span className="text-base">100%</span>
//                   <span className="text-[10px]">{card.type}</span>
//                 </div>
//               </div>

//               <div className="p-4 flex flex-col gap-4">
//                 {/* Badges */}
//                 <div className="flex gap-2">
//                   <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
//                     {card.badge}
//                   </span>
//                   <span className="bg-[#838383] text-white text-xs font-semibold px-2 py-1 rounded">
//                     {card.subBadge}
//                   </span>
//                 </div>

//                 {/* Title & Rating */}
//                 <div className="flex flex-col gap-1">
//                   <h3 className="text-lg font-medium text-black leading-snug">
//                     {card.title}
//                   </h3>
//                   <div className="flex items-center gap-1 text-gray-600 text-sm">
//                     <span>{card.rating}</span>
//                     <Star size={16} className="text-[#FFD633]" fill="#FFD633" />
//                   </div>
//                   <p className="text-[#0EB100] text-sm font-medium">
//                     Book with ₹500 deposit
//                   </p>
//                 </div>

//                 {/* Price Section */}
//                 <div className="flex flex-col gap-1">
//                   {card.price.old && (
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500 line-through text-sm">
//                         ₹ {card.price.old.toLocaleString()}
//                       </span>
//                       <span className="bg-[#0EB100] text-white text-xs font-bold px-2 py-0.5 rounded">
//                         30% off
//                       </span>
//                     </div>
//                   )}
//                   <div className="flex items-end gap-1">
//                     <span className="text-lg font-bold text-black">
//                       ₹ {card.price.new.toLocaleString()}
//                     </span>
//                     <span className="text-gray-500 text-sm">
//                       /{card.price.per}
//                     </span>
//                   </div>
//                   <p className="text-gray-500 text-sm">
//                     Total Price ₹{card.price.total.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingThingsToDo;

import React, { useRef } from "react";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import city1 from "../../assets/images/indiaCity/city-1.jpg";
import city2 from "../../assets/images/indiaCity/city-2.jpg";
import city3 from "../../assets/images/indiaCity/city-3.png";

const TrendingThingsToDo = () => {
  const scrollRef = useRef(null);

  const cards = [
    {
      tag: "Popular Among Tourists",
      badge: "Things To Do",
      subBadge: "Customised Tour",
      title: "3 Days Golden Triangle Tour with Elephant Ride",
      rating: 4.5,
      price: { old: 20000, new: 15000, per: "Person", total: 30000 },
      type: "Cultural",
      color: "bg-[#DC3545]",
      img: city1,
    },
    {
      badge: "Things To Do",
      subBadge: "Same Day Tour",
      title: "Full Day sightseeing tour of Jaipur",
      rating: 4.5,
      price: { old: 7000, new: 1500, per: "Person", total: 3000 },
      type: "Adventure",
      color: "bg-[#DC3545]",
      img: city2,
    },
    {
      badge: "Things To Do",
      subBadge: "Customised Tour",
      title: "3 Days Golden Triangle Tour with Elephant Ride",
      rating: 4.5,
      price: { new: 53000, per: "Person", total: 60000 },
      type: "Adventure",
      color: "bg-[#DC3545]",
      img: city3,
    },
    {
      badge: "Things To Do",
      subBadge: "Customised Tour",
      title: "Golden Triangle Express Trip",
      rating: 4.5,
      price: { old: 18000, new: 12000, per: "Person", total: 24000 },
      type: "Cultural",
      color: "bg-[#DC3545]",
      img: city2,
    },
  ];

  // Smooth scroll behavior for navigation buttons
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-[#F1F1F1] py-16 px-6 overflow-hidden mt-6">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl font-bold text-black">
          Top Trending Things to Do in Madurai
        </h2>
        <p className="text-lg text-start text-[#4E4E4E] max-w-2xl mt-2 ">
          Save big with exclusive deals on tour packages, available directly
          from our trusted travel partners.
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-32 right-6 flex gap-3 z-10">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 flex justify-center items-center rounded-full border border-[#DC3545] text-[#DC3545] hover:bg-[#DC3545] hover:text-white transition"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 flex justify-center items-center rounded-full border border-[#DC3545] text-[#DC3545] hover:bg-[#DC3545] hover:text-white transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scrollable grid */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div
          className="
            grid grid-cols-4 gap-6  
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md flex flex-col overflow-hidden  border border-gray-200"
            >
              {/* Image section */}
              <div className="relative w-full h-[280px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Wishlist */}
                <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full text-white text-sm">
                  <Heart size={14} strokeWidth={1.5} /> Add To Wishlist
                </div>

                {/* Tag */}
                {card.tag && (
                  <div className="absolute top-0 left-5 bg-[#DC3545] text-white uppercase text-[12px] font-semibold p-2 rounded-b-md leading-4">
                    {card.tag.split(" ").map((t, i) => (
                      <div key={i}>{t}</div>
                    ))}
                  </div>
                )}

                {/* Badge circle */}
                <div
                  className={`absolute bottom-3 right-3 ${card.color} text-white text-center text-xs font-bold w-[55px] h-[55px] rounded-full flex flex-col justify-center items-center border border-white`}
                >
                  <span className="text-base">100%</span>
                  <span className="text-[10px]">{card.type}</span>
                </div>
              </div>

              {/* Content section */}
              <div className="p-4 flex flex-col gap-4">
                {/* Badges */}
                <div className="flex gap-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                    {card.badge}
                  </span>
                  <span className="bg-[#838383] text-white text-xs font-semibold px-2 py-1 rounded">
                    {card.subBadge}
                  </span>
                </div>

                {/* Title and rating */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium text-black leading-snug">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <span>{card.rating}</span>
                    <Star size={16} className="text-[#FFD633]" fill="#FFD633" />
                  </div>
                  <p className="text-[#0EB100] text-sm font-medium">
                    Book with ₹500 deposit
                  </p>
                </div>

                {/* Price Section */}
                <div className="flex flex-col gap-1">
                  {card.price.old && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 line-through text-sm">
                        ₹ {card.price.old.toLocaleString()}
                      </span>
                      <span className="bg-[#0EB100] text-white text-xs font-bold px-2 py-0.5 rounded">
                        30% off
                      </span>
                    </div>
                  )}
                  <div className="flex items-end gap-1">
                    <span className="text-lg font-bold text-black">
                      ₹ {card.price.new.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm">
                      /{card.price.per}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Total Price ₹{card.price.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingThingsToDo;
