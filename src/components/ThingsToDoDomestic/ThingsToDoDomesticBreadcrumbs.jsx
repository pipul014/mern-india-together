import { ChevronRight } from "lucide-react";
import React from "react";

const ThingsToDoDomesticBreadcrumbs = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex items-center py-5">
          <p className="text-[#DC3545] text-base">Home</p>
          <ChevronRight className="w-5 h-5 mx-2" />
          <p className="text-[#DC3545] text-base">India</p>
          <ChevronRight className="w-5 h-5 mx-2" />
          <p className="text-[#DC3545] text-base">Tamil Nadu</p>
          <ChevronRight className="w-5 h-5 mx-2" />
          <p className="text-[#DC3545] text-base">Madurai</p>
          <ChevronRight className="w-5 h-5 mx-2" />
          <p className="text-base">Things to Do in Madurai</p>
        </div>
      </div>
    </>
  );
};

export default ThingsToDoDomesticBreadcrumbs;
