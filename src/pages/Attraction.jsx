import React from "react";
import ThingsToDoDomesticTab from "../components/ThingsToDoDomestic/ThingsToDoDomesticTab";
import AttractionBreadcrumbs from "../components/Attraction/AttractionBreadcrumbs";
import HeroBanner from "../components/HeroBanner";
import BestMaduraiTourpackages from "../components/Attraction/BestMaduraiTourpackages";
import BestMaduraiTourpackagesCard from "../components/Attraction/BestMaduraiTourpackagesCard";
import BookAGuideAttraction from "../components/Attraction/BookAGuideAttraction";
import Footer from "../components/Footer";

const Attraction = () => {
  return (
    <>
      <div>
        <ThingsToDoDomesticTab />
        <AttractionBreadcrumbs />
        <HeroBanner />
        <BestMaduraiTourpackages />
        <BestMaduraiTourpackagesCard />
        <BookAGuideAttraction />
        <Footer />
      </div>
    </>
  );
};

export default Attraction;
