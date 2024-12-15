import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {Landing} from "./pages/landing";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
