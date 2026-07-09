import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";

export default function Layout() {
  return <Outlet />;
}
