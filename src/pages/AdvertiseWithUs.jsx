import React from "react";
import Footer from "../components/Footer";
import IntroducingSection from "../components/AdvertiseWithUsPage/IntroducingSection";
import AboutUsBreadcrumbs from "../components/AboutUs/AboutUsBreadcrumbs";
import AdvertiseWithUsBrand from "../components/AdvertiseWithUsPage/AdvertiseWithUsBrand";
import AdvertiseWithUsWaveSection from "../components/AdvertiseWithUsPage/AdvertiseWithUsWaveSection";
import BusinessEnquirySection from "../components/AdvertiseWithUsPage/BusinessEnquirySection";
import BenefitsSection from "../components/AdvertiseWithUsPage/BenefitsSection";
import AdvertiseWithUsBreadcrumbs from "../components/AdvertiseWithUsPage/AdvertiseWithUsBreadcrumbs";

const Home = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <AdvertiseWithUsBreadcrumbs />
        <div className="bg-gray-50 min-h-screen flex justify-between py-10">
          <IntroducingSection />
        </div>
        <AdvertiseWithUsBrand />
      </div>
      <AdvertiseWithUsWaveSection />
      <BenefitsSection />
      <BusinessEnquirySection />
      <Footer />
    </>
  );
};

export default Home;
