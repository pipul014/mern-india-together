import React from "react";
import IndiaShop1 from "../../assets/images/IndiaShopping/shopping1.png";
import IndiaShop2 from "../../assets/images/IndiaShopping/shopping2.png";
import IndiaShop3 from "../../assets/images/IndiaShopping/shopping3.png";
import IndiaShop4 from "../../assets/images/IndiaShopping/shopping4.png";
import IndiaShop5 from "../../assets/images/IndiaShopping/shopping5.png";
import IndiaShop6 from "../../assets/images/IndiaShopping/shopping6.png";

import GrayBlock from "../GrayBlock1";

export const places = [
  { city: "Chennai", outlets: 200, img: IndiaShop1 },
  { city: "Ooty", outlets: 200, img: IndiaShop2 },
  { city: "Madurai", outlets: 200, img: IndiaShop3 },
  { city: "Mahabalipuram", outlets: 200, img: IndiaShop4 },
  { city: "Kodaikanal", outlets: 200, img: IndiaShop5 },
  { city: "Kanyakumari", outlets: 200, img: IndiaShop6 },
  { city: "Coimbatore", outlets: 200, img: IndiaShop5 },
  { city: "Thanjavur", outlets: 200, img: IndiaShop4 },
  { city: "Rameshwaram", outlets: 200, img: IndiaShop1 },
  { city: "Trichy", outlets: 200, img: IndiaShop2 },
  { city: "Kanchipuram", outlets: 200, img: IndiaShop4 },
  { city: "Kumbakonam", outlets: 200, img: IndiaShop1 },
  { city: "Chettinad", outlets: 200, img: IndiaShop6 },
  { city: "Chidambaram", outlets: 200, img: IndiaShop3 },
  { city: "Vellore", outlets: 200, img: IndiaShop2 },
];

const IndiaStateShopping = () => {
  return (
    <>
      <div className=" my-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Places to shop in Tamil Nadu</h1>
            <p className="text-gray-700 mt-1">
              We have great places to Shop in India.
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
                  <p className="text-white text-sm">{state.outlets} outlets</p>
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

export default IndiaStateShopping;
