import React from "react";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import DestinationTab from "../components/DestinationTab";
import IncredibleIndia from "../components/IncredibleIndia";
import IndiaAcrossCenturies from "../components/IndiaCenturiesSection";
import Footer from "../components/Footer";
import ExploreDestinations from "../components/ExploreDestinations";
import DealsGrid from "../components/DealsGrid";
import TravelInfoSection from "../components/TravelInfoSection";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroBanner />
      <DestinationTab />
      <IncredibleIndia />
      <ExploreDestinations />
      <IndiaAcrossCenturies />
      <DealsGrid />
      <TravelInfoSection />
      <Footer />
    </>
  );
};

export default Home;
