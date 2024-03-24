import React from "react";
import classes from "./award-card.module.css";

const AwardCard = ({ img, time, award, title, description }) => {
  return (
    <div className={classes["award-card"]}>
      <img className={classes["award-card__img"]} src={img} alt="Award" />

      <div className={classes["award-card__content"]}>
        <p className={classes["award-card__time-award"]}>
          {time} • {award}
        </p>
        <h4 className={classes["award-card__degree"]}>{title}</h4>
        <p className={classes["award-card__desc"]}>{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
