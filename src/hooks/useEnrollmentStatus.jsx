// hooks/useEnrollmentStatus.js
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export const useEnrollmentStatus = () => {
  const [hasActiveEnrollment, setHasActiveEnrollment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkEnrollment = async () => {
      try {
        const response = await axios.get(`/api/courses/enrollments/active`);
        setHasActiveEnrollment(response.data.hasActive);
      } catch (error) {
        console.error('Error checking enrollment:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkEnrollment();
  }, []);

  return { hasActiveEnrollment, isLoading };
};