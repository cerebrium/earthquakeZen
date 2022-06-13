import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../nav";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="Layout">
      <div className="header">
        <Nav />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
