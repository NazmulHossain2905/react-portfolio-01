import React from "react";
import classes from "./nav-menu.module.css";

const NavMenu = ({ variant }) => {
  return (
    <ul className={classes["lists"]}>
      <li>
        <a className={classes["active"]} href="#">
          Home
        </a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Testimonial</a>
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
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default NavMenu;
