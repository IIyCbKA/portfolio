import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";

export default function Landing(): React.ReactElement {
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
