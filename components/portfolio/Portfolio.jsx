import React, { useEffect, useState } from "react";
import image from "../../images/Rectangle 11.png";
import left from "../../images/ArrowLeft.png";
import right from "../../images/ArrowRight.png";

const Portfolio = () => {
  let [currentState, useCurrentState] = useState(0);
  function update() {
    console.log(currentState);
  }

  return (
    <div className="portfolio" id="portfolio">
      <h1 data-aos="flip-up">Portfolio</h1>
      <div className="scrollContainer" data-aos="zoom-in">
        <div className={"scrollImage pos" + currentState}>
          <img src={image.src} alt="" />
        </div>
        <div className={"scrollImage pos" + currentState}>
          <img src={image.src} alt="" />
        </div>
        <div className={"scrollImage pos" + currentState}>
          <img src={image.src} alt="" />
        </div>
      </div>

      <div className="scrollBar" data-aos="zoom-in">
        <div className="bar">
          <div className={"handle poshandle" + currentState}></div>
        </div>

        <div className="buttonContainer">
          <div
            className="button"
            onClick={() => {
              if (currentState - 1 == 0) {
                useCurrentState(currentState - 1);
              }
              update();
            }}
          >
            <img src={left.src} alt="" />
          </div>
          <div
            className="button"
            onClick={() => {
              if (currentState + 1 == 1) {
                useCurrentState(currentState + 1);
              }
              update();
            }}
          >
            <img src={right.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
