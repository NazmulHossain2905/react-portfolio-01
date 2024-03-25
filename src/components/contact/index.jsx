import React from "react";
import classes from "./contact.module.css";
import Heading from "../Heading";

import contact1 from "../../assets/images/contact-1.png";
import contact2 from "../../assets/images/contact-2.png";

import BookAppointmentForm from "./book-appointment-form";

const InfoCard = ({ icon, text, title }) => {
  return (
    <div className={classes["info-card"]}>
      <img src={icon} alt="Icon" className={classes["info-card__icon"]} />

      <div className={classes["info-card__content"]}>
        <p className={classes["info-card__content-text"]}>{text}</p>
        <h4 className={classes["info-card__content-title"]}>{title}</h4>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={`${classes.contact} container`}>
      <div className={classes["contact-info"]}>
        <Heading>Are you facing any problem, Book an appointment!</Heading>
        <p className={classes["contact__desc"]}>
          Aliquam neque diam, tincidunt a lacinia quis, imperdiet quis quam.
          Phasellus id libero purus. Fusce vestibulum luctus ve.
        </p>

        <div className={classes["contact-info-wrapper"]}>
          <InfoCard
            icon={contact1}
            text="Chat with me"
            title="kevin.gilbert.com"
          />
          <InfoCard icon={contact2} text="Call Me" title="+1 202 555 0190" />
        </div>
      </div>

      <div className={classes["book-appointment"]}>
        <div className={classes["book-appointment__content"]}>
          <Heading size="1.5rem">Book Appointment With Me.</Heading>
          <p className={classes["book-appointment__desc"]}>
            Do you fancy saying hi to me or do you want to get started with your
            project and you need my help? Feel free to contact me. I will reply
            within 48 hours.
          </p>
        </div>

        <BookAppointmentForm />
      </div>
    </div>
  );
};

export default Contact;
