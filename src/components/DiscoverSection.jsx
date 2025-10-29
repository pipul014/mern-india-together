import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // ✅ icons for up/down arrows
import discover from "../assets/images/destinations/discover.png";
import discover1 from "../assets/images/destinations/discover-1.png";
import discover2 from "../assets/images/destinations/discover-2.png";
import discover3 from "../assets/images/destinations/discover-3.png";
import locationIcon from "../assets/images/destinations/location-pin-alt-1_svgrepo.com.svg";

import thumbUpIcon from "../assets/images/destinations/thumb-up_svgrepo.com.svg";

const temples = [
  {
    name: "Badami Caves",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Ancient rock-cut temples showcasing India’s rich art & heritage.",
    location: "Badami, Karnataka",
    image: discover,
  },
  {
    name: "Mallikarjuna Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Ancient rock-cut temples showcasing India’s rich art & heritage.",
    location: "Badami, Karnataka",
    image: discover,
  },
  {
    name: "Sri Chennakeshava Swamy Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Ancient rock-cut temples showcasing India’s rich art & heritage.",
    location: "Badami, Karnataka",
    image: discover2,
  },
  {
    name: "Cheluvanarayana Swamy Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Ancient rock-cut temples showcasing India’s rich art & heritage.",
    location: "Badami, Karnataka",
    image: discover1,
  },
  {
    name: "Chennakeshava temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: The star-shaped temple is a World UNESCO Heritage site.",
    location: "Somanathapura, near Mysore",
    image: discover1,
  },
  {
    name: "Durga Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: The temple is known for its unique shade and is a part of a cluster of ancient Hindu temples.",
    location: "Aihole, Karnataka",
    image: discover3,
  },
  {
    name: "Choachagudda",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: The small village is famous for ancient Hindu temples dedicated to Banashankari & Virabadhreshwara.",
    location: "Choachagudda, near Belur",
    image: discover,
  },
  {
    name: "Sri Siddeshwara Swamy Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Ancient rock-cut temples showcasing India’s rich art & heritage.",
    location: "Badami, Karnataka",
    image: discover,
  },
  {
    name: "Hoysaleswara Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Built in soapstone, showcasing detailed carvings of Indian epics.",
    location: "Halebidu, Karnataka",
    image: discover3,
  },
  {
    name: "Virupaksha Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: Dedicated to Lord Shiva, part of the Hampi Group of Monuments.",
    location: "Hampi, Karnataka",
    image: discover2,
  },
  {
    name: "Durga Temple",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: The temple is known for its unique shade and is a part of a cluster of ancient Hindu temples.",
    location: "Aihole, Karnataka",
    image: discover,
  },
  {
    name: "Choachagudda",
    rating: 4.5,
    reviews: 30,
    description:
      "Timeless Wonder: The small village is famous for ancient Hindu temples dedicated to Banashankari & Virabadhreshwara.",
    location: "Choachagudda, near Belur",
    image: discover3,
  },
];

const regions = ["North", "South", "East", "West", "Central"];
const TempleCard = ({ temple }) => (
  <div className="w-64 flex flex-col gap-4">
    {/* Image */}
    <div className="relative h-40">
      <img
        src={temple.image}
        alt={temple.name}
        className="w-full h-full object-cover"
      />
      {/* Wishlist badge (kept simple now) */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-30 rounded-full px-3 py-1 flex items-center gap-2">
        <span className="text-white text-sm">Add To Wishlist</span>
      </div>
    </div>

    {/* Details */}
    <div className="flex flex-col gap-2">
      <h3 className="text-black font-semibold text-lg">{temple.name}</h3>

      {/* ✅ Rating row with thumb-up beside rating */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm flex items-center gap-1">
          {temple.rating}
          <img
            src={thumbUpIcon}
            alt="Thumb Up"
            className="w-4 h-4 inline-block object-contain"
          />
        </span>
        <span className="text-gray-400 text-sm">
          ({temple.reviews} Reviews)
        </span>
      </div>

      <p className="text-gray-600 text-sm">
        <span className="font-bold">Timeless Wonder:</span>
        {temple.description.replace("Timeless Wonder:", "")}
      </p>
      {/* Location */}
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <img
          src={locationIcon}
          alt="Location"
          className="w-4 h-4 object-contain"
        />
        {temple.location}
      </div>
    </div>
  </div>
);
const TempleGrid = () => {
  const [activeRegion, setActiveRegion] = useState("South");
  const [showAll, setShowAll] = useState(false);

  const visibleTemples = showAll ? temples : temples.slice(0, 10);

  return (
    <section className="flex flex-col items-center gap-6 px-4 sm:px-6 md:px-8 py-10 w-full">
      {/* Heading */}
      <div className="flex flex-col items-start gap-2 w-full">
        <h2 className="text-left text-black text-[32px] font-bold font-roboto">
          Discover the lesser-known wonders
        </h2>
        <p className="text-[#4E4E4E] text-[20px] font-roboto max-w-[1200px]">
          Alongside your regular tours, we’d love to recommend a few hidden gems
          that are lesser known but truly worth exploring.
        </p>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap gap-3 justify-start w-full mt-4">
        {regions.map((region, i) => (
          <button
            key={i}
            onClick={() => setActiveRegion(region)}
            className={`h-[50px] px-[36px] py-[16px] flex justify-center items-center gap-[10px] rounded transition-all duration-300 ${
              activeRegion === region
                ? "bg-[#2A2929] text-white"
                : "bg-white text-black border border-[#D3D3D3] hover:shadow-md"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Card Grid (2 Rows × 5 Cards on Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 justify-items-center mt-8 w-full">
        {visibleTemples.map((temple, index) => (
          <TempleCard key={index} temple={temple} />
        ))}
      </div>

      {/* View More / Less Button */}
      {temples.length > 10 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            {showAll ? (
              <>
                View Less <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                View More <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default TempleGrid;
