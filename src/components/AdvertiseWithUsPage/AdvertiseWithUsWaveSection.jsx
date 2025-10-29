import { div } from "framer-motion/client";
import React from "react";
import TopWave from "../../assets/images/TopWave.png";
import BottomWave from "../../assets/images/BottomWave.png";
import firstwaveimg from "../../assets/images/firstwaveimg.png";
import secondwave1 from "../../assets/images/secondwave1.png";
import secondwave2 from "../../assets/images/secondwave2.png";

const AdvertiseWithUsWaveSection = () => {
  return (
    <>
      <div className="relative">
        {/* wave section start*/}
        <div className="relative">
          <div className="bg-[#DC3545] text-white py-20">
            {/* === Top Section === */}
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 px-4 sm:px-6 md:px-8">
              {/* Left Image (30%) */}
              <div className="md:w-[25%] w-full flex justify-center md:justify-start">
                <img
                  src={firstwaveimg}
                  alt="India Landscape"
                  className="w-full shadow-lg object-cover mt-40"
                />
              </div>

              {/* Right Content (70%) */}
              <div className="md:w-[75%] w-full">
                <h2 className="text-3xl md:text-5xl font-bold leading-14 mb-9">
                  How we help you?
                </h2>
                <p className="text-lg leading-relaxed max-w-2xl">
                  Together in India is a curated open marketplace that connects
                  a diverse range of travel partners—including multiday tour
                  operators, airlines, hotels, restaurants, retail outlets,
                  fashion boutiques, and entertainment establishments—with
                  travelers seeking authentic Indian experiences. Serving as a
                  dedicated destination guide and search engine, the platform
                  focuses exclusively on multiday tours, iconic restaurants, and
                  genuine local shopping. By listing your business, you gain
                  access to a high-intent audience actively planning their
                  travel, along with the opportunity to grow brand visibility,
                  attract new customers, and connect directly with corporate
                  clients across India. With rich, authentic content—featuring
                  over 450 Indian destinations through compelling images and
                  videos—Together in India helps you drive qualified leads,
                  elevate brand perception, and showcase your offerings through
                  high-visibility listings and promotional features.
                </p>
              </div>
            </div>

            {/* === Bottom Section === */}
          </div>
          <div>
            <img src={TopWave} alt="" className="absolute w-full top-[-80px]" />
          </div>
          <div>
            <img
              src={BottomWave}
              alt=""
              className="absolute w-full bottom-[-42px]"
            />
          </div>
        </div>
        {/* wave section end */}
      </div>
    </>
  );
};

export default AdvertiseWithUsWaveSection;
