import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Triangle } from "lucide-react";



const LeaderBoardCard = (e) => {
  return (
    <>
      <div className="bg-[#121212a1] rounded-sm flex justify-between">
        <div className="flex gap-3 items-center p-2">
          <Avatar>
            <AvatarImage src={e.image} className={"size-11"} />
            <AvatarFallback>{e.fullName}</AvatarFallback>
          </Avatar>
          <span>
            <h2 className="text-[15px]">{e.fullName}</h2>
            <p className="text-paragraph text-[12px]">{e.point} points</p>
          </span>
        </div>

        <div className="flex items-center p-2 font-inter gap-3">
          <p className="text-paragraph text-[14px] font-[700]">{e.level}</p>
          {e.type ? (
            <Triangle className="w-[15px] font-bold text-green-800 fill-green-800" />
          ) : (
            <Triangle className="w-[15px] rotate-[180deg] font-bold text-red-800 fill-red-800" />
          )}
        </div>
      </div>
    </>
  );
};

export default LeaderBoardCard;
