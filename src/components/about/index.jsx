import React from "react";
import { FaDownload } from "react-icons/fa6";

import classes from "./about.module.css";
import profile from "../../assets/images/about-profile.png";
import Heading from "../Heading";
import Button from "../Button";

const About = () => {
  return (
    <div className={classes["about__container"]} id="about">
      <div className={`${classes.about} container`}>
        <img
          className={classes.about__image}
          src={profile}
          alt="About Profile"
        />

        <div className={classes["about__content"]}>
          <Heading>
            I'm Winston Potter with a highly dedicated & hard working
            personality.
          </Heading>
          <p className={classes["about__desc"]}>
            Pellentesque vitae nisi eget nisi dapibus accumsan. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Fusce sit amet leo sem. Sed ac posuere neque,
            scelerisque porta nulla. Aliquam erat volutpat.
          </p>
          <Button variant="primary">
            <FaDownload size="1.3rem" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
