import React from "react";
import styled from "styled-components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { VscQuote } from "react-icons/vsc";

import classes from "./clients-feedback.module.css";
import Heading from "../Heading";

const Icon = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-clr-50);
  transition: background-color 0.3s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    background-color: var(--primary-clr);
    color: var(--white-clr);
  }

  /* Responsive Styles */
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const ClientsFeedback = () => {
  return (
    <div className={`${classes.clients__container} container`} id="testimonial">
      <div>
        <Heading center>My clients feedback</Heading>
        <p className={classes["clients__desc"]}>
          Sed ac posuere neque, scelerisque porta nulla. Aliquam erat volutpat.
          Nulla in mi malesuada, luctus nibh quis, rutrum arcu.
        </p>
      </div>

      <div className={classes["clients__feedback"]}>
        <Icon>
          <GoArrowLeft size="1.5rem" />
        </Icon>
        <div className={classes["clients__feedback-content"]}>
          <VscQuote size="2.5rem" color="#1777E5" />
          <p className={classes["clients__feedback-text"]}>
            “Duis tempor ultrices elit sollicitudin aliquet. Nulla facilisi.
            Donec sit amet nunc eros. Etiam et nisi in diam ultrices luctus in a
            dui. Mauris in sem aliquet ligula convallis vestibulum. Etiam non
            erat aliquam, lacinia nis.”
          </p>

          <div className={classes["clients__feedback-user"]}>
            <p className={classes["clients__feedback-name"]}>
              Cameron Williamson
            </p>
            <p className={classes["clients__feedback-title"]}>
              Ceo & Founder of Google
            </p>
          </div>
        </div>
        <Icon>
          <GoArrowRight size="1.5rem" />
        </Icon>
      </div>
    </div>
  );
};

export default ClientsFeedback;
