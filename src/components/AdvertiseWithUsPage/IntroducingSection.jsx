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
            Advertise with Us
          </h4>

          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
              We keep it real.
            </h2>

            <p className="text-[18px] leading-6 text-black">
              We connect your business with the world of travellers. Whether
              you're a tour operator, hotelier, airline, restaurant owner, or
              retailer — we help you expand your market reach, engage with
              authentic travellers, and elevate your brand presence.
            </p>

            <button className="bg-[#DC3545] text-white text-sm font-bold uppercase px-5 py-3 w-fit hover:bg-[#b42a38] transition-all">
              Get Started
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
        Be part of the growing network of trusted brands on
        <br />
        Together In India.
      </p>
    </section>
  );
};

export default IntroducingSection;
