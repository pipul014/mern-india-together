import React from "react";
import { useState } from "react";
import Sidebar from "../../components/ThingsToDoDomestic/Sidebar";
import TourCard from "../../components/ThingsToDoDomestic/TourCard";
import Pagination from "../../components/ThingsToDoDomestic/Pagination";
import YellowArrow from "../../assets/images/ThingsToDoDomestic/YellowArrow.png";
import RedRectangle from "../../assets/images/ThingsToDoDomestic/RedRectangle.png";
import { ChevronDown, Heart, Search } from "lucide-react";
import Card from "../../assets/images/ThingsToDoDomestic/Card.png";
import IndiaCountryTogether from "../IndiaCountry/IndiaCountryTogether";
import IndiaCard1 from "../../assets/images/IndiaCountry/IndiaCard1.png";
import IndiaCard2 from "../../assets/images/IndiaCountry/IndiaCard2.png";
import IndiaCard3 from "../../assets/images/IndiaCountry/IndiaCard3.png";
import thumbUpIcon from "../../assets/images/destinations/thumb-up_svgrepo.com.svg";
import SidebarAttraction from "./SidebarAttraction";

const places = [
  {
    id: 1,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 2,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 3,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 4,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 5,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 6,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 7,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 8,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 9,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 10,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 11,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 12,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 13,
    image: IndiaCard1,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
    tag: "Popular Among Tourists",
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 17,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 18,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 19,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 20,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 21,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 22,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 23,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 24,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 25,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 16,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 14,
    image: IndiaCard2,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 15,
    image: IndiaCard3,
    title: "Qutub Minar, ",
    title2: "Chennai",
    rating: 4.5,
    reviews: 30,
  },
];

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

const allTours = Array.from({ length: 90 }, (_, i) => ({
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

const BookAGuideAttraction = () => {
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
              <SidebarAttraction />

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
                  Places to visit in Madurai
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Wander through a city steeped in centuries of history, where
                  iconic temples and timeless charm await at every turn. There's
                  so much to uncover, even our highest rating can’t do it
                  justice.
                </p>

                {/* Filters
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <select className="border border-gray-300 px-4 py-2 rounded-md">
              <option>Select any date</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 rounded-md">
              <option>2 Adults, 1 Child, 1 Room</option>
            </select>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              SEARCH
            </button>

            <div className="ml-auto flex items-center border border-gray-300 rounded-md">
              <input
                type="text"
                placeholder="Search by Name"
                className="px-3 py-2 outline-none"
              />
              <button className="bg-gray-200 px-3 py-2">🔍</button>
            </div>
          </div> */}

                <div className="w-full">
                  {/* Top Filters */}

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
                <div className="">
                  <div className="py-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {places.map((place) => (
                        <div
                          key={place.id}
                          className="bg-white shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                          {/* Image Section */}
                          <div className="relative">
                            <img
                              src={place.image}
                              alt={place.title}
                              className="w-full h-48 object-cover"
                            />

                            {/* Top Left Tag */}
                            {place.tag && (
                              <span className="absolute top-0 left-4 uppercase bg-[#DC3545] text-white text-xs font-semibold px-2 py-1 whitespace-pre-line leading-tight">
                                {/* {place.tag} */}
                                {"Popular\nAmong\nTourists"}
                              </span>
                            )}

                            {/* Wishlist Button */}
                            <button className="absolute top-2 right-2 bg-[#00000057] bg-opacity-50 text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1 hover:bg-opacity-70 transition">
                              <Heart size={14} /> Add To Wishlist
                            </button>

                            {/* Bottom Label */}
                            <span className="absolute bottom-[-5px] right-2 bg-white text-black text-xs font-semibold px-3 py-2 shadow">
                              3 Tours Inside
                            </span>
                          </div>

                          {/* Content Section */}
                          <div className="p-4">
                            <span className="inline-block bg-black text-white text-xs px-2 py-1 mb-2">
                              Historic
                            </span>
                            <h3 className=" text-lg">
                              1.{" "}
                              <span className="text-black font-bold">
                                {place.title}
                              </span>{" "}
                              <span className="text-gray-600 font-semibold">
                                {place.title2}
                              </span>
                            </h3>
                            <p className="text-sm text-gray-600 flex items-center mt-1">
                              {place.rating}{" "}
                              <img
                                src={thumbUpIcon}
                                alt="Thumb Up"
                                className="w-4 h-4 inline-block mx-2 object-contain"
                              />
                              <span className="text-gray-500 ml-1">
                                ({place.reviews} Reviews)
                              </span>
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do.
                            </p>

                            <button className="text-black font-semibold text-sm mt-3 flex items-center hover:underline">
                              Read More →
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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

export default BookAGuideAttraction;
