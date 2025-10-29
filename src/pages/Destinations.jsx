import React from "react";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import MembershipCTA from "../components/MembershipCTA";
import WorldAttractions from "../components/WorldAttractions";
import DiscoverSection from "../components/DiscoverSection";
import ExploreCities from "../components/ExploreCities";
import Journeys from "../components/Journeys";
import GrayBlock from "../components/GrayBlock";

const Destinations = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroBanner />
      <ExploreCities />
      <Journeys />
      <DiscoverSection />
      <GrayBlock />
      <WorldAttractions />
      <MembershipCTA />
      <Footer />
    </>
  );
};

export default Destinations;
