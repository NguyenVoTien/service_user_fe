import React from "react";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutMain;
