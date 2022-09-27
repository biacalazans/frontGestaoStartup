import { BrowserRouter, HashRouter } from "react-router-dom";
import React from "react";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
