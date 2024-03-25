import React from "react";
import { GoArrowRight } from "react-icons/go";

import classes from "./book-appointment-form.module.css";
import Button from "../Button";

const BookAppointmentForm = () => {
  return (
    <form className={classes["book-appointment__form"]}>
      <div className={classes["form__name-email"]}>
        <input
          type="text"
          className={classes["form__field"]}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          className={classes["form__field"]}
          placeholder="Email Address"
          required
        />
      </div>

      <input
        type="text"
        className={`${classes["form__field"]} ${classes["form__field--subject"]}`}
        placeholder="Subject"
        required
      />

      <div className={classes["form__date-time"]}>
        <input
          type="date"
          className={classes["form__field"]}
          placeholder="Date"
          required
        />
        <input
          type="time"
          className={classes["form__field"]}
          placeholder="Time"
          required
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        className={`${classes["form__field"]} ${classes["form__field--message"]}`}
        required
      ></textarea>

      <div className={classes["button-parent"]}>
        <Button variant="primary">
          Book appointment <GoArrowRight size="1.5rem" />
        </Button>
      </div>
    </form>
  );
};

export default BookAppointmentForm;
