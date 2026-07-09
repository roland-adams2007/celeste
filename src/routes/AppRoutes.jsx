import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/errors/404";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
