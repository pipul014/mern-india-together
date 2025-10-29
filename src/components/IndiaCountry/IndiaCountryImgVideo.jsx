import React, { useState } from "react";
import ImageTab1 from "../../assets/images/IndiaCountry/ImageTab1.png";
import ImageTab2 from "../../assets/images/IndiaCountry/ImageTab2.png";
import ImageTab3 from "../../assets/images/IndiaCountry/ImageTab3.png";
import ImageTab4 from "../../assets/images/IndiaCountry/ImageTab4.png";
import ImageTab5 from "../../assets/images/IndiaCountry/ImageTab5.png";
import YellowCheck from "../../assets/images/IndiaCountry/Yellowcheck.png";
import Go from "../../assets/images/IndiaCountry/Go.png";

const imagesData = [
  {
    src: ImageTab1,
    title: "Two Gaba Women",
    desc: "Enjoying the festival of gaba, Madurai.",
    large: true,
  },
  {
    src: ImageTab2,
    title: "Meenakshi Temple",
    desc: "Bird Eye View of Meenakshi Temple",
  },
  {
    src: ImageTab3,
    title: "Gandhi Temple",
    desc: "Stick of Nawabs",
  },
  {
    src: ImageTab4,
    title: "Meenakshi Temple",
    desc: "Bird Eye View of Meenakshi Temple",
  },
  {
    src: ImageTab5,
    title: "Meenakshi Temple",
    desc: "Bird Eye View of Meenakshi Temple",
    overlay: "+30 Images",
  },
];

const tabs = ["Images", "Videos"];

const IndiaCountryImgVideo = () => {
  const [activeTab, setActiveTab] = useState("Images");

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">
          Capturing India lifestyles on lenses telling the story of India.
        </h1>
        <p className="text-gray-700 mt-1">
          Telling the story of Madurai’s culture, people, and traditions through
          visuals.
        </p>
      </div>
      <div className="">
        {/* Tabs */}
        <div className="flex mb-6 mr-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-1 py-2 mr-6 mt-3 font-semibold ${
                activeTab === tab
                  ? "border-b-4 border-red-600 text-red-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        {activeTab === "Images" && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Left side - big image */}
            <div className="relative overflow-hidden">
              <img
                src={imagesData[0].src}
                alt={imagesData[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-2 w-full  bg-opacity-50 text-white p-2 text-sm">
                <p className="font-semibold">{imagesData[0].title}</p>
                <p>{imagesData[0].desc}</p>
              </div>
            </div>

            {/* Right side - 4 small images in 2x2 grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {imagesData.slice(1, 5).map((img, idx) => (
                <div key={idx} className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-2 w-full bg-opacity-50 text-white p-2 text-sm">
                    <p className="font-semibold">{img.title}</p>
                    <p>{img.desc}</p>
                  </div>
                  {/* {img.overlay && (
            <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-sm font-semibold">
              {img.overlay}
            </div>
          )} */}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Section
      <div className="bg-[#DC3545] text-white p-6 grid grid-cols-1 md:grid-cols-4 gap-4 ">

        <div>
          <p className="font-bold text-xl mb-2">✔ Must Do</p>
          <p className="text-sm">
            For Madurai, one can explore the city in 2 days starting with
            meenakshi temple, gandhi museum, circuit house and gold market in
            the old part of the city, near meenakshi temple.
          </p>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">✔ Eat & Drink</p>
          <p className="text-sm">
            Try masala dosa, traditional chicken thali in madurai, served on
            banana tree leaves. South Indian filter coffee is a must try.
          </p>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">✔ Shop</p>
          <p className="text-sm">
            Madurai have souvenir shops selling household. Madurai world famous
            silk sarees are a must buy.
          </p>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">✔ Best Time</p>
          <p className="text-sm">
            • High Season - Mar to Sept <br />
            • Low Season - Oct to Feb
          </p>
        </div>
      </div> */}

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 my-24 overflow-hidden gap-1.5">
          {/* Left Section */}
          <div className="bg-[#DC3545] text-white flex flex-col justify-center items-center p-6 md:col-span-1">
            <p className="text-3xl font-medium">On the</p>
            <p className="text-6xl font-bold leading-none mt-3">
              <img src={Go} alt="" />
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-[#DC3545] text-white p-6 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="font-bold flex items-center gap-2 text-lg mb-2">
                <img src={YellowCheck}></img>
                Must Do
              </p>
              <p className="text-sm leading-relaxed">
                For Madurai, one can explore the city in 2 days starting with
                Meenakshi Temple, Gandhi Museum, Circuit House and Gold Market
                in the old part of the city, near Meenakshi Temple.
              </p>
            </div>

            <div>
              <p className="font-bold flex items-center gap-2 text-lg mb-2">
                <img src={YellowCheck}></img>
                Eat & Drink
              </p>
              <p className="text-sm leading-relaxed">
                Try masala dosa, traditional chicken thali in Madurai, served on
                banana tree leaves. South Indian filter coffee is a must try.
              </p>
            </div>

            <div>
              <p className="font-bold flex items-center gap-2 text-lg mb-2">
                <img src={YellowCheck}></img>
                Shop
              </p>
              <p className="text-sm leading-relaxed">
                Madurai has souvenir shops selling household goods. Madurai’s
                world-famous silk sarees are a must-buy.
              </p>
            </div>

            <div>
              <p className="font-bold flex items-center gap-2 text-lg mb-2">
                <img src={YellowCheck}></img>
                Best Time
              </p>
              <ul className="text-sm leading-relaxed list-disc list-inside">
                <li>High Season - Mar to Sept</li>
                <li>Low Season - Oct to Feb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaCountryImgVideo;
