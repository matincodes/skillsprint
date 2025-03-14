import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/Sheets/NavBarSheet";
import UserAvatar from "../UserAvatar/UserAvatar";

const NavBar = () => {
  const pathname = useLocation();
  const [active, setActive] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

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

        <div className="grid ">
          {user === null ? (
            <Button text="Login to portal" location="/student/login" nav />
          ) : (
            <div className="flex gap-2 items-center">
              <UserAvatar
                profile={
                  user.profilePicture
                    ? user.profilePicture
                    : "/assets/avatar.png"
                }
              />
              <div className="flex flex-col font-sora">
                <h1 className="text-[13px] text-white font-[300]">
                  {user.name}
                </h1>
                <p className="text-paragraph text-[10px] font-[400]">
                  {user.email}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Dashboard */}

      {/* Responsive */}
      <div className="lg:hidden flex items-center justify-between">
        <img src="/assets/logo.png" alt="" className="w-[50px] " />
        <Sheet>
          <SheetTrigger asChild className="item-end">
            <div className="grid justify-end">
              <img
                src="/assets/menu.png"
                alt=""
                className="w-[30px] cursor-pointer"
              />
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
                Home page
              </Link>
              <Link
                to="/about"
                className={`${active == "/about" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 px-5`}
              >
                About
              </Link>
              <Link
                to="/programmes"
                className={`${active == "/programmes" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 px-5`}
              >
                Programmes
              </Link>

              {user == null ? (
                <Button text="Login to portal" location="/student/login" nav />
              ) : (
                <div className="flex gap-2">
                  <UserAvatar
                    profile={
                      user.profilePicture
                        ? user.profilePicture
                        : "/assets/avatar.png"
                    }
                  />

                  <div className="flex flex-col font-sora">
                    <h1 className="text-[13px] text-white font-[300]">
                      {user.name}
                    </h1>
                    <p className="text-paragraph text-[10px] font-[400]">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
      {/* Responsive */}
    </div>
  );
};

export default NavBar;
