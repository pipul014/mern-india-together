import React from "react";
import { ChevronRight } from "lucide-react";
import IndiaCountryTab from "../components/IndiaCountry/IndiaCountryTab";

import IndiaCountryStayPlaces from "../components/IndiaCountry/IndiaCountryStayPlaces";
import IndiaCountryTogether from "../components/IndiaCountry/IndiaCountryTogether";

import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

const IndiaHotels = () => {
  return (
    <>
      <div className="mt-32">
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaCountryTab />
          <div className="flex items-center ">
            <p className="text-[#DC3545] text-base">Home</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-[#DC3545] text-base">India</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-[#DC3545] text-base">Tamil Nadu</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <span className="text-base">Hotels in Tamil Nadu</span>
          </div>
        </div>
        <HeroBanner />
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaCountryStayPlaces />
          <IndiaCountryTogether />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndiaHotels;
