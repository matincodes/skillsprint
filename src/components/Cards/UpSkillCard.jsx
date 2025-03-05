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
      className="flex items-center relative bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: bgSize,
        width: width,
        height: height 
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-[#1414146c]"></div>
      <p 
        className="absolute bottom-0 font-inter font-[600] p-6 text-white"
        style={{ fontSize: textSize }}
      >
        {text}
      </p>

      {/* Mobile Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .flex {
              width: ${mobileWidth} !important;
              height: ${mobileHeight} !important;
            }
            .absolute p {
              font-size: ${textMobileSize} !important;
              padding: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UpSkillCard;
