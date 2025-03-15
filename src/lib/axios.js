import axios from "axios";
// import Cookies from "js-cookie";

const baseURL = "https://skillsprint.up.railway.app";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Response interceptor for handling token refresh
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh the token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call the refresh token endpoint
        await axios.get(
          `${baseURL}/api/auth/token`,
          {},
          { withCredentials: true },
        );

        // Retry the original request
        return instance(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, redirect to login
        window.location.href = "/student/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
export default instance;
