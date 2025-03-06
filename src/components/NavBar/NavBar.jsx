import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
// import NavBarButton from "../Button/NavBarButton";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/Sheets/NavBarSheet";

const NavBar = () => {
  const pathname = useLocation();
  const [active, setActive] = useState("");
  console.log(pathname.pathname);

  useEffect(() => {
    setActive(pathname.pathname);
  }, []);

  return (
    <div className="p-[30px] bg-[#000] font-inter w-full lg:sticky top-0 z-[30] border-b border-[#3b3b3b38] ">
      {/* Dashboard */}
      <div className="lg:flex hidden items-center justify-around ">
        <img src="/assets/logo.png" alt="" />

        <div className="text-white flex gap-[50px]">
          <Link
            to="/"
            className={`${active == "/" ? "text-main" : ""} font-[300] text-[14px] hover:text-main`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${active == "/about" ? "text-main" : ""} font-[300] text-[14px] hover:text-main`}
          >
            About
          </Link>
          <Link
            to="/programmes"
            className={`${active == "/programmes" ? "text-main" : ""} font-[300] text-[14px] hover:text-main`}
          >
            Programme
          </Link>
        </div>

        <div className="border grid ">
          <Button text="Login to portal" nav />
        </div>
      </div>
      {/* Dashboard */}

      {/* Responsive */}
      <div className="lg:hidden grid grid-cols-2">
        <img src="/assets/logo.png" alt="" className="w-[50px] " />
        <Sheet>
          <SheetTrigger asChild className="item-end">
          <div className="grid justify-end">
            <img src="/assets/menu.png" alt="" className="w-[30px] cursor-pointer" />
          </div>
          </SheetTrigger>
          <SheetContent
            side="left"
            className={"text-white border-none slideNav w-[85%]"}
          >
            <SheetDescription
              className={
                " flex h-full flex-col gap-[15px] font-inter py-[50px]"
              }
            >
              <Link
                to="/"
                className={`${active == "/" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 px-5`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${active == "/about" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 px-5`}
              >
                About
              </Link>
              <Link
                to="/programme"
                className={`${active == "/programme" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 px-5`}
              >
                Programme
              </Link>

              <Button text="Login to portal" nav />
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
      {/* Responsive */}
    </div>
  );
};

export default NavBar;
