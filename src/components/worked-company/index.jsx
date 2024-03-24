import React from "react";
import classes from "./worked-company.module.css";

import amazon from "../../assets/images/amazon.png";
import dribble from "../../assets/images/dribble.png";
import google from "../../assets/images/google.png";
import linkedin from "../../assets/images/linkedin.png";
import medium from "../../assets/images/medium.png";
import microsoft from "../../assets/images/microsoft.png";

const WorkedCompany = () => {
  return (
    <div className={`${classes.worked__container} container`}>
      <h2 className={classes["worked__title"]}>
        I helped{" "}
        <span className={classes["worked__highlight"]}>280+ peoples</span> to
        win <br />
        their fair and they are happy 😀.
      </h2>

      <div className={classes["worked__company-wrapper"]}>
        <img src={amazon} alt="Amazon" />
        <img src={dribble} alt="Dribble" />
        <img src={google} alt="Google" />
        <img src={linkedin} alt="Linkedin" />
        <img src={medium} alt="Medium" />
        <img src={microsoft} alt="Microsoft" />
      </div>
    </div>
  );
};

export default WorkedCompany;
