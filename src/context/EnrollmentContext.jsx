// contexts/EnrollmentContext.js
import { createContext, useContext, useState } from 'react';
import axios from '@/lib/axios';

const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
  const [enrollments, setEnrollments] = useState([]);
  const [currentEnrollment, setCurrentEnrollment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEnroll = async (courseId) => {
    setIsLoading(true);
    setError(null); // Reset error state before starting the request
    try {
      const response = await axios.post(`/api/courses/${courseId}/enroll`, {
        courseId,
      });

      const data = response.data;

      // Check if the response status is not 200 or 201
      if (response.status !== 200 && response.status !== 201) {
        throw new Error(data.error || 'Failed to enroll');
      }

      // Check if the enrollment status is ACTIVE
      if (data.status === 'ACTIVE') {
        setEnrollments((prev) => [...prev, data]);
        setCurrentEnrollment(data);
        return true; // Enrollment successful
      } else {
        throw new Error('Enrollment status is not ACTIVE');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during enrollment');
      return false; // Enrollment failed
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EnrollmentContext.Provider
      value={{
        enrollments,
        currentEnrollment,
        isLoading,
        error,
        handleEnroll,
        setEnrollments,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export const useEnrollment = () => useContext(EnrollmentContext);