import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import ActiveGoods from "./Pages/ActiveGoods";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/"></Route>
      <Route element={<ActiveGoods />} path="/activegoods"></Route>
    </Routes>
  );
};

export default AppRoutes;
