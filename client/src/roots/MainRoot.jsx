import React from "react";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const MainRoot = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainRoot;
