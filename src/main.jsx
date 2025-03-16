import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { EnrollmentProvider, useEnrollment } from "./context/EnrollmentContext";


const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({ routeTree });

// Render the app
const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <EnrollmentProvider>
          <App />
        </EnrollmentProvider>
        <ToastContainer />
      </AuthProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}

export function App() {
  const auth = useAuth();
  const enrollment = useEnrollment();
  return <RouterProvider router={router} context={{ ...auth, ...enrollment }} />;
}
