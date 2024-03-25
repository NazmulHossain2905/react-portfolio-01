import React from "react";
import { GoArrowRight } from "react-icons/go";
import Button from "../Button";
import classes from "./blog-card.module.css";

const BlogCard = ({ img, time, comment, title, desc }) => {
  return (
    <div className={classes["blog-card"]}>
      <div className={classes["card__img-parent"]}>
        <img src={img} alt="Blog & News" className={classes["card__img"]} />
      </div>

      <div className={classes["card__content"]}>
        <p className={classes["card__time-comments"]}>
          {time} / {comment}
        </p>
        <h4 className={classes["card__title"]}>{title}</h4>

        <p className={classes["card__desc"]}>{desc}</p>

        <Button>
          Read more <GoArrowRight size="1.5rem" />
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
