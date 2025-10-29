import React from "react";
import IndiaPlace1 from "../../assets/images/IndiaCountry/indiastate1.png";
import Indiaplace2 from "../../assets/images/IndiaCountry/indiastate2.png";
import IndiaPlace3 from "../../assets/images/IndiaCountry/indiastate3.png";
import Indiaplace4 from "../../assets/images/IndiaCountry/indiastate4.png";
import GrayBlock from "../GrayBlock1";

export const places = [
  { state: "Andaman and Nicobar Islands", attractions: 200, img: IndiaPlace1 },
  { state: "Andhra Pradesh", attractions: 200, img: Indiaplace2 },
  { state: "Arunachal Pradesh", attractions: 200, img: IndiaPlace3 },
  { state: "Assam", attractions: 200, img: Indiaplace4 },
  { state: "Bihar", attractions: 200, img: IndiaPlace1 },
  { state: "Chandigarh", attractions: 200, img: Indiaplace2 },
  { state: "Chhattisgarh", attractions: 200, img: IndiaPlace3 },
  { state: "Daman and Diu", attractions: 200, img: Indiaplace4 },
  { state: "Delhi", attractions: 200, img: IndiaPlace1 },
  { state: "Goa", attractions: 200, img: Indiaplace2 },
  { state: "Gujarat", attractions: 200, img: IndiaPlace3 },
  { state: "Haryana", attractions: 200, img: Indiaplace4 },
  { state: "Himachal Pradesh", attractions: 200, img: IndiaPlace1 },
  { state: "Jammu and Kashmir", attractions: 200, img: Indiaplace2 },
  { state: "Jharkhand", attractions: 200, img: IndiaPlace3 },
  // { state: "Karnataka", attractions: 200, img: Indiaplace4 },
  // { state: "Kerala", attractions: 200, img: IndiaPlace1 },
  // { state: "Ladakh", attractions: 200, img: Indiaplace2 },
  // { state: "Lakshadweep", attractions: 200, img: IndiaPlace3 },
  // { state: "Madhya Pradesh", attractions: 200, img: Indiaplace4 },
  // { state: "Maharashtra", attractions: 200, img: IndiaPlace1 },
  // { state: "Manipur", attractions: 200, img: Indiaplace2 },
  // { state: "Meghalaya", attractions: 200, img: IndiaPlace3 },
  // { state: "Mizoram", attractions: 200, img: Indiaplace4 },
  // { state: "Nagaland", attractions: 200, img: IndiaPlace1 },
  // { state: "Odisha", attractions: 200, img: Indiaplace2 },
  // { state: "Puducherry", attractions: 200, img: IndiaPlace3 },
  // { state: "Punjab", attractions: 200, img: Indiaplace4 },
  // { state: "Rajasthan", attractions: 200, img: IndiaPlace1 },
  // { state: "Sikkim", attractions: 200, img: Indiaplace2 },
  // { state: "Tamil Nadu", attractions: 200, img: IndiaPlace3 },
  // { state: "Telangana", attractions: 200, img: Indiaplace4 },
  // { state: "Tripura", attractions: 200, img: IndiaPlace1 },
  // { state: "Uttar Pradesh", attractions: 200, img: Indiaplace2 },
  // { state: "Uttarakhand", attractions: 200, img: IndiaPlace3 },
  // { state: "West Bengal", attractions: 200, img: Indiaplace4 },
];

const IndiaStateVisitPlaces = () => {
  return (
    <>
      <div className=" my-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Places to visit in India</h1>
            <p className="text-gray-700 mt-1">
              We have great places to visit in India.
            </p>
          </div>
          {/* <p className="underline uppercase">See All</p> */}
        </div>

        {/* statecard */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {places.map((state, index) => (
            <React.Fragment key={index}>
              <div className="relative overflow-hidden shadow-md transition-transform duration-300">
                <img
                  src={state.img}
                  alt={state.state}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-opacity-50 w-full p-3">
                  <h2 className="text-white font-semibold text-lg">
                    {state.state}
                  </h2>
                  <p className="text-white text-sm">
                    {state.attractions} Attractions
                  </p>
                </div>
              </div>

              {/* Only after the first 16 cards */}
              {index === 15 && (
                <div className="col-span-full">
                  <GrayBlock />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndiaStateVisitPlaces;
