import React from "react";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Footer />

      <Outlet />
    </div>
  );
};

export default Home;
