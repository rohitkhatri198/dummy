import Canvas from "@components/Canvas";
import Gsap from "@components/Gsap";
import useScrollPosition from "@components/hooks/useScrollPosition";
import ScrollParallax from "@components/ScrollParallax";
import Spiral from "@components/Spiral/Spiral";
import React from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
  useParallax,
} from "react-scroll-parallax";
import s from "./Parrallax.module.scss";
const Parrallax = () => {
  const scrollPos = useScrollPosition();
  const headerHeight = scrollPos;
  const parallax = useParallax<HTMLDivElement>({
    scale: [2.5, 0.056678, "easeInQuad"],
  });

  return (
    <div className={s.container}>
      <Parallax speed={10}>
        <div ref={parallax.ref} className={s.canvas}>
          <Canvas headerPosition={headerHeight} />
        </div>
      </Parallax>
    </div>
  );
};

export default Parrallax;
