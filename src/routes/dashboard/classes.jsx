import { createFileRoute, Link } from "@tanstack/react-router";
import connick from "../../assets/image/connick.svg";
import ClasseCard from "@/components/Cards/ClasseCard";
import classesData from "@/data/classesData";
import "../../routes/programmes/programmes.css";
import studentsImage from "../../assets/image/students.png";
import { Radio } from "lucide-react";
import NullState from "@/components/Null/Null";


export const Route = createFileRoute("/dashboard/classes")({
  component: ClassesComponent,
});

const ClassesComponent = () => {
  return (
    <div className="flex flex-col w-full   gap-8 ">
      
      {/* live cards */}
      <div className="flex flex-col w-full lg:px-5 gap-3.5  md:mt-6">
        <span className="flex w-full items-center justify-between">
          <b className="font-inter font-medium text-sm lg:text-base text-paragraph">
            Recorded classes
          </b>
          <button className="bg-[#121212] font-inter font-medium text-xs text-paragraph py-1 px-3 rounded-[10px] cursor-pointer md:hidden">
            View More
          </button>
        </span>
        <div className="custom-scroll">
          <div className={classesData.length <= 0 ? `bg-[#121212a1] p-3` : `flex gap-4 w-[750px] md:w-[900px] lg:w-full border justify-center`}>
            {classesData.length <= 0 ? (
              <>
                <NullState
                  mainText={"No Recorded classes."}
                  miniText={"Once a class is recorded, you’ll see it here!"}
                  image={"/assets/null/recordings.png"}
                />
              </>
            ) : (
              classesData.map((items) => (
                <ClasseCard
                  key={items.id}
                  role={items.role}
                  time={items.time}
                  week={items.week}
                  src={items.src}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
