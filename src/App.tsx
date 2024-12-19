import React from "react";
import "./index.css";
import AppRoutes from "./routes";
import ListenerScrollY from "./hooks/ScrollListener";

export default function App(): React.ReactElement {
  return (
    <>
      <ListenerScrollY />
      <AppRoutes />
    </>
  );
}
