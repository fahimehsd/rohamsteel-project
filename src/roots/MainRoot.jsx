import React from "react";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const MainRoot = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainRoot;
