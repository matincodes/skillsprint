import { pendingAssignmentsData } from "@/data/assignment";
import { ArrowUpRight, CircleSmall } from "lucide-react";
import React, { useState } from "react";
import close from "../../assets/icons/close.svg";
import checkBox from "../../assets/icons/checkBox.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import sent from "../../assets/icons/sent.svg";
import Status from "../ui/Status";
import Confirmationmessage from "../ui/confirmationmessage";

// CSS class variables for different assignment statuses
const completed = "text-[#0950C3] bg-[#020E22]";
const inComplete = "text-[#C28B0A] bg-[#181101]";
const ongoing = "text-[#32CD32] bg-[#051505]";

const PendingAssignment = (e) => {
  // State for tracking the selected pending assignment
  const [pendingAssignment, setPendingAssignment] = useState(null);
  // State for tracking assignment submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to toggle the selected pending assignment
  const pendingAssignmentToggle = (week) => {
    setPendingAssignment(pendingAssignment === week ? null : week);
    e.setActivePastAssignment(false);
  };

  // Function to handle returning to the past assignments list
  const HandleReturn = () => {
    e.setActivePastAssignment(true);
    setPendingAssignment(null);
  };

  return (
    <>
      {/* Display confirmation message when assignment is submitted */}
      {isSubmitted && <Confirmationmessage setIsSubmitted={setIsSubmitted} />}
      {!pendingAssignment && (
        <p className="font-inter font-medium text-[#868C98] text-sm lg:text-lg ">
          Pending Assignments
        </p>
      )}

      <div
        className={`${pendingAssignment ? " " : "space-y-[50px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 "}`}
      >
        {pendingAssignmentsData.map((items, index) => (
          <>
            {/* Display pending assignments if no specific one is selected */}

            {!pendingAssignment && (
              <div className="space-y-3 py-5">
                <div className="bg-[#121212] py-5 px-3.5 space-y-[25px] lg:space-y-[65px] rounded-md">
                  <div className="space-y-[16px]">
                    <p className="w-7">📝</p>
                    <p className="font-sora font-normal text-xl lg:text-2xl">
                      {items.title}
                    </p>
                    <p className="font-inter font-normal text-[#868C98] text-xs lg:text-base tracking-[1px] lg:tracking-[0px] leading-[20px]">
                      {items.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {/* Display assignment due date and status */}
                    <span className="flex items-center gap-2 text-[11px] lg:text-base">
                      <p className="font-inter font-normal text-[#868C98]">
                        {items.dueDate}
                      </p>
                      <Status status={items.status} />
                    </span>
                    <button
                      onClick={() => pendingAssignmentToggle(index + 1)}
                      className="flex items-center text-[#AE752C] cursor-pointer font-inter font-medium text-sm lg:text-base"
                    >
                      View Task <ArrowUpRight width={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Display selected assignment details */}
            {pendingAssignment === index + 1 && (
              <div className="w-full ">
                <div className="w-full">
                  <button
                    className="text-[#868C98] font-inter text-sm flex items-center cursor-pointer mb-2"
                    onClick={HandleReturn}
                  >
                    <img src={arrowLeft} className="w-6" /> <span>Go back</span>
                  </button>
                  <div className="bg-[#121212] px-3 py-5 flex items-start gap-3 w-full">
                    <p>📝</p>
                    <div className="space-y-[15px]">
                      <div className="space-y-[25px]">
                        <p className="font-sora font-normal text-xl lg:text-2xl">
                          {items.title}
                        </p>
                        <span className="flex items-center gap-2 text-[11px] lg:text-base">
                          <p className="font-inter font-normal text-[#868C98]">
                            {items.dueDate}
                          </p>
                          <Status status={items.status} />
                        </span>
                        <p className="font-inter font-normal text-[#868C98]">
                          50 points
                        </p>
                      </div>
                      <p className="font-inter font-normal text-[#868C98] text-xs lg:text-base tracking-[1px] lg:tracking-[0px] leading-[20px]">
                        {items.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Assignment Submission Section */}
                <div className="w-full h-[100px] mt-10">
                  <p className="font-inter font-medium text-[#868C98]">
                    Submit Assignment
                  </p>
                  <div className="bg-[#121212] px-3 py-5 flex items-center justify-between gap-3.5">
                    <input
                      className="bg-black text-[#525866] outline-0 py-2 px-2 w-full rounded-full"
                      placeholder="Paste the required submission link"
                    />
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="bg-[#AE752C] text-black py-2 px-3.5 cursor-pointer rounded-sm flex items-center gap-1 font-inter text-sm"
                    >
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
    </>
  );
};

export default PendingAssignment;
