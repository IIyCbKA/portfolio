import React from "react";
import "./index.css";
import ListenerScrollY from "./hooks/ScrollListener";
import RootLayout from "@/features/RootLayout/RootLayout";

export default function App(): React.ReactElement {
  return (
    <>
      <ListenerScrollY />
      <RootLayout />
    </>
  );
}
