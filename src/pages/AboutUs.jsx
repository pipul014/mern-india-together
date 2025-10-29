import React from "react";
import Footer from "../components/Footer";
import IntroducingSection from "../components/AboutUs/IntroducingSection";
import AboutUsBreadcrumbs from "../components/AboutUs/AboutUsBreadcrumbs";
import AboutUsBrand from "../components/AboutUs/AboutUsBrand";
import AboutUsWaveSection from "../components/AboutUs/AboutUsWaveSection";

const Home = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <AboutUsBreadcrumbs />
        <div className="bg-gray-50 min-h-screen flex justify-between py-10">
          <IntroducingSection />
        </div>
        <AboutUsBrand />
      </div>
      <AboutUsWaveSection />
      <Footer />
    </>
  );
};

export default Home;
