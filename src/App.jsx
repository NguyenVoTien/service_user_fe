import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

import Title from "@/components/common/title";

const App = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Title />
        <Outlet />
      </HelmetProvider>
    </React.Fragment>
  );
};

export default App;
