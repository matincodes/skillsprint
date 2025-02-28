import { createFileRoute } from "@tanstack/react-router";
import connick from "../../assets/image/connick.svg";
import liveStreamIcon from "../../assets/icons/liveStreamIcon.svg";
import ClasseCard from "@/components/Card/ClasseCard";
import classesData from "@/data/classesData";
import "../../routes/programmes/programmes.css";
import studentsImage from "../../assets/image/students.png"
export const Route = createFileRoute("/dashboard/classes")({
  component: ClassesComponent,
});

const ClassesComponent = () => {
  return (
    <div className="flex flex-col   gap-8 lg:px-6 ">
      <div className="flex flex-col gap-3 px-5 ">
        <p className="text-paragraph font-inter text-sm font-normal lg:text-base">
          Live classes
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-end lg:gap-7">
          <img src={connick} className="lg:w-[50%] h-full" />
          <div className="flex flex-col gap-5  lg:justify-between">
            {/* text contentner */}
            <div className="flex flex-col gap-2.5 items-start  ">
              <span className="bg-[#DC143C] text-black px-2 ">
                <b className="font-inter font-medium text-[12px] px-1 lg:text-base">
                  LIVE
                </b>
              </span>
              <p className="font-mono font-normal text-[22px] leading-6 lg:text-[23px]">
                Understanding UI/UX Basics: Week 1 - Class 3
              </p>
              <p className="text-paragraph text-[13px] font-inter font-normal leading-5 lg:text-base lg:leading-7">
                Learn the essentials of UI/UX design, including usability,
                wireframing, and user-centered design principles.
              </p>
            </div>
            {/* buttons layout */}
            <div className="w-full flex items-center justify-between font-semibold lg:justify-start lg:gap-10">
              <button className="bg-[#AE752C] flex items-center lg:text-base gap-1.5 py-1.5 px-6 rounded-[8px]  ">
                Join Live Class
                <img src={liveStreamIcon} />
              </button>
              {/* hidden at media with of 768px */}
              <button className="text-[#AE752C] flex items-center gap-1.5 lg:hidden">
                View Last Recording
                <img src={liveStreamIcon} className="text-[!#AE752C]" />
              </button>
              {/* flex at media with of 768px */}
              <span className="hidden lg:flex items-center gap-3 text-paragraph text-base ">
                <img src={studentsImage}/>
                5 students in class
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* live cards */}
      <div className="flex flex-col w-full px-5 gap-3.5  md:mt-6">
        <span className="flex w-full items-center justify-between">
          <b className="font-inter font-medium text-sm lg:text-base text-paragraph">
            Recorded classes
          </b>
          <button className="bg-[#121212] font-inter font-medium text-xs text-paragraph py-1 px-3 rounded-[10px] cursor-pointer md:hidden">
            View More
          </button>
        </span>
        <div className="custom-scroll">
          <div className="flex gap-4 w-[750px] md:w-full">
            {classesData.map((items) => (
              <ClasseCard
                key={items.id}
                role={items.role}
                time={items.time}
                week={items.week}
                src={items.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
