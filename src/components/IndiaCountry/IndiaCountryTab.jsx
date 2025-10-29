import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const IndiaCountryTab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = ["India", "Hotels", "Things to Do", "Eat & Drink", "Shop"];

  const routes = {
    India: "/india-country",
    Hotels: "/india-hotels",
    "Things to Do": "/india-things-to-do",
    "Eat & Drink": "/india-eat-drink",
    Shop: "/india-shop",
  };

  // 🧩 Initialize activeTab from current route instead of default "India"
  const getActiveTabFromPath = (path) => {
    const current = Object.keys(routes).find((key) => routes[key] === path);
    return current || "India";
  };

  const [activeTab, setActiveTab] = useState(() =>
    getActiveTabFromPath(location.pathname)
  );

  // 🧩 Update when URL changes (for back/forward navigation)
  useEffect(() => {
    setActiveTab(getActiveTabFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <div className="relative h-auto mt-4 py-12 md:py-0">
      <div className="relative flex flex-wrap uppercase lg:flex-nowrap justify-center lg:justify-start border-[#838383]">
        {tabs.map((label, i) => {
          const isActive = activeTab === label;
          return (
            <div
              key={i}
              onClick={() => {
                setActiveTab(label);
                navigate(routes[label]);
              }}
              className={`px-4 sm:px-5 md:px-16 h-12 sm:h-14 md:h-16 flex items-center justify-center border border-[#838383] cursor-pointer transition-transform duration-200 ${
                isActive
                  ? "bg-[#2E2E2E] text-white"
                  : "bg-white text-black hover:text-[#DC3545]"
              } hover:scale-105`}
            >
              <span className="font-roboto font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndiaCountryTab;
