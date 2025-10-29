import React from "react";
import ThingsToDoDomesticTab from "../components/ThingsToDoDomestic/ThingsToDoDomesticTab";
import ThingsToDoDomesticBreadcrumbs from "../components/ThingsToDoDomestic/ThingsToDoDomesticBreadcrumbs";
import HeroBanner from "../components/HeroBanner";
import MaduraiToursAndPackages from "../components/ThingsToDoDomestic/MaduraiToursAndPackages";
import Footer from "../components/Footer";

const ThingsToDoDomestic = () => {
  return (
    <>
      <div>
        <ThingsToDoDomesticTab />
        <ThingsToDoDomesticBreadcrumbs />
        <HeroBanner />
        <MaduraiToursAndPackages />
        <Footer />
      </div>
    </>
  );
};

export default ThingsToDoDomestic;
