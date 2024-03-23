import React from "react";
import classes from "./navigation.module.css";

import Logo from "../logo";
import NavMenu from "../nav-menu";
import NavLinks from "../nav-links";

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <nav className={`${classes.nav__bar} container`}>
        <Logo />
        <NavMenu />
        <NavLinks />
      </nav>
    </div>
  );
};

export default Navigation;
