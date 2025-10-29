import React from "react";
import Indiafood1 from "../../assets/images/IndiaEatDrink/food1.png";
import Indiafood2 from "../../assets/images/IndiaEatDrink/food2.png";
import Indiafood3 from "../../assets/images/IndiaEatDrink/food3.png";
import Indiafood4 from "../../assets/images/IndiaEatDrink/food4.png";

import GrayBlock from "../GrayBlock1";

export const places = [
  { city: "Chennai", restaurants: 200, img: Indiafood1 },
  { city: "Ooty", restaurants: 200, img: Indiafood2 },
  { city: "Madurai", restaurants: 200, img: Indiafood3 },
  { city: "Mahabalipuram", restaurants: 200, img: Indiafood4 },
  { city: "Kodaikanal", restaurants: 200, img: Indiafood2 },
  { city: "Kanyakumari", restaurants: 200, img: Indiafood4 },
  { city: "Coimbatore", restaurants: 200, img: Indiafood1 },
  { city: "Thanjavur", restaurants: 200, img: Indiafood3 },
  { city: "Rameshwaram", restaurants: 200, img: Indiafood4 },
  { city: "Trichy", restaurants: 200, img: Indiafood3 },
  { city: "Kanchipuram", restaurants: 200, img: Indiafood1 },
  { city: "Kumbakonam", restaurants: 200, img: Indiafood2 },
  { city: "Chettinad", restaurants: 200, img: Indiafood1 },
  { city: "Chidambaram", restaurants: 200, img: Indiafood4 },
  { city: "Vellore", restaurants: 200, img: Indiafood3 },
];

const IndiaStateEatDrink = () => {
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

export default IndiaStateEatDrink;
