import React from "react";

const ClasseCard = (e) => {
  return (
    <div className="w-[230px] h-auto flex flex-col gap-2 md:w-full">
      <img src={e.src}/>
      <div className="flex flex-col ">
        <p className="font-inter text-sm lg:text-lg font-medium">{e.role}</p>
        <span className=" flex items-center gap-2 font-inter font-light text-xs lg:text-base leading-7">
          <b>{e.week}</b>
          <b>{e.time}</b>
        </span>
      </div>
    </div>
  );
};

export default ClasseCard;
