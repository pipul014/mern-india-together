import React, { useState } from "react";
import ListIcon from "../../assets/images/IndiaCountry/listIcon.png";
import { Share } from "lucide-react";

const tabs = [
  { id: "intro", label: "INTRODUCTION" },
  { id: "captured", label: "CAPTURED ON LENSES" },
  { id: "attractions", label: "TOP ATTRACTIONS" },
  { id: "states", label: "POPULAR STATES" },
  { id: "tips", label: "TRAVEL TIPS & REVIEWS" },
];

const IndiaCountryContentTab = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <>
            <div className="">
              {/* Top-right badge */}
              <div className="flex justify-end gap-6 items-center top-0 right-0">
                <div className="flex gap-2">
                  <Share />
                  <p>Share</p>
                </div>
                <div className="border-2 relative border-gray-300 text-white text-sm font-semibold px-5 py-3 items-center flex justify-end">
                  <div className="bg-[#DC3545] p-1 text-center absolute left-3">
                    <p className="uppercase">Together</p>
                    <p className="text-2xl">23</p>
                  </div>
                  <p className="bg-white text-red-600 text-md font-medium flex justify-end pl-22">
                    Travel Deals
                  </p>
                </div>
              </div>

              <div className="w-[50%] ">
                <h1 className="text-5xl font-bold mb-4 mt-3">India</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-[20px]">
                  Explore the rich city of Tamil Nadu also know as garden city.
                  The city is Beautiful. Madurai, often called the Cultural
                  Capital of Tamil Nadu, is one of India’s oldest cities, known
                  for its rich heritage, stunning architecture, and spiritual
                  significance. Home to the magnificent Meenakshi Amman Temple,
                  the city is a vibrant blend of tradition and modernity.
                </p>

                <p className=" mb-4">
                  There is a lot of unforgettable experiences:
                </p>

                {/* List with image bullets */}
                <ul className="space-y-4 text-gray-800">
                  {[
                    "Imphal is known for its scenic landscapes, greenery, and rich culture.",
                    "Find your eternal love. The white marble Taj Mahal is an eternal Love story that will never end. A beautiful expression of Love.",
                    "Visit the famous Qutab Minar, a UNESCO World Heritage site built in around 1120.",
                    "Famous as the city of diamonds, visit Hyderabad & its hilltop fort, Golconda Fort.",
                    "At sunset, sail through one of the most romantic lakes of India, the Lake Pichola, Udaipur. An artificial lake surrounds many palaces, and marble temples in the backdrop of green hills.",
                    "Visit Varanasi, one of the oldest cities in the world. The city also known as the second home of Lord Shiva, is the only place on earth where one can attain salvation by taking a holy dip in river Ganges.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {/* Custom bullet image */}
                      <img src={ListIcon} alt="bullet" className="w-8 h-8" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read more button */}
              <div className="w-full flex justify-center mx-auto mb-20">
                <button className="mt-6 text-gray-600 font-medium hover:text-black cursor-pointer">
                  Read More ▼
                </button>
              </div>
            </div>
          </>
        );
      case "captured":
        return (
          <div className="mt-8 text-gray-700">
            📸 Beautiful lens captures coming soon...
          </div>
        );
      case "attractions":
        return (
          <div className="mt-8 text-gray-700">
            🌍 Top attractions of India coming soon...
          </div>
        );
      case "states":
        return (
          <div className="mt-8 text-gray-700">
            🗺️ Explore popular Indian states...
          </div>
        );
      case "tips":
        return (
          <div className="mt-8 text-gray-700">
            ✈️ Travel tips and reviews section...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="">
        {/* Top Tab Navigation */}
        <div className="flex  justify-between border-2 border-gray-300 py-5 px-4 sm:px-6 md:px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm font-semibold border-b-2 transition-all ${
                activeTab === tab.id
                  ? "border-[#DC3545] text-black"
                  : "border-transparent text-black hover:text-black hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 px-4 sm:px-6 md:px-8">{renderContent()}</div>
      </div>
    </>
  );
};

export default IndiaCountryContentTab;
