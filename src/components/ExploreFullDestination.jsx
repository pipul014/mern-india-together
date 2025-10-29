// import React from "react";

// export default function ExploreFullDestination() {
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   return (
//     <div className="flex flex-col gap-8 w-full">
//       {/* Title & Description */}
//       <div className="flex flex-col gap-2 pl-8">
//         <h2 className="text-3xl font-bold text-black">
//           Explore Full Destination at Half-Price Tag
//         </h2>
//         <p className="text-gray-700 text-lg w-[1200px]">
//           Travel smart - enjoy your favourite destinations at half the price,
//           with luxury stays, fewer crowds, and all the adventure you crave.
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="relative flex flex-col gap-2 bg-white overflow-hidden">
//         <div
//           className="relative w-full h-[650px] bg-cover bg-center bg-black/40"
//           style={{ backgroundImage: "url(https://placehold.co/1440x650)" }}
//         >
//           {/* Left arrow */}
//           <div className="absolute -left-3 top-[305px] w-10 h-10 rounded-full bg-black/70 opacity-50 flex items-center justify-center">
//             <div className="w-2 h-3 bg-white" />
//           </div>

//           {/* Right arrow */}
//           <div className="absolute -right-3 top-[345px] w-10 h-10 rounded-full bg-black/70 flex items-center justify-center rotate-180">
//             <div className="w-2 h-3 bg-white" />
//           </div>

//           {/* Months */}
//           <div className="absolute left-16 top-16 flex flex-col gap-3">
//             {months.map((month, idx) => (
//               <div
//                 key={month}
//                 className={`text-white text-xl font-bold ${
//                   idx === 0 ? "pb-1 border-b-[2.5px] border-white" : "pb-1"
//                 }`}
//               >
//                 {month}
//               </div>
//             ))}
//           </div>

//           {/* Expanded Info */}
//           <div className="absolute left-[480px] top-16 w-[380px] p-5 bg-red-600/85 flex flex-col gap-8">
//             <div className="flex flex-col gap-4">
//               <div className="flex items-center gap-4">
//                 <div className="flex flex-col gap-1">
//                   <h3 className="text-white text-2xl font-semibold text-center">
//                     New Delhi
//                   </h3>
//                   <div className="h-1 w-full bg-white" />
//                 </div>
//                 <div className="w-4 h-4 relative">
//                   <div className="w-[11.61px] h-[5.42px] bg-white outline outline-1 outline-white" />
//                 </div>
//               </div>
//               <p className="text-white text-base">
//                 Not many cities have managed to retain their historic features
//                 quite successfully as Delhi, the capital of India.
//                 <br />
//                 The longer you stay, the more you'll experience Delhi's allure,
//                 book early with our Early Bird Deals for iconic hotels and
//                 unforgettable tours at unbeatable prices!
//               </p>
//             </div>
//             <div className="flex justify-center items-center gap-2">
//               <span className="text-white text-sm">Discover the city</span>
//             </div>
//           </div>

//           {/* Bottom indicators */}
//           <div className="absolute left-[648px] top-[614px] flex items-center gap-2">
//             <div className="w-7.5 h-1.5 bg-white rounded-full" />
//             <div className="w-7.5 h-1.5 bg-white/30 rounded-full" />
//             <div className="w-7.5 h-1.5 bg-white/30 rounded-full" />
//             <div className="w-7.5 h-1.5 bg-white/30 rounded-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function ExploreFullDestination() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="flex flex-col gap-8 w-full px-4 md:px-8 lg:px-16">
      {/* Title & Description */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center md:text-left">
          Explore Full Destination at Half-Price Tag
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-[1200px] mx-auto md:mx-0 text-center md:text-left">
          Travel smart - enjoy your favourite destinations at half the price,
          with luxury stays, fewer crowds, and all the adventure you crave.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col gap-2 bg-white overflow-hidden">
        <div
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://placehold.co/1440x650)" }}
        >
          {/* Left arrow */}
          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/70 opacity-50 flex items-center justify-center">
            <div className="w-2 h-3 bg-white" />
          </div>

          {/* Right arrow */}
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/70 flex items-center justify-center rotate-180">
            <div className="w-2 h-3 bg-white" />
          </div>

          {/* Months */}
          <div className="absolute left-4 sm:left-8 top-8 flex flex-col gap-2 md:gap-3">
            {months.map((month, idx) => (
              <div
                key={month}
                className={`text-white text-sm sm:text-lg md:text-xl font-bold ${
                  idx === 0 ? "pb-1 border-b-[2.5px] border-white" : "pb-1"
                }`}
              >
                {month}
              </div>
            ))}
          </div>

          {/* Expanded Info */}
          <div className="absolute left-1/2 md:left-[480px] top-8 w-[85%] sm:w-[400px] md:w-[380px] p-4 md:p-5 bg-red-600/85 flex flex-col gap-6 md:gap-8 transform -translate-x-1/2 md:translate-x-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between md:justify-start gap-3 md:gap-4">
                <div className="flex flex-col gap-1 text-center">
                  <h3 className="text-white text-lg md:text-2xl font-semibold">
                    New Delhi
                  </h3>
                  <div className="h-1 w-full bg-white" />
                </div>
                <div className="w-4 h-4 relative">
                  <div className="w-[11.61px] h-[5.42px] bg-white outline outline-1 outline-white" />
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                Not many cities have managed to retain their historic features
                quite successfully as Delhi, the capital of India.
                <br />
                The longer you stay, the more you'll experience Delhi's allure.
                Book early with our Early Bird Deals for iconic hotels and
                unforgettable tours at unbeatable prices!
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-white text-xs sm:text-sm">
                Discover the city
              </span>
            </div>
          </div>

          {/* Bottom indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-8 h-1.5 bg-white rounded-full" />
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
