import React from "react";
import Brand1 from "../../assets/images/LoginAdvertise/brand1.png";
import Brand2 from "../../assets/images/LoginAdvertise/brand2.png";
import Brand3 from "../../assets/images/LoginAdvertise/brand3.png";
import Brand4 from "../../assets/images/LoginAdvertise/brand4.png";
import Brand5 from "../../assets/images/LoginAdvertise/brand5.png";
import Brand6 from "../../assets/images/LoginAdvertise/brand6.png";
import Brand7 from "../../assets/images/LoginAdvertise/brand7.png";
import Brand8 from "../../assets/images/LoginAdvertise/brand8.png";
import Brand9 from "../../assets/images/LoginAdvertise/brand9.png";
import Brand10 from "../../assets/images/LoginAdvertise/brand10.png";
import Brand11 from "../../assets/images/LoginAdvertise/brand11.png";

const AboutUsBrand = () => {
  const brands = [
    { id: 1, name: "Brand 1", logo: Brand1 },
    { id: 2, name: "Brand 2", logo: Brand2 },
    { id: 3, name: "Brand 3", logo: Brand3 },
    { id: 4, name: "Brand 4", logo: Brand4 },
    { id: 5, name: "Brand 5", logo: Brand5 },
    { id: 6, name: "Brand 6", logo: Brand6 },
    { id: 7, name: "Brand 7", logo: Brand7 },
    { id: 8, name: "Brand 8", logo: Brand8 },
    { id: 9, name: "Brand 9", logo: Brand9 },
  ];
  return (
    <>
      {/* <div className='mt-24'>
            <p className='text-2xl font-semibold'>Be part of the growing network of trusted brands on Together in India.</p>
        </div> */}

      {/* Breands */}
      <div className="pt-10 pb-36  w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-6 items-center  justify-center">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex justify-between items-center hover:shadow-md transition p-3"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-32 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsBrand;
