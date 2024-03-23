import React from "react";
import classes from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <div className={classes.hero__container}>
      <div className={`${classes.hero} container`}>
        <div className="hero__left">
          <h1 className="hero__title">
            Hello, I’m a professional lawyer for almost
            <strong>13 years.</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
