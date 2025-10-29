import React from "react";

const BusinessEnquirySection = () => {
  return (
    <div className="mt-28 px-4 sm:px-6 md:px-8">
      <h2 className="text-black text-[48px] font-roboto font-semibold leading-tight">
        Inspire your next move, Advertise with Us.
      </h2>

      <p className="w-[579px] text-black text-[18px] font-roboto font-normal leading-6 py-2">
        Connect with Together In India sales team using the link below <br />&
        partner with us to connect directly with travellers & unlock new growth.
      </p>

      <div className="flex justify-start items-start gap-[50px] py-1">
        {/* New Business */}
        <div className="flex flex-col items-start gap-[10px]">
          <span className="text-black text-[14px] font-roboto font-normal">
            New Business
          </span>
          <button className="w-[190px] h-[50px] px-[43px] py-[5px] bg-[#DC3545] text-white text-[14px] font-roboto font-medium hover:bg-[#b02a37] transition-colors">
            SEND ENQUIRY
          </button>
        </div>

        {/* Existing Business */}
        <div className="flex flex-col items-start gap-[10px]">
          <span className="text-black text-[14px] font-roboto font-normal">
            Existing Business
          </span>
          <button className="w-[190px] h-[50px] px-[43px] py-[5px] bg-[#DC3545] text-white text-[14px] font-roboto font-medium hover:bg-[#b02a37] transition-colors">
            SEND ENQUIRY
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessEnquirySection;
