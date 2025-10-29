import React from "react";

const BenefitsSection = () => {
  return (
    <div className=" mt-28 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h2 className="text-black text-[48px] font-roboto font-medium leading-tight">
        Discover what sets us apart & the benefits you gain.
      </h2>

      {/* Tabs */}
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-center justify-start gap-[70px]">
          {[
            "Tour Operator",
            "Airlines",
            "Hotels",
            "Restaurants",
            "Retail Stores",
          ].map((tab, index) => (
            <div
              key={index}
              className={`h-[28px] pb-[5px] flex items-end justify-center cursor-pointer ${
                tab === "Tour Operator"
                  ? "border-b-[3px] border-[#DC3545]"
                  : "border-b-[3px] border-transparent"
              }`}
            >
              <span className="text-black text-[16px] font-roboto font-medium leading-6">
                {tab}
              </span>
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div className="w-[1280px] p-[30px] bg-[#F2F2F2] flex flex-col items-start justify-start gap-[30px]">
          <div className="flex justify-between items-start w-full">
            {/* Left Section */}
            <div className="w-[720px] pt-[22px] flex flex-col items-start justify-start gap-[10px]">
              <p className="text-black text-[20px] font-roboto font-normal leading-[30px]">
                Get unlimited leads & attract new customers.
              </p>
              <p className="text-black text-[16px] font-roboto font-normal leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tour
                operators, hoteliers, airlines, restaurant owners, and retailers
                — we help grow your market reach, connect with genuine
                travellers, and enhance your brand value.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-[310px] flex flex-col items-start justify-center gap-[10px]">
              <h4 className="text-black text-[14px] font-roboto font-medium">
                Benefits
              </h4>

              <div className="flex flex-col items-start justify-start gap-4">
                {[
                  "Unlimited Leads",
                  "Grow Your Brand",
                  "Association Matters",
                  "Engage Directly",
                  "Manage Pricing",
                  "Freedom To Enhance",
                  "Exclusive Deal Sharing",
                  "Customer Behavior",
                  "Multi-Tour Enquiry Management",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`pb-[2px] inline-flex items-center gap-[10px] ${
                      benefit === "Unlimited Leads"
                        ? "border-b border-[#DC3545]"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-black ${
                        benefit === "Unlimited Leads"
                          ? "text-[20px]"
                          : "text-[14px]"
                      } font-roboto font-normal`}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <h3 className="text-[#DC3545] text-[72px] font-roboto font-bold">
            Unlimited Leads
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
