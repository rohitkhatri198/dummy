import Canvas from "@components/Canvas";
import ScrollParallax from "@components/ScrollParallax";
import React from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
  useParallax,
} from "react-scroll-parallax";
import s from "./Parrallax.module.scss";
const Parrallax = () => {
  const parallax = useParallax<HTMLDivElement>({
    scale: [2.5, 0.2, "easeInQuad"],
  });
  return (
    <div className={s.container}>
      <Parallax speed={10}>
        <div ref={parallax.ref} className={s.canvas}>
          <Canvas />
        </div>
      </Parallax>
    </div>
  );
};

export default Parrallax;
