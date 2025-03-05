import React from "react";

const UpSkillCard = ({ 
  bg, 
  text, 
  bgSize = "cover", 
  textSize = "25px", 
  width = "100%", 
  height = "480px",
  mobileWidth = "100%", 
  mobileHeight = "500px",
  textMobileSize = "16px"
}) => {
  return (
    <div
      className={cn(
        "flex items-center relative bg-center bg-no-repeat",
        width && `w-[${width}]`,
        height && `h-[${height}]`,
        `bg-[${bg}]`
      )}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1414146c]" />

      {/* Main Text */}
      <p
        className={cn(
          "absolute bottom-0 font-inter font-semibold text-white p-6",
          textSize && `text-[${textSize}]`
        )}
      >
        {text}
      </p>

      {/* Responsive adjustments */}
      <div className="md:hidden">
        <p
          className={cn(
            "absolute bottom-0 text-white p-3",
            textMobileSize && `text-[${textMobileSize}]`,
            mobileWidth && `w-[${mobileWidth}]`,
            mobileHeight && `h-[${mobileHeight}]`
          )}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default UpSkillCard;
