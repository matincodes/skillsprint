import React from "react";
import arrow from "../../assets/icons/rightArrow.svg";
import curriculumData from "@/data/curriculumData";
import { CircleSmall } from "lucide-react";
const MobileCurriculum = () => {
  const completed = "text-[#0950C3] bg-[#020E22]";
  const inComplete = "text-[#C28B0A] bg-[#181101]";
  const ongoing = "text-[#32CD32] bg-[#051505]";
  return (
    <div className="lg:hidden space-y-7">
      {curriculumData.map((items, index) => (
        <div className="flex justify-between font-inter font-semibold text-sm text-paragraph" key={index}>
          <div className="flex gap-4">
            <p>{index + 1}</p>
            <div className="space-y-2">
              <p className="-tracking-tight">{items.topic}</p>
              <span className="  flex  gap-8 items-center text-xs ">
                <span
                  className={`${items.status === "Completed" ? completed : items.status === "Ongoing" ? ongoing : inComplete} flex gap-1 items-center px-2 rounded-lg `}
                >
                  <CircleSmall
                  width={15}
                    fill={`${items.status === "Completed" ? "#0950C3" : items.status === "Ongoing" ? "#32CD32" : "#C28B0A"}`}
                  />
                  <p>{items.status}</p>
                </span>
                <p>{items.period}</p>
              </span>
            </div>
          </div>
          <img className="cursor-pointer" src={arrow} />
        </div>
      ))}
    </div>
  );
};

export default MobileCurriculum;
