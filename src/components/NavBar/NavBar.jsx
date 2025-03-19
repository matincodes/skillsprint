import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/Sheets/NavBarSheet";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import arrowDown from "../../assets/icons/arrowDown.svg";
import userIcon from "../../assets/icons/user.svg";
import home from "../../assets/icons/home.svg";
import logOutIcon from "../../assets/icons/logOutIcon.svg";

const NavBar = () => {
  const pathname = useLocation();
  const [active, setActive] = useState("");

  const { user, logout } = useAuth();
  console.log(user);

  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await logout();

      navigate({ to: "/student/login" });
    } catch (error) {
       console.error("Logout error:", error);
    }
  };

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
            <DropdownMenu className="">
              <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center cursor-pointer">
                  <UserAvatar
                    profile={
                      user.profilePicture
                        ? user.profilePicture
                        : "/assets/avatar.png"
                    }
                  />
                  <div className="flex flex-col font-sora">
                    <div className="text-[13px] text-white font-[300]">
                      {user.name}
                    </div>
                    <p className="text-paragraph text-[10px] font-[400]">
                      {user.email}
                    </p>
                  </div>
                  <img src={arrowDown} alt="arrow" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-[#121212] pt-4 text-white   space-y-4 font-[300] text-[14px] font-inter">
                <span className="flex items-center cursor-pointer pr-8 pl-1 py-1 hover:bg-black gap-2 duration-300 ease-in-out">
                  <img src={userIcon} />
                  <Link
                      to="/"
                      className={`${active == "" ? "text-main" : ""}  `}
                    >
                      My Profile
                    </Link>
                </span>
                <span className="flex items-center cursor-pointer pr-8 pl-1 py-1 hover:bg-black gap-2 duration-300 ease-in-out">
                  <img src={home} />
                  <Link
                      to="/"
                      className={`${active == "" ? "text-main" : ""}  `}
                    >
                      Go to Dashboard
                    </Link>
                </span>
                <span className="flex items-center cursor-pointer pr-8 pl-1 py-1 hover:bg-black gap-2 text-[#FF3D0099] duration-300 ease-in-out">
                  <img src={logOutIcon} />
                  <button
                      to="/"
                      className={`${active == "" ? "text-main" : ""}  `}
                    >
                      Logout
                    </button>
                  
                </span>
              </DropdownMenuContent>
            </DropdownMenu>
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
                " flex h-full flex-col  font-inter py-[50px] px-3 space-y-1 "
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
                to="/programmes"
                className={`${active == "/programmes" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 px-5`}
              >
                Programmes
              </Link>

              {user == null ? (
                <div className="flex mt-10">
                  <Button
                    text="Login to portal"
                    nav
                    location="/student/login"
                  />
                </div>
              ) : (
                <>
                  <div className="flex gap-2 w-fit ml-5 mt-[40px]">
                    <UserAvatar
                      profile={
                        user.profilePicture
                          ? user.profilePicture
                          : "/assets/avatar.png"
                      }
                    />

                    <div className="flex flex-col font-sora">
                      <div className="text-[13px] text-white font-[300]">
                        {user.name}
                      </div>
                      <p className="text-paragraph text-[10px] font-[400]">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="ml-5  flex h-full flex-col  font-inter py-[20px]  space-y-1">
                    <Link
                      to="/"
                      className={`${active == "" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 `}
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/"
                      className={`${active == "" ? "text-main" : ""} font-[300] text-[14px] hover:text-main py-4 `}
                    >
                      Go to Dashboard
                    </Link>
                    <button
                      className="flex items-center gap-2 font-[300] text-[14px] text-[#FF3D0099] py-4 cursor-pointer"
                      onClick={handleLogout}
                    >
                      <img src={logOutIcon} />
                      <p className="">Logout</p>
                    </button>
                  </div>
                </>
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
