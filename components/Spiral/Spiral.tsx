import React from "react";
import s from "./Roadmap.module.scss";
import Spiral from "react-spiral";

const Spiral = () => {
  return (
    <div className={s.container}>
      <Spiral sides={3} boxSize={500} fontSize={30} spacing={20}>
        I'm a spiral
      </Spiral>
    </div>
  );
};

export default Spiral;
