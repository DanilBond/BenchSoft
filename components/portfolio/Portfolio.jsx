import React, { useEffect, useState } from "react";
import image1 from "../../images/sliderImg1.png";
import image2 from "../../images/sliderImg2.png";
import left from "../../images/ARRL.png";
import right from "../../images/ARRR.png";

const Portfolio = () => {
  
  

  return (
    <div className="portfolio" id="portfolio">
      <h1 data-aos="flip-up">Open positions</h1>
      <div className="scrollContainer" data-aos="zoom-in" >
        <div className={"scrollImage pos"}>
          <img src={image2.src} alt="" />
        </div>
        <div className={"scrollImage pos"}>
          <img src={image1.src} alt="" />
        </div>
      </div>

      <div className="scrollBar" data-aos="zoom-in">
        <div className="bar">
          <div className={"handle"}></div>
        </div>

        <div className="buttonContainer">
          <div
            className="button"
          >
            <img src={left.src} alt="" />
          </div>
          <div
            className="button"
          >
            <img src={right.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
