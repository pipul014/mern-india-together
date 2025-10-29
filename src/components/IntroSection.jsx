import React from "react";

export default function IntroSection() {
  return (
    <section className="w-full bg-[#DC3545] py-20 flex flex-col items-center gap-24 text-black">
      {/* Top Section */}
      <div className="w-[1380px] flex justify-between items-start flex-wrap">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-3 max-w-[828px]">
          <h4 className="text-white text-lg font-bold uppercase">
            Introducing
          </h4>
          <h1 className="text-white text-5xl font-semibold leading-snug">
            India’s first platform connecting travellers directly with trusted
            travel partners.
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            At Together In India, we understand what it takes to thrive in the
            tourism industry because our founders, Rajeev and Jyoti, have lived
            it. With over 30 years of combined experience in travel and tourism,
            they’ve seen both the business's highs and challenges. They’ve
            journeyed across India, city by city, gaining first-hand insights
            before sharing their knowledge with others. Drawing from this deep
            experience, they built Together In India with powerful, innovative
            features designed to meet the real needs of today’s travel
            businesses. We know what travelers are looking for—and more
            importantly, how to connect them with you, helping you overcome your
            marketing and operational challenges with confidence.
          </p>
          <button className="mt-4 bg-white text-[#DC3545] font-bold text-sm uppercase px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </div>

        {/* Right Image Card */}
        <div className="w-[486px] h-[486px] relative bg-white rounded-2xl shadow-xl flex justify-center items-center overflow-hidden mt-10 md:mt-0">
          <div className="relative">
            <img
              src="https://placehold.co/180x344"
              alt="Travel card"
              className="rounded-md shadow-md"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#DC3545] rounded-full"></div>
            </div>
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#DC3545] font-['Indie_Flower'] text-base text-center">
            Reach the world of travellers with us.
          </p>
        </div>
      </div>

      {/* Center Tagline */}
      <div className="text-center text-white text-[40px] font-light leading-[52px] max-w-[909px]">
        Trusted travel insights from +500 cities
        <br />
        powered by strong partnerships.
      </div>

      {/* Logo Row (placeholder icons/images) */}
      <div className="w-full flex justify-center items-center flex-wrap gap-9">
        <div className="w-[27.7px] h-[32.17px] bg-white/90"></div>
        <div className="w-[13.4px] h-[11.62px] bg-white/90"></div>
        <div className="w-[10.72px] h-[11.62px] bg-white/90"></div>
        <div className="w-[9.83px] h-[11.62px] bg-white/90"></div>
        <div className="w-[11.62px] h-[11.62px] bg-white/90"></div>
        <div className="w-[14.3px] h-[11.62px] bg-white/90"></div>
        <div className="w-[19.66px] h-[11.62px] bg-white/90"></div>
        <img
          src="https://placehold.co/115x52"
          alt="logo"
          className="h-[52px]"
        />
        <img
          src="https://placehold.co/104x68"
          alt="logo"
          className="h-[68px]"
        />
        <img
          src="https://placehold.co/162x49"
          alt="logo"
          className="h-[49px]"
        />
        <img src="https://placehold.co/71x70" alt="logo" className="h-[70px]" />
        <img src="https://placehold.co/77x40" alt="logo" className="h-[40px]" />
        <img
          src="https://placehold.co/101x51"
          alt="logo"
          className="h-[51px]"
        />
        <img src="https://placehold.co/95x60" alt="logo" className="h-[60px]" />
      </div>
    </section>
  );
}
