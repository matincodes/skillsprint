import React from "react";

const SkillCard = (e) => {
  return (
    <div className="bg-[#121212] rounded-[10px] text-white font-inter relative lg:h-[380px] h-[430px] p-[20px] flex flex-col space-y-3 overflow-hidden w-full">
      <>
        {/* Icon */}
        <span className="pt-7">
          <img src={`${e.icon}`} alt="Icon" className="w-[20px] h-[20px]" />
        </span>
        {/* Icon */}

        <b className="font-[700] text-[27px]">{e.mainText}</b>
        <p className="text-paragraph text-[19px] lg:w-[70%]">{e.subText}</p>
      </>

      {/* desktop */}
      <img
        src={`${e.desktopImage}`}
        alt=""
        className={`${e.position == "right" ? "right-[0px]" : "left-[-0px]"} bottom-[-15px] absolute  w-[430px] lg:flex hidden`}
      />
      {/* desktop */}

      {/* responsive */}
      <img
        src={`${e.mobileImage}`}
        alt="Images"
        className={` bottom-[0px] absolute  w-[340px] right-[-50px] flex lg:hidden `}
      />
      {/* desktop */}
    </div>
  );
};

export default SkillCard;
