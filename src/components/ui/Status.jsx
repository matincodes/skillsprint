import { CircleSmall } from "lucide-react";
import React from "react";

// CSS class variables for different assignment statuses
const completed = "text-[#0950C3] bg-[#020E22]";
const inComplete = "text-[#C28B0A] bg-[#181101]";
const ongoing = "text-[#32CD32] bg-[#051505]";
const Status = (e) => {
  return (
    <div className="flex w-[50px] font-medium font-inter">
      <p
        className={`${e.status === "Completed" ? completed : e.status === "Ongoing" ? ongoing : inComplete} flex items-center gap-1 px-2 rounded-lg`}
      >
        <CircleSmall
          width={15}
          fill={`${e.status === "Completed" ? "#0950C3" : e.status === "Ongoing" ? "#32CD32" : "#C28B0A"}`}
        />
        {e.status}
      </p>
    </div>
  );
};

export default Status;
