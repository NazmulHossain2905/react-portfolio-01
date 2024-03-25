import React from "react";

import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import WorkedCompany from "./components/worked-company";
import Experiences from "./components/experiences";
import FunFact from "./components/fun-fact";
import About from "./components/about";
import EducationAndAwards from "./components/education-and-award";
import ClientsFeedback from "./components/clients-feedback";

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WorkedCompany />
      <Experiences />
      <FunFact />
      <About />
      <EducationAndAwards />
      <ClientsFeedback />
    </>
  );
};

export default App;
