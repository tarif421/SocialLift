import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      <Outlet />
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
