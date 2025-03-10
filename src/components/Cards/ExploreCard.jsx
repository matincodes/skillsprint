import React from "react";
const ExploreCard = (e) => {
  return (
    <>
      <div
        className={`flex items-center relative bg-center h-full bg-cover bg-no-repeat  w-full`}
        style={{ backgroundImage: `url(${e.bg})` }}
      >
        <div className="py-2.5 px-1.5 lg:px-2.5 flex items-end absolute top-0 left-0 h-full w-full bg-[#1414146c]">
          <p className="lg:leading-5 lg:tracking-[0.5px] lg:text-lg lg:w-auto font-inter  lg:font-bold font-light text-[12px] text-white tracking-[1px] ">
            {e.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
