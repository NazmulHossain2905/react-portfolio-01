import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FiPlayCircle } from "react-icons/fi";

import classes from "./hero-section.module.css";
import Button from "../Button";

import profile from "../../assets/images/hero-profile.png";

const HeroSection = () => {
  return (
    <div className={classes.hero__container} id="home">
      <div className={`${classes.hero} container`}>
        <div className={classes["hero__left"]}>
          <h1 className={classes["hero__title"]}>
            Hello, I’m a professional lawyer for almost{" "}
            <strong>13 years.</strong>
          </h1>

          <p className={classes["hero__desc"]}>
            Phasellus malesuada nibh sit amet leo blandit finibus. Ut lorem
            neque, egestas vel nisi ut, pharetra venenatis enim.
          </p>

          <div className={classes["button-wrapper"]}>
            <Button variant="primary">
              Book Appointments <GoArrowRight size={"1.5rem"} />
            </Button>
            <Button variant="secondary">
              <FiPlayCircle size={"1.5rem"} />
              Customer Feedback
            </Button>
          </div>
        </div>

        <div className={classes.hero__right}>
          <img
            src={profile}
            alt="Hero Profile"
            className={classes.hero__profile}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
