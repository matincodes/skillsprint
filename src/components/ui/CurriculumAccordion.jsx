import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import link from "@/assets/icons/link.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import { CircleSmall } from "lucide-react";

// Sample data for the curriculum accordion
const data = [
  {
    topic: "Introduction to HTML",
    period: "Week 1",
    date: "12th July 2021",
    status: "Completed",
  },
  {
    topic: "Introduction to CSS",
    period: "Week 2",
    date: "19th July 2021",
    status: "Ongoing",
  },
  {
    topic: "Introduction to JavaScript",
    period: "Week 3",
    date: "26th July 2021",
    status: "Incompleted",
  },
];

// CurriculumAccordion component to display detailed information for each topic
export function CurriculumAccordion(e) {
  // Status styles for different completion states
  const completed = "text-[#0950C3] bg-[#020E22]";
  const inComplete = "text-[#C28B0A] bg-[#181101]";
  const ongoing = "text-[#32CD32] bg-[#051505]";

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:w-[35%] absolute top-[0%] right-0 bg-black text-white"
    >
      {/* Header with back button and topic details */}
      <div className="flex items-center mt-6 gap-3 mb-7">
        <img
          src={arrowLeft}
          onClick={() => e.setActiveWeek(null)} // Close the accordion when clicked
          className="cursor-pointer w-[25px]"
        />
        <p className="text-base font-sora font-normal">
          {e.period} - {e.topic}
        </p>
      </div>

      {/* Accordion content for each class */}
      {data.map((items, index) => (
        <AccordionItem 
          key={index} // Ensure unique keys for React rendering
          value={index + 1} 
          className="mt-10 p-0 border-b-2 border-[#121212] space-y-5 m-0"
        >
          <AccordionTrigger className="cursor-pointer font-inter font-normal text-[13px] lg:text-base p-1 lg:p-2">
            Class {index + 1}
          </AccordionTrigger>
          <AccordionContent className="bg-[#121212] text-paragraph font-inter font-medium m-0">
            <ul className="space-y-9 w-full">
              {/* Topic Section */}
              <li>
                <p className="text-[#525866] font-normal">Topic</p>
                <p>{e.topic}</p>
              </li>
              {/* Period Section */}
              <li>
                <p className="text-[#525866] font-normal">Period</p>
                <p>{e.period} - Class 1</p>
              </li>
              {/* Date Section */}
              <li>
                <p className="text-[#525866] font-normal">Date</p>
                <p>{e.date}</p>
              </li>
              {/* Status Section */}
              <li>
                <p className="text-[#525866] font-normal">Status</p>
                <div className="flex w-[50px]">
                  <p
                    className={`${
                      e.status === "Completed" ? completed 
                      : e.status === "Ongoing" ? ongoing 
                      : inComplete
                    } flex items-center gap-1 px-2 rounded-lg`}
                  >
                    <CircleSmall
                      width={15}
                      fill={`${
                        e.status === "Completed" ? "#0950C3" 
                        : e.status === "Ongoing" ? "#32CD32" 
                        : "#C28B0A"
                      }`}
                    />
                    {e.status}
                  </p>
                </div>
              </li>
              {/* Attachments Section */}
              <li className="space-y-2">
                <p className="text-[#525866] font-normal">Attachments</p>
                <div className="w-full space-y-2">
                  <span className="w-full px-3 h-[47px] bg-black rounded-sm flex items-center">
                    <img src={link} alt="link" className="cursor-pointer" />
                    <input
                      className="w-full px-3 outline-0"
                      placeholder="Class recording for Week 1 - Class 1"
                    />
                  </span>
                  <span className="w-full px-3 h-[47px] bg-black rounded-sm flex items-center">
                    <img src={link} alt="link" className="cursor-pointer" />
                    <input
                      className="w-full px-3 outline-0"
                      placeholder="Class material pdf"
                    />
                  </span>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
