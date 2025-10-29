import React from "react";
import Advertise from "../components/LoginTravelPartnerAdvertise/Advertise";
import HeroBanner from "../components/HeroBanner";
import AdvertiseBreadcrumbs from "../components/LoginTravelPartnerAdvertise/AdvertiseBreadcrumbs";
import Footer from "../components/Footer";

const LoginTravelPartnerAdvertise = () => {
  return (
    <>
      <div>
        <div className="px-4 sm:px-6 md:px-8 ">
          <AdvertiseBreadcrumbs />
          <HeroBanner />
          <Advertise />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginTravelPartnerAdvertise;
