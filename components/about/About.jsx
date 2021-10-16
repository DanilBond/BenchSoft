import React from 'react';
import abt from "../../images/Rectangle 4.png";

const About = () => {
    return (
        <div className="about">
            <h1>About us</h1>
            <div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img src={abt.src} alt="image" />
            </div>
        </div>
    );
};

export default About;