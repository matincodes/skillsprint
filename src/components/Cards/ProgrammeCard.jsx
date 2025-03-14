import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import PopUp from "../Popup/Popup";
import { useEnrollment } from "@/context/EnrollmentContext";
import { useEnrollmentStatus } from "@/hooks/useEnrollmentStatus";

const ProgrammeCard = ({ courseId, image, description, title, duration, price, isAuthenticated, startDate }) => {
  const { handleEnroll, enrollments } = useEnrollment();
  const { hasActiveEnrollment, isLoading } = useEnrollmentStatus();
  const [showPopup, setShowPopup] = useState(false);

  const handleEnrollClick = async () => {
    const success = await handleEnroll(courseId);
    if (success) {
      setShowPopup(true);
    }
  };

  // Check if the user is already enrolled in this specific course
  const isEnrolledInThisCourse = enrollments.some(
    enrollment => enrollment.course.id === courseId
  );

  return (
    <div className="w-auto bg-[#121212] rounded-2xl ">
      <img className="w-full rounded-t-2xl " src={image} />
      <div className="py-5 px-4  flex flex-col gap-5 items-start ">
        <span className="flex flex-col gap-2.5">
          <b className="lg:text-[30px] font-semibold text-xl text-white font-inter tracking-[2px]">
            {title}
          </b>
          <p className="lg:text-base  text-white font-normal text-[11px] font-inter tracking-[1.5px]">
            <b className="text-[#808080] line-through">8 months</b> <b>{duration}</b>
            <span className="text-[#808080]">-</span>
            <b className="text-[#808080] line-through">₦ 100,000</b> <b>₦{price} (Free)</b>
          </p>
          <p className="lg:text-[22px] lg:leading-7 text-[#808080] font-normal text-sm font-inter leading-4.5  tracking-[1px]">
            {description}
          </p>
        </span>

        {isAuthenticated ? (
          isLoading ? (
            <button className="lg:text-base tracking-[1.5px] cursor-not-allowed font-semibold font-inter text-[10px] text-white py-3 px-6 bg-gray-500 rounded-md" disabled>
              Loading...
            </button>
          ) : isEnrolledInThisCourse ? (
            <button className="lg:text-base tracking-[1.5px] cursor-not-allowed font-semibold font-inter text-[10px] text-white py-3 px-6 bg-gray-500 rounded-md" disabled>
              Already Enrolled
            </button>
          ) : (
            <button 
              className={`lg:text-base tracking-[1.5px] font-semibold font-inter text-[10px] text-white py-3 px-6 rounded-md ${hasActiveEnrollment ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#AE752C] cursor-pointer'}`}
              onClick={handleEnrollClick}
              disabled={hasActiveEnrollment}
            >
              Apply Now
            </button>
          )
        ) : (
          <Link to="/student/register" className="lg:text-base tracking-[1.5px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md">
            Join the Free Program
          </Link>
        )}

        {showPopup && (
          <PopUp text='Apply Now' courseTitle={title} startDate={startDate} />
        )}
      </div>
    </div>
  );
};

export default ProgrammeCard;
