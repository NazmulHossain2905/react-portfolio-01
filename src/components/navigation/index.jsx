import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

import classes from "./navigation.module.css";

import Logo from "../logo";
import NavMenu from "../nav-menu";
import NavLinks from "../nav-links";

const Navigation = ({ variant }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${classes.nav} ${
          variant === "footer" ? classes["footer"] : classes["header"]
        }`}
      >
        {show && (
          <div
            onClick={handleShow}
            className={classes["nav__bar-overlay"]}
          ></div>
        )}
        <nav
          className={`${classes.nav__bar} container ${
            variant === "footer" && classes["nav__bar--footer"]
          }`}
        >
          <Logo variant={variant} />
          <NavMenu variant={variant} show={show} />
          <NavLinks variant={variant} />
          <HiMenuAlt1
            onClick={handleShow}
            className={classes["nav__bar-menu"]}
          />
        </nav>
      </div>
      {variant === "footer" && <hr />}
    </>
  );
};

export default Navigation;
