import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";
import PageNotFound from "../components/page-not-found/PageNotFound";
import Dashboard from "../pages/dashboard/Dashboard";
const Auth = React.lazy(() => import("../pages/auth/Auth"));

const ProjectRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Toaster
          position="top-left"
          toastOptions={{
            className: "",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
          reverseOrder={false}
        />

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default ProjectRoutes;
