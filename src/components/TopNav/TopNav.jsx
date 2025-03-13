import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const TopNav = () => {
  return (
    <div className="px-2 py-5 flex justify-between items-center z-3">
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
  );
};

export default TopNav;
