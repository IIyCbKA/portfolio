import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Landing from "@/features/Landing/Landing";

export default function RootLayout(): React.ReactElement {
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  );
}
