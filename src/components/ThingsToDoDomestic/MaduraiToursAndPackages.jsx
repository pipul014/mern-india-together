import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TourCard from "./TourCard";
import Pagination from "./Pagination";
import YellowArrow from "../../assets/images/ThingsToDoDomestic/YellowArrow.png";
import RedRectangle from "../../assets/images/ThingsToDoDomestic/RedRectangle.png";
import { ChevronDown, Search } from "lucide-react";
import Card from "../../assets/images/ThingsToDoDomestic/Card.png";
import IndiaCountryTogether from "../IndiaCountry/IndiaCountryTogether";

// const allTours = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   title: "3 Days Golden Triangle Tour with Elephant Ride",
//   rating: 4.5,
//   nights: "9N/10D",
//   locations: "2N Udaipur + 1N Durham + 1N Gujarat",
//   price: 53000,
//   total: 60000,
//   image: "https://images.unsplash.com/photo-1586971800020-6c6e2b4e9e9b",
// }));

// const allTours = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, title: "3 Days Golden Triangle Tour with Elephant Ride", rating: 4.5, nights: "9N/10D", locations: "2N Udaipur + 1N Durham + 1N Gujarat", price: i % 2 === 0 ? 15000 : 53000, total: i % 2 === 0 ? 30000 : 60000, oldPrice: i % 2 === 0 ? 20000 : null, discount: i % 2 === 0 ? "30% off" : null, image: "https://images.unsplash.com/photo-1586971800020-6c6e2b4e9e9b", }));

const titles = [
  "3 Days Golden Triangle Tour with Elephant Ride",
  "Full Day Sightseeing Tour of Jaipur with Elephant Ride at Amber",
  "Delhi, Jaipur, Jodhpur & Goa",
];

const allTours = Array.from({ length: 140 }, (_, i) => ({
  id: i + 1,
  title: titles[i % titles.length], // Cycle through the 3 titles
  rating: 4.5,
  nights: "9N/10D",
  locations: "2N Udaipur . 1N Durham . 1N Gujarat",
  price: i % 2 === 0 ? 15000 : 53000,
  total: i % 2 === 0 ? 30000 : 60000,
  oldPrice: i % 2 === 0 ? 20000 : null,
  discount: i % 2 === 0 ? "30% off" : null,
  image: Card,
}));

const MaduraiToursAndPackages = () => {
  const [page, setPage] = useState(1);
  const perPage = 16;
  const totalPages = Math.ceil(allTours.length / perPage);

  const displayedTours = allTours.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <div>
          <div className="mb-30">
            {/* Header */}
            {/* <div className="bg-indigo-600 text-white text-center py-2 text-sm">
        <strong>When you register & become a member</strong> — Unlock exclusive
        deals on tours, restaurants & shopping.
      </div> */}

            <div className=" mx-auto flex gap-10">
              {/* Sidebar */}
              <Sidebar />

              {/* Main Content */}
              <div className="flex-1">
                <div className="bg-[#5C73E5] relative mb-8 mt-12 h-14 text-white font-semibold flex items-center justify-between">
                  <p className="px-5 text-lg">
                    When you register & become a member
                  </p>
                  <img
                    src={YellowArrow}
                    alt=""
                    className="absolute right-[47%] z-10 h-full object-fill"
                  />
                  <img
                    src={RedRectangle}
                    alt=""
                    className="absolute right-0 w-[50%] h-full"
                  />
                  <p className="absolute right-0 px-5 ">
                    You unlock exclusive deals on tours, restaurants & <br></br>{" "}
                    shopping.
                  </p>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Madurai Tours & Packages
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Enjoy top tours & packages, directly offered by our trusted
                  travel partners - right at your doorstep.
                </p>

                <div className="w-full">
                  {/* Top Filters */}
                  <div className="flex flex-wrap items-stretch justify-between gap-1 mb-8 ">
                    {/* Travel Date */}
                    <div className="border-2 border-[#DDD] px-4 py-2 flex flex-col justify-center w-[39%]">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#DC3545] uppercase">
                          Travel Date
                        </span>
                        <ChevronDown size={18} className="text-[#DC3545]" />
                      </div>
                      <span className="text-gray-400 text-lg mt-1">
                        Select any date
                      </span>
                    </div>

                    {/* Rooms & Guests */}
                    <div className="border-2 border-[#DDD] px-4 py-2 flex flex-col justify-center w-[39%]">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#DC3545] uppercase">
                          Rooms & Guests
                        </span>
                        <ChevronDown size={18} className="text-[#DC3545]" />
                      </div>
                      <span className="text-gray-900 text-lg mt-1">
                        2 Adults, 1 Child,{" "}
                        <span className="font-bold">1 Room</span>
                      </span>
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#DC3545] text-lg text-white font-semibold px-8 w-[20%]">
                      SEARCH
                    </button>
                  </div>

                  {/* Results + Search Row */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Results text */}
                    <p className="text-lg font-normal">1–50 of 500 results</p>

                    {/* Search by Name input */}
                    <div className="flex items-stretch border border-[#DDD]">
                      <input
                        type="text"
                        placeholder="Search by Name"
                        className="px-4 py-3 text-md outline-none w-76 placeholder-gray-400"
                      />
                      <button className="bg-black text-white w-12 h-auto flex items-center justify-center">
                        <Search size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {displayedTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>

                <IndiaCountryTogether className="!py-12 " />

                {/* Pagination */}
                <div className="mt-8">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaduraiToursAndPackages;
// jhjjhhjjhgfghjkjhgfdfghjk