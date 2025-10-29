// import React from "react";

// const PopularDestinations = () => {
//   const destinations = [
//     [
//       "Assam",
//       "Alwar",
//       "Chandni Chowk",
//       "Arunachal Pradesh",
//       "Fatehpur Sikri",
//       "Chandigarh",
//       "Chittorgarh",
//     ],
//     [
//       "Assam",
//       "Alwar",
//       "Chandni Chowk",
//       "Arunachal Pradesh",
//       "Fatehpur Sikri",
//       "Chandigarh",
//       "Chittorgarh",
//     ],
//     [
//       "Assam",
//       "Alwar",
//       "Chandni Chowk",
//       "Arunachal Pradesh",
//       "Fatehpur Sikri",
//       "Chandigarh",
//       "Chittorgarh",
//     ],
//     [
//       "Assam",
//       "Alwar",
//       "Chandni Chowk",
//       "Arunachal Pradesh",
//       "Fatehpur Sikri",
//       "Chandigarh",
//       "Chittorgarh",
//     ],
//     [
//       "Assam",
//       "Alwar",
//       "Chandni Chowk",
//       "Arunachal Pradesh",
//       "Fatehpur Sikri",
//       "Chandigarh",
//       "Chittorgarh",
//     ],
//   ];

//   return (
//     <section className="w-full bg-gray-100 border-b border-gray-400 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col gap-10 sm:gap-12">
//       {/* Title */}
//       <h2 className="text-black text-2xl sm:text-3xl font-bold font-roboto text-center sm:text-left">
//         Popular Destinations
//       </h2>

//       {/* Destination Columns */}
//       <div
//         className="
//           flex
//           flex-wrap
//           justify-center
//           lg:justify-center
//           gap-x-10 sm:gap-x-16 lg:gap-x-24
//           gap-y-6 sm:gap-y-8
//         "
//       >
//         {destinations.map((column, colIndex) => (
//           <div
//             key={colIndex}
//             className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left"
//           >
//             {column.map((place, index) => (
//               <span
//                 key={index}
//                 className={`text-[13px] sm:text-sm md:text-base font-roboto ${
//                   index === 0 && colIndex === 0
//                     ? "text-red-500 font-semibold underline underline-offset-2"
//                     : "text-gray-700 font-medium hover:text-red-500 transition-colors"
//                 }`}
//               >
//                 {place}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularDestinations;

import React from "react";

const PopularDestinations = () => {
  const destinations = [
    [
      "Assam",
      "Alwar",
      "Chandni Chowk",
      "Arunachal Pradesh",
      "Fatehpur Sikri",
      "Chandigarh",
      "Chittorgarh",
    ],
    [
      "Assam",
      "Alwar",
      "Chandni Chowk",
      "Arunachal Pradesh",
      "Fatehpur Sikri",
      "Chandigarh",
      "Chittorgarh",
    ],
    [
      "Assam",
      "Alwar",
      "Chandni Chowk",
      "Arunachal Pradesh",
      "Fatehpur Sikri",
      "Chandigarh",
      "Chittorgarh",
    ],
    [
      "Assam",
      "Alwar",
      "Chandni Chowk",
      "Arunachal Pradesh",
      "Fatehpur Sikri",
      "Chandigarh",
      "Chittorgarh",
    ],
    [
      "Assam",
      "Alwar",
      "Chandni Chowk",
      "Arunachal Pradesh",
      "Fatehpur Sikri",
      "Chandigarh",
      "Chittorgarh",
    ],
  ];

  return (
    <section className="w-full bg-gray-100 border-b border-gray-400 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col gap-10 sm:gap-12 animate-fadeIn">
      {/* Title */}
      <h2 className="text-black text-2xl sm:text-3xl font-bold font-roboto text-center sm:text-left">
        Popular Destinations
      </h2>

      {/* Destination Columns */}
      <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 sm:gap-x-16 lg:gap-x-24 gap-y-6 sm:gap-y-8">
        {destinations.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left"
          >
            {column.map((place, index) => (
              <span
                key={index}
                className={`text-[13px] sm:text-sm md:text-base font-roboto ${
                  index === 0 && colIndex === 0
                    ? "text-red-500 font-semibold underline underline-offset-2"
                    : "text-gray-700 font-medium hover:text-red-500 transition-colors duration-300 ease-in-out cursor-pointer"
                }`}
              >
                {place}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Tailwind Fade-In Animation */}
      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            transform: translateY(10px);
            animation: fadeInUp 0.8s forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default PopularDestinations;
