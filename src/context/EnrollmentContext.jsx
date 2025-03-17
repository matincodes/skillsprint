import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import axios from '@/lib/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
  const [enrollments, setEnrollments] = useState([]);
  const [currentEnrollment, setCurrentEnrollment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEnrollments = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/courses/enrollments');
      setEnrollments(data);
      const activeEnrollment = data.find(e => e.status === 'ACTIVE');
      setCurrentEnrollment(activeEnrollment || null);
    } catch (err) {
      console.error('Error fetching enrollments:', err);
      // toast.error('Error fetching enrollments');
    } finally {
      setIsLoading(false);
    }
  }, []);


  const handleEnroll = useCallback(async (courseId) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(`/api/courses/${courseId}/enroll`, { courseId });
      
      setEnrollments(prev => [...prev, data]);
      if (data.status === 'ACTIVE') {
        setCurrentEnrollment(data);
        console.log('Enrollment successful:', data);
        return true;
      }
      throw new Error('Enrollment status is not ACTIVE');
    } catch (err) {
      const message = err.response?.data?.error || err.message || 'Enrollment failed';
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo(() => ({
    enrollments,
    currentEnrollment,
    isLoading,
    error,
    handleEnroll,
    setEnrollments,
    fetchEnrollments
  }), [enrollments, currentEnrollment, isLoading, error, handleEnroll, fetchEnrollments]);

  return (
    <EnrollmentContext.Provider value={value}>
      {children}
    </EnrollmentContext.Provider>
  );
}

export const useEnrollment = () => useContext(EnrollmentContext);