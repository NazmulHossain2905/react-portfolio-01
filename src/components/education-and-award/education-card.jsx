import React from "react";
import classes from "./education-card.module.css";

const EducationCard = ({ img, time, university, degree, description }) => {
  return (
    <div className={classes["ed-card"]}>
      <div className={classes["ed-card__icon"]}>
        <img src={img} alt="Education" />
      </div>

      <div className={classes["ed-card__content"]}>
        <p className={classes["ed-card__time-university"]}>
          {time} • {university}
        </p>

        <h4 className={classes["ed-card__degree"]}>{degree}</h4>
        <p className={classes["ed-card__desc"]}>{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
