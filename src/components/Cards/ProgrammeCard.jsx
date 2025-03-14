import React from "react";
import { Link } from "@tanstack/react-router";
import PopUp from "../Popup/Popup";

const ProgrammeCard = ({ image, description, title, duration, price, isAuthenticated, startDate }) => {
  return (
    <div className="w-auto bg-[#121212] rounded-2xl ">
      <img className="w-full rounded-t-2xl " src={image} />
      <div className="py-5 px-4  flex flex-col gap-5 items-start ">
        <span className="flex flex-col gap-2.5">
          <b className="lg:text-[30px] font-semibold text-xl text-white font-inter tracking-[2px]">
            {title}
          </b>
          <p className="lg:text-base  text-white font-normal text-[11px] font-inter tracking-[1.5px]">
            <b className="text-[#808080] line-through">8 months</b> <b>{duration}</b>
            <span className="text-[#808080]">-</span>
            <b className="text-[#808080] line-through">₦ 100,000</b> <b>₦{price} (Free)</b>
            
          </p>
          <p className="lg:text-[22px] lg:leading-7 text-[#808080] font-normal text-sm font-inter leading-4.5  tracking-[1px]">
            {description}
          </p>
        </span>
        
        {isAuthenticated ? (
            <button className="lg:text-base tracking-[1.5px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md">
              <PopUp text='Apply Now' courseTitle={title} startDate={startDate} />
            </button>
          ): (
            <Link to="/register/" className="lg:text-base tracking-[1.5px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md">
              Join the Free Program
            </Link>
          )}
      </div>
    </div>
  );
};

export default ProgrammeCard;
