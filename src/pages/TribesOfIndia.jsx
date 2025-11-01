// import React from "react";
// import HeroBanner from "../components/HeroBanner";
// import IncredibleIndia from "../components/IncredibleIndia";
// import Footer from "../components/Footer";
// import MembershipCTA from "../components/MembershipCTA";
// import TribalTourPackages from "../components/TribalTourPackages";

// const TribesOfIndia = () => {
//   return (
//     <>
//       {/* <Hero /> */}
//       <HeroBanner />
//       <IncredibleIndia />
//       <TribalTourPackages />
//       <MembershipCTA />
//       <Footer />
//     </>
//   );
// };

// export default TribesOfIndia;

import React from "react";
import HeroBanner from "../components/HeroBanner";
import IncredibleIndia from "../components/IncredibleIndia";
import Footer from "../components/Footer";
import MembershipCTA from "../components/MembershipCTA";
import KidsFriendlyRestaurants from "../components/KidsFriendlyRestaurants";
import KidsFamilyHolidayPackages from "../components/KidsFamilyHolidayPackages";
import GrayBlock from "../components/GrayBlock";
import TribalTourPackages from "../components/TribalPackage/TribalTourPackages";
import RegionTribalTourPackages from "../components/TribalPackage/RegionTribalTourPackages";
import { Toaster } from "react-hot-toast";
import AdivasiSection from "../components/TribalPackage/AdivasiSection";
const TribesOfIndia = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroBanner />
      <TribalTourPackages />
      {/* <IncredibleIndia /> */}
      <AdivasiSection />
      <GrayBlock />
      {/* <KidsFriendlyRestaurants /> */}
      <RegionTribalTourPackages />
      <Toaster position="top-right" reverseOrder={false} />
      <MembershipCTA />
      <Footer />
    </>
  );
};

export default TribesOfIndia;
