import React from "react";

import logo from "../../assets/icons/logo.svg";
import line from "../../assets/icons/line.svg";
import textIcon from "../../assets/icons/textIcon.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import linkedln from "../../assets/icons/linkedln.svg";
import twitter from "../../assets/icons/twitter.svg";
import insta from "../../assets/icons/insta.svg";
import facebook from "../../assets/icons/facebook.svg";
import divider from "../../assets/icons/divider.svg";
import deskfootericon from "../../assets/icons/deskfootericon.svg";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-end items-center bg-footerBg  h-auto w-full bg-[#1A1106]">
      <div className="w-[80%] py-[77px] h-auto lg:pt-24 ">
        <div className=" lg:flex-row lg:justify-between lg:items-center gap-[40px] flex flex-col   w-full h-auto  ">
          <span className="flex items-center gap-[14px]">
            <img src={logo} />
            <img src={line} />
            <img src={textIcon} />
          </span>
          <ul className=" lg:w-[458px] justify-between w-auto flex  font-Inter text-[#808080] text-xs lg:text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-12 h-auto ">
          <img src={divider} />
          <div className="  lg:flex-row lg:gap-[80px] gap-[69px] w-full flex justify-between flex-col ">
            <div className="flex  flex-col gap-3 lg:flex-row">
              <h2 className=" w-40  font-Inter font-medium text-[#808080] text-[15.2px]">
                contact us :
              </h2>
              <div className="w-full flex">
                <span className="w-full flex gap-2 items-center">
                  <img src={phone} />
                  <p className="font-Inter text-[13.5px] font-normal text-[#808080]">
                    +234 902 523 0287
                  </p>
                </span>
                <span className="flex gap-2 items-center">
                  <img src={email} />
                  <p className="font-Inter text-[13.5px] font-normal text-[#808080]">
                    build@thynkcity.com
                  </p>
                </span>
              </div>
            </div>
            <div className="  w-auto grid grid-cols-3 gap-6 md:grid-cols-4">
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={linkedln} />
                <p className="font-medium text-sm text-[#808080]">LinkedIn</p>
              </span>
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={twitter} />
                <p className="font-medium text-sm text-[#808080]">Twitter</p>
              </span>
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={insta} />
                <p className="font-medium text-sm text-[#808080]">Instagram</p>
              </span>
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={facebook} />
                <p className="font-medium text-sm text-[#808080]">Facebook</p>
              </span>
            </div>
          </div>
          <p className="text-[#808080]">©2024 Thynkcity All rights reserved.</p>
        </div>
      </div>
      <div className="flex justify-center w-[80%]">
        <img src={deskfootericon} />
      </div>
    </div>
  );
};

export default Footer;
