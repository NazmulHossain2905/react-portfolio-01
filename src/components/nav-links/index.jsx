import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import classes from "./nav-links.module.css";

const NavLinks = ({ variant }) => {
  const linkStyle =
    variant === "footer"
      ? classes["icon__link--footer"]
      : classes["icon__link--header"];
  return (
    <div
      className={`${classes.icon__wrapper} ${
        variant === "footer" && classes["icon__wrapper--footer"]
      }`}
    >
      <a className={`${classes.icon__link} ${linkStyle}`} href="#">
        <FaFacebook />
      </a>
      <a className={`${classes.icon__link} ${linkStyle}`} href="#">
        <FaTwitter />
      </a>
      <a className={`${classes.icon__link} ${linkStyle}`} href="#">
        <FaLinkedinIn />
      </a>
      <a className={`${classes.icon__link} ${linkStyle}`} href="#">
        <FaMedium />
      </a>
    </div>
  );
};

export default NavLinks;
