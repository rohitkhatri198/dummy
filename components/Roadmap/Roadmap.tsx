import React from "react";
import s from "./Roadmap.module.scss";
const Roadmap = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.content}`}>
        <h2>ROADMAP</h2>
        <div className={`${s.info}`}>
          <div className={`${s.heading_title}`}>
            <p>
              Ut adipiscing enim, mauris suscipit ut turpis diam, tristique. Nec
              lorem viverra purus urna, netus. Ut turpis curabitur lorem
              scelerisque.
            </p>
          </div>
          <div className={`${s.headingtitle}`}>
            <p>
              Ut adipiscing enim, mauris suscipit ut turpis diam, tristique. Nec
            </p>
          </div>
        </div>
        <div className={`${s.rmwrapper}`}>
          <div className={`${s.wrapper}`}>
            <div className={`${s.road_para} ${s.road_para_first}`}>
              <div className={`${s.questionnum}`}>
                <h3>
                  Q4 <span className={`${s.year}`}>2022</span>
                </h3>
              </div>
              <div className={`${s.detail}`}>
                <p>
                  Massa, mattis elit tincidunt faucibus porta enim integer dolor
                  odio.
                </p>
              </div>
            </div>
            <div className={`${s.road_para} ${s.road_para_two}`}>
              <div className={`${s.questionnum}`}>
                <h3>
                  Q1 <span className={`${s.year}`}>2023</span>
                </h3>
              </div>
              <div className={`${s.detail}`}>
                <p>Sed nibh congue tempus sit sit.</p>
              </div>
            </div>
            <div className={`${s.road_para} ${s.road_para_three}`}>
              <div className={`${s.questionnum}`}>
                <h3>
                  Q2 <span className={`${s.year}`}>2023</span>
                </h3>
              </div>
              <div className={`${s.detail}`}>
                <p>Sed pharetra nibh condimentum id pellentesque.</p>
              </div>
            </div>
            <div className={`${s.road_para} ${s.road_para_four}`}>
              <div className={`${s.questionnum}`}>
                <h3>
                  Q3 <span className={`${s.year}`}>2023</span>
                </h3>
              </div>
              <div className={`${s.detail}`}>
                <p>Nullam sed tincidunt dui vehicula porttitor.</p>
              </div>
            </div>
            <div className={`${s.road_para} ${s.road_para_five}`}>
              <div className={`${s.questionnum}`}>
                <h3>
                  Q4 <span className={`${s.year}`}>2023</span>
                </h3>
              </div>
              <div className={`${s.detail}`}>
                <p>Morbi maecenas quis hendrerit nam neque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
