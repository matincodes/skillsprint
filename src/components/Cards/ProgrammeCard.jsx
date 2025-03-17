import React, { memo, useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import PopUp from "../Popup/Popup";
import { useEnrollments } from "@/hooks/useEnrollment";

const ProgrammeCard = ({
  courseId,
  image,
  description,
  title,
  duration,
  price,
  isAuthenticated,
  startDate,
  isLoading: parentLoading,
  hasActiveEnrollment,
  checkEnrollment,
}) => {
  const {
    currentEnrollment,
    handleEnroll,
    isLoading: queryLoading,
  } = useEnrollments();
  const [showPopup, setShowPopup] = useState(false);

  const isEnrolledInThisCourse = useMemo(
    () => currentEnrollment?.courseId === courseId,
    [currentEnrollment, courseId],
  );

  const handleEnrollClick = () => {
    const success = handleEnroll(courseId);
    if (success) {
      setShowPopup(true);
      checkEnrollment();
    }
  };

  return (
    <div className="w-auto bg-[#121212] rounded-2xl flex flex-col justify-between">
      <img className="w-full rounded-t-2xl" src={image} alt={title} />
      <div className="py-5 px-4 flex flex-col gap-5 items-start flex-grow">
        <span className="flex flex-col gap-2.5">
          <b className="lg:text-[30px] font-semibold text-xl text-white font-inter tracking-[2px]">
            {title}
          </b>
          <p className="lg:text-base text-white font-normal text-[11px] font-inter tracking-[1.5px]">
            <b className="text-[#808080] line-through">8 months</b>{" "}
            <b>{duration}</b>
            <span className="text-[#808080]">-</span>
            <b className="text-[#808080] line-through">₦ 100,000</b>{" "}
            <b>₦{price} (Free)</b>
          </p>
          <p className="lg:text-[20px] lg:leading-8 text-[#808080] font-normal text-sm font-inter leading-4.5 tracking-[1px] mb-2">
            {description}
          </p>
        </span>
      </div>
      <div className="px-4 pb-5 mb-2">
        {isAuthenticated ? (
          queryLoading || parentLoading ? (
            <button
              className="lg:text-base tracking-[1.5px] cursor-not-allowed font-semibold font-inter text-[10px] text-white py-3 px-6 bg-gray-500 rounded-md"
              disabled
            >
              Loading...
            </button>
          ) : isEnrolledInThisCourse ? (
            <button
              className="lg:text-base tracking-[1.5px] cursor-not-allowed font-semibold font-inter text-[10px] text-white py-3 px-6 bg-gray-500 rounded-md"
              disabled
            >
              Already Enrolled
            </button>
          ) : (
            <button
              className={`lg:text-base tracking-[1.5px] font-semibold font-inter text-[10px] text-white py-3 px-6 rounded-md ${
                hasActiveEnrollment
                  ? "bg-[#AE752C] bg-opacity-50 cursor-not-allowed"
                  : "bg-[#AE752C] cursor-pointer"
              }`}
              onClick={handleEnrollClick}
              disabled={hasActiveEnrollment || queryLoading}
            >
              Apply Now
            </button>
          )
        ) : (
          <Link
            to="/student/register"
            className="lg:text-base tracking-[1.5px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md"
          >
            Join the Free Program
          </Link>
        )}
      </div>
      <PopUp
        open={showPopup}
        onOpenChange={(open) => setShowPopup(open)}
        courseTitle={title}
        startDate={startDate}
      />
    </div>
  );
};

export default ProgrammeCard;
