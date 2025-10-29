import React from "react";
import { useState } from "react";

const tabs = [
  {
    title: "Tour Operator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tour operators, hoteliers, airlines, restaurant owners, and retailers — we help grow your market reach, connect with genuine travellers, and enhance your brand value.",
    benefits: [
      {
        name: "Unlimited Leads",
        content:
          "Get unlimited travel leads and new customers through our global network of travellers.",
      },
      {
        name: "Grow Your Brand",
        content:
          "Boost your visibility and reputation with authentic traveller engagement.",
      },
      {
        name: "Association Matters",
        content:
          "Join a trusted network of tourism professionals and businesses.",
      },
      {
        name: "Engage Directly",
        content:
          "Communicate directly with potential travellers and customers.",
      },
      {
        name: "Manage Pricing",
        content: "Easily adjust and manage your pricing for various packages.",
      },
      {
        name: "Freedom To Enhance",
        content:
          "You have complete flexibility to modify your offerings anytime.",
      },
      {
        name: "Exclusive Deal Sharing",
        content:
          "Share exclusive deals and offers with interested travellers instantly.",
      },
      {
        name: "Customer Behavior",
        content:
          "Analyze traveller preferences and buying behavior to improve performance.",
      },
      {
        name: "Multi-Tour Enquiry Management",
        content:
          "Handle multiple tour enquiries with an easy-to-use dashboard.",
      },
    ],
  },
  {
    title: "Airlines",
    description:
      "We help airlines grow their customer base through targeted visibility and engagement with high-value travellers.",
    benefits: [
      {
        name: "Customer Engagement",
        content: "Build stronger customer loyalty and retention.",
      },
      {
        name: "Real-Time Analytics",
        content: "Monitor bookings and engagement in real-time.",
      },
      {
        name: "Exclusive Deals",
        content: "Offer special fares to your most loyal customers.",
      },
    ],
  },
  {
    title: "Hotels",
    description:
      "Empower your hotel business with digital visibility, customer insights, and partnership opportunities.",
    benefits: [
      {
        name: "Boost Bookings",
        content: "Increase occupancy with smart marketing campaigns.",
      },
      {
        name: "Partner Programs",
        content: "Collaborate with travel platforms for more exposure.",
      },
      {
        name: "Customer Loyalty",
        content: "Engage repeat guests with personalized offers.",
      },
    ],
  },
  {
    title: "Restaurants",
    description:
      "Empower your hotel business with digital visibility, customer insights, and partnership opportunities.",
    benefits: [
      {
        name: "Boost Bookings",
        content: "Increase occupancy with smart marketing campaigns.",
      },
      {
        name: "Partner Programs",
        content: "Collaborate with travel platforms for more exposure.",
      },
      {
        name: "Customer Loyalty",
        content: "Engage repeat guests with personalized offers.",
      },
    ],
  },
  {
    title: "Retail Stores",
    description:
      "Empower your hotel business with digital visibility, customer insights, and partnership opportunities.",
    benefits: [
      {
        name: "Boost Bookings",
        content: "Increase occupancy with smart marketing campaigns.",
      },
      {
        name: "Partner Programs",
        content: "Collaborate with travel platforms for more exposure.",
      },
      {
        name: "Customer Loyalty",
        content: "Engage repeat guests with personalized offers.",
      },
    ],
  },
];

const AdvertiseTab = () => {
  //  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeBenefit, setActiveBenefit] = useState(activeTab.benefits[0]);

  // When tab changes, reset benefit selection
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveBenefit(tab.benefits[0]);
  };
  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl font-semibold my-5">
            Discover what sets us apart & the benefits you gain.
          </h1>
        </div>
        <div className="min-h-screen bg-gray-50 py-5">
          {/* Tabs Navigation */}
          <div className="flex mb-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.title}
                onClick={() => handleTabChange(tab)}
                className={`mr-20 py-2 font-semibold whitespace-nowrap ${
                  activeTab.title === tab.title
                    ? "border-b-4 border-[#DC3545] "
                    : "text-gray-700 hover:text-[#DC3545]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Section */}

          <div className="bg-[#F2F2F2] p-10">
            <div className=" flex flex-col md:flex-row justify-between">
              {/* Left Side (Dynamic Text) */}
              <div className="md:w-2/3 space-y-4 pr-6">
                <h2 className="text-2xl text-gray-800">{activeBenefit.name}</h2>
                <p className="text-gray-800 leading-relaxed">
                  {activeBenefit.content}
                </p>
              </div>

              {/* Right Side (Benefits List) */}
              <div className="md:w-1/3 mt-8 md:mt-0 md:pl-12">
                <h3 className="font-semibold text-gray-800">Benefits</h3>
                <ul className="pt-3 space-y-2 w-fit">
                  {activeTab.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      onClick={() => setActiveBenefit(benefit)}
                      className={`cursor-pointer ${
                        activeBenefit.name === benefit.name
                          ? " text-lg font-semibold border-b-2 border-[#DC3545] pb-1"
                          : "text-gray-700 hover:text-[#DC3545]"
                      }`}
                    >
                      {benefit.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Bottom Highlight */}
            <h1 className="text-6xl font-bold text-[#DC3545] mt-10">
              {activeBenefit.name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertiseTab;
