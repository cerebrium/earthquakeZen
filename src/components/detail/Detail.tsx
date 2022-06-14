import * as React from "react";
import { Outlet } from "react-router-dom";

const Detail: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Detail;
