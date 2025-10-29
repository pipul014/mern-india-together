import React from "react";
import IndiaShop1 from "../../assets/images/IndiaShopping/shopping1.png";
import IndiaShop2 from "../../assets/images/IndiaShopping/shopping2.png";
import IndiaShop3 from "../../assets/images/IndiaShopping/shopping3.png";
import IndiaShop4 from "../../assets/images/IndiaShopping/shopping4.png";
import IndiaShop5 from "../../assets/images/IndiaShopping/shopping5.png";
import IndiaShop6 from "../../assets/images/IndiaShopping/shopping6.png";

import GrayBlock from "../GrayBlock1";

// export const places = [
//   { city: "Chennai", outlets: 200, img: IndiaShop1 },
//   { city: "Ooty", outlets: 200, img: IndiaShop2 },
//   { city: "Madurai", outlets: 200, img: IndiaShop3 },
//   { city: "Mahabalipuram", outlets: 200, img: IndiaShop4 },
//   { city: "Kodaikanal", outlets: 200, img: IndiaShop5 },
//   { city: "Kanyakumari", outlets: 200, img: IndiaShop6 },
//   { city: "Coimbatore", outlets: 200, img: IndiaShop5 },
//   { city: "Thanjavur", outlets: 200, img: IndiaShop4 },
//   { city: "Rameshwaram", outlets: 200, img: IndiaShop1 },
//   { city: "Trichy", outlets: 200, img: IndiaShop2 },
//   { city: "Kanchipuram", outlets: 200, img: IndiaShop4 },
//   { city: "Kumbakonam", outlets: 200, img: IndiaShop1 },
//   { city: "Chettinad", outlets: 200, img: IndiaShop6 },
//   { city: "Chidambaram", outlets: 200, img: IndiaShop3 },
//   { city: "Vellore", outlets: 200, img: IndiaShop2 },
// ];

export const places = [
  { state: "Andaman and Nicobar Islands", outlets: 200, img: IndiaShop1 },
  { state: "Andhra Pradesh", outlets: 200, img: IndiaShop2 },
  { state: "Arunachal Pradesh", outlets: 200, img: IndiaShop3 },
  { state: "Assam", outlets: 200, img: IndiaShop4 },
  { state: "Bihar", outlets: 200, img: IndiaShop1 },
  { state: "Chandigarh", outlets: 200, img: IndiaShop2 },
  { state: "Chhattisgarh", outlets: 200, img: IndiaShop3 },
  { state: "Daman and Diu", outlets: 200, img: IndiaShop4 },
  { state: "Delhi", outlets: 200, img: IndiaShop1 },
  { state: "Goa", outlets: 200, img: IndiaShop2 },
  { state: "Gujarat", outlets: 200, img: IndiaShop3 },
  { state: "Haryana", outlets: 200, img: IndiaShop4 },
  { state: "Himachal Pradesh", outlets: 200, img: IndiaShop1 },
  { state: "Jammu and Kashmir", outlets: 200, img: IndiaShop2 },
  { state: "Jharkhand", outlets: 200, img: IndiaShop3 },
  { state: "Karnataka", outlets: 200, img: IndiaShop4 },
  { state: "Kerala", outlets: 200, img: IndiaShop1 },
  { state: "Ladakh", outlets: 200, img: IndiaShop2 },
  { state: "Lakshadweep", outlets: 200, img: IndiaShop3 },
  { state: "Madhya Pradesh", outlets: 200, img: IndiaShop4 },
  { state: "Maharashtra", outlets: 200, img: IndiaShop1 },
  { state: "Manipur", outlets: 200, img: IndiaShop2 },
  { state: "Meghalaya", outlets: 200, img: IndiaShop3 },
  { state: "Mizoram", outlets: 200, img: IndiaShop4 },
  { state: "Nagaland", outlets: 200, img: IndiaShop1 },
  { state: "Odisha", outlets: 200, img: IndiaShop2 },
  { state: "Puducherry", outlets: 200, img: IndiaShop3 },
  { state: "Punjab", outlets: 200, img: IndiaShop4 },
  { state: "Rajasthan", outlets: 200, img: IndiaShop1 },
  { state: "Sikkim", outlets: 200, img: IndiaShop2 },
  { state: "Tamil Nadu", outlets: 200, img: IndiaShop3 },
  { state: "Telangana", outlets: 200, img: IndiaShop4 },
  { state: "Tripura", outlets: 200, img: IndiaShop1 },
  { state: "Uttar Pradesh", outlets: 200, img: IndiaShop2 },
  { state: "Uttarakhand", outlets: 200, img: IndiaShop3 },
  { state: "West Bengal", outlets: 200, img: IndiaShop4 },
];

const IndiaCountryShopping = () => {
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
                  alt={state.state}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-opacity-50 w-full p-3">
                  <h2 className="text-white font-semibold text-lg">
                    {state.state}
                  </h2>
                  <p className="text-white text-sm">{state.outlets} outlets</p>
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

export default IndiaCountryShopping;
