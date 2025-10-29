import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Hotels from "./pages/Hotels";
import ThingsToDo from "./pages/ThingsToDo";
import EatDrink from "./pages/EatDrink";
import Shop from "./pages/Shop";
import TribesOfIndia from "./pages/TribesOfIndia";
import KidsSpecial from "./pages/KidsSpecial";
import AboutUs from "./pages/AboutUs";
import AdvertiseWithUs from "./pages/AdvertiseWithUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CSRPolicy from "./pages/CSRPolicy";
import BusinessAgreement from "./pages/BusinessAgreement";
import Disclaimer from "./pages/Disclaimer";
import Sitemap from "./pages/Sitemap";
import IndiaCountry from "./pages/IndiaCountry";
import IndiaState from "./pages/IndiaState";
import ThingsToDoDomestic from "./pages/ThingsToDoDomestic";
import Attraction from "./pages/Attraction";
import LoginTravelPartnerAdvertise from "./pages/LoginTravelPartnerAdvertise";
import AdvertiseWithUsForm from "./pages/AdvertiseWithUsForm";
import IndiaHotels from "./pages/IndiaHotels";
import IndiaEatDrink from "./pages/IndiaEatDrink";
import IndiaShop from "./pages/IndiaShop";
import GuideRegistration from "./pages/GuideRegistration";
import IndiaStateEatDrink from "./pages/IndiaStateEatDrink";
import IndiaStateHotels from "./pages/IndiaStateHotels";
import IndiaStateShop from "./pages/IndiaStateShop";
import IndiaStateThingsToDo from "./pages/IndiaStateThingsToDo";
import ThingsToDoIndia from "./pages/ThingsToDoIndia";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <div className="flex-1 min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />

          <Route path="/destinations" element={<Destinations />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/eat-drink" element={<EatDrink />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tribes-of-india" element={<TribesOfIndia />} />
          <Route path="/kids-special" element={<KidsSpecial />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/csr-policy" element={<CSRPolicy />} /> */}
          <Route path="/business-agreement" element={<BusinessAgreement />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/guide-registration" element={<GuideRegistration />} />

          {/* country routes */}
          <Route path="/india-country" element={<IndiaCountry />} />
          <Route path="/india-things-to-do" element={<ThingsToDoIndia />} />
          <Route path="/india-hotels" element={<IndiaHotels />} />
          <Route path="/india-eat-drink" element={<IndiaEatDrink />} />
          <Route path="/india-shop" element={<IndiaShop />} />

          {/* state routes */}
          <Route path="/india-state" element={<IndiaState />} />
          <Route
            path="/india-state-things-to-do"
            element={<IndiaStateThingsToDo />}
          />
          <Route path="/india-state-hotels" element={<IndiaStateHotels />} />
          <Route
            path="/india-state-eat-drink"
            element={<IndiaStateEatDrink />}
          />
          <Route path="/india-state-shop" element={<IndiaStateShop />} />

          {/* city routes */}
          <Route path="/india-city" element={<IndiaState />} />
          <Route
            path="/india-city-things-to-do"
            element={<IndiaStateThingsToDo />}
          />
          <Route path="/india-city-hotels" element={<IndiaStateHotels />} />
          <Route
            path="/india-city-eat-drink"
            element={<IndiaStateEatDrink />}
          />
          <Route path="/india-city-shop" element={<IndiaStateShop />} />

          <Route
            path="/things-to-do-domestic"
            element={<ThingsToDoDomestic />}
          />
          <Route path="/attraction" element={<Attraction />} />
          <Route
            path="/login-advertise"
            element={<LoginTravelPartnerAdvertise />}
          />
          <Route
            path="/login-advertise-form"
            element={<AdvertiseWithUsForm />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
