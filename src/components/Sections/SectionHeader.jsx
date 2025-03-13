import React from "react";

const SectionHeader = (e) => {
  return (
    <>
      <div className="lg:space-y-4 space-y-5 text-center p-2 text-white">
        <h2 className="font-[700] lg:text-[45px] text-[30px] tracking-[2px] lg:leading-[60px] leading-[30px]">
          {e.header}
        </h2>
        <p className="font-inter text-paragraph lg:text-[18px] text-[13px] tracking-[2.2px] lg:leading-[30px] leading-[24px] text-center">
          {e.paragraph}
        </p>
      </div>
    </>
  );
};


export default SectionHeader