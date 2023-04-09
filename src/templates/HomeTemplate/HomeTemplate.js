import Footer from "features/Home/components/Footer";
import Header from "features/Home/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
