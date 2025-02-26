import React from "react";

const SkillCard = (e) => {
  return (
    <>
      <div
        className={`flex items-center relative bg-center h-[400px] bg-cover bg-no-repeat  w-full`}
        style={{ backgroundImage: `url(${e.bg})` }}
      >
        <div className=" absolute top-0 left-0 h-full w-full bg-[#1414146c]">
          <p className="absolute bottom-0 font-inter text-[25px] font-[600] p-6 ">
            {e.text}
          </p>
        </div>
      </div>
    </>
  );
};


export default SkillCard