import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default RootLayout;
