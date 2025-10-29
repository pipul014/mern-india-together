import React from "react";
import Indiafood1 from "../../assets/images/IndiaEatDrink/food1.png";
import Indiafood2 from "../../assets/images/IndiaEatDrink/food2.png";
import Indiafood3 from "../../assets/images/IndiaEatDrink/food3.png";
import Indiafood4 from "../../assets/images/IndiaEatDrink/food4.png";

import GrayBlock from "../GrayBlock1";

// export const places = [
//   { city: "Chennai", restaurants: 200, img: Indiafood1 },
//   { city: "Ooty", restaurants: 200, img: Indiafood2 },
//   { city: "Madurai", restaurants: 200, img: Indiafood3 },
//   { city: "Mahabalipuram", restaurants: 200, img: Indiafood4 },
//   { city: "Kodaikanal", restaurants: 200, img: Indiafood2 },
//   { city: "Kanyakumari", restaurants: 200, img: Indiafood4 },
//   { city: "Coimbatore", restaurants: 200, img: Indiafood1 },
//   { city: "Thanjavur", restaurants: 200, img: Indiafood3 },
//   { city: "Rameshwaram", restaurants: 200, img: Indiafood4 },
//   { city: "Trichy", restaurants: 200, img: Indiafood3 },
//   { city: "Kanchipuram", restaurants: 200, img: Indiafood1 },
//   { city: "Kumbakonam", restaurants: 200, img: Indiafood2 },
//   { city: "Chettinad", restaurants: 200, img: Indiafood1 },
//   { city: "Chidambaram", restaurants: 200, img: Indiafood4 },
//   { city: "Vellore", restaurants: 200, img: Indiafood3 },
// ];

export const places = [
  { state: "Andaman and Nicobar Islands", restaurants: 200, img: Indiafood1 },
  { state: "Andhra Pradesh", restaurants: 200, img: Indiafood2 },
  { state: "Arunachal Pradesh", restaurants: 200, img: Indiafood3 },
  { state: "Assam", restaurants: 200, img: Indiafood4 },
  { state: "Bihar", restaurants: 200, img: Indiafood1 },
  { state: "Chandigarh", restaurants: 200, img: Indiafood2 },
  { state: "Chhattisgarh", restaurants: 200, img: Indiafood3 },
  { state: "Daman and Diu", restaurants: 200, img: Indiafood4 },
  { state: "Delhi", restaurants: 200, img: Indiafood1 },
  { state: "Goa", restaurants: 200, img: Indiafood2 },
  { state: "Gujarat", restaurants: 200, img: Indiafood3 },
  { state: "Haryana", restaurants: 200, img: Indiafood4 },
  { state: "Himachal Pradesh", restaurants: 200, img: Indiafood1 },
  { state: "Jammu and Kashmir", restaurants: 200, img: Indiafood2 },
  { state: "Jharkhand", restaurants: 200, img: Indiafood3 },
  { state: "Karnataka", restaurants: 200, img: Indiafood4 },
  { state: "Kerala", restaurants: 200, img: Indiafood1 },
  { state: "Ladakh", restaurants: 200, img: Indiafood2 },
  { state: "Lakshadweep", restaurants: 200, img: Indiafood3 },
  { state: "Madhya Pradesh", restaurants: 200, img: Indiafood4 },
  { state: "Maharashtra", restaurants: 200, img: Indiafood1 },
  { state: "Manipur", restaurants: 200, img: Indiafood2 },
  { state: "Meghalaya", restaurants: 200, img: Indiafood3 },
  { state: "Mizoram", restaurants: 200, img: Indiafood4 },
  { state: "Nagaland", restaurants: 200, img: Indiafood1 },
  { state: "Odisha", restaurants: 200, img: Indiafood2 },
  { state: "Puducherry", restaurants: 200, img: Indiafood3 },
  { state: "Punjab", restaurants: 200, img: Indiafood4 },
  { state: "Rajasthan", restaurants: 200, img: Indiafood1 },
  { state: "Sikkim", restaurants: 200, img: Indiafood2 },
  { state: "Tamil Nadu", restaurants: 200, img: Indiafood3 },
  { state: "Telangana", restaurants: 200, img: Indiafood4 },
  { state: "Tripura", restaurants: 200, img: Indiafood1 },
  { state: "Uttar Pradesh", restaurants: 200, img: Indiafood2 },
  { state: "Uttarakhand", restaurants: 200, img: Indiafood3 },
  { state: "West Bengal", restaurants: 200, img: Indiafood4 },
];

const IndiaCountryEatDrink = () => {
  return (
    <>
      <div className=" my-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Places to eat in Tamil Nadu</h1>
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
                  alt={state.state}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-opacity-50 w-full p-3">
                  <h2 className="text-white font-semibold text-lg">
                    {state.state}
                  </h2>
                  <p className="text-white text-sm">
                    {state.restaurants} restaurants
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

export default IndiaCountryEatDrink;
