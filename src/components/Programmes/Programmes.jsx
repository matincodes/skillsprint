import React, { useState, useEffect, useCallback } from "react";
import axios from "@/lib/axios";
import ProgrammeCard from "../Cards/ProgrammeCard";
import { useEnrollment } from "@/context/EnrollmentContext";
import useEnrollmentStatus from "@/hooks/useEnrollmentStatus";

const Programmes = ({ data, isAuthenticated }) => {
  const { isLoading, hasActiveEnrollment } = useEnrollmentStatus();


  return (
    <>
      {data.map((course) => (
        <ProgrammeCard
          key={course.id}
          courseId={course.id}
          image={course.coverImage}
          title={course.title}
          description={course.description}
          price={course.price}
          duration={course.duration}
          isAuthenticated={isAuthenticated}
          startDate={course.startDate}
          isLoading={isLoading}
          hasActiveEnrollment={hasActiveEnrollment}
        />
      ))}
    </>
  );
};

export default Programmes;