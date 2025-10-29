import React from "react";
import { ChevronRight } from "lucide-react";

import IndiaStateVisitPlaces from "../components/IndiaState/IndiaStateVisitPlaces";

import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import IndiaStateTogether from "../components/IndiaState/IndiaStateTogether";
import IndiaStateTab from "../components/IndiaState/IndiaStateTab";

const IndiathingsToDo = () => {
  return (
    <>
      <div className="mt-32">
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaStateTab />
          <div className="flex items-center ">
            <p className="text-[#DC3545] text-base">Home</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-[#DC3545] text-base">India</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <span className="text-base">place to visit in india</span>
          </div>
        </div>
        <HeroBanner />
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaStateVisitPlaces />
          <IndiaStateTogether />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndiathingsToDo;
