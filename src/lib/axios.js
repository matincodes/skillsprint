import axios from "axios";
// // import Cookies from "js-cookie";

// // lib/axios.js
// // https://skillsprint.up.railway.app
// const instance = axios.create({
//   baseURL: "https://api.thynkcity.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// // Track if we have an active session
// let hasActiveSession = false;

// instance.interceptors.response.use(
//   (response) => {
//     // If we get a successful response, mark session as active
//     if (response.config.url !== "/api/auth/token") {
//       hasActiveSession = true;
//     }
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Only handle API routes (skip for public routes)
//     if (!originalRequest.url.startsWith("/api/")) {
//       return Promise.reject(error);
//     }

//     // Handle 401 errors
//     if (error.response?.status === 401) {
//       // If we've already tried to refresh, or no active session exists
//       if (originalRequest._retry || !hasActiveSession) {
//         // Only redirect if we previously had a session
//         if (hasActiveSession) {
//           window.location.href = "/student/login";
//           hasActiveSession = false;
//         }
//         return Promise.reject(error);
//       }

//       originalRequest._retry = true;

//       try {
//         await axios.get(`${originalRequest.baseURL}/api/auth/token`, {
//           withCredentials: true,
//         });
//         return instance(originalRequest);
//       } catch (refreshError) {
//         hasActiveSession = false;
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// export default instance;

const instance = axios.create({
  baseURL: "https://api.thynkcity.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest.url.startsWith("/api/")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      if (originalRequest._retry || !document.cookie.includes("accessToken")) {
        if (document.cookie.includes("accessToken")) {
          window.location.href = "/student/login";
        }
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        await axios.get(`${originalRequest.baseURL}/api/auth/token`, {
          withCredentials: true,
        });
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
