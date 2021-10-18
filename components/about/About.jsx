import React from 'react';
import abt from "../../images/Rectangle 4.png";

const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="animateFromLeft">About us</h1>
            <div>
            <p className="animateFromLeft">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img className="animateFromRight" src={abt.src} alt="image" />
            </div>
        </div>
    );
};

export default About;