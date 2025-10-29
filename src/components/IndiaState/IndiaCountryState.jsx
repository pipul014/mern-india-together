import React from "react";
import IndiaState1 from "../../assets/images/IndiaCountry/indiastate1.png";
import IndiaState2 from "../../assets/images/IndiaCountry/indiastate2.png";
import IndiaState3 from "../../assets/images/IndiaCountry/indiastate3.png";
import IndiaState4 from "../../assets/images/IndiaCountry/indiastate4.png";

const states = [
  { name: "Assam", img: IndiaState1 },
  { name: "Delhi", img: IndiaState2 },
  { name: "Madhya Pradesh", img: IndiaState3 },
  { name: "Nagaland", img: IndiaState4 },
  { name: "Himachal Pradesh", img: IndiaState1 },
  { name: "Punjab", img: IndiaState4 },
  { name: "Uttar Pradesh", img: IndiaState1 },
  { name: "Karnataka", img: IndiaState1 },
  { name: "Himachal Pradesh", img: IndiaState2 },
  { name: "Punjab", img: IndiaState1 },
  { name: "Uttar Pradesh", img: IndiaState3 },
  { name: "Karnataka", img: IndiaState2 },
];

const IndiaCountryState = () => {
  return (
    <>
      <div className=" my-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Popular States of India</h1>
            <p className="text-gray-700 mt-1">
              Explore in-depth, the top attractions of India.
            </p>
          </div>
          <p className="underline uppercase">See All</p>
        </div>

        {/* statecard */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {states.map((state, index) => (
            <div
              key={index}
              className="relative overflow-hidden  shadow-md transition-transform duration-300"
            >
              <img
                src={state.img}
                alt={state.name}
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-opacity-50 w-full p-3">
                <h2 className="text-white font-semibold text-lg">
                  {state.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndiaCountryState;
