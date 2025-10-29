// import React from "react";

// const Disclaimer = () => {
//   return (
//     <section className="w-full bg-gray-100 px-5 sm:px-8 md:px-12  py-8 sm:py-10 md:py-12 flex flex-col gap-4 sm:gap-5">
//       <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold font-roboto text-center sm:text-left">
//         Disclaimer
//       </h2>
//       <p className="text-black text-sm sm:text-base md:text-lg font-roboto font-normal leading-6 sm:leading-7 md:leading-8 text-justify">
//         Together In India functions solely as an intermediary, facilitating
//         connections between travelers and travel partners (travel agents,
//         ticketing agents, accommodation providers, eat & drink providers) &
//         other entertainment suppliers. Together In India does not pre-scan
//         travel agents. Our role is restricted to providing information about
//         travel experience & other entertainment. Together In India makes no
//         guarantees for availability of prices advertised on the sites and
//         applications. Listed prices may require a stay of a particular length or
//         have blackout dates, qualifications, or other applicable restrictions.
//         Together in India is not responsible for any content on external
//         websites that are not owned or operated by Together In India. Together
//         in India neither bears any responsibility nor incurs any liability
//         toward owning, operating, or controlling the services offered by travel
//         agents & other entertainment suppliers.
//       </p>
//     </section>
//   );
// };

// export default Disclaimer;

import React, { useState } from "react";

const Disclaimer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <section className="w-full bg-gray-100 px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 flex flex-col gap-6 animate-fadeInUp">
      {/* Title */}
      <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold font-roboto text-center sm:text-left transition-all duration-300">
        Disclaimer
      </h2>

      {/* Description */}
      <p
        className={`text-black text-sm sm:text-base md:text-lg font-roboto font-normal leading-6 sm:leading-7 md:leading-8 text-justify tracking-wide transition-all duration-300 ${
          expanded ? "max-h-full" : "max-h-[10rem] overflow-hidden"
        }`}
      >
        Together In India functions solely as an intermediary, facilitating
        connections between travelers and travel partners (travel agents,
        ticketing agents, accommodation providers, eat & drink providers) and
        other entertainment suppliers. Together In India does not pre-scan
        travel agents. Our role is restricted to providing information about
        travel experiences and other entertainment. Together In India makes no
        guarantees for availability of prices advertised on the sites and
        applications. Listed prices may require a stay of a particular length or
        have blackout dates, qualifications, or other applicable restrictions.
        Together In India is not responsible for any content on external
        websites that are not owned or operated by Together In India. Together
        In India neither bears any responsibility nor incurs any liability
        toward owning, operating, or controlling the services offered by travel
        agents and other entertainment suppliers.
      </p>

      {/* Read More / Collapse Button */}
      <button
        onClick={toggleExpand}
        className="text-red-600 text-sm sm:text-base font-semibold self-center sm:self-start mt-2 hover:opacity-80 transition-opacity"
      >
        {expanded ? "Read Less ↑" : "Read More ↓"}
      </button>

      {/* Subtle fade-in animation */}
      <style>
        {`
          .animate-fadeInUp {
            opacity: 0;
            transform: translateY(15px);
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

export default Disclaimer;
