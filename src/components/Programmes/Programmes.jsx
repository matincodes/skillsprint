import React from "react";
import ProgrammeCard from "../Cards/ProgrammeCard";
import useEnrollmentStatus from "@/hooks/useEnrollmentStatus";

const Programmes = ({ data, isAuthenticated }) => {
  const { isLoading, hasActiveEnrollment, refetch: checkEnrollment } = useEnrollmentStatus();

  return (
    <>
      {data.map((course) => (
        <ProgrammeCard
          key={course.id}
          courseId={course.id}
          image={course.coverImage}
          title={course.title}
          description={course.description.slice(0, 150) + "..."}
          price={course.price}
          duration={course.duration}
          isAuthenticated={isAuthenticated}
          startDate={course.startDate}
          isLoading={isLoading}
          hasActiveEnrollment={hasActiveEnrollment}
          checkEnrollment={checkEnrollment}
        />
      ))}
    </>
  );
};

export default Programmes;
