import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useEnrollments = () => {
  const queryClient = useQueryClient();

  // Fetch enrollments
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["enrollments"],
    queryFn: async () => {
      const { data } = await axios.get("/api/courses/enrollments");
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  // Enrollment mutation
  const enrollMutation = useMutation({
    mutationFn: (courseId) =>
      axios.post(`/api/courses/${courseId}/enroll`, { courseId }),
    onSuccess: (data) => {
      queryClient.setQueryData(["enrollments"], (old) => [...old, data.data]);
      toast.success("Enrollment successful!");
    },
    onError: (error) => {
      const message =
        error.response?.data?.error || error.message || "Enrollment failed";
      toast.error(message);
    },
  });

  // Derived state
  const currentEnrollment = useMemo(
    () => data?.find((e) => e.status === "ACTIVE") || null,
    [data],
  );

  return {
    enrollments: data || [],
    currentEnrollment,
    isLoading: isLoading || enrollMutation.isPending,
    error: error || enrollMutation.error,
    handleEnroll: enrollMutation.mutate,
    refetchEnrollments: refetch,
  };
};

export default useEnrollments;
