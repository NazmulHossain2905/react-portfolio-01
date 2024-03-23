import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import classes from "./nav-links.module.css";

const NavLinks = () => {
  return (
    <div className={classes.icon__wrapper}>
      <a className={classes.icon__link} href="#">
        <FaFacebook className={classes.icon} />
      </a>
      <a className={classes.icon__link} href="#">
        <FaTwitter className={classes.icon} />
      </a>
      <a className={classes.icon__link} href="#">
        <FaLinkedinIn className={classes.icon} />
      </a>
      <a className={classes.icon__link} href="#">
        <FaMedium className={classes.icon} />
      </a>
    </div>
  );
};

export default NavLinks;
