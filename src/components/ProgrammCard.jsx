import React from "react";
import PropTypes from "prop-types";

const ProgrammCard = ({ image , description , role }) => {
  return (
    <div className="w-auto bg-[#121212] rounded-2xl ">
      <img className="w-full rounded-t-2xl " src={image} />
      <div className="py-5 px-4  flex flex-col gap-5 items-start ">
        <span className="flex flex-col gap-5">
          <b className="lg:text-2xl font-semibold text-base text-white font-inter tracking-[2px]">{role}</b>
          <p className="lg:text-sm  text-white font-normal text-[10px] font-inter tracking-[1.5px]">
            <b className="text-[#808080] line-through">8 months</b> 1 month{" "}
            <b className="text-[#808080] line-through">- ₦ 100,000</b> ₦ 0.00 (Free)
          </p>
          <p className="lg:text-xl text-[#808080] font-normal text-xs font-inter   tracking-[1.5px]">
           {description}
          </p>
        </span>
        <button className="lg:text-base tracking-[2px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md">
          Join the Free Program
        </button>
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
