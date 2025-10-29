import { ChevronDown, ChevronUp, Search } from "lucide-react";
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";

const Sidebar = () => {
  // Sidebar section data
  const sections = [
    {
      title: "Super Saver",
      color: "text-[#DC3545]",
      options: [
        { label: "All", checked: true },
        { label: "Early Bird Deal" },
        { label: "Last Minute Deal" },
        { label: "Weekday Deal" },
        { label: "Together Special" },
        { label: "Special Offer" },
        { label: "Festival Deal" },
      ],
    },
    {
      title: "Tour Type",
      color: "text-[#DC3545]",
      options: [
        { label: "All Activities" },
        { label: "Half-Day Sightseeing" },
        { label: "Full-Day Sightseeing" },
        { label: "Same Day Excursion" },
        { label: "Multi-Day Tour" },
        { label: "Weekend Getaway" },
        { label: "Pilgrimage Tour" },
        { label: "Adventure Tour" },
      ],
    },
    {
      title: "Popular",
      color: "text-[#DC3545]",
      options: [
        { label: "Taj Mahal" },
        { label: "Red Fort" },
        { label: "Qutub Minar" },
        { label: "India Gate" },
        { label: "Chandni Chowk" },
      ],
    },
    {
      title: "Hotel Category",
      color: "text-[#DC3545]",
      options: [{ label: "3 Star" }, { label: "4 Star" }, { label: "5 Star" }],
    },
    {
      title: "Starting From",
      color: "text-[#DC3545]",
      options: [
        { label: "Mumbai" },
        { label: "New Delhi" },
        { label: "Meerut" },
        { label: "Kolkata" },
        { label: "Shimla" },
      ],
    },
    {
      title: "Package Type",
      color: "text-[#DC3545]",
      options: [{ label: "Customizable" }, { label: "Fixed Package" }],
    },
    {
      title: "Brands",
      color: "text-[#DC3545]",
      options: [
        { label: "Riya Travels" },
        { label: "Thomas Cook" },
        { label: "Sita Travel" },
        { label: "Ashok Travels" },
        { label: "ABC Travels" },
      ],
    },
  ];

  // State to track expanded/collapsed sections
  const [openSections, setOpenSections] = useState(
    sections.reduce((acc, _, i) => ({ ...acc, [i]: true }), {})
  );

  // State to track show more/less per section
  const [showMore, setShowMore] = useState(
    sections.reduce((acc, _, i) => ({ ...acc, [i]: false }), {})
  );

  // Search state only for "Starting From"
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-[325px]">
      {/* Top Button */}
      <div className="w-full">
        <button className="border w-full h-14 font-semibold mb-8 mt-12 border-[#838383]">
          SEE ALL ATTRACTIONS
        </button>
      </div>

      {/* Sidebar Sections */}
      <aside className="h-fit">
        {sections.map((section, index) => {
          // ✅ Filter options if section is "Starting From"
          const filteredOptions =
            section.title === "Starting From"
              ? section.options.filter((opt) =>
                  opt.label.toLowerCase().includes(searchTerm.toLowerCase())
                )
              : section.options;

          const visibleOptions = showMore[index]
            ? filteredOptions
            : filteredOptions.slice(0, 4); // Show first 4 only by default

          return (
            <div key={section.title} className="mb-2 pb-4">
              {/* Section Header */}
              <div
                className="flex justify-between items-center cursor-pointer bg-[#F0F0F0] px-5 py-3"
                onClick={() => toggleSection(index)}
              >
                <h3
                  className={`font-semibold text-lg transition-colors duration-200 ${
                    openSections[index] ? `${section.color}` : "text-gray-800"
                  }`}
                >
                  {section.title}
                </h3>

                <span className="text-gray-800 text-sm">
                  {openSections[index] ? (
                    <ChevronUp className="text-[#DC3545]" />
                  ) : (
                    <ChevronDown />
                  )}
                </span>
              </div>

              {/* Options */}
              {openSections[index] && (
                <div className="flex flex-col gap-2 mt-4">
                  {/* Search Bar (only for 'Starting From') */}
                  {section.title === "Starting From" && (
                    <div className="relative mb-2">
                      <input
                        type="text"
                        placeholder="Search by city name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-4 pr-3 py-2 border focus:outline-none focus:border-[#DC3545] text-sm"
                      />
                      <div className="absolute right-0 top-0 bg-black w-10 h-full flex items-center justify-center">
                        <Search size={18} className=" text-white " />
                      </div>
                    </div>
                  )}

                  {visibleOptions.length > 0 ? (
                    visibleOptions.map((opt) => (
                      <label
                        key={opt.label}
                        className="text-md text-gray-700 mb-3 flex items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={opt.checked}
                          className="mr-2 accent-[#DC3545] w-6 h-6"
                        />
                        {opt.label}
                      </label>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm italic">
                      No results found
                    </p>
                  )}

                  {/* Show More / Less Button */}
                  {filteredOptions.length > 4 && (
                    <button
                      onClick={() => toggleShowMore(index)}
                      className="text-[#DC3545] text-md font-medium text-left flex items-center gap-1 underline"
                    >
                      {showMore[index] ? (
                        <>
                          Show less <ChevronUp size={18} />
                        </>
                      ) : (
                        <>
                          Show more <ChevronDown size={18} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
        <NotificationCard />
      </aside>
    </div>
  );
};

export default Sidebar;
