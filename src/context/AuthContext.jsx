import { createContext, useContext, useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(queryClient.getQueryData(["authUser"]) || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // 🔹 Fetch user session on app load
  const { isFetching, refetch: checkAuth } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const { data } = await axios.get("/api/auth/verify");
      return data.user;
    },
    staleTime: 1000 * 60 * 5, // Cache valid for 5 minutes
    refetchOnWindowFocus: false,
    onSuccess: (userData) => {
      setUser(userData);
      setIsAuthenticated(!!userData);
    },
    onError: () => {
      setUser(null);
      setIsAuthenticated(false);
    },
  });

  // 🔹 Login Mutation
  const loginMutation = useMutation({
    mutationFn: async (userData) => {
      const { data } = await axios.post("/api/auth/sign-in", userData);
      return data.user;
    },
    onMutate: () => setIsAuthLoading(true),
    onSuccess: (userData) => {
      setUser(userData);
      setIsAuthenticated(true);
      queryClient.setQueryData(["authUser"], userData);
      toast.success("Login successful! 🎉");
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "Login failed. Please try again.");
    },
    onSettled: () => setIsAuthLoading(false),
  });

  // 🔹 Signup Mutation
  const signupMutation = useMutation({
    mutationFn: async (userData) => {
      const { data } = await axios.post("/api/auth/sign-up", userData);
      return data.user;
    },
    onMutate: () => setIsAuthLoading(true),
    onSuccess: (userData) => {
      setUser(userData);
      setIsAuthenticated(true);
      queryClient.setQueryData(["authUser"], userData);
      toast.success("Signup successful! Welcome to SkillSprint 🚀");
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "Signup failed. Please try again.");
    },
    onSettled: () => setIsAuthLoading(false),
  });

  // 🔹 Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await axios.post("/api/auth/sign-out");
    },
    onSuccess: () => {
      setUser(null);
      setIsAuthenticated(false);
      queryClient.removeQueries(["authUser"]);
      toast.info("You have been logged out. See you soon! 👋");
    },
    onError: () => {
      toast.error("Logout failed. Please try again.");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading: isFetching || isAuthLoading,
        login: loginMutation.mutateAsync,
        signup: signupMutation.mutateAsync,
        logout: logoutMutation.mutateAsync,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
