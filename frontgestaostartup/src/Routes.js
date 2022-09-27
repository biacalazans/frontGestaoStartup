import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import ActiveGoods from "./Pages/ActiveGoods";
import CreateActiveGoods from "./Pages/CreateActiveGoods";
import Books from "./Pages/Books";
import CreateBook from "./Pages/CreateBook";
import Loans from "./Pages/Loans";
import CreateLoan from "./Pages/CreateLoan";
import Projects from "./Pages/Projects";
import CreateProject from "./Pages/CreateProject";
import Logs from "./Pages/Logs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/"></Route>
      <Route element={<ActiveGoods />} path="/activegoods"></Route>
      <Route element={<CreateActiveGoods />} path="/createactivegood"></Route>
      <Route element={<Books />} path="/books"></Route>
      <Route element={<CreateBook />} path="/createbook"></Route>
      <Route element={<Loans />} path="/loans"></Route>
      <Route element={<CreateLoan />} path="/createloan"></Route>
      <Route element={<Projects />} path="/projects"></Route>
      <Route element={<CreateProject />} path="/createproject"></Route>
      <Route element={<Logs />} path="/logs"></Route>
    </Routes>
  );
};

export default AppRoutes;
