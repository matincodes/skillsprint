import React from "react";
import Button from "../Button/Button";

const ProgrammeCard = ({ image, description, role }) => {
  return (
    <div className="w-auto bg-[#121212] rounded-2xl ">
      <img className="w-full rounded-t-2xl " src={image} />
      <div className="py-5 px-4  flex flex-col gap-5 items-start ">
        <span className="flex flex-col gap-2.5">
          <b className="lg:text-[30px] font-semibold text-xl text-white font-inter tracking-[2px]">
            {role}
          </b>
          <p className="lg:text-base  text-white font-normal text-[11px] font-inter tracking-[1.5px]">
            <b className="text-[#808080] line-through">8 months</b> 1 month{" "}
            <b className="text-[#808080] line-through">- ₦ 100,000</b> ₦ 0.00
            (Free)
          </p>
          <p className="lg:text-[22px] lg:leading-7 text-[#808080] font-normal text-sm font-inter leading-4.5  tracking-[1px]">
            {description}
          </p>
        </span>
        <button className="lg:text-base tracking-[1.5px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md">
          Join the Free Program
        </button>
      </div>
    </div>
  );
};

export default ProgrammeCard;
