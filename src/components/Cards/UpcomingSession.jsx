import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const UpcomingSession = (e) => {
  return (
    <>
      <div className="px-2 py-5 flex justify-between items-center">
        <div className="flex gap-3 text-center items-center">
          <img src={`${e.image}`} alt="" className="w-5" />
          <p className="font-[400] text-xs lg:text-base">{e.title}</p>
        </div>

        <Link
          to={`${e.url}`}
          className="text-paragraph font-[300] text-[10px] lg:text-sm flex items-center gap-0.5"
        >
          View Task <ArrowUpRight className="w-4 lg:w-5"  />
        </Link>
      </div>
    </>
  );
};

export default UpcomingSession;
