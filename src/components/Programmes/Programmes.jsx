import React, { useState, useEffect, useCallback } from "react";
import axios from "@/lib/axios";
import ProgrammeCard from "../Cards/ProgrammeCard";
import { useEnrollment } from "@/context/EnrollmentContext";

const Programmes = ({ data, isAuthenticated }) => {
  const [hasActiveEnrollment, setHasActiveEnrollment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchEnrollments } = useEnrollment();

  const checkEnrollment = useCallback(async () => {
    try {
      const { data } = await axios.get('/api/courses/enrollments/active');
      setHasActiveEnrollment(data.hasActive);
    } catch (error) {
      console.error('Enrollment check error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEnrollments();
      checkEnrollment();
    }
  }, [isAuthenticated, fetchEnrollments, checkEnrollment]);

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
          checkEnrollment={checkEnrollment}
        />
      ))}
    </>
  );
};

export default Programmes;