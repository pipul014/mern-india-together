import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DestinationTab() {
  const [activeTab, setActiveTab] = useState("Destinations");
  const [country, setCountry] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const tabs = [
    "Destinations",
    "Hotels",
    "Things to Do",
    "Eat & Drink",
    "Shop",
    "Tribes of India",
    "Kids Special",
  ];

  const routes = {
    Destinations: "/destinations",
    Hotels: "/hotels",
    "Things to Do": "/things-to-do",
    "Eat & Drink": "/eat-drink",
    Shop: "/shop",
    "Tribes of India": "/tribes-of-india",
    "Kids Special": "/kids-special",
  };

  const options = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "Japan", value: "japan" },
  ];

  const infoCards = [
    {
      title: "Travel as an Insider",
      text: "Travelers trust us because we're locals with deep knowledge of the region's history. Our insights feature detailed attraction guides enriched with visual content, deep historical & cultural context, and practical tips to help you travel confidently & create unforgettable memories.",
    },
    {
      title: "It's so Easy",
      text: "Booking your multi-activity holiday is easy and completely transparent. Our team, along with trusted travel partners, will help you customize your package at no extra cost, ensuring you get the most out of your holiday.",
    },
    {
      title: "Discover Hidden Gems",
      text: "Make your trip unforgettable by discovering the city’s most authentic restaurants, local shopping gems & entertainment spots. Explore the city like a local.",
    },
    {
      title: "Members - More Fun, All budgets",
      text: "Planning an unforgettable holiday without breaking the bank? Get unbeatable early bird & last minute deals - delivered straight to your inbox. It's the perfect recipe for a budget-friendly getaway.",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (country) {
      navigate(`/${country.toLowerCase()}-country`);
    } else {
      alert("Please select a country first!");
    }
  };

  return (
    <div className="relative bg-[#2E2E2E] h-auto lg:h-[675px] w-full px-4 sm:px-6 md:px-8 py-12 md:py-0">
      {/* Top Tabs */}
      <div className="relative lg:absolute lg:-top-10 left-0 lg:left-8 flex flex-wrap lg:flex-nowrap justify-center lg:justify-start">
        {tabs.map((label, i) => {
          const isActive = activeTab === label;
          return (
            <div
              key={i}
              onClick={() => {
                setActiveTab(label);
                navigate(routes[label]);
              }}
              className={`px-4 sm:px-5 md:px-6 h-12 sm:h-14 md:h-16 flex items-center justify-center border-r border-[#838383] cursor-pointer transition-transform duration-200 ${
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
          );
        })}
      </div>

      {/* Subtitle */}
      <div className="mt-8 lg:mt-0 lg:absolute left-0 lg:left-8 top-[41px] flex flex-wrap gap-2 justify-center lg:justify-start text-center lg:text-left opacity-0 animate-fadeIn">
        <p className="text-white italic text-[14px] sm:text-[15px] md:text-[16px] font-medium font-roboto">
          We offer +400 charming destinations to discover....
        </p>
        <span className="text-[#DC3545] text-[13px] sm:text-[14px] font-bold cursor-pointer hover:underline transition-opacity duration-300">
          View All
        </span>
      </div>

      {/* Search Section */}
      <div className="mt-6 lg:mt-0 lg:absolute left-0 lg:left-8 top-[70px] flex flex-col sm:flex-row items-center gap-3 sm:gap-2 justify-center lg:justify-start">
        {/* Custom Dropdown */}
        <div
          ref={dropdownRef}
          className="w-full sm:w-[600px] md:w-[849px] border border-[#DDDDDD] flex flex-col bg-white relative"
        >
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full h-[50px] sm:h-[55px] md:h-[60px] flex items-center  px-4 sm:px-5 cursor-pointer focus:outline-none"
          >
            <span
              className={`${
                country ? "text-black" : "text-[#DC3545]"
              } font-bold uppercase text-[11px] sm:text-[12px] tracking-[0.48px]`}
            >
              {country ? country.toUpperCase() : "WHERE DO YOU WANT TO TRAVEL?"}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 sm:w-5 sm:h-5 text-[#DC3545] transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="absolute top-full left-0 w-full bg-white border border-t-0 border-[#DDDDDD] shadow-lg z-20 max-h-60 overflow-y-auto rounded-b-md">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    setCountry(option.label);
                    setIsDropdownOpen(false);
                  }}
                  className="px-4 sm:px-5 py-3 cursor-pointer hover:bg-[#f2f2f2] transition-colors duration-150 text-black text-[14px] sm:text-[15px]"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full sm:w-[160px] md:w-[205px] h-[50px] sm:h-[55px] md:h-[60px] bg-[#DC3545] text-white font-roboto font-bold text-[16px] sm:text-[18px] md:text-[20px] uppercase transition-transform duration-200 hover:scale-105"
        >
          Search
        </button>
      </div>

      {/* Main Description */}
      <div className="mt-8 lg:mt-0 lg:absolute left-0 lg:left-8 top-[150px] w-full sm:w-[90%] md:w-[600px] text-center lg:text-left opacity-0 animate-fadeIn">
        <p className="text-[#EBEBEB] text-[20px] sm:text-[26px] md:text-[32px] font-roboto font-bold uppercase tracking-[1px] sm:tracking-[1.3px] md:tracking-[1.6px] leading-snug">
          There are Destinations, Deals on HOTELS, holidays, Restaurants,
          Airlines, Shopping & Entertainment -{" "}
          <span className="text-[#DC3545] block sm:inline">
            Directly from our Trusted Travel Partners for members only.
          </span>
        </p>
      </div>

      {/* Info Cards */}
      <div className="mt-8 lg:mt-0 lg:absolute left-0 lg:left-[710px] top-[150px] grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-[90%] md:w-[610px] mx-auto lg:mx-0">
        {infoCards.map((item, i) => (
          <div
            key={i}
            className="bg-[#1D1D1D] p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 text-[#EBEBEB] rounded-md transition-transform duration-200 hover:translate-y-[-2px]"
          >
            <div className="flex items-center gap-2">
              <div className="w-[8px] sm:w-[10px] h-[11px] sm:h-[13px] border-2 border-[#DC3545]" />
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold">
                {item.title}
              </h3>
            </div>
            <p className="text-[13px] sm:text-[14px] font-roboto font-normal leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Fade-in animation */}
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
      </style>
    </div>
  );
}
