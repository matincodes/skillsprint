import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "skillsprint.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor to add access token to headers
instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor to handle token expiration
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get("refreshToken");
        const response = await axios.post(
          "/api/auth/refresh-token",
          { refreshToken },
          { withCredentials: true },
        );
        if (response.status === 200) {
          Cookies.set("accessToken", response.data.accessToken, {
            httpOnly: true,
          });
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return axios(originalRequest);
        }
      } catch (err) {
        console.error("Token refresh error:", err);
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
