import React from "react";

import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import WorkedCompany from "./components/worked-company";
import Experiences from "./components/experiences";

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WorkedCompany />
      <Experiences />
    </>
  );
};

export default App;
