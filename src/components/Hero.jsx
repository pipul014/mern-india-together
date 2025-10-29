// import React, { useState } from "react";

// const Hero = () => {
//   const tabs = [
//     "Destinations",
//     "Hotels",
//     "Things to Do",
//     "Eat & Drink",
//     "Shop",
//     "Tribes of India",
//     "Kids Special",
//   ];

//   const [active, setActive] = useState("Destinations");

//   return (
//     <section className='relative w-full h-[420px] bg-[url("/src/assets/Hero-section-home-page.png")] bg-cover bg-center'>
//       {/* Optional dark overlay */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       {/* Tabs bar at bottom */}
//       <div className="relative z-10 flex flex-col justify-end h-full">
//         <div className="w-full flex justify-start mx-[2%]">
//           <div className="flex">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActive(tab)}
//                 className={`px-6 py-2 text-sm md:text-base font-medium
//                   ${
//                     active === tab
//                       ? "bg-gray-800 text-white"
//                       : "bg-white text-black hover:bg-gray-100"
//                   }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from "react";

const Hero = () => {
  const tabs = [
    "Destinations",
    "Hotels",
    "Things to Do",
    "Eat & Drink",
    "Shop",
    "Tribes of India",
    "Kids Special",
  ];

  const [active, setActive] = useState("Destinations");

  return (
    <section
      className='relative w-full h-[480px] 
                 bg-[url("/src/assets/Hero-section-home-page.png")] bg-cover bg-center'
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Tabs bar */}
      <div className="relative z-10 flex flex-col justify-end h-full">
        <div className="w-full flex justify-start px-4 sm:px-6 md:px-12 lg:px-16 pb-4">
          <div className="flex flex-wrap gap-[1px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                type="button"
                className={`px-3 sm:px-4 md:px-6 py-4 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-200
                  ${
                    active === tab
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
