import React from "react";
import close from "../../assets/icons/close.svg";
import checkBox from "../../assets/icons/checkBox.svg";

const Confirmationmessage = (e) => {
  return (
    <div className="font-mono absolute top-[1%] left-[30%] lg:top-[3%] bg-[#32CD324D] flex items-start px-3 py-2.5 gap-5 border-2 border-[#32CD32] rounded-lg">
      <img src={checkBox} alt="icon" />
      <span>
        <p className="font-semibold text-base">Assignment Submitted </p>
        <p className="font-light text-xs">
          Your assignment has been submitted and sent to your instructor
        </p>
      </span>
      <img
        onClick={() => {
          e.setIsSubmitted(false);
        }}
        src={close}
        alt="icon"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Confirmationmessage;
