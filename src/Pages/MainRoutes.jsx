import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { EditBook } from "./EditBook";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/edit/:id" element={<EditBook/>} />

    </Routes>
  );
};
