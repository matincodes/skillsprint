import axios from "@/lib/axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("user"),
  );
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // context/AuthContext.js
  const checkAuth = async () => {
    try {
      const { data } = await axios.get("/api/auth/verify");
      console.log("verifying authentication");
      if (data.isAuthenticated) {
        setIsAuthenticated(data.isAuthenticated);
        setIsLoading(false);
      }else{
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     checkAuth();
  // }, []);

  const signup = async (name, email, password, role) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post("/api/auth/sign-up", {
        name,
        email,
        password,
        role,
      });

      if (response.status === 200 || response.status === 201) {
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setIsAuthenticated(true);
        setIsLoading(false); // End loading
        return true;
      } else {
        toast.error("Signup failed");
        setIsLoading(false); // End loading
        return false;
      }
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response && err.response.status === 409) {
        toast.error("Email is already taken");
      } else {
        toast.error("Signup error");
      }
      setIsLoading(false); // End loading
      return false;
    }
  };

  const login = async (email, password) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post("/api/auth/sign-in", {
        email: email.trim(),
        password: password.trim(),
      });

      if (
        response.status === 200 ||
        response.data.message === "Login successful"
      ) {
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setIsAuthenticated(true);
        setIsLoading(false); // End loading
        return true;
      } else {
        setIsAuthenticated(false);
        toast.error("Invalid email or password");
        setIsLoading(false); // End loading
        return false;
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      toast.error(err.response?.data?.error || "Login failed");
      setIsLoading(false); // End loading
      return false;
    }
  };

  const logout = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post("/api/auth/sign-out");

      if (response.status === 200) {
        setUser(null);
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setIsLoading(false); // End loading
        return true;
      } else {
        toast.error("Logout failed");
        setIsLoading(false); // End loading
        return false;
      }
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Logout error");
      setIsLoading(false); // End loading
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        isAuthenticated,
        isLoading,
        setIsLoading,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
