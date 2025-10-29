import React from "react";
import T from "../../assets/images/t.png";

const IntroducingSection = () => {
  return (
    <section className="flex flex-col items-center gap-24">
      {/* Top Row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start">
        {/* Left Content */}
        <div className="flex flex-col gap-3 max-w-[60%]">
          <h4 className="text-[#DC3545] text-[20px] font-bold uppercase">
            Introducing
          </h4>

          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
              India’s first platform connecting travellers directly with trusted
              travel partners.
            </h2>

            <p className="text-[18px] leading-6 text-black">
              At Together In India, we understand what it takes to thrive in the
              tourism industry because our founders, Rajeev and Jyoti, have
              lived it. With over 30 years of combined experience in travel and
              tourism, they’ve seen both the business's highs and challenges.
              They’ve journeyed across India, city by city, gaining first-hand
              insights before sharing their knowledge with others. Drawing from
              this deep experience, they built Together In India with powerful,
              innovative features designed to meet the real needs of today’s
              travel businesses. We know what travelers are looking for—and more
              importantly, how to connect them with you, helping you overcome
              your marketing and operational challenges with confidence.
            </p>

            <button className="bg-[#DC3545] text-white text-sm font-bold uppercase px-5 py-3 w-fit hover:bg-[#b42a38] transition-all">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Image Box */}
        <div className="relative w-[486px] h-[486px] bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="absolute left-[153px] top-[54px]">
            <img src={T} alt="Introducing" className="rounded-lg" />
            <div className="absolute left-[70px] top-[153px] w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
              <div className="w-10 h-10 bg-[#DC3545] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-play-icon lucide-play text-white"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="absolute bottom-6 left-[123px] text-[#DC3545] text-[16px] font-['Indie_Flower']">
            Reach the world of travellers with us.
          </p>
        </div>
      </div>

      {/* Middle Text */}
      <p className="max-w-[909px] text-center text-[#232121] text-[40px] font-light leading-[52px]">
        Trusted travel insights from +500 cities
        <br />
        powered by strong partnerships.
      </p>
    </section>
  );
};

export default IntroducingSection;
