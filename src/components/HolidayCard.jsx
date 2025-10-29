import React from "react";

const HolidayCard = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Title Section */}
      <h2 className="text-black text-3xl font-bold text-center mb-2">
        Holiday Title
      </h2>
      <p className="text-gray-700 text-xl text-center mb-6">
        Holiday Subtitle or Description
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Single Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Holiday"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">Holiday Name</h3>
          <p className="text-gray-500 text-sm">Holiday Date</p>
        </div>

        {/* Repeat Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Holiday"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">Holiday Name</h3>
          <p className="text-gray-500 text-sm">Holiday Date</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Holiday"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">Holiday Name</h3>
          <p className="text-gray-500 text-sm">Holiday Date</p>
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
