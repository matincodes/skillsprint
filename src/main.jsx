import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { EnrollmentProvider, useEnrollment } from "./context/EnrollmentContext";

// Create a new router instance
const router = createRouter({ routeTree });

// Render the app
const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <EnrollmentProvider>
          <App />
        </EnrollmentProvider>
        <ToastContainer />
      </AuthProvider>
    </StrictMode>,
  );
}

export function App() {
  const auth = useAuth();
  const enrollment = useEnrollment();
  return <RouterProvider router={router} context={{ ...auth, ...enrollment }} />;
}
