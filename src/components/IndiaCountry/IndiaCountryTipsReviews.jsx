import React, { useState } from "react";
import LogoList from "../../assets/images/IndiaCountry/LogoList.png";

const IndiaCountryTipsReviews = () => {
  const [activeTab, setActiveTab] = useState("tips");

  const womenRatings = [
    { label: "Yes", value: 70, color: "text-green-500" },
    { label: "Maybe", value: 20, color: "text-yellow-500" },
    { label: "No", value: 10, color: "text-red-500" },
  ];

  const menRatings = [
    { label: "Yes", value: 80, color: "text-green-500" },
    { label: "Maybe", value: 20, color: "text-yellow-500" },
    { label: "No", value: 0, color: "text-red-500" },
  ];

  const travelQuestions = [
    {
      q: "What are some of the less crowded places in Delhi?",
      a: "Great Question - Delhi is home to 5 million people; it’s hard to find many places away from the crowd. You can try Karol Bagh.",
      author: "Author",
    },
    {
      q: "What are some of the less crowded places in Delhi?",
      a: "Great Question - Delhi is home to 5 million people its hard to find many places away from crowd you can try Karol Bagh. The cultural city is good but transport is bad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "Author",
    },
    {
      q: "Best place to eat in Delhi",
      a: "Great Question - Delhi is home to 5 million people; it’s hard to find many places away from the crowd. You can try Karol Bagh.",
      author: "Author",
    },
  ];

  const reviews = [
    {
      author: "Traveler 1",
      review:
        "India is a beautiful country with diverse cultures and friendly people. I had a great time exploring Delhi and Jaipur!",
    },
    {
      author: "Traveler 2",
      review:
        "Safety was fine overall. Just take normal precautions and you’ll be good. Food and people are amazing!",
    },
  ];

  const RatingCircle = ({ value, label, color }) => (
    <div className="flex flex-col items-center">
      <div
        className={`relative flex items-center justify-center w-16 h-16 rounded-full border-4 ${
          color === "text-green-500"
            ? "border-green-500"
            : color === "text-yellow-500"
            ? "border-yellow-500"
            : "border-red-500"
        }`}
      >
        <span className="text-sm font-semibold">{value}%</span>
      </div>
      <span className="mt-2 text-sm font-medium">{label}</span>
    </div>
  );

  return (
    <>
      <div className="mb-20">
        <div className="mb-5">
          <h1 className="text-3xl font-bold">India Travel Tips & Reviews</h1>
          <p className="text-gray-700 mt-1">
            Explore in-depth, the top attractions of India.
          </p>
        </div>

        {/* tips and reviews tab */}
        <div className="">
          {/* Tabs */}
          <div className="flex mb-4">
            <button
              onClick={() => setActiveTab("tips")}
              className={` py-1 text-md font-medium border-b-3 ${
                activeTab === "tips"
                  ? "border-[#DC3545] border-b-3"
                  : "border-transparent text-black"
              }`}
            >
              Travel Tips
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`ml-7 text-md font-medium border-b-3 ${
                activeTab === "reviews"
                  ? "border-[#DC3545] border-b-3"
                  : "border-transparent text-black"
              }`}
            >
              Reviews
            </button>
            <button className="ml-auto text-sm underline">VIEW ALL</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mt-7 items-center">
            {/* Left side */}
            <div className="bg-[#F5F5F5] rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-900">
                Is <span className="font-extrabold">India</span> safe to visit?
              </h2>
              <p className="mt-1 font-medium text-md">Yes it’s safe!</p>

              <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Rated by Women</h3>
                <div className="flex justify-between">
                  {womenRatings.map((item, i) => (
                    <RatingCircle key={i} {...item} />
                  ))}
                </div>
              </div>

              <div className="mt-4 border-t-2 border-gray-300 pt-3">
                <h3 className="text-sm font-semibold mb-2">Rated by Men</h3>
                <div className="flex justify-between">
                  {menRatings.map((item, i) => (
                    <RatingCircle key={i} {...item} />
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold">
                  Take normal security precautions
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  The safety rating comes from traveler’s own experiences and is
                  reviewed independently.
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="md:col-span-3">
              {activeTab === "tips"
                ? travelQuestions.map((item, i) => (
                    <div key={i} className="flex gap-24 mb-5 pb-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={LogoList}
                          alt=""
                          className="bg-gray-100 rounded-full"
                        />
                        <p className="text-md ml-3">{item.author}</p>
                      </div>
                      <div>
                        <p className="text-md font-semibold text-red-600">
                          Que: {item.q}
                        </p>
                        <p className="text-md pb-2 mt-1 border-b-2 border-gray-200">
                          Ans: {item.a}
                        </p>
                      </div>
                    </div>
                  ))
                : reviews.map((item, i) => (
                    <div key={i} className="flex gap-4 mb-5 border-b pb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600">
                        <span>🧳</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.author}</p>
                        <p className="text-sm text-gray-700 mt-1">
                          {item.review}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaCountryTipsReviews;
