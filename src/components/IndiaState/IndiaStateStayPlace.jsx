import React from "react";
import IndiaHotel1 from "../../assets/images/IndiaHotels/chennai-hotel.png";
import IndiaHotel2 from "../../assets/images/IndiaHotels/ooty-hotel.png";
import IndiaHotel3 from "../../assets/images/IndiaHotels/madurai-hotel.png";
import IndiaHotel4 from "../../assets/images/IndiaHotels/mahabalipuram.png";

import GrayBlock from "../GrayBlock1";

export const places = [
  { city: "Chennai", hotels: 200, img: IndiaHotel1 },
  { city: "Ooty", hotels: 200, img: IndiaHotel2 },
  { city: "Madurai", hotels: 200, img: IndiaHotel3 },
  { city: "Mahabalipuram", hotels: 200, img: IndiaHotel1 },
  { city: "Kodaikanal", hotels: 200, img: IndiaHotel4 },
  { city: "Kanyakumari", hotels: 200, img: IndiaHotel1 },
  { city: "Coimbatore", hotels: 200, img: IndiaHotel3 },
  { city: "Thanjavur", hotels: 200, img: IndiaHotel2 },
  { city: "Rameshwaram", hotels: 200, img: IndiaHotel3 },
  { city: "Trichy", hotels: 200, img: IndiaHotel4 },
  { city: "Kanchipuram", hotels: 200, img: IndiaHotel3 },
  { city: "Kumbakonam", hotels: 200, img: IndiaHotel2 },
  { city: "Chettinad", hotels: 200, img: IndiaHotel1 },
  { city: "Chidambaram", hotels: 200, img: IndiaHotel4 },
  { city: "Vellore", hotels: 200, img: IndiaHotel3 },
];

const IndiaStateContentTab = () => {
  return (
    <>
      <div className=" my-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Places to stay in Tamil Nadu</h1>
            <p className="text-gray-700 mt-1">
              We have great places to stay in India.
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
                  alt={state.city}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-opacity-50 w-full p-3">
                  <h2 className="text-white font-semibold text-lg">
                    {state.city}
                  </h2>
                  <p className="text-white text-sm">{state.hotels} hotels</p>
                </div>
              </div>

              {/* Only after the first 16 cards */}
              {index === 14 && (
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

export default IndiaStateContentTab;
