import React from "react";

import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import WorkedCompany from "./components/worked-company";
import Experiences from "./components/experiences";
import FunFact from "./components/fun-fact";

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WorkedCompany />
      <Experiences />
      <FunFact />
    </>
  );
};

export default App;
