import React from "react";
import s from "./About.module.scss";
const About = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.content}`}>
        <div className={`${s.content_data}`}>
          <div className={`${s.venture_title}`}>
            <h3>ABOUT</h3>
            <h2>VENTURE-X</h2>
          </div>
          <div className={`${s.plan_para}`}>
            <p>
              Venture-X plan to combine conventional VC industry and Blockchain
              technology making the start-up ecosystem so much more accessible,
              that ordinary and small retail investors can become part of huge
              Venture Capital Industry with relatively small investment as low
              as $50.
            </p>
          </div>
          <div className={`${s.para_strives}`}>
            <p>
              Venture-X strives to create a situation where VCs of future will
              NOT be privately run rather, they would be run by the Community
              based on DAO protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
