import React from "react";
import classes from "./fun-fact.module.css";
import FunFactCard from "./fun-fact-card";

import fact1 from "../../assets/images/fact-1.png";
import fact2 from "../../assets/images/fact-2.png";
import fact3 from "../../assets/images/fact-3.png";
import fact4 from "../../assets/images/fact-4.png";

const FunFact = () => {
  return (
    <div className={classes["fun-fact__container"]}>
      <div className={`${classes["fun-fact"]} container`}>
        <FunFactCard img={fact1} title="13+" desc="Years of experience" />
        <FunFactCard img={fact2} title="98.5%" desc="Client Satisfaction" />
        <FunFactCard img={fact3} title="279+" desc="Happy Clients" />
        <FunFactCard img={fact4} title="47+" desc="Awards" />
      </div>
    </div>
  );
};

export default FunFact;
