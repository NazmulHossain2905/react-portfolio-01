import React from "react";
import classes from "./education-and-award.module.css";
import Heading from "../Heading";
import EducationCard from "./education-card";
import AwardCard from "./award-card";

import ed1 from "../../assets/images/education-1.png";
import ed2 from "../../assets/images/education-2.png";
import ed3 from "../../assets/images/education-3.png";

import aw1 from "../../assets/images/award-1.png";
import aw2 from "../../assets/images/award-2.png";

const EducationAndAwards = () => {
  return (
    <div className={`${classes.education__container} container`}>
      <div>
        <Heading center>My Education & Awards</Heading>
        <p className={classes["education__desc"]}>
          Sed ac posuere neque, scelerisque porta nulla. Aliquam erat volutpat.
          Nulla in mi malesuada, luctus nibh quis, rutrum arcu.
        </p>
      </div>

      <div className={classes["content__wrapper"]}>
        <div className={classes.education__wrapper}>
          <EducationCard
            img={ed1}
            time="2016 to 2021"
            university="University of Oxford"
            degree="Bachelor of Laws (LLB)"
            description="Mauris efficitur, felis eu commodo vehicula, arcu nunc vehicula nulla, at commodo tortor ligula id sapien."
          />
          <EducationCard
            img={ed2}
            time="2012 to 2016"
            university="University of Cambridge"
            degree="Bachelor of Science and Engineering"
            description="Donec ut ex eu libero euismod dapibus id quis ipsum. Phasellus non feugiat turpis, non gravida."
          />
          <EducationCard
            img={ed3}
            time="2010 to 2012"
            university="University of Cambridge"
            degree="Bachelor of Communication"
            description="Donec ut ex eu libero euismod dapibus id quis ipsum. Phasellus non feugiat turpis, non gravida."
          />
        </div>
        <div className={classes.awards_wrapper}>
          <AwardCard
            img={aw1}
            time="Dec 7, 2019"
            award="Awwwards"
            title="Best Laywer of the Month."
            description="Nulla et volutpat est, ac mattis urna. Mauris rhoncus massa et gravida tristique. Praesent iaculis pulvinar convallis."
          />
          <AwardCard
            img={aw2}
            time="Dec 7, 2019"
            award="Awwwards"
            title="Top 40 Young Lawyers Awards."
            description="Duis magna risus, convallis vel purus eu, sollicitudin volutpat velit. Duis fringilla nibh urna, quis rutrum nisl hendrerit quis."
          />
        </div>
      </div>
    </div>
  );
};

export default EducationAndAwards;
