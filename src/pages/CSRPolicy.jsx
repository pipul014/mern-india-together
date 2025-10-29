import React, { useState } from "react";
import plusIcon from "../assets/plusIcon.png";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Applicability",
    content: `These Terms and Conditions ("Terms") govern the use of Together in India, including all services and features provided through the Website. By accessing or using the Website, you agree to be bound by these Terms in their entirety.`,
  },
  {
    title: "Eligibility to Use",
    content: `Users must be at least 18 years of age or use the website under parental guidance. You are responsible for ensuring compliance with all applicable laws while using the Website.`,
  },
  {
    title: "Content",
    content: `All content on this Website, including text, images, and logos, is owned by Together in India. Unauthorized reproduction or distribution is prohibited.`,
  },
  {
    title: "Website",
    content: `We strive to provide continuous access to our services, but Together in India is not liable for downtime or technical issues caused by third parties.`,
  },
  {
    title: "Bookings for Travel Agent & Vendors",
    content: `All bookings made through the Website are subject to confirmation and applicable vendor policies. Together in India acts as a facilitator and is not liable for third-party services.`,
  },
  {
    title: "Limited Liability of Together in India",
    content: `Together in India shall not be responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the Website or its services.`,
  },
];

const CSRPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) =>
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="relative w-full min-h-screen bg-white font-roboto flex flex-col">
      {/* Page Title */}
      <header className="pt-[160px] pb-6 px-[30px] text-center sm:text-left animate-fadeIn">
        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black leading-tight">
          CSR Policy
        </h1>
      </header>

      {/* Gray Background */}
      <main className="flex-1 w-full bg-[#E2E2E2] py-12 px-[20px] sm:px-[30px]">
        {/* White Content Container */}
        <section className="max-w-[1380px] mx-auto bg-white shadow-md  p-[20px] sm:p-[30px] flex flex-col divide-y divide-black/10 animate-slideUp">
          {sections.map((section, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className="transition-all duration-300">
                {/* Header */}
                <button
                  onClick={() => toggleSection(index)}
                  aria-expanded={isActive}
                  className="w-full flex justify-between items-center py-5 text-left px-2 sm:px-4 focus:outline-none hover:bg-gray-50 transition-all duration-300 group"
                >
                  <span className="text-[18px] sm:text-[20px] font-semibold text-black group-hover:text-red-600 transition-colors">
                    {section.title}
                  </span>

                  {/* Rotating Plus Icon */}
                  <img
                    src={plusIcon}
                    alt={isActive ? "Collapse section" : "Expand section"}
                    className={`w-5 h-5 transform transition-transform duration-300 ease-in-out ${
                      isActive ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Collapsible Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-5 px-2 sm:px-4">
                    <p className="text-[15px] sm:text-[17px] text-black/90 leading-relaxed text-justify tracking-[0.2px]">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />

      {/* Subtle Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }

          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default CSRPolicy;
