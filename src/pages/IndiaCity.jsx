import React from "react";
import { ChevronRight } from "lucide-react";
import IndiaCityTab from "../components/IndiaCity/IndiaCityTab";
import IndiaCountryBanner from "../components/IndiaCountry/IndiaCountryBanner";
import IndiaCityContentTab from "../components/IndiaCity/IndiaCityContentTab";
import IndiaCityImgVideo from "../components/IndiaCity/IndiaCityImgVideo";
import IndiaCityAttractions from "../components/IndiaCity/IndiaCityAttractions";
import IndiaCityState from "../components/IndiaCity/IndiaCityState";
import IndiaCityTogether from "../components/IndiaCity/IndiaCityTogether";
import IndiaCityTipsReviews from "../components/IndiaCity/IndiaCityTipsReviews";
import IndiaCityPlacesSection from "../components/IndiaCity/IndiaCityPlacesSection";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import CityTrendingThingsToDo from "../components/IndiaCity/CityTrendingThingsToDo";
// import CityExploreMadurai from "../components/IndiaCity/CityExploreMadurai";

const IndiaCountry = () => {
  return (
    <>
      <div className="mt-32">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex items-center ">
            <p className="text-[#DC3545] text-base">Home</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-[#DC3545] text-base">India</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-[#DC3545] text-base">Tamil Nadu</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-base">Madurai</p>
          </div>
          <IndiaCityTab />
        </div>
        <HeroBanner />
        {/* <IndiaCountryBanner /> */}
        <IndiaCityContentTab />
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaCityImgVideo />
        </div>

        <IndiaCityAttractions />
        <div className="px-4 sm:px-6 md:px-8">
          {/* <IndiaCityState /> */}
          {/* <CityExploreMadurai /> */}
          <CityTrendingThingsToDo />
          <IndiaCityTogether />
          <IndiaCityTipsReviews />
          <IndiaCityPlacesSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndiaCountry;
