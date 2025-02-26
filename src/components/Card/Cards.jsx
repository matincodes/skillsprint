import React from "react";

const Card = (e) => {
  return (
    <div className="bg-[#121212] rounded-[10px] text-white font-inter relative h-[350px] p-[20px] flex flex-col space-y-3 overflow-hidden">
      <>
        {/* Icon */}
        <span className="pt-7">
          <img src={`${e.icon}`} alt="Icon" className="w-[20px] h-[20px]" />
        </span>
        {/* Icon */}

        <b className="font-[700] text-[27px]">{e.mainText}</b>
        <p className="text-paragraph text-[19px] w-[70%]">{e.subText}</p>
      </>
      <img src={`${e.image}`} alt="" className={`${e.right ? 'right-[0px]' : 'left-[-0px]'} bottom-[-10px] absolute  w-[430px]`} />
    </div>
  );
};

export default Card;
