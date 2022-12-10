import React, { FC, useEffect, useRef, useState } from "react";
import s from "./Canvas.module.scss";
interface Props {
  className?: string;
}

export const Canvas: FC<Props> = ({ className, children }) => {
  const commonRef: any = useRef({});
  commonRef.current = {};
  const [windowHeight, scrollerHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    const canvas: any = document.getElementById("car-360-image");
    const layout_container_height = document.getElementById(
      "layout_container_height"
    );
    const html = document.documentElement;
    const context = canvas.getContext("2d");

    canvas.width = 1800;
    canvas.height = 1200;

    const frameCount = 64;
    const currentFrame = (index: number) =>
      `/images/merch-model-1/${index + 1}.png`;

    const images: any = [];
    const carFrames = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // gsap.timeline({
    //   onUpdate: render,
    //   scrollTrigger: {
    //     start: "top center",
    //     trigger: commonRef.current["carContainer"],
    //     // pin: true,
    //     scrub: 0.5,
    //     end: "+=100%",
    //     markers: true,
    //   },
    // });

    // ScrollTrigger.config({ ignoreMobileResize: true });
    // // ScrollTrigger.normalizeScroll(true);

    // ScrollTrigger.create({
    //   trigger: commonRef.current["carContainer"],
    //   start: "top center",

    //   onUpdate: render,
    //   onEnter: () => {},
    //   onEnterBack: () => {},
    // });

    // gsap.to(carFrames, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   ease: "none",
    //   scrollTrigger: {
    //     start: "top center",
    //     scrub: 0.5,
    //     trigger: commonRef.current["carContainer"],
    //   },
    //   onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    // });

    // images[0].onload = render;

    // function render(e: any) {
    // console.log(
    //   "getOscrollPixelsffset",
    //   getOffset(canvas).top - window.scrollY
    // );
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.drawImage(images[carFrames.frame], 0, 0);
    // const scrollPixels = randomIntFromInterval(1, frameCount, e.progress);
    // if (scrollPixels) {
    //   context.drawImage(images[scrollPixels], 0, 0);
    // }
    // const container:any = document.querySelector(".card-container");
    // if(!container) {
    //   return;
    // }
    // container.src = images[airpods.frame];
    // }

    const handleScroll = () => {
      // console.log('document Element scroll hieght: ', document.getElementById("layout_container_height")?.scrollHeight);

      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      // console.log(
      //   "scrollPixels",
      //   getOffset(layout_container_height).top - window.scrollY - canvas.offsetHeight * 1
      // );

      // let scrollPixels = Math.min(
      //   Math.floor((getOffset(layout_container_height).top + 0 - window.scrollY) / 4.5) + 1,
      //   52
      // );

      // scrollPixels = Math.min(52, 52 - scrollPixels);
      // console.log("scrollPixels", Math.min(52, 52 - scrollPixels));

      if (frameIndex) {
        console.log(frameIndex, "scrollPixels");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[frameIndex - 1], 0, 0);
      }
      // console.log("scrollPixels", getOffset(canvas));
    };

    context.drawImage(images[0], 0, 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function randomIntFromInterval(min: number, max: number, p: any) {
    // min and max included
    return Math.floor(p * (max - min + 1) + min);
  }

  const elementInView = (el: any, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 100)
    );
  };

  function getOffset(el: any) {
    const rect = el.getBoundingClientRect();
    // return {
    //   left: rect.left + window.scrollX,
    //   top: rect.top + window.scrollY,
    // };
  }

  return (
    <div className={s.container}>
      <div
        className={`${s.animeContainer} ${s.className}`}
        ref={(el) => (commonRef.current["carContainer"] = el)}
      >
        <canvas id="car-360-image" className={s.hoodie} />
      </div>
    </div>
  );
};

export default Canvas;
