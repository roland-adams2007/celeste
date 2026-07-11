import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/errors/404";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import RoomDetails from "../pages/RoomDetails";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:slug" element={<RoomDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
