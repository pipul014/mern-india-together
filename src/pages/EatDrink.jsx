// import React from "react";
// import HeroBanner from "../components/HeroBanner";
// import IncredibleIndia from "../components/IncredibleIndia";
// import Footer from "../components/Footer";
// import MembershipCTA from "../components/MembershipCTA";

// const EatDrink = () => {
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

// export default EatDrink;

import React from "react";
import HeroBanner from "../components/HeroBanner";
import IncredibleIndia from "../components/IncredibleIndia";
import Footer from "../components/Footer";
import MembershipCTA from "../components/MembershipCTA";
import KidsFriendlyRestaurants from "../components/KidsFriendlyRestaurants";
import KidsFamilyHolidayPackages from "../components/KidsFamilyHolidayPackages";
import GrayBlock from "../components/GrayBlock";

const EatDrink = () => {
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

export default EatDrink;
