import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import Content from "@components/Content";

const Banner = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.content}`}>
        <div className={`${s.logo}`}>
          <Image
            src="/images/vlogo.png"
            objectFit="contain"
            height={199}
            width={1569}
            alt="logo"
          />
        </div>
        <div className={`${s.navBar}`}>
          <p>READ WHITEPAPER</p>
          <a href="#" className={`${s.connect}`}>
            CONNECT WALLET
          </a>
        </div>
        <Content />
        <div className={`${s.solve}`}>
          <p className={`${s.solveText}`}>
            VENTURE-X solves the common people desire of investing in seed stage
            start-ups and future unicorns through its platform by providing a
            level playing field for everyone and bring this private VC industry
            to public where anyone from anywhere can participate with relatively
            small investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
