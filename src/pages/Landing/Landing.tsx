import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";
import { useLocation } from "react-router-dom";

export default function Landing(): React.ReactElement {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contacts />
    </>
  );
}
