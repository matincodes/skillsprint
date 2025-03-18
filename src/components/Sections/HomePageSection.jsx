import React from "react";
import SectionHeader from "./SectionHeader";

const HomePageSection = (e) => {
  return (
    <>
      <div className="text-white grid lg:p-[90px] p-[20px] place-content-center space-y-[90px] font-inter">
        <SectionHeader header={e.header} paragraph={e.paragraph} />

        <div className="flex flex-col">
          {/* Desktop */}
          <img
            src={`${e.desktop}`}
            alt="Image With Sub-Images showing What We Do"
            className="w-full object-contain lg:flex hidden"
          />
          {/* Desktop */}
          {/* Responsive */}
          <img
            src={`${e.responsive}`}
            alt="Image With Sub-Images showing What We Do"
            className="w-full object-contain lg:hidden flex"
          />
          {/* Responsive */}
        </div>
      </div>
    </>
  );
};

export default HomePageSection;
