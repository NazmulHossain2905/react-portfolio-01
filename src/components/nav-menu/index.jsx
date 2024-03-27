import React from "react";
import classes from "./nav-menu.module.css";

const NavMenu = ({ variant, show }) => {
  return (
    <ul
      className={`${classes["lists"]} ${
        variant === "footer"
          ? classes["lists--footer"]
          : classes["lists--header"]
      } ${show ? classes["show"] : classes["hide"]}`}
    >
      <li>
        <a className={classes["active"]} href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#testimonial">Testimonial</a>
      </li>
      <li>
        <a href="#">Project</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Article</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavMenu;
