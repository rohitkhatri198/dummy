import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import s from "./Gsap.module.scss";
import { gsap, Power3 } from "gsap";
import { Button } from "antd";
const Gsap = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [isHuge, setIsHuge] = useState(false);
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let container = useRef(null);

  let logoItem = useRef("hello");
  console.log(logoItem);
  const handleExpand = () => {
    gsap.to(circleRed, 0.8, {
      width: 150,
      height: 150,
      ease: Power3.easeOut,
    });
    setIsChanged(true);
  };
  const handleShrink = () => {
    gsap.to(circleRed, 0.8, { width: 60, height: 60, ease: Power3.easeOut });

    setIsChanged(false);
  };
  const handleBig = () => {
    gsap.to(circleYellow, 0.8, {
      width: 150,
      height: 150,
      ease: Power3.easeOut,
    });
    setIsBig(true);
  };
  const handleSmall = () => {
    gsap.to(circleYellow, 0.8, { width: 60, height: 60, ease: Power3.easeOut });

    setIsBig(false);
  };
  const handleHuge = () => {
    gsap.to(circleBlue, 0.8, {
      width: 150,
      height: 150,
      ease: Power3.easeOut,
    });
    setIsHuge(true);
  };
  const handleTiny = () => {
    gsap.to(circleBlue, 0.8, { width: 60, height: 60, ease: Power3.easeOut });

    setIsHuge(false);
  };
  useEffect(() => {
    gsap.to(container, 1, { visibility: "visible" });
    gsap.from(circleYellow, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    gsap.from(circleRed, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    gsap.from(circleBlue, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  return (
    <div
      ref={(el: any) => {
        container = el;
      }}
      className={s.container}
    >
      <div className={s.content}>
        {/* <div
          ref={(el: any) => {
            logoItem = el;
          }}
          className={s.imageWrapper}
        >
          <Image src="/images/bannerbg.png" alt="" height={200} width={200} />
        </div> */}
        <div className={s.circleContainer}>
          <div
            ref={(el: any) => {
              circleYellow = el;
            }}
            onClick={isBig !== true ? handleBig : handleSmall}
            className={s.circleYellow}
          ></div>
          <div
            ref={(el: any) => {
              circleRed = el;
            }}
            onClick={isChanged !== true ? handleExpand : handleShrink}
            className={s.circleRed}
          ></div>
          <div
            ref={(el: any) => {
              circleBlue = el;
            }}
            onClick={isHuge !== true ? handleHuge : handleTiny}
            className={s.circleBlue}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Gsap;
