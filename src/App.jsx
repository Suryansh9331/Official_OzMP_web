
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routing/Routes";

const App = () => {
  return (
  
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
   

  );
};

export default App;
