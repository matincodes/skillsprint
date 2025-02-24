import React from "react";
import PropTypes from "prop-types";

const ProgrammCard = ({ image }) => {
  return (
    <div className="rounded-2xl ">
      <img className="w-full " src={image} />
      <div className="py-5 px-2.5 bg-[#121212] flex flex-col gap-4 items-start">
        <span className="flex flex-col gap-3.5">
          <p className="font-bold text-xl text-white">Frontend Development</p>
          <p className="text-white font-normal text-xs">
            <span className="text-[#808080] ">8 months</span> 1 month{" "}
            <span className="text-[#808080] ">- ₦ 100,000</span> ₦ 0.00 (Free)
          </p>
          <p className="text-[#808080] font-medium text-sm">
            Learn how to build stunning, responsive websites using HTML, CSS,
            JavaScript, and modern frameworks like React.
          </p>
        </span>
        <button className="cursor-pointer font-semibold text-xs text-white py-3 px-6 bg-[#AE752C] rounded-md">
          Join the Free Program
        </button>
      </div>
    </div>
  );
};

ProgrammCard.propTypes = {
  image: PropTypes.string,
};

export default ProgrammCard;
