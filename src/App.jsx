import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routing/Routes";
import ScrollToTop from "./Component/ScrollToTop";
import Chatboat from "./Component/Chatboat";

const App = () => {
  return (
    <BrowserRouter>
    <Chatboat />
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
