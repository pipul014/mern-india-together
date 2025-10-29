import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bgImage from "../assets/images/explore/source_Teens.jpg";

const ExploreDestinations = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slides = [
    {
      id: 1,
      image: "https://placehold.co/1440x650", // Replace this with bgImage if you want a fixed bg
      title: "New Delhi",
      description:
        "Not many cities have managed to retain their historic features quite successfully as Delhi, the capital of India. The longer you stay, the more you'll experience Delhi's allure, book early with our Early Bird Deals for iconic hotels and unforgettable tours at unbeatable prices!",
    },
    {
      id: 2,
      image: "https://placehold.co/1440x650",
      title: "Jaipur",
      description:
        "Discover the royal charm of Jaipur’s forts and palaces. Enjoy the rich Rajasthani culture with unbeatable off-season prices and fewer crowds!",
    },
    {
      id: 3,
      image: "https://placehold.co/1440x650",
      title: "Kerala",
      description:
        "Experience the tranquil backwaters and lush greenery of Kerala. Perfect for those seeking peace, Ayurveda, and nature’s charm.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="flex flex-col gap-8 mt-8 w-full">
      {/* Heading */}
      <div className="px-4 md:px-8 flex flex-col gap-2 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          Explore Full Destination at Half-Price Tag
        </h2>
        <p className="text-[#4E4E4E] text-base md:text-lg lg:text-xl font-normal max-w-[1200px]">
          Travel smart — enjoy your favourite destinations at half the price,
          with luxury stays, fewer crowds, and all the adventure you crave.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full h-[380px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden bg-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})`, // Use bgImage here
          }}
        ></div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition transform hover:scale-110 z-20"
        >
          <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition transform hover:scale-110 z-20"
        >
          <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Left Panel: Months + Description */}
        <div className="absolute left-4 sm:left-10 md:left-14 top-6 sm:top-10 flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-12">
          {/* Month List */}
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible scrollbar-none">
            {months.map((m, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i % slides.length)}
                className={`text-white text-sm sm:text-lg md:text-xl font-semibold transition pb-1 sm:border-b-2 ${
                  i % slides.length === current
                    ? "border-white"
                    : "border-transparent hover:border-white/40"
                } whitespace-nowrap`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Destination Info Box */}
          <div className="w-[85vw] sm:w-[320px] md:w-[380px] bg-[#DC3545]/85 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 h-auto sm:h-[310px] rounded-md backdrop-blur-sm z-10">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    {slides[current].title}
                  </h3>
                  <div className="w-10 sm:w-12 h-[3px] bg-white mt-1"></div>
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                {slides[current].description}
              </p>
            </div>
            <button className="text-white text-xs sm:text-sm underline hover:opacity-80 transition self-start">
              Discover the city →
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer transition w-4 sm:w-[30px] h-[4px] sm:h-[6px] rounded-full ${
                i === current ? "bg-white" : "bg-white/30"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
