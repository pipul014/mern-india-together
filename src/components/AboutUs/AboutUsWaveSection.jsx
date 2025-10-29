import { div } from "framer-motion/client";
import React from "react";
import TopWave from "../../assets/images/TopWave.png";
import BottomWave from "../../assets/images/BottomWave.png";
import firstwaveimg from "../../assets/images/firstwaveimg.png";
import secondwave1 from "../../assets/images/secondwave1.png";
import secondwave2 from "../../assets/images/secondwave2.png";

const AboutUsWaveSection = () => {
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
                  The care you deserve from the <br /> people you trust.
                </h2>
                <p className="text-lg leading-relaxed max-w-2xl">
                  Together In India offers authentic, budget-friendly travel
                  experiences rooted in culture, community, and connection. We
                  help travelers explore beyond attractions — city by city —
                  discovering India’s heart through local stays, food, and
                  stories.
                  <br />
                  More than sightseeing, it’s about meaningful journeys and
                  unforgettable memories, guided by those who know and love
                  India deeply.
                </p>
              </div>
            </div>

            {/* === Bottom Section === */}
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mt-30 px-4 sm:px-6 md:px-8">
              {/* Left Images (30%) */}
              <div className="md:w-[25%] w-full grid grid-cols-2 gap-3 justify-items-start mt-22">
                {[secondwave1, secondwave2, secondwave2, secondwave1].map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Team Member"
                      className="w-full object-cover shadow-md"
                    />
                  )
                )}
              </div>

              {/* Right Content (70%) */}
              <div className="md:w-[75%] w-full">
                <h3 className="text-3xl md:text-5xl font-bold mb-9">
                  Meet Together Team
                </h3>
                <p className="text-lg leading-relaxed max-w-2xl">
                  We are growing fast. <br />
                  Join Our Team.
                </p>
              </div>
            </div>
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

        <div className="my-28 px-4 sm:px-6 md:px-8">
          <h1 className="text-5xl font-bold my-10">
            Inspire your next move, Advertise with Us.
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Partner with us to connect directly with travellers & <br /> unlock
            new growth.
          </p>
          <button className="bg-[#DC3545] text-lg uppercase text-white font-medium px-8 py-3 cursor-pointer">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsWaveSection;
