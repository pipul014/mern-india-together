import React from "react";
import { ChevronRight } from "lucide-react";
import IndiaCountryTab from "../components/IndiaCountry/IndiaCountryTab";
import IndiaCountryBanner from "../components/IndiaCountry/IndiaCountryBanner";
import IndiaCountryContentTab from "../components/IndiaCountry/IndiaCountryContentTab";
import IndiaCountryImgVideo from "../components/IndiaCountry/IndiaCountryImgVideo";
import IndiaCountryAttractions from "../components/IndiaCountry/IndiaCountryAttractions";
import IndiaCountryState from "../components/IndiaCountry/IndiaCountryState";
import IndiaCountryTogether from "../components/IndiaCountry/IndiaCountryTogether";
import IndiaCountryTipsReviews from "../components/IndiaCountry/IndiaCountryTipsReviews";
import IndiaCountryPlacesSection from "../components/IndiaCountry/IndiaCountryPlacesSection";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

const IndiaCountry = () => {
  return (
    <>
      <div className="mt-44">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex items-center ">
            <p className="text-[#DC3545] text-base">Home</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-base">India</p>
          </div>
          <IndiaCountryTab />
        </div>
        <HeroBanner />
        {/* <IndiaCountryBanner /> */}
        <IndiaCountryContentTab />
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaCountryImgVideo />
        </div>
        <IndiaCountryAttractions />
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaCountryState />
          <IndiaCountryTogether />
          <IndiaCountryTipsReviews />
          <IndiaCountryPlacesSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndiaCountry;
