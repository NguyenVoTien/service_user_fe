import React from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
const App = () => {
  return (
    <HelmetProvider>
<React.Fragment>
      <Outlet />
    </React.Fragment>
    </HelmetProvider>
    
  );
};

export default App;
