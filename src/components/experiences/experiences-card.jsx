import React from "react";
import classes from "./experiences-card.module.css";

const ExperiencesCard = ({ leftTitle, time, rightTitle, description }) => {
  return (
    <div className={classes["ex-card"]}>
      <div className={classes["ex-card__left"]}>
        <h4 className={classes["ex-card__left-title"]}>{leftTitle}</h4>
        <p className={classes["ex-card__left-time"]}>{time}</p>
      </div>

      <div className={classes["ex-card__right"]}>
        <h4 className={classes["ex-card__right-title"]}>{rightTitle}</h4>
        <p className={classes["ex-card__right-desc"]}>{description}</p>
      </div>
    </div>
  );
};

export default ExperiencesCard;
