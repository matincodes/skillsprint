import React, { useEffect, useState } from "react";
// import Button from "../Button/Button";
import NavBarButton from "../Button/NavBarButton";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const pathname = useLocation();
  const [active, setActive] = useState("");
  console.log(pathname.pathname);

  useEffect(() => {
    setActive(pathname.pathname);
  }, []);

  return (
    <div className="p-[30px] bg-[#000] font-inter w-full sticky top-0 z-[30] border-b border-[#3b3b3b38] ">
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
            to="/programme"
            className={`${active == "/programme" ? "text-main" : ""} font-[300] text-[14px] hover:text-main`}
          >
            Programme
          </Link>
        </div>

        <NavBarButton desktop />
      </div>
      {/* Dashboard */}

      {/* Responsive */}
      <div className="flex lg:hidden items-center justify-between ">
        <img src="/assets/logo.png" alt="" />

        {/* <NavBarButton /> */}

        <Sheet>
          <SheetTrigger asChild>
            <img src="/assets/menu.png" alt="" className="w-[30px]" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className={"text-white border-none slideNav w-[85%]"}
          >
            {/* <SheetHeader> */}
            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
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

              <div className="px-5 h-fit">
                <NavBarButton mobile />
              </div>

            </SheetDescription>
            {/* </SheetHeader> */}
          </SheetContent>
        </Sheet>
      </div>
      {/* Responsive */}
    </div>
  );
};

export default NavBar;
