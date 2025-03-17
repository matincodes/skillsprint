import React from "react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import UserAvatar from "../UserAvatar/UserAvatar";
import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";

const TopNav = () => {
  const { pathname } = useLocation();
  const userImage = JSON.parse(window.localStorage.getItem("user"))?.image;

  return (
    <div className="">
      {/* Mobile View */}
      <div className="flex lg:hidden gap-3 items-center justify-between py-[20px] ">
        <div className="flex gap-4 items-center">
          <SidebarTrigger className={" lg:hidden md:hidden cursor-pointer"} />
          <img src="/assets/logo.png" alt="" className="w-13" />
        </div>

        <div className="flex gap-4 items-center">
          <Search className="text-paragraph cursor-pointer" />
          <Link
            to="/dashboard/profile"
            className={`${pathname == "/dashboard/profile" ? "" : ""} flex gap-2 items-center`}
          >
            <UserAvatar profile={userImage} />
          </Link>
        </div>
      </div>
      {/* Mobile View */}

      {/* Desktop View */}
      <div className="px-2 py-5 justify-between items-center z-3 lg:flex hidden ">
        <div className="lg:w-[45%] w-[70%] flex items-center bg-[#121212] rounded-[8px] px-2 py-1">
          <Search className="text-paragraph cursor-pointer" />
          <Input
            type="text"
            id="search"
            placeholder="Search your course or session..."
            className="border-none outline-none placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#848484] w-full"
          />
        </div>

        <img src="/assets/Icons/notification.png" alt="" className="w-7 h-7" />
      </div>
      {/* Desktop View */}
    </div>
  );
};

export default TopNav;
