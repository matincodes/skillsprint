import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";

const ProgrammCard = ({ image , description , role }) => {
  return (
    <div className=" bg-[#121212] rounded-lg ">
      <img className="w-full rounded-t-lg " src={image} />
      <div className="py-5 px-2.5  flex flex-col gap-4 items-start">
        <span className="flex flex-col gap-3.5">
          <p className="font-bold text-xl text-white font-inter tracking-[2px]">{role}</p>
          <p className="text-white font-normal text-xs font-inter tracking-[2px]">
            <span className="text-[#808080] line-through">8 months</span> 1 month{" "}
            <span className="text-[#808080] line-through">- ₦ 100,000</span> ₦ 0.00 (Free)
          </p>
          <p className="text-[#808080] font-medium text-sm font-inter w-96 lg:w-auto tracking-[2px]">
           {description}
          </p>
        </span>
        {/* <button className=" tracking-[2px] cursor-pointer font-semibold font-inter text-xs text-white py-3 px-6 bg-[#AE752C] rounded-md">
          Join the Free Program
        </button> */}
        <Button text="Join the Free Program"/>
      </div>
    </div>
  );
};

ProgrammCard.propTypes = {
  image: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,

};

export default ProgrammCard;
