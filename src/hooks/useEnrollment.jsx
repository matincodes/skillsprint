import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/context/AuthContext";

export const useEnrollments = () => {
  const queryClient = useQueryClient();

  // Auth state
  const { isAuthenticated } = useAuth();

  const [currentEnrollment, setCurrentEnrollment] = useState(null);

  // Fetch enrollments
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["enrollments"],
    queryFn: async () => {
      const { data } = await axios.get("/api/courses/enrollments");
      return data;
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!isAuthenticated,
  });

  // Enrollment mutation
  const enrollMutation = useMutation({
    mutationFn: async (courseId) => {
      const response = await axios.post(`/api/courses/${courseId}/enroll`, { courseId });
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["enrollments"], (old) => [...old, data]);
      setCurrentEnrollment(queryClient.getQueryData(["enrollments"]).find((e) => e?.status === "ACTIVE") || null);
    //   toast.success("Enrollment successful!");
    },
    onError: (error) => {
      const message =
        error.response?.data?.error || error.message || "Enrollment failed";
      toast.error(message);
    },
  });

  // Derived state

  // const currentEnrollment = useMemo(
  //   () => data.find((e) => e?.status === "ACTIVE") || null,
  //   [data],
  // );

  return {
    enrollments: data || [],
    currentEnrollment,
    isLoading: isLoading || enrollMutation.isPending,
    error: error || enrollMutation.error,
    handleEnroll: enrollMutation.mutateAsync,
    refetchEnrollments: refetch,
  };
};

export default useEnrollments;
