
import assignmentsData from "@/data/assignment";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, CircleSmall } from "lucide-react";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import sent from "../../assets/icons/sent.svg";
import checkBox from "../../assets/icons/checkBox.svg";
import close from "../../assets/icons/close.svg";

// Define the route for the assignment page
export const Route = createFileRoute("/dashboard/assignments")({
  component: AssignmentComponent,
});

const AssignmentComponent = () => {
  // CSS class variables for different statuses
  const completed = "text-[#0950C3] bg-[#020E22]";
  const inComplete = "text-[#C28B0A] bg-[#181101]";
  const ongoing = "text-[#32CD32] bg-[#051505]";

  // State management for active week selection and assignment submission status
  const [activeWeek, setActiveWeek] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(activeWeek);

  // Toggle function to set active week or reset it
  const toggleWeek = (week) => {
    setActiveWeek(activeWeek === week ? null : week);
  };

  return (
    <div className="h-full flex flex-col items-center">
      {/* Submission confirmation message */}
      {isSubmitted && (
        <div className="font-mono absolute top-[1%] lg:top-[3%] bg-[#32CD324D] flex items-start px-3 py-2.5 gap-5 border-2 border-[#32CD32] rounded-lg">
          <img src={checkBox} alt="icon" />
          <span>
            <p className="font-semibold text-base">Assignment Submitted </p>
            <p className="font-light text-xs">
              Your assignment has been submitted and sent to your instructor
            </p>
          </span>
          <img
            onClick={() => {
              setIsSubmitted(false);
            }}
            src={close}
            alt="icon"
            className="cursor-pointer"
          />
        </div>
      )}
      
      <div className={`${activeWeek ? "" : "space-y-[50px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10"}`}>

        {/* {assignmentsData.length <= 0 ? <div className="border border-red-500 w-[90%]"></div> : */}

        {assignmentsData.map((items, index) => (
          <>
            {!activeWeek && (
              <div className="space-y-3 py-5">
                <p className="font-inter font-medium text-[#868C98] text-sm lg:text-lg">
                  {items.category}
                </p>

                <div className="bg-[#121212] py-5 px-3.5 space-y-[25px] lg:space-y-[65px] rounded-md">
                  <div className="space-y-[16px]">
                    <p className="w-7">📝</p>
                    <p className="font-sora font-normal text-xl lg:text-2xl">{items.title}</p>
                    <p className="font-inter font-normal text-[#868C98] text-xs lg:text-base tracking-[1px] lg:tracking-[0px] leading-[20px]">
                      {items.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-[11px] lg:text-base">
                      <p className="font-inter font-normal text-[#868C98]">{items.dueDate}</p>
                      <div className="flex w-[50px] font-medium font-inter">
                        <p className={`${items.status === "Completed" ? completed : items.status === "Ongoing" ? ongoing : inComplete} flex items-center gap-1 px-2 rounded-lg`}>
                          <CircleSmall width={15} fill={`${items.status === "Completed" ? "#0950C3" : items.status === "Ongoing" ? "#32CD32" : "#C28B0A"}`} />
                          {items.status}
                        </p>
                      </div>
                    </span>
                    <button onClick={() => toggleWeek(index + 1)} className="flex items-center text-[#AE752C] cursor-pointer font-inter font-medium text-sm lg:text-base">
                      View Task <ArrowUpRight width={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeWeek === index + 1 && (
              <div className="w-full">
                <div className="w-full">
                  <button className="text-[#868C98] font-inter text-sm flex items-center cursor-pointer mb-2" onClick={() => setActiveWeek(null)}>
                    <img src={arrowLeft} className="w-6" /> <span>Go back</span>
                  </button>
                  <div className="bg-[#121212] px-3 py-5 flex items-start gap-3 w-full">
                    <p>📝</p>
                    <div className="space-y-[15px]">
                      <div className="space-y-[25px]">
                        <p className="font-sora font-normal text-xl lg:text-2xl">{items.title}</p>
                        <span className="flex items-center gap-2 text-[11px] lg:text-base">
                          <p className="font-inter font-normal text-[#868C98]">{items.dueDate}</p>
                          <div className="flex w-[50px] font-medium font-inter">
                            <p className={`${items.status === "Completed" ? completed : items.status === "Ongoing" ? ongoing : inComplete} flex items-center gap-1 px-2 rounded-lg`}>
                              <CircleSmall width={15} fill={`${items.status === "Completed" ? "#0950C3" : items.status === "Ongoing" ? "#32CD32" : "#C28B0A"}`} />
                              {items.status}
                            </p>
                          </div>
                        </span>
                        <p className="font-inter font-normal text-[#868C98]">50 points</p>
                      </div>
                      <p className="font-inter font-normal text-[#868C98] text-xs lg:text-base tracking-[1px] lg:tracking-[0px] leading-[20px]">
                        {items.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Assignment Submission Section */}
                <div className="w-full h-[100px] mt-10">
                  <p className="font-inter font-medium text-[#868C98]">Submit Assignment</p>
                  <div className="bg-[#121212] px-3 py-5 flex items-center justify-between gap-3.5">
                    <input className="bg-black text-[#525866] outline-0 py-2 px-2 w-full rounded-full" placeholder="Paste the required submission link" />
                    <button onClick={() => setIsSubmitted(true)} className="bg-[#AE752C] text-black py-2 px-3.5 cursor-pointer rounded-sm flex items-center gap-1 font-inter text-sm">
                      <span>Submit</span>
                      <img src={sent} alt="icon" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
