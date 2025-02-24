import React from "react";
import Button from "../Button/Button";
import { Link,  } from "@tanstack/react-router";

const NavBar = () => {
  return (
    <div className="p-[30px] bg-[#000] flex items-center justify-around font-inter w-full fixed z-[30]">
      <img src="/assets/logo.png" alt="" />

      <div className="text-white flex gap-[50px] border-red-400">
        <Link to="/" className="font-[300] text-[14px]">
          Home
        </Link>
        <Link to="/about" className="font-[300] text-[14px]">
          About
        </Link>
        <Link to="/programmes" className="font-[300] text-[14px]">
          Programme
        </Link>
      </div>
      <Button text="Login to portal" location="" nav />
    </div>
  );
};

export default NavBar;
