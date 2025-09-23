import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main/Main";
import Hero from "../components/Main/Hero";

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
};

export default dashboard;
