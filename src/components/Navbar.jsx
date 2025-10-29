// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { Search } from "lucide-react";

// const Navbar = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   // Controlled select value so it never shows a stale label
//   const [dropdownValue, setDropdownValue] = React.useState("");

//   // Compute options based on route
//   const navDropdownOptions = React.useMemo(
//     () =>
//       isHomePage
//         ? ["Destinations", "Flights", "Hotels", "Activities"]
//         : ["Travel Search", "Flights", "Hotels", "Packages"],
//     [isHomePage]
//   );

//   // Reset dropdown to the first option when route changes
//   React.useEffect(() => {
//     setDropdownValue(navDropdownOptions[0] || "");
//   }, [navDropdownOptions]);

//   React.useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const textColor = isScrolled ? "text-black" : "text-white";
//   const borderColor = isScrolled ? "border-black" : "border-white";

//   const navLinks = [
//     { name: "ABOUT US", path: "/about-us" },
//     { name: "ADVERTISE WITH US", path: "/advertise-with-us" },
//     { name: "BUSINESS SITE", path: "/" },
//   ];

//   return (
//     <nav
//       role="navigation"
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full mx-auto px-8">
//         {/* TOP ROW (desktop) */}
//         <div className="hidden md:flex items-center justify-end h-14 space-x-6 text-sm border-b border-gray-300">
//           <button
//             className={`border px-3 py-1 rounded-full transition-colors duration-300 ${textColor} ${borderColor}`}
//           >
//             Become a Member
//           </button>

//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`relative font-medium group ${textColor}`}
//             >
//               {link.name}
//               <span
//                 className={`absolute bottom-[-4px] left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
//                   isScrolled ? "bg-black" : "bg-white"
//                 }`}
//               />
//             </Link>
//           ))}

//           <select
//             className={`bg-transparent cursor-pointer focus:outline-none ${textColor}`}
//             defaultValue="English"
//             aria-label="Select language"
//           >
//             <option>English</option>
//             <option>Hindi</option>
//           </select>
//         </div>

//         {/* BOTTOM ROW (desktop) */}
//         <div className="hidden md:flex items-center justify-between h-14">
//           {/* Left */}
//           <div className="flex items-center space-x-4">
//             <Link to="/" className="flex items-center space-x-2">
//               <img src={assets.logo} alt="logo" className="h-8" />
//               <span className={`text-lg font-semibold ${textColor}`}>
//                 Together In India
//               </span>
//             </Link>

//             {/* Controlled select: shows Destinations on home, Travel Search otherwise */}
//             <select
//               value={dropdownValue}
//               onChange={(e) => setDropdownValue(e.target.value)}
//               className={`bg-transparent cursor-pointer focus:outline-none text-sm ${textColor}`}
//               aria-label={
//                 isHomePage ? "Destinations dropdown" : "Travel Search dropdown"
//               }
//             >
//               {navDropdownOptions.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Right */}
//           <div className="flex items-center space-x-4">
//             {/* Show search box only on non-home pages */}
//             {!isHomePage && (
//               <div className="flex items-center border border-gray-400 rounded-full px-3 py-1.5 transition-all duration-300 focus-within:ring-1 focus-within:ring-gray-500 group">
//                 <Search className="h-4 w-4 text-gray-500 mr-2 transition-colors group-focus-within:text-black" />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-40 focus:w-56 transition-all duration-300"
//                   aria-label="Search travel"
//                 />
//               </div>
//             )}

//             <button
//               className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${textColor}`}
//             >
//               SIGN IN
//             </button>
//           </div>
//         </div>

//         {/* MOBILE header */}
//         <div className="flex md:hidden items-center justify-between h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src={assets.logo} alt="logo" className="h-8" />
//             <span className={`text-lg font-semibold ${textColor}`}>
//               Together In India
//             </span>
//           </Link>

//           <button
//             aria-label="Toggle menu"
//             onClick={() => setIsMenuOpen((p) => !p)}
//             className="transition-transform duration-300"
//           >
//             {isMenuOpen ? (
//               <svg
//                 className={`h-7 w-7 ${textColor}`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             ) : (
//               <svg
//                 className={`h-7 w-7 ${textColor}`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="4" y1="6" x2="20" y2="6" />
//                 <line x1="4" y1="12" x2="20" y2="12" />
//                 <line x1="4" y1="18" x2="20" y2="18" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden ${
//           isMenuOpen
//             ? "translate-x-0 opacity-100"
//             : "-translate-x-full opacity-0"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//           aria-label="Close menu"
//         >
//           <svg
//             className="h-6 w-6 text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>

//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             to={link.path}
//             className="text-gray-800 text-lg hover:text-black transition-colors duration-200"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {link.name}
//           </Link>
//         ))}

//         {/* Mobile: show same dropdown options as desktop (keeps parity) */}
//         <div className="w-64">
//           <select
//             value={dropdownValue}
//             onChange={(e) => setDropdownValue(e.target.value)}
//             className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-gray-700"
//             aria-label="Mobile travel dropdown"
//           >
//             {navDropdownOptions.map((opt) => (
//               <option key={opt} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>

//         {!isHomePage && (
//           <div className="flex items-center border border-gray-400 rounded-full px-3 py-1.5 w-64 group">
//             <Search className="h-4 w-4 text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-full"
//               aria-label="Mobile search"
//             />
//           </div>
//         )}

//         <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors duration-200">
//           SIGN IN
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { Search } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Hero banner exists on home page
  const hasHeroBanner = isHomePage;

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [dropdownValue, setDropdownValue] = React.useState("");

  const navDropdownOptions = React.useMemo(
    () =>
      isHomePage
        ? ["Destinations", "Flights", "Hotels", "Activities"]
        : ["Travel Search", "Flights", "Hotels", "Packages"],
    [isHomePage]
  );

  React.useEffect(() => {
    setDropdownValue(navDropdownOptions[0] || "");
  }, [navDropdownOptions]);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated text and border color logic
  const textColor = isScrolled || !hasHeroBanner ? "text-black" : "text-white";
  const borderColor =
    isScrolled || !hasHeroBanner ? "border-black" : "border-white";

  const navLinks = [
    { name: "ABOUT US", path: "/about-us" },
    { name: "ADVERTISE WITH US", path: "/advertise-with-us" },
    { name: "BUSINESS SITE", path: "/" },
  ];

  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-8">
        {/* TOP ROW (desktop) */}
        <div className="hidden md:flex items-center justify-end h-14 space-x-6 text-sm border-b border-gray-300">
          <button
            className={`border px-3 py-1 rounded-full transition-colors duration-300 ${textColor} ${borderColor}`}
          >
            Become a Member
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium group ${textColor}`}
            >
              {link.name}
              <span
                className={`absolute bottom-[-4px] left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                  isScrolled || !hasHeroBanner ? "bg-black" : "bg-white"
                }`}
              />
            </Link>
          ))}

          <select
            className={`bg-transparent cursor-pointer focus:outline-none ${textColor}`}
            defaultValue="English"
            aria-label="Select language"
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* BOTTOM ROW (desktop) */}
        <div className="hidden md:flex items-center justify-between h-14">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={assets.logo} alt="logo" className="h-8" />
              <span className={`text-lg font-semibold ${textColor}`}>
                Together In India
              </span>
            </Link>

            <select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              className={`bg-transparent cursor-pointer focus:outline-none text-sm ${textColor}`}
              aria-label={
                isHomePage ? "Destinations dropdown" : "Travel Search dropdown"
              }
            >
              {navDropdownOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            {!isHomePage && (
              <div className="flex items-center border border-gray-400 rounded-full px-3 py-1.5 transition-all duration-300 focus-within:ring-1 focus-within:ring-gray-500 group">
                <Search className="h-4 w-4 text-gray-500 mr-2 transition-colors group-focus-within:text-black" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-40 focus:w-56 transition-all duration-300"
                  aria-label="Search travel"
                />
              </div>
            )}

            <button
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${textColor}`}
            >
              SIGN IN
            </button>
          </div>
        </div>

        {/* MOBILE header */}
        <div className="flex md:hidden items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={assets.logo} alt="logo" className="h-8" />
            <span className={`text-lg font-semibold ${textColor}`}>
              Together In India
            </span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((p) => !p)}
            className="transition-transform duration-300"
          >
            {isMenuOpen ? (
              <svg
                className={`h-7 w-7 ${textColor}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className={`h-7 w-7 ${textColor}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-800 text-lg hover:text-black transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <div className="w-64">
          <select
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-gray-700"
            aria-label="Mobile travel dropdown"
          >
            {navDropdownOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {!isHomePage && (
          <div className="flex items-center border border-gray-400 rounded-full px-3 py-1.5 w-64 group">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-full"
              aria-label="Mobile search"
            />
          </div>
        )}

        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors duration-200">
          SIGN IN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
