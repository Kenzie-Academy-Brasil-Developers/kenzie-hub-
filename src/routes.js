import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";
import { Dashboard } from "./pages/Dashboard";
import { LoginForm } from "./pages/Login";
import { Register } from "./pages/Register";

export const RoutesComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      {user && <Route path="/dashboard" element={<Dashboard />} />}
    </Routes>
  );
};
