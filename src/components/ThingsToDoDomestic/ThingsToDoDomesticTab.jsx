import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VectorThingstodo from "../../assets/images/ThingsToDoDomestic/VectorThingstodo.png";
import City from "../../assets/images/ThingsToDoDomestic/City.png";

const ThingsToDoDomesticTab = () => {
  const [activeTab, setActiveTab] = useState("Things to Do");
  const navigate = useNavigate();
  const tabs = ["Madurai", "Hotels", "Things to Do", "Eat & Drink", "Shop"];

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="relative h-auto mt-32 mt py-12 md:py-0">
          {/* Top Tabs */}
          <div className="relative flex flex-wrap uppercase lg:flex-nowrap justify-center lg:justify-start  border-[#838383]">
            {tabs.map((label, i) => {
              const isActive = activeTab === label;
              return (
                <>
                  <div
                    key={i}
                    onClick={() => {
                      setActiveTab(label);
                      navigate(routes[label]);
                    }}
                    className={`px-4 sm:px-5 md:px-16 h-12 sm:h-14 relative uppercase md:h-16 flex items-center justify-center border border-[#838383] cursor-pointer transition-transform duration-200 ${
                      isActive
                        ? "bg-[#2E2E2E] text-white"
                        : "bg-white text-black hover:text-[#DC3545]"
                    } hover:scale-105`}
                    aria-label={`Navigate to ${label}`}
                  >
                    <span className="font-roboto font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
                      {label}
                    </span>
                  </div>
                  <div className="absolute left-0 top-0">
                    <img src={VectorThingstodo} alt="" className="relative" />
                    <img src={City} alt="" className="top-1 left-1 absolute" />
                  </div>
                </>
              );
            })}
          </div>

          {/* Fade-in animation keyframes
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style> */}
        </div>
      </div>
    </>
  );
};

export default ThingsToDoDomesticTab;
