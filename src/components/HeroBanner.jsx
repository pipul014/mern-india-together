// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import slide1 from "../assets/home-hero-banner.png";

// const HeroBanner = () => {
//   const slides = [
//     {
//       id: 1,
//       image: slide1,
//       text: "Explore the endless possibilities of the world, All within your budget.",
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () =>
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//   return (
//     <section className="relative h-[480px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
//         style={{
//           backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
//                             linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%),
//                             url(${slides[current].image})`,
//         }}
//       />

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
//       >
//         <ChevronLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
//       >
//         <ChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
//       </button>

//       {/* Slide Text */}
//       <div className="absolute left-4 sm:left-8 md:left-16 lg:left-20 bottom-16 sm:bottom-24 lg:bottom-28 max-w-[90%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[820px] animate-fade-in">
//         <h1 className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-snug drop-shadow-lg">
//           {slides[current].text.split(",").map((line, idx) => (
//             <React.Fragment key={idx}>
//               {line}
//               <br className="hidden sm:block" />
//             </React.Fragment>
//           ))}
//         </h1>
//       </div>

//       {/* Lucky Draw Button */}
//       <div className="absolute left-4 sm:left-6 bottom-6 sm:bottom-10 md:bottom-14">
//         <button className="flex items-center justify-center bg-black/70 hover:bg-black rounded-full border border-white w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] flex-col text-[7px] sm:text-[8px] md:text-[8.75px] font-semibold text-white font-serif leading-none shadow-lg transition-all duration-300">
//           <span>LUCKY</span>
//           <span>DRAW!</span>
//         </button>
//       </div>

//       {/* Slide Dots */}
//       <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`w-[20px] sm:w-[25px] md:w-[30px] h-[4px] sm:h-[5px] md:h-[6px] rounded-full transition-all duration-300 ${
//               i === current ? "bg-white scale-110" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import home1 from "../assets/home-hero-banner.png";
import home2 from "../assets/hotel-hero.png";
import home3 from "../assets/kids-hero.png";
import home4 from "../assets/resturent-hero.png";
import home5 from "../assets/shopping-hero.png";
import home6 from "../assets/things-todo-hero.jpg";
import home7 from "../assets/tribal-hero.jpg";

const HeroBanner = ({ heading }) => {
  const location = useLocation();

  // ✅ Define images for Home
  const homeSlides = [
    { id: 1, image: home1, text: "Explore the world within your budget." },
    { id: 2, image: home2, text: "Discover hidden gems worldwide." },
    { id: 3, image: home3, text: "Unwind at the best destinations." },
    { id: 4, image: home4, text: "Adventure awaits — start your journey." },
    { id: 5, image: home5, text: "Where dreams meet destinations." },
    { id: 6, image: home6, text: "Explore, Relax, Repeat." },
    { id: 7, image: home7, text: "Travel. Explore. Live Fully." },
  ];

  // ✅ Define single hero image per route
  const pageHeroMap = {
    "/destinations": {
      image: home1,
      text: "Explore the world's most loved destinations.",
    },
    "/hotels": {
      image: home2,
      text: "Find comfort in every corner of the world.",
    },
    "/things-to-do": { image: home3, text: "Endless adventures await." },
    "/eat-drink": { image: home4, text: "Taste the world’s finest cuisines." },
    "/shop": {
      image: home5,
      text: "Discover local treasures and luxury brands.",
    },
    "/tribes-of-india": {
      image: home6,
      text: "Discover the vibrant cultures of India’s tribes.",
    },
    "/kids-special": { image: home7, text: "Adventures kids will love!" },
  };

  // ✅ Determine slides based on current route
  const currentPath = location.pathname;
  const slides =
    currentPath === "/"
      ? homeSlides
      : [pageHeroMap[currentPath] || homeSlides[0]];

  const [current, setCurrent] = useState(0);

  // Auto-slide only for home
  useEffect(() => {
    if (currentPath !== "/") return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, currentPath]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[480px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Slides Layered for Smooth Fade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), 
                              linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), 
                              url(${slide.image})`,
            opacity: index === current ? 1 : 0,
            // zIndex: index === current ? 10 : 1,
          }}
        />
      ))}

      {/* Arrows (only show on home) */}
      {currentPath === "/" && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
          </button>
        </>
      )}

      {/* Heading */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-20 bottom-16 sm:bottom-24 lg:bottom-28 max-w-[90%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[820px] animate-fade-in">
        <h1 className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-snug drop-shadow-lg">
          {heading || slides[current].text}
        </h1>
      </div>

      {/* Lucky Draw Button */}
      {currentPath === "/" && (
        <div className="absolute left-4 sm:left-6 bottom-6 sm:bottom-10 md:bottom-14">
          <button className="flex items-center justify-center bg-black/70 hover:bg-black rounded-full border border-white w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] flex-col text-[7px] sm:text-[8px] md:text-[8.75px] font-semibold text-white font-serif leading-none shadow-lg transition-all duration-300">
            <span>LUCKY</span>
            <span>DRAW!</span>
          </button>
        </div>
      )}

      {/* Dots (only for home) */}
      {currentPath === "/" && (
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-[20px] sm:w-[25px] md:w-[30px] h-[4px] sm:h-[5px] md:h-[6px] rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
