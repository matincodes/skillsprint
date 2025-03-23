import { pastAssignmentsData } from "@/data/assignment";
import { ArrowUpRight, CircleSmall } from "lucide-react";
import React, { useState } from "react";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import sent from "../../assets/icons/sent.svg";
import close from "../../assets/icons/close.svg";
import checkBox from "../../assets/icons/checkBox.svg";
import Status from "../ui/Status";
import Confirmationmessage from "../ui/Confirmationmessage";

// Component for displaying past assignments
const PastAssignment = (e) => {
  const [pastAssignment, setpastAssignment] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to toggle assignment view
  const pastAssignmentToggle = (week) => {
    setpastAssignment(pastAssignment === week ? null : week);
    e.setActivePendingAssignment(false);
  };

  // Function to handle returning to the main assignment list
  const HandleReturn = () => {
    e.setActivePendingAssignment(true);
    setpastAssignment(null);
  };

  return (
    <>
      {/* Submission confirmation message */}
      {isSubmitted && <Confirmationmessage setIsSubmitted={setIsSubmitted} />}

      {/* Container for past assignments */}
      {!pastAssignment && (
        <p className="font-inter font-medium text-[#868C98] text-sm lg:text-lg mt-10 lg:mt-3 ">
          Past Assignments
        </p>
      )}

      <div
        className={`${pastAssignment ? " " : "space-y-[50px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 "} `}
      >
        {pastAssignmentsData.map((items, index) => (
          <>
            {/* Display assignment list if no specific assignment is selected */}

            {!pastAssignment && (
              <div className="space-y-3 py-5">
                <div className="bg-[#121212] py-5 px-3.5 space-y-[25px] lg:space-y-[65px] rounded-md">
                  <div className="space-y-[16px]">
                    <p className="">📝</p>
                    <p className="font-sora font-normal text-xl lg:text-2xl">
                      {items.title}
                    </p>
                    <p className="font-inter font-normal text-[#868C98] text-xs lg:text-base tracking-[1px] lg:tracking-[0px] leading-[20px]">
                      {items.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-[11px] lg:text-base">
                      <p className="font-inter font-normal text-[#868C98]">
                        {items.dueDate}
                      </p>
                      <Status status={items.status} />
                    </span>
                    <button
                      onClick={() => pastAssignmentToggle(index + 1)}
                      className="flex items-center text-[#AE752C] cursor-pointer font-inter font-medium text-sm lg:text-base"
                    >
                      View Task <ArrowUpRight width={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Display detailed assignment view when selected */}
            {pastAssignment === index + 1 && (
              <div className="w-full">
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

export default PastAssignment;
