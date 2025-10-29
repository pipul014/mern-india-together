// import React from "react";
// import HeroBanner from "../components/HeroBanner";
// import IncredibleIndia from "../components/IncredibleIndia";
// import Footer from "../components/Footer";
// import MembershipCTA from "../components/MembershipCTA";

// const ThingsToDo = () => {
//   return (
//     <>
//       {/* <Hero /> */}
//       <HeroBanner />
//       <IncredibleIndia />
//       <MembershipCTA />
//       <Footer />
//     </>
//   );
// };

// export default ThingsToDo;

import React from "react";
import HeroBanner from "../components/HeroBanner";
import IncredibleIndia from "../components/IncredibleIndia";
import Footer from "../components/Footer";
import MembershipCTA from "../components/MembershipCTA";
import KidsFriendlyRestaurants from "../components/KidsFriendlyRestaurants";
import KidsFamilyHolidayPackages from "../components/KidsFamilyHolidayPackages";
import GrayBlock from "../components/GrayBlock";

const ThingsToDo = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroBanner />

      <KidsFamilyHolidayPackages />
      <IncredibleIndia />
      <GrayBlock />
      <KidsFriendlyRestaurants />
      <MembershipCTA />
      <Footer />
    </>
  );
};

export default ThingsToDo;
