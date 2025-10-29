import React from "react";
import YellowCheck from "../../assets/images/IndiaCountry/Yellowcheck.png";

const AdvertiseJoin = () => {
  return (
    <div className="bg-[#DC3545] text-white py-12 mt-30">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        How to Join? It’s Easy
      </h2>

      {/* Info Boxes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
        {/* Step 1 */}
        <div className="bg-[#D13343] p-6">
          <p className="font-bold flex items-center gap-2 text-lg mb-3">
            <img src={YellowCheck} alt="check" className="w-5 h-5" />
            Fill & Submit
          </p>
          <p className="text-sm leading-relaxed text-white/90">
            Just Fill our the form to reach the Together Sales Team - We’d love
            to hear from you!
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#D13343] p-6">
          <p className="font-bold flex items-center gap-2 text-lg mb-3">
            <img src={YellowCheck} alt="check" className="w-5 h-5" />
            What Happens Next
          </p>
          <p className="text-sm leading-relaxed text-white/90">
            The Together Sales Team will review your application & contact you
            directly.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#D13343] p-6">
          <p className="font-bold flex items-center gap-2 text-lg mb-3">
            <img src={YellowCheck} alt="check" className="w-5 h-5" />
            You’re In - Time To Connect!
          </p>
          <p className="text-sm leading-relaxed text-white/90">
            Once you’re enrolled, you can start connecting directly with
            travellers & Together In India Members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseJoin;
