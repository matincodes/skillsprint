import React, { useEffect, useState } from "react";
// import Button from "../Button/Button";
import NavBarButton from "../Button/NavBarButton";
import { Link, useLocation,  } from "@tanstack/react-router";


const NavBar = () => {
  const pathname = useLocation()
  const [active, setActive] = useState("");
  console.log(pathname.pathname)

  useEffect(()=>{
    setActive(pathname.pathname)
  }, [])

  return (
    <div className="p-[30px] bg-[#000] hidden lg:flex items-center justify-around font-inter w-full sticky top-0 z-[30] border-b border-[#3b3b3b38]">
      <img src="/assets/logo.png" alt="" />

      <div className="text-white flex gap-[50px] border-red-400">
        <Link to="/" className={`${active == '/' ? 'text-main' : ''} font-[300] text-[14px] hover:text-main`}>
          Home
        </Link>
        <Link to="/about" className={`${active == '/about' ? 'text-main' : ''} font-[300] text-[14px] hover:text-main`}>
          About
        </Link>
        <Link to="/programme" className={`${active == '/programme' ? 'text-main' : ''} font-[300] text-[14px] hover:text-main`}>
          Programme
        </Link>
      </div>

      <NavBarButton />
    </div>
  );
};

export default NavBar;
