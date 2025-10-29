// import React from "react";
// import { Heart } from "lucide-react";
// import IndiaCard1 from "../../assets/images/IndiaCountry/IndiaCard1.png";
// import IndiaCard2 from "../../assets/images/IndiaCountry/IndiaCard2.png";
// import IndiaCard3 from "../../assets/images/IndiaCountry/IndiaCard3.png";
// import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";

// const places = [
//   {
//     id: 1,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 2,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 3,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 4,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 5,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 6,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 7,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 8,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 9,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 10,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 11,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 12,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 13,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 14,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 15,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 16,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
// ];

// const IndiaCountryAttractions = () => {
//   return (
//     <>
//       <div className="bg-[#F1F1F1] px-4 sm:px-6 md:px-8 py-16">
//         <div className="flex items-end justify-between">
//           <div>
//             <h1 className="text-3xl font-bold">Top Attractions of India</h1>
//             <p className="text-gray-700 mt-1">
//               Explore in-depth, the top attractions of India.
//             </p>
//           </div>
//           <p className="underline uppercase">See All</p>
//         </div>

//         {/* card section */}
//         <div className="py-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {places.map((place) => (
//               <div
//                 key={place.id}
//                 className="bg-white shadow-md overflow-hidden hover:shadow-lg transition"
//               >
//                 {/* Image Section */}
//                 <div className="relative">
//                   <img
//                     src={place.image}
//                     alt={place.title}
//                     className="w-full h-48 object-cover"
//                   />

//                   {/* Top Left Tag */}
//                   {place.tag && (
//                     <span className="absolute top-0 left-4 uppercase bg-[#DC3545] text-white text-xs font-semibold px-2 py-1 whitespace-pre-line leading-tight">
//                       {/* {place.tag} */}
//                       {"Popular\nAmong\nTourists"}
//                     </span>
//                   )}

//                   {/* Wishlist Button */}
//                   <button className="absolute top-2 right-2 bg-[#00000057] bg-opacity-50 text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1 hover:bg-opacity-70 transition">
//                     <Heart size={14} /> Add To Wishlist
//                   </button>

//                   {/* Bottom Label */}
//                   <span className="absolute bottom-[-5px] right-2 bg-white text-black text-xs font-semibold px-3 py-2 shadow">
//                     3 Tours Inside
//                   </span>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-4">
//                   <span className="inline-block bg-black text-white text-xs px-2 py-1 mb-2">
//                     Historic
//                   </span>
//                   <h3 className=" text-lg">
//                     1.{" "}
//                     <span className="text-black font-bold">{place.title}</span>{" "}
//                     <span className="text-gray-600 font-semibold">
//                       {place.title2}
//                     </span>
//                   </h3>
//                   <p className="text-sm text-gray-600 flex items-center mt-1">
//                     {place.rating}{" "}
//                     <img
//                       src={thumbUpIcon}
//                       alt="Thumb Up"
//                       className="w-4 h-4 inline-block mx-2 object-contain"
//                     />
//                     <span className="text-gray-500 ml-1">
//                       ({place.reviews} Reviews)
//                     </span>
//                   </p>
//                   <p className="text-gray-600 text-sm mt-2">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do.
//                   </p>

//                   <button className="text-black font-semibold text-sm mt-3 flex items-center hover:underline">
//                     Read More →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center items-center">
//             <button className="bg-[#DC3545] px-14 text-white mt-12 py-3 cursor-pointer">
//               VIEW ALL
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IndiaCountryAttractions;

import React from "react";
import { Heart } from "lucide-react";
import IndiaCard1 from "../../assets/images/IndiaCountry/IndiaCard1.png";
import IndiaCard2 from "../../assets/images/IndiaCountry/IndiaCard2.png";
import IndiaCard3 from "../../assets/images/IndiaCountry/IndiaCard3.png";
import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";
import { Link } from "react-router-dom"; // <-- make sure to import Link
const places = [
  {
    id: 1,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 2,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 3,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 4,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 5,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 6,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 7,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 8,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 9,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 10,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 11,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 12,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 13,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
];

const IndiaCountryAttractions = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] px-4 sm:px-6 md:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Top Attractions of India</h1>
            <p className="text-gray-700 mt-1">
              Explore in-depth, the top attractions of India.
            </p>
          </div>
          <p className="underline uppercase">See All</p>
        </div>

        {/* card section */}
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map((place) => (
              <Link
                key={place.id}
                to="/attraction" // or dynamically `/attraction/${place.id}`
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition block"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Top Left Tag */}
                  {place.tag && (
                    <span className="absolute top-0 left-4 uppercase bg-[#DC3545] text-white text-xs font-semibold px-2 py-1 whitespace-pre-line leading-tight">
                      {"Popular\nAmong\nTourists"}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking wishlist
                    className="absolute top-2 right-2 bg-[#00000057] bg-opacity-50 text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1 hover:bg-opacity-70 transition"
                  >
                    <Heart size={14} /> Add To Wishlist
                  </button>

                  {/* Bottom Label */}
                  <span className="absolute bottom-[-5px] right-2 bg-white text-black text-xs font-semibold px-3 py-2 shadow">
                    3 Tours Inside
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <span className="inline-block bg-black text-white text-xs px-2 py-1 mb-2">
                    Historic
                  </span>
                  <h3 className=" text-lg">
                    1.{" "}
                    <span className="text-black font-bold">{place.title}</span>{" "}
                    <span className="text-gray-600 font-semibold">
                      {place.title2}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    {place.rating}{" "}
                    <img
                      src={thumbUpIcon}
                      alt="Thumb Up"
                      className="w-4 h-4 inline-block mx-2 object-contain"
                    />
                    <span className="text-gray-500 ml-1">
                      ({place.reviews} Reviews)
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </p>

                  <button
                    onClick={(e) => e.stopPropagation()} // Prevent navigation on "Read More"
                    className="text-black font-semibold text-sm mt-3 flex items-center hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-[#DC3545] px-14 text-white mt-12 py-3 cursor-pointer">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaCountryAttractions;

// import React from "react";
// import { Heart } from "lucide-react";
// import { Link } from "react-router-dom";
// import IndiaCard1 from "../../assets/images/IndiaCountry/IndiaCard1.png";
// import IndiaCard2 from "../../assets/images/IndiaCountry/IndiaCard2.png";
// import IndiaCard3 from "../../assets/images/IndiaCountry/IndiaCard3.png";
// import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";

// const places = [
//   {
//     id: 1,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 2,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 3,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 4,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 5,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 6,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 7,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 8,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 9,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 10,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 11,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 12,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 13,
//     image: IndiaCard1,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//     tag: "Popular Among Tourists",
//   },
//   {
//     id: 14,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 15,
//     image: IndiaCard3,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
//   {
//     id: 16,
//     image: IndiaCard2,
//     title: "Qutub Minar, ",
//     title2: "Chennai",
//     rating: 4.5,
//     reviews: 30,
//   },
// ];

// const IndiaCountryAttractions = () => {
//   return (
//     <section className="w-full bg-[#F1F1F1] px-4 sm:px-6 lg:px-12 py-12 flex flex-col gap-8">
//       {/* Header */}
//       <div className="flex items-end justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">Top Attractions of India</h1>
//           <p className="text-gray-700 mt-1">
//             Explore in-depth, the top attractions of India.
//           </p>
//         </div>
//         <p className="underline uppercase cursor-pointer">See All</p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {places.map((place, index) => (
//           <Link
//             key={place.id}
//             to="/attraction"
//             className="relative w-full shadow-md overflow-hidden group bg-white hover:shadow-xl transition-all duration-300"
//           >
//             {/* Image Section */}
//             <div className="relative w-full h-[220px] overflow-hidden">
//               <img
//                 src={place.image}
//                 alt={place.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               {/* Wishlist Button */}
//               <button className="absolute top-2 right-2 bg-black/50 text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1 hover:bg-black/70 transition">
//                 <Heart size={14} /> Add To Wishlist
//               </button>

//               {/* Tag */}
//               {place.tagText && (
//                 <div className="absolute top-2 left-2 bg-[#DC3545] text-white text-xs font-semibold px-2 py-1 rounded">
//                   {place.tagText}
//                 </div>
//               )}
//             </div>

//             {/* Card Content */}
//             <div className="flex flex-col justify-between h-[230px] border-t border-gray-100 p-4">
//               <div className="flex flex-col gap-2">
//                 <h3 className="text-black font-medium text-[17px] leading-tight line-clamp-2 hover:underline">
//                   {index + 1}. {place.title}
//                   <span className="text-gray-600 font-semibold">
//                     {place.title2}
//                   </span>
//                 </h3>

//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-700 text-sm">{place.rating}</span>
//                   <img
//                     src={thumbUpIcon}
//                     alt="Thumb Up"
//                     className="w-4 h-4 object-contain"
//                   />
//                   <span className="text-gray-500 text-sm">
//                     ({place.reviews} Reviews)
//                   </span>
//                 </div>

//                 <p className="text-gray-600 text-sm mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do.
//                 </p>
//               </div>

//               <button className="text-black font-semibold text-sm mt-3 flex items-center hover:underline">
//                 Read More →
//               </button>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default IndiaCountryAttractions;
