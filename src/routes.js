import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
    </Routes>
  );
};
