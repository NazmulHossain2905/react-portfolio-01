import React from "react";
import classes from "./footer.module.css";
import Navigation from "../navigation";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={`${classes["footer__content"]} container`}>
        <Navigation variant="footer" />

        {/* <hr className={classes["line"]} /> */}

        <p className={classes["footer__copyright"]}>
          &copy; 2022 Winston Potter
        </p>
      </div>
    </footer>
  );
};

export default Footer;
