import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

// Follow us images
import facebook from "../assets/images/footer/facebook.png";
import insta from "../assets/images/footer/insta.png";
import youtube from "../assets/images/footer/youtube.png";
import linkedin from "../assets/images/footer/linkedin.jpg";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", img: facebook, url: "https://facebook.com" },
    { name: "Instagram", img: insta, url: "https://instagram.com" },
    { name: "LinkedIn", img: linkedin, url: "https://linkedin.com" },
    { name: "YouTube", img: youtube, url: "https://youtube.com" },
  ];

  // ✅ Footer sections (dynamic + linkable)
  const footerSections = [
    {
      title: "Support",
      links: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Sitemap", path: "/sitemap" },
        { name: "Business Agreement", path: "/business-agreement" },
        { name: "Disclaimer", path: "/disclaimer" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "CSR", path: "/" },
        { name: "News & Announcement", path: "/news" },
      ],
    },
    {
      title: "Work with Us",
      links: [
        { name: "Travel Trade", path: "/travel-trade" },
        { name: "Advertise", path: "/advertise" },
        { name: "Guide Registration", path: "/guide-registration" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      {/* Top Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col gap-10">
        {/* Logo + Title */}
        {/* <div className="flex flex-row items-center gap-4 text-center sm:text-left animate-fadeIn">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0"
          />
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-roboto whitespace-nowrap">
            Together In India
          </h2>
        </div> */}

        {/* Logo + Title */}
        <Link
          to="/"
          className="flex flex-row items-center gap-4 text-center sm:text-left animate-fadeIn"
        >
          <img
            src={assets.logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0"
          />
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-roboto whitespace-nowrap">
            Together In India
          </h2>
        </Link>

        {/* Main Footer Body */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Left Section */}
          <div className="flex flex-col gap-8 sm:gap-10 max-w-[500px] animate-fadeIn delay-100">
            {/* Description */}
            <p className="text-white text-sm sm:text-base font-medium leading-relaxed sm:leading-6 text-center sm:text-left">
              We proudly connect our identity to Devanagari—the mother of all
              scripts that links Indians to their ancient culture, heritage, and
              roots. At Together In India, our logo draws inspiration from the
              first letter of the Devanagari script, reflecting our deep respect
              for this timeless legacy.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <span className="text-white font-bold text-xs tracking-wide">
                FOLLOW US:
              </span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-8 h-8 bg-red-600 rounded-full flex justify-center items-center transition-transform hover:scale-110 hover:bg-red-700"
                  >
                    <img
                      src={social.img}
                      alt={social.name}
                      className="w-4.5 h-4.5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Columns */}
          <div className="flex flex-wrap justify-between lg:justify-end gap-10 sm:gap-16 lg:gap-20 animate-fadeIn delay-200">
            {footerSections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 sm:gap-5 min-w-[130px]"
              >
                <span className="text-red-600 font-bold uppercase text-sm sm:text-base">
                  {section.title}
                </span>
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="text-white text-sm sm:text-base font-normal hover:text-red-600 transition cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-700 bg-black py-4 flex items-center justify-start px-4 sm:px-8 animate-fadeIn delay-300">
        <span className="flex items-center text-white text-[11px] sm:text-xs font-normal gap-1">
          <span className="text-[16px] sm:text-[18px]">©</span>
          <span>2025 Together in India Travels. All rights reserved.</span>
        </span>
      </div>

      {/* Subtle Tailwind Animations */}
      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 0.8s forwards;
          }
          .animate-fadeIn.delay-100 { animation-delay: 0.1s; }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
          .animate-fadeIn.delay-300 { animation-delay: 0.3s; }

          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
