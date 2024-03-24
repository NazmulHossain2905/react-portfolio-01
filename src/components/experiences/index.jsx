import React from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

import classes from "./experiences.module.css";
import Heading from "../Heading";
import ExperiencesCard from "./experiences-card";

import experiences from "../../assets/images/experiences.png";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e8eb;
`;

const Experiences = () => {
  return (
    <div className={`${classes.experiences} container`}>
      <Heading center>My Experiences</Heading>
      <p className={classes["experiences__desc"]}>
        Sed ac posuere neque, scelerisque porta nulla. Aliquam erat volutpat,
        Nulla in mi malesuada.
      </p>

      <div className={classes["experiences__content"]}>
        <div className={classes["experiences__left"]}>
          <img src={experiences} alt="Experiences" />

          <div className={classes["experiences__play-btn"]}>
            <FaPlay className={classes["experiences__play-icon"]} />
          </div>
        </div>

        <div className={classes["experiences__right"]}>
          <ExperiencesCard
            leftTitle="Supreme & High Court"
            time="Jan, 2016 to Jan, 2021"
            rightTitle="Head Laywer of Google and Apple"
            description="Duis magna risus, convallis vel purus eu, sollicitudin volutpat velit. Duis fringilla nibh urna, quis rutrum nisl hendrerit quis."
          />
          <Line />
          <ExperiencesCard
            leftTitle="High Court"
            time="Jan, 2016 to Jan, 2021"
            rightTitle="Criminal Defense Lawyer"
            description="Duis magna risus, convallis vel purus eu, sollicitudin volutpat velit. Duis fringilla nibh urna, quis rutrum nisl hendrerit quis."
          />
          <Line />
          <ExperiencesCard
            leftTitle="District Court"
            time="Jan, 2016 to Jan, 2021"
            rightTitle="Divorce Lawyer"
            description="Vestibulum placerat at ligula id sollicitudin. Aenean vitae erat nec enim congue pretium."
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
