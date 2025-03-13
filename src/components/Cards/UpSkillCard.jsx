import React from "react";

const UpSkillCard = ({ 
  bg, 
  text, 
  bgSize = "cover",
}) => {
  return (
    <div
      className={`flex items-center relative bg-center bg-no-repeat lg:h-[450px] h-[460px]`}
      style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: bgSize,
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-[#1414146c]"></div>
      <p 
        className={`absolute bottom-0 font-inter font-[600] p-6 text-white text-[30px] `}
      >
        {text}
      </p>
    </div>
  );
};

export default UpSkillCard;
