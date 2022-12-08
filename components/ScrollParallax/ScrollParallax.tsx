import Gsap from "@components/Gsap";
import React, { useRef } from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import s from "./ScrollParallax.module.scss";
const ScrollParallax = () => {
  const target = useRef(null);
  // const move = useParallax({
  //   speed: 500,
  //   // targetElement: target
  // });
  return (
    <div ref={target} className={s.container}>
      <ParallaxProvider scrollAxis="horizontal">
        <Gsap />
      </ParallaxProvider>
      f
    </div>
  );
};

export default ScrollParallax;
