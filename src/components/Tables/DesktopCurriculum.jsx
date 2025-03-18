import arrow from "../../assets/icons/rightArrow.svg";
import curriculumData from "@/data/curriculumData";
import { FolderOpen, CircleSmall, Ellipsis } from "lucide-react";
import { CurriculumAccordion } from "../ui/Sheets/CurriculumAccordion";
import { useState } from "react";
import { Open } from "../Button/CurriculumButton";

export function CurriculumTable() {
  const [activeWeek, setActiveWeek] = useState(null);

  const toggleWeek = (week) => {
    setActiveWeek(activeWeek === week ? null : week);
  };
  const completed = "text-[#0950C3] bg-[#020E22]";
  const inComplete = "text-[#C28B0A] bg-[#181101]";
  const ongoing = "text-[#32CD32] bg-[#051505]";

  return (
    <div className="hidden lg:flex">
      <table className="w-full text-paragraph font-semibold text-[15px] ">
        <tr className="h-[40px]">
          <th className="text-start w-[50px]">#</th>
          <th className="text-start ">Topic</th>
          <th className="text-start w-[350px]">Status</th>
          <th className="text-start ">Period</th>
        </tr>
        {curriculumData.map((items, index) => (
          <tr className="h-[70px]" key={index}>
            <td>{index + 1}</td>
            <td>{items.topic}</td>
            <td>
              <div className="flex w-[50px]">
                <p
                  className={`${items.status === "Completed" ? completed : items.status === "Ongoing" ? ongoing : inComplete} flex items-center gap-1 px-2 rounded-lg`}
                >
                  <CircleSmall
                    width={20}
                    fill={`${items.status === "Completed" ? "#0950C3" : items.status === "Ongoing" ? "#32CD32" : "#C28B0A"}`}
                  />
                  {items.status}
                </p>
              </div>
            </td>
            <td>{items.period}</td>
            <td className=" w-[200px]">
              <div className=" flex justify-end w-full">
                <img
                  src={arrow}
                  className="cursor-pointer w-[23px]"
                  onClick={() => toggleWeek(index)}
                />
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
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CurriculumTable;
