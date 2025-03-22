import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data } = await axios.get("/api/courses");
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
};

export default useCourses;
