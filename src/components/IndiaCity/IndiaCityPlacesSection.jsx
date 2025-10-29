import React from "react";

const data = {
  topPicks: [
    "Museum Tours",
    "Museum Tours",
    "Kids Family Tours",
    "Multi Adventure",
    "Walking Tours",
    "Biking",
    "Active Safari",
    "River Cruise",
    "Sight-seeing",
    "Night- Festival",
    "Camping",
    "Bus Tours",
    "Sight-seeing",
    "Museum Tours",
    "Walking Tours",
    "Biking",
    "Active Safari",
    "River Cruise",
    "Sight-seeing",
  ],
  discover: [
    "Meerut",
    "New Delhi",
    "Mumbai",
    "Jaipur",
    "Jodhpur",
    "Goa",
    "Kolkata",
    "Banglore",
    "Meerut",
    "New Delhi",
    "Mumbai",
    "Jaipur",
    "Jodhpur",
    "Jodhpur",
    "Goa",
    "Kolkata",
    "Jaipur",
    "Jodhpur",
    "Goa",
    "Kolkata",
  ],
  trending: [
    "Best Sightseeing Tour of Mussouri",
    "Hotels in Haridwar",
    "Things to do in Haridwar",
    "Things to do in Dehradun",
    "Multi-Days tour from Dehradun",
    "Artisan of Dehradun",
    "Best Hotels in Dehradun",
    "Boutique in Dehradun",
    "Artisan of Dehradun",
    "Things to do in Koko",
    "Best Hotels in Dehradun",
    "Boutique in Dehradun",
  ],
};

const SeparatorList = ({ items }) => (
  <div className="flex flex-wrap text-md text-gray-700 leading-[1.8]">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <span className="hover:text-black cursor-pointer ">{item}</span>
        {i !== items.length - 1 && (
          <span className="mx-3 text-gray-500 text-md leading-[1.8]">|</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

const IndiaCountryPlacesSection = () => {
  return (
    <>
      <div className="px-4 py-6 space-y-8 mx-auto mb-20">
        <div>
          <h2 className="font-semibold text-lg mb-4">Top Picks in Madurai</h2>
          <SeparatorList items={data.topPicks} className="text-md" />
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">
            Discover More Amazing Places
          </h2>
          <SeparatorList items={data.discover} />
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">
            Trending on Together in India
          </h2>
          <SeparatorList items={data.trending} />
        </div>
      </div>
    </>
  );
};

export default IndiaCountryPlacesSection;
