
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routing/Routes";
import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
  return (
  
    <BrowserRouter>
    <ScrollToTop />
      <AppRoutes />
      <AppRoutes />
    </BrowserRouter>
   

  );
};

export default App;
