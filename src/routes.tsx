import React from "react";
import { Route, HashRouter, Routes, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import RootLayout from "./pages/RootLayout/RootLayout";
import { LANDING_ROUTE } from "./shared/constants/routes";

export default function AppRoutes(): React.ReactElement {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to={LANDING_ROUTE} />} />
          <Route path={LANDING_ROUTE} element={<Landing />} />
          <Route path="*" element={<Navigate to={LANDING_ROUTE} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
