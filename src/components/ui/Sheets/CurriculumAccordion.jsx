import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import link from "@/assets/icons/link.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";

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
export function CurriculumAccordion(e) {
  const linkIcon = <img src={link} alt="link" />;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-[30%] absolute top-[0%] right-0 bg-black text-white "
    >
      <div className="flex items-center mt-6 gap-3.5">
        <img
          src={arrowLeft}
          onClick={() => e.setActiveWeek(null)}
          className="cursor-pointer w-[25px]"
        />
        <p>
          {e.period} -{e.topic}
        </p>
      </div>

      {data.map((items, index) => (
        <AccordionItem value={index + 1} className="mt-10 p-0 border-[#121212]">
          <AccordionTrigger className=" cursor-pointer">
            Class {index + 1}
          </AccordionTrigger>
          <AccordionContent className="bg-[#121212] text-paragraph font-inter font-medium">
            <ul className="space-y-9">
              <li>
                <p className="text-[#525866] font-normal">Topic</p>
                <p>{e.topic}</p>
              </li>
              <li>
                <p className="text-[#525866] font-normal">Period</p>
                <p>{e.period} - Class 1</p>
              </li>
              <li>
                <p className="text-[#525866] font-normal">Date</p>
                <p>{e.date}</p>
              </li>
              <li>
                <p className="text-[#525866] font-normal">Status</p>
                <p>{e.status}</p>
              </li>
              <li className="space-y-2">
                <p className="text-[#525866] font-normal">Attachments</p>
                <div className="w-full space-y-2">
                  <span className="w-full px-3 h-[47px] bg-black rounded-sm flex items-center">
                    <img src={link} alt="link" className="cursor-pointer" />
                    <input
                      className="w-full px-3  outline-0"
                      placeholder="Class recoding for Week 1 - Class 1"
                    />
                  </span>
                  <span className="w-full px-3 h-[47px] bg-black rounded-sm flex items-center">
                    <img src={link} alt="link" className="cursor-pointer" />
                    <input
                      className="w-full px-3  outline-0"
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
