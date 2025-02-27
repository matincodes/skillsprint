import React from "react";

import logo from "/assets/Icons/logo.svg";
import line from "/assets/Icons/line.svg";
import textIcon from "/assets/Icons/textIcon.svg";
import phone from "/assets/Icons/phone.svg";
import email from "/assets/Icons/email.svg";
import linkedln from "/assets/Icons/linkedln.svg";
import twitter from "/assets/Icons/twitter.svg";
import insta from "/assets/Icons/insta.svg";
import facebook from "/assets/Icons/facebook.svg";
import divider from "/assets/Icons/divider.svg";
import deskfootericon from "/assets/Icons/deskfootericon.svg";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-end items-center bg-footerBg  h-auto w-full bg-[#1A1106]">
      <div className="w-[80%] pt-16 h-auto lg:pt-24 ">
        <div className=" lg:flex-row lg:justify-between lg:items-center gap-[40px] flex flex-col   w-full h-auto  ">
          <span className="flex items-center gap-[14px]">
            <img src={logo} />
            <img src={line} />
            <img src={textIcon} />
          </span>
          <ul className=" lg:w-[458px] justify-between w-auto flex font-light  font-Inter text-white text-xs lg:text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Program highlight</li>
            <li className="cursor-pointer">Waitlist</li>
            <li className="cursor-pointer">Faq</li>

          </ul>
        </div>
        <div className="w-full flex flex-col gap-12 h-auto ">
          <img src={divider} />
          <div className="  lg:flex-row lg:gap-[80px] gap-[69px] w-full flex justify-between flex-col ">
            <div className="flex  flex-col gap-3 lg:flex-row">
              <h2 className=" w-40  font-Inter font-medium text-white text-[15.2px]">
                contact us :
              </h2>
              <div className="w-full flex">
                <span className="w-full flex gap-2 items-center">
                  <img src={phone} />
                  <p className="font-Inter text-[13.5px] font-light text-white">
                    +234 902 523 0287
                  </p>
                </span>
                <span className="flex gap-2 items-center">
                  <img src={email} />
                  <p className="font-Inter text-[13.5px] font-light text-white">
                    build@thynkcity.com
                  </p>
                </span>
              </div>
            </div>
            <div className="  w-auto grid grid-cols-3 gap-6 md:grid-cols-4 text-white">
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={linkedln} />
                <p className=" text-sm ">LinkedIn</p>
              </span>
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={twitter} />
                <p className=" text-sm ">Twitter</p>
              </span>
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={insta} />
                <p className=" text-sm ">Instagram</p>
              </span>
              <span className="flex gap-2 items-center cursor-pointer">
                <img src={facebook} />
                <p className=" text-sm ">Facebook</p>
              </span>
            </div>
          </div>
          <p className="text-white font-light">©2024 Thynkcity All rights reserved.</p>
        </div>
      </div>
      <div className="flex justify-center w-[80%]">
        <img src={deskfootericon} />
      </div>
    </div>
  );
};

export default Footer;
