import React from "react";
import classes from "./fun-fact-card.module.css";

const FunFactCard = ({ img, title, desc }) => {
  return (
    <div className={classes["fun-card"]}>
      <img className={classes["fun-card__left-img"]} src={img} alt="Fun Fact" />
      <div className={classes["fun-card__right"]}>
        <h1 className={classes["fun-card__title"]}>{title}</h1>
        <p className={classes["fun-card__desc"]}>{desc}</p>
      </div>
    </div>
  );
};

export default FunFactCard;
