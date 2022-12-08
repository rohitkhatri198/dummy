import React from "react";
import s from "./Content.module.scss";
const Content = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.left}`}>
        <p className={`${s.contentText}`}>
          VENTURE-X (VX) is a First Decentralized Community Driven Venture
          Capital Fund that is powered by Blockchain Technology
        </p>
      </div>
      <div className={`${s.right}`}>
        <a className={`${s.buyButton}`} href="#">
          Buy Tokens
        </a>
      </div>
    </div>
  );
};

export default Content;
