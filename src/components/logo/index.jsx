import React from "react";
import classes from "./logo.module.css";

const Logo = ({ variant }) => {
  return (
    <div className={classes["logo-wrapper"]}>
      <h1 className={classes["logo"]}>W</h1>

      <div>
        <h3
          className={`${classes["logo__title"]} ${
            variant === "footer"
              ? classes["logo__title--footer"]
              : classes["logo__title--header"]
          }`}
        >
          Winston Potter
        </h3>
        <p className={classes["logo__desc"]}>Professional Lawyer</p>
      </div>
    </div>
  );
};

export default Logo;
