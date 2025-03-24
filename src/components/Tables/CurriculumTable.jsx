import arrow from "../../assets/icons/rightArrow.svg";
import curriculumData from "@/data/curriculumData";
import { CircleSmall } from "lucide-react";
import { CurriculumAccordion } from "../ui/CurriculumAccordion";
import { useState } from "react";
import NullState from "../Null/Null";
import Status from "../ui/Status";

export function CurriculumTable() {
  // State to track the currently active week
  const [activeWeek, setActiveWeek] = useState(null);

  // Function to toggle the active week
  const toggleWeek = (week) => {
    setActiveWeek(activeWeek === week ? null : week);
  };

  // CSS class variables for different statuses
  const completed = "text-[#0950C3] bg-[#020E22]";
  const inComplete = "text-[#C28B0A] bg-[#181101]";
  const ongoing = "text-[#32CD32] bg-[#051505]";

  return (
    <div className="flex flex-col w-full text-paragraph font-semibold text-[13px] lg:text-[15px] font-inter">
      {/* Table Header (Only visible on larger screens) */}
      {curriculumData.length <= 0 ? (
        <div className="bg-[#121212a1] p-2">
          <NullState
            mainText={"No curriculum available yet."}
            miniText={
              " This course’s curriculum hasn’t been added yet. Check back later!"
            }
            image={"/assets/null/curriculum.png"}
          />
        </div>
      ) : (
        <>
          <div className="hidden lg:flex">
            <div className="w-[44px]">#</div>
            <div className="w-[400px]">Topic</div>
            <div className="w-[280px]">Status</div>
            <div className="w-60">Period</div>
            <div className="flex-1">
              <div className="w-[20px]"></div>
            </div>
          </div>
          {curriculumData.map((items, index) => (
            <div
              className="flex space-y-3 mt-5 lg:mt-7 lg:space-y-5"
              key={index}
            >
              <div className="w-[44px]">{index + 1}</div>
              <div className="w-[400px] tracking-wide">
                {items.topic}
                {/* Status and Period Display (Visible on smaller screens) */}
                <div className="flex items-center justify-between w-[155px] lg:hidden text-[10px]">
                  <Status status={items.status} />
                  <p>{items.period}</p>
                </div>
              </div>

              {/* Status Display (Visible on larger screens) */}
              <div className="w-[280px] hidden lg:flex">
                <Status status={items.status} />
              </div>

              {/* Period Display (Visible on larger screens) */}
              <div className="w-60 hidden lg:flex">{items.period}</div>

              {/* Expandable Details Section */}
              <div className="flex-1">
                <div className="flex justify-end w-full">
                  {/* Toggle Button (Arrow Icon) */}
                  <div className="w-[20px]">
                    <img
                      src={arrow}
                      className="cursor-pointer size-6"
                      onClick={() => toggleWeek(index)}
                    />
                  </div>

                  {/* Render the Accordion if the week is active */}
                  {activeWeek === index && (
                    <CurriculumAccordion
                      topic={items.topic}
                      period={items.period}
                      date={items.date}
                      status={items.status}
                      setActiveWeek={setActiveWeek}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CurriculumTable;
