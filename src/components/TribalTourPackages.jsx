import React from "react";

/**
 * TribalTourPackages Component
 * ----------------------------------------------------
 * Static + Dynamic ready React component
 * Built with TailwindCSS, pixel-accurate to Figma
 * Responsive, accessible, scalable, clean code style
 * ----------------------------------------------------
 */

const sampleData = [
  {
    id: 1,
    title: "Meghalaya Tribal Tour",
    description:
      "Explore the sacred groves, hidden waterfalls, and meet the Khasi tribes of Meghalaya.",
    price: "₹45,000",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1600671082092-fc3a7b847a1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Nagaland Hornbill Festival",
    description:
      "Witness the grand cultural celebration of Nagaland’s tribes, music, and crafts.",
    price: "₹52,000",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1604514775347-5e077ff6b2b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Odisha Tribal Circuit",
    description:
      "Experience ancient tribal villages, local art, and traditions of Odisha.",
    price: "₹40,000",
    duration: "8 Days / 7 Nights",
    image:
      "https://images.unsplash.com/photo-1621609768887-5198e9a0d6f0?auto=format&fit=crop&w=800&q=80",
  },
];

const TribalTourPackages = ({ data = sampleData }) => {
  return (
    <section className="w-full bg-[#F1F1F1] py-16 px-6 lg:px-20 flex flex-col gap-10">
      {/* Header Section */}
      <header className="text-center flex flex-col gap-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-wide">
          Tribal Tour Packages
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Discover India’s hidden tribal cultures, traditions, and landscapes.
        </p>
      </header>

      {/* Packages Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((pkg) => (
          <article
            key={pkg.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {pkg.title}
              </h3>
              <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                {pkg.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-red-600 font-semibold text-base">
                  {pkg.price}
                </span>
                <span className="text-gray-500 text-sm">{pkg.duration}</span>
              </div>
              <button className="mt-5 w-full py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-300">
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TribalTourPackages;
