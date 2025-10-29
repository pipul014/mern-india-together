// import React from "react";
// import Footer from "../components/Footer";

// // Reusable component for State/Category Block
// const StateBlock = ({ title, items }) => (
//   <div className="flex flex-col gap-3">
//     <div className="text-[#0024A5] text-lg font-bold underline">{title}</div>
//     <div className="flex flex-col gap-1">
//       {items.map((item, idx) => (
//         <div
//           key={idx}
//           className="text-[#0024A5] text-sm font-normal hover:text-[#001f8f] transition-colors duration-200 cursor-pointer"
//         >
//           {item}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Reusable component for Section
// const SectionBlock = ({ title, blocks }) => (
//   <div className="flex flex-col gap-6">
//     <div className="text-black text-xl font-bold underline">{title}</div>
//     <div className="flex flex-wrap gap-6">
//       {blocks.map((block, idx) => (
//         <div
//           key={idx}
//           className="w-[190px] bg-white p-4 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
//         >
//           <StateBlock title={block.title} items={block.items} />
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Footer Links Component
// const FooterLinks = ({ links }) => (
//   <div className="flex flex-col gap-3 mt-10">
//     {links.map((link, idx) => (
//       <div
//         key={idx}
//         className="text-[#0024A5] text-base font-bold underline cursor-pointer hover:text-[#001f8f] transition-colors duration-200"
//       >
//         {link}
//       </div>
//     ))}
//   </div>
// );

// // Header / Breadcrumb Component
// const SitemapHeader = () => (
//   <div className="flex justify-between items-start w-full max-w-[1380px] mx-auto mb-10 flex-wrap gap-4">
//     <div className="flex flex-col gap-2 w-[171.5px]">
//       <div className="text-black font-bold text-2xl leading-[39.6px]">
//         Site Map
//       </div>
//       <div className="flex items-center gap-1">
//         <div className="text-gray-500 text-xs">Home</div>
//         <div className="w-[3.5px] h-[7px] rotate-180 outline outline-gray-500 outline-offset-[-0.5px]" />
//         <div className="text-gray-500 text-xs">News & Announcement</div>
//       </div>
//     </div>

//     <div className="flex gap-2 flex-wrap">
//       {["Previous", "<<", "1", "2", "3"].map((label, idx) => (
//         <div
//           key={idx}
//           className="h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px] cursor-pointer hover:bg-gray-100 transition-colors duration-200 rounded-sm"
//         >
//           <div
//             className={`text-sm ${
//               label === "Previous" || label === "Next"
//                 ? "font-normal"
//                 : "font-bold"
//             } text-black`}
//           >
//             {label}
//           </div>
//         </div>
//       ))}
//       <div className="w-[30px] h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px]">
//         <div className="w-[14.79px] h-[2.93px] bg-black" />
//       </div>
//       <div className="h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px]">
//         <div className="text-black font-bold text-sm">500</div>
//       </div>
//       <div className="h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px]">
//         <div className="text-black font-normal text-sm">Next</div>
//       </div>
//     </div>
//   </div>
// );

// const Sitemap = () => {
//   // Travel Data
//   const travelBlocks = [
//     {
//       title: "Rajasthan",
//       items: [
//         "ABC Travels - Jaipur",
//         "ABC Travels - Jodhpur",
//         "ABC Travels - Udaipur",
//         "ABC Travels - Jaisalmer",
//         "ABC Travels - Ajmer",
//         "ABC Travels - Bikaner",
//         "ABC Travels - Kota",
//       ],
//     },
//     {
//       title: "Rajasthan",
//       items: [
//         "ABC Travels - Jaipur",
//         "ABC Travels - Jodhpur",
//         "ABC Travels - Udaipur",
//         "ABC Travels - Jaisalmer",
//         "ABC Travels - Ajmer",
//         "ABC Travels - Bikaner",
//         "ABC Travels - Kota",
//       ],
//     },
//     {
//       title: "Tamil Nadu",
//       items: [
//         "ABC Travels - Chennai",
//         "ABC Travels - Madurai",
//         "ABC Travels - Coimbatore",
//         "ABC Travels - Salem",
//         "ABC Travels - Erode",
//         "ABC Travels - Vellore",
//         "ABC Travels - Thanjavur",
//       ],
//     },
//   ];

//   // Shopping Data
//   const shoppingBlocks = [
//     {
//       title: "Arunachal Pradesh",
//       items: [
//         "Shopping in Ziro",
//         "Shopping in Itanagar",
//         "Shopping in Tawang",
//         "Shopping in Bomdila",
//         "Shopping in Nechuka",
//         "Shopping in Pasighat",
//         "Shopping in ABC",
//       ],
//     },
//     {
//       title: "Madhya Pradesh",
//       items: [
//         "Shopping in Kanha National Stadium",
//         "Shopping in Sanchi",
//         "Shopping in Shivpuri",
//         "Shopping in Bhopal",
//       ],
//     },
//     {
//       title: "Rajasthan",
//       items: [
//         "Shopping in Jaipur",
//         "Shopping in Jodhpur",
//         "Shopping in Udaipur",
//         "Shopping in Jaisalmer",
//         "Shopping in Ajmer",
//         "Shopping in Bikaner",
//         "Shopping in Kota",
//       ],
//     },
//     {
//       title: "Rajasthan",
//       items: [
//         "Shopping in Jaipur",
//         "Shopping in Jodhpur",
//         "Shopping in Udaipur",
//         "Shopping in Jaisalmer",
//         "Shopping in Ajmer",
//         "Shopping in Bikaner",
//         "Shopping in Kota",
//       ],
//     },
//     {
//       title: "Tamil Nadu",
//       items: [
//         "Shopping in Chennai",
//         "Shopping in Madurai",
//         "Shopping in Coimbatore",
//         "Shopping in Salem",
//         "Shopping in Erode",
//         "Shopping in Vellore",
//         "Shopping in Thanjavur",
//       ],
//     },
//   ];

//   // Kids Special Data
//   const kidsBlocks = [
//     {
//       title: "Kids below 18 Years",
//       items: [
//         "Full Day Kids Tour of Jaipur, Akbar Travels",
//         "Taj Mahal, Agra",
//         "Gulati Restaurant, New Delhi",
//         "Shopping for Kids",
//         "Full Day sightseeing Tour for Kids, Akbar Travels",
//         "Pasighat",
//         "ABC",
//       ],
//     },
//     {
//       title: "Kids above 18 Years",
//       items: [
//         "Kanha National Park, Adventure Tour, Riya Travels",
//         "Gliding Tour, Himachal Pradesh, Gliderman",
//         "Trekking Tour of Sunderbans, ABC Travels",
//         "River Rafting, at Ganges, Haridwar",
//         "Skiieng, at Ganges, Himachal Pradesh",
//         "Weaving Workshop, Artisan, Bhuj",
//         "Camel Ride, Thar Dessert",
//       ],
//     },
//   ];

//   // Footer Links
//   const footerLinks = [
//     "About Us",
//     "CSR",
//     "News & Announcement",
//     "Advertise",
//     "Terms & Conditions",
//     "Privacy Policy",
//     "Business Agreement",
//   ];

//   return (
//     <div className="flex flex-col gap-10 p-6 max-w-[1380px] mx-auto lg:pt-[140px]">
//       <SitemapHeader />
//       <SectionBlock title="Travels" blocks={travelBlocks} />
//       <SectionBlock title="Shopping" blocks={shoppingBlocks} />
//       <SectionBlock title="Kids Special" blocks={kidsBlocks} />
//       <FooterLinks links={footerLinks} />
//       <Footer />
//     </div>
//   );
// };

// export default Sitemap;

import React from "react";
import Footer from "../components/Footer";

// Reusable component for State/Category Block
const StateBlock = ({ title, items }) => (
  <div className="flex flex-col gap-3">
    <div className="text-[#0024A5] text-lg font-bold underline">{title}</div>
    <div className="flex flex-col gap-1">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="text-[#0024A5] text-sm font-normal hover:text-blue-700 transition-colors duration-200 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

// Reusable component for Section
const SectionBlock = ({ title, blocks }) => (
  <div className="flex flex-col gap-6">
    <div className="text-black text-xl font-bold underline">{title}</div>
    <div className="flex flex-wrap gap-6">
      {blocks.map((block, idx) => (
        <div key={idx} className="w-[190px]">
          <StateBlock title={block.title} items={block.items} />
        </div>
      ))}
    </div>
  </div>
);

// Footer Links Component
const FooterLinks = ({ links }) => (
  <div className="flex flex-col gap-3 mt-10">
    {links.map((link, idx) => (
      <div
        key={idx}
        className="text-[#0024A5] text-base font-bold underline cursor-pointer hover:text-[#001f8f] transition-colors duration-200"
      >
        {link}
      </div>
    ))}
  </div>
);

// Header / Breadcrumb Component
const SitemapHeader = () => (
  <div className="flex justify-between items-start w-full max-w-[1380px] mx-auto mb-10">
    <div className="flex flex-col gap-5 w-[171.5px]">
      <div className="text-black font-bold text-2xl leading-[39.6px]">
        Site Map
      </div>
      <div className="flex items-center gap-1">
        <div className="text-gray-500 text-xs">Home</div>
        <span className="text-black text-sm">{">"}</span>
        <div className="w-[3.5px] h-[7px] rotate-180 outline outline-gray-500 outline-offset-[-0.5px]" />
        <div className="text-gray-500 text-xs">News & Announcement</div>
      </div>
    </div>

    <div className="flex gap-2 flex-wrap">
      {["Previous", "<<", "1", "2", "3"].map((label, idx) => (
        <div
          key={idx}
          className="h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px] cursor-pointer hover:bg-gray-100 transition-all duration-200"
        >
          <div
            className={`text-sm font-${
              label === "Previous" ? "normal" : "bold"
            } text-black`}
          >
            {label}
          </div>
        </div>
      ))}
      <div className="w-[30px] h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px]">
        <div className="w-[14.79px] h-[2.93px] bg-black" />
      </div>
      <div className="h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px]">
        <div className="text-black font-bold text-sm">500</div>
      </div>
      <div className="h-[25px] px-2 flex items-center justify-center outline outline-gray-500 outline-offset-[-1px]">
        <div className="text-black font-normal text-sm">Next</div>
      </div>
    </div>
  </div>
);

const Sitemap = () => {
  // Dummy data for each section (replace with your actual data)
  const contentData = [
    { title: "Content 1", items: ["Item A", "Item B", "Item C"] },
    { title: "Content 2", items: ["Item D", "Item E"] },
  ];

  const tribesData = [
    { title: "Tribe 1", items: ["Subitem 1", "Subitem 2"] },
    { title: "Tribe 2", items: ["Subitem 3", "Subitem 4"] },
  ];

  const thingsToDoData = [
    { title: "Activity 1", items: ["Sightseeing", "Adventure"] },
    { title: "Activity 2", items: ["Cultural Tours"] },
  ];

  const hotelsData = [
    { title: "Hotel 1", items: ["Deluxe Room", "Suite"] },
    { title: "Hotel 2", items: ["Standard Room"] },
  ];

  const eatDrinkData = [
    { title: "Restaurant 1", items: ["Breakfast", "Dinner"] },
    { title: "Cafe 1", items: ["Coffee", "Snacks"] },
  ];

  const airlinesData = [
    { title: "Airline 1", items: ["Domestic", "International"] },
    { title: "Airline 2", items: ["Domestic"] },
  ];

  const ticketingData = [
    { title: "Agent 1", items: ["Bus Tickets", "Train Tickets"] },
    { title: "Agent 2", items: ["Flight Tickets"] },
  ];

  const shoppingData = [
    { title: "Shopping 1", items: ["Mall 1", "Mall 2"] },
    { title: "Shopping 2", items: ["Market 1"] },
  ];

  const kidsData = [
    { title: "Kids below 18", items: ["Tour A", "Tour B"] },
    { title: "Kids above 18", items: ["Adventure Tour", "Workshop"] },
  ];

  const footerLinks = [
    "About Us",
    "CSR",
    "News & Announcement",
    "Advertise",
    "Terms & Conditions",
    "Privacy Policy",
    "Business Agreement",
  ];

  return (
    <div className="flex flex-col gap-10 p-6 pt-32">
      <SitemapHeader />
      <SectionBlock title="Content Data" blocks={contentData} />
      <SectionBlock title="Tribes of India" blocks={tribesData} />
      <SectionBlock title="Things To Do" blocks={thingsToDoData} />
      <SectionBlock title="Hotels" blocks={hotelsData} />
      <SectionBlock title="Eat & Drinks" blocks={eatDrinkData} />
      <SectionBlock title="Airlines" blocks={airlinesData} />
      <SectionBlock title="Ticketing Agents" blocks={ticketingData} />
      <SectionBlock title="Shopping" blocks={shoppingData} />
      <SectionBlock title="Kids Special" blocks={kidsData} />

      {/* Footer links below Kids Special */}
      <FooterLinks links={footerLinks} />
      <Footer />
    </div>
  );
};

export default Sitemap;
