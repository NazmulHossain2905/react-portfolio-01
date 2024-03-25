import React from "react";

import classes from "./blog-news.module.css";
import Heading from "../Heading";
import BlogCard from "./blog-card";

import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";

const BlogAndNews = () => {
  return (
    <div className={classes["blog-news-main"]}>
      <div className={`${classes["blog-news"]} container`}>
        <Heading size="3rem" center>
          Blog & News
        </Heading>

        <div className={classes["blog__card-wrapper"]}>
          <BlogCard
            img={blog1}
            time="22 Oct, 2020"
            comment="246 Comments"
            title="Duis magna risus, convallis vel purus eu, sollicitudin volutpat velit."
            desc="Maecenas blandit auctor tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
          />
          <BlogCard
            img={blog2}
            time="8 Sep, 2020"
            comment="246 Comments"
            title="Donec ut ex eu libero euismod dapibus id quis ipsum."
            desc="Phasellus non feugiat turpis, non gravida lorem. Nulla fermentum odio in dolor dapibus, ac eleifend lectus ullamcorper."
          />
          <BlogCard
            img={blog3}
            time="24 May, 2020"
            comment="246 Comments"
            title="Maecenas congue cursus metus eget bibendum phasellus dign."
            desc="Praesent semper enim at lacus sagittis, non semper eros ullamcorper. Duis id elemtum nisl, eu tincidunt nisl."
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAndNews;
