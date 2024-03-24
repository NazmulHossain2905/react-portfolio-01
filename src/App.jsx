import React from "react";

import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import WorkedCompany from "./components/worked-company";
import Experiences from "./components/experiences";
import FunFact from "./components/fun-fact";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WorkedCompany />
      <Experiences />
      <FunFact />
      <About />
    </>
  );
};

export default App;
