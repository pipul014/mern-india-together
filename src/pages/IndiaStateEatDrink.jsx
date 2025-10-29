import React from "react";
import { ChevronRight } from "lucide-react";
import IndiaCountryTab from "../components/IndiaCountry/IndiaCountryTab";

import IndiaCountryEatDrink from "../components/IndiaCountry/IndiaCountryEatDrink";
import IndiaCountryTogether from "../components/IndiaCountry/IndiaCountryTogether";

import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import IndiaStateTogether from "../components/IndiaState/IndiaStateTogether";
import IndiaStateTab from "../components/IndiaState/IndiaStateTab";
import IndiaStateEatDrink from "../components/IndiaState/IndiaStateEatDrink";

const IndiaStateEatDrinks = () => {
  return (
    <>
      <div className="mt-32">
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaStateTab />
          <div className="flex items-center ">
            <p className="text-[#DC3545] text-base">Home</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <p className="text-[#DC3545] text-base">Tamil Nadu</p>
            <ChevronRight className="w-5 h-5 mx-2" />
            <span className="text-base">Eat & Drink in India</span>
          </div>
        </div>
        <HeroBanner />
        <div className="px-4 sm:px-6 md:px-8">
          <IndiaStateEatDrink />
          <IndiaStateTogether />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndiaStateEatDrinks;
