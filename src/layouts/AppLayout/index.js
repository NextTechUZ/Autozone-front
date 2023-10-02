import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../pages/routeConfig";

function AppLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Routes>
          {routes.map(({ id, ...route }) => (
            <Route key={id} {...route} />
          ))}
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;
