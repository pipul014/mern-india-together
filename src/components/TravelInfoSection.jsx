// import React from "react";
// import PopularDestinations from "./PopularDestinations";
// import MembershipCTA from "./MembershipCTA";
// import Disclaimer from "./Disclaimer";

// const MainContent = () => {
//   return (
//     <div className="flex flex-col ">
//       <PopularDestinations />
//       <MembershipCTA />
//       <Disclaimer />
//     </div>
//   );
// };

// export default MainContent;

import React from "react";
import PopularDestinations from "./PopularDestinations";
import MembershipCTA from "./MembershipCTA";
import Disclaimer from "./Disclaimer";

const MainContent = () => {
  return (
    <main className="flex flex-col w-full">
      {/* Popular Destinations Section */}
      <section className="animate-fadeIn">
        <PopularDestinations />
      </section>

      {/* Membership Call-to-Action Section */}
      <section className="animate-fadeIn delay-100">
        <MembershipCTA />
      </section>

      {/* Disclaimer Section */}
      <section className="animate-fadeIn delay-200">
        <Disclaimer />
      </section>

      {/* Tailwind CSS Fade-in Animations */}
      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 0.8s forwards;
          }
          .animate-fadeIn.delay-100 { animation-delay: 0.1s; }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }

          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </main>
  );
};

export default MainContent;
