import React from "react";
import divider from "../../assets/icons/textDivider.svg";

const ClasseCard = (e) => {
  return (
    <div className="w-[230px] h-auto flex flex-col gap-2 md:w-full">
      <img src={e.src} />
      <div className="flex flex-col ">
        <p className="font-inter text-sm lg:text-lg font-medium lg:tracking-[1px] ">
          {e.role}
        </p>
        <span className=" flex items-center gap-2 font-inter font-light text-xs lg:text-sm leading-7 lg:tracking-[1px]">
          <b>{e.week}</b>
          <img src={divider} />
          <b>{e.time}</b>
        </span>
      </div>
    </div>
  );
};

export default ClasseCard;
