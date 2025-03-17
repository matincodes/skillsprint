import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";

const fetchEnrollmentStatus = async () => {
  const { data } = await axios.get("/api/courses/enrollments/active");
  return data.hasActive;
};

const useEnrollmentStatus = () => {
  const { isAuthenticated } = useAuth();
  const {
    data: hasActiveEnrollment,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["enrollmentStatus"],
    queryFn: fetchEnrollmentStatus,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    enabled: !!isAuthenticated,
  });

  return { hasActiveEnrollment, isLoading, refetch };
};

export default useEnrollmentStatus;
