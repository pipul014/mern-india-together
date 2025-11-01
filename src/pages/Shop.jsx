// import React from "react";
// import HeroBanner from "../components/HeroBanner";
// import IncredibleIndia from "../components/IncredibleIndia";
// import Footer from "../components/Footer";
// import MembershipCTA from "../components/MembershipCTA";

// const Shop = () => {
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

// export default Shop;

import React from "react";
import HeroBanner from "../components/HeroBanner";
import IncredibleIndia from "../components/IncredibleIndia";
import Footer from "../components/Footer";
import MembershipCTA from "../components/MembershipCTA";
import KidsFriendlyRestaurants from "../components/KidsFriendlyRestaurants";
import KidsFamilyHolidayPackages from "../components/KidsFamilyHolidayPackages";
import GrayBlock from "../components/GrayBlock";
import { Toaster } from "react-hot-toast";

const Shop = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroBanner />

      <KidsFamilyHolidayPackages />
      <IncredibleIndia />
      <GrayBlock />
      <KidsFriendlyRestaurants />
      <Toaster position="top-right" reverseOrder={false} />
      <MembershipCTA />
      <Footer />
    </>
  );
};

export default Shop;
