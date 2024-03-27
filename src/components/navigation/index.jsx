import React from "react";
import classes from "./navigation.module.css";

import Logo from "../logo";
import NavMenu from "../nav-menu";
import NavLinks from "../nav-links";

const Navigation = ({ variant }) => {
  return (
    <>
      <div
        className={`${classes.nav} ${
          variant === "footer" ? classes["footer"] : classes["header"]
        }`}
      >
        <nav
          className={`${classes.nav__bar} container ${
            variant === "footer" && classes["nav__bar--footer"]
          }`}
        >
          <Logo variant={variant} />
          <NavMenu variant={variant} />
          <NavLinks variant={variant} />
        </nav>
      </div>
      {variant === "footer" && <hr />}
    </>
  );
};

export default Navigation;
