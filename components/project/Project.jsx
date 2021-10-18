import React from 'react';
import img1 from "../../images/Vector2.png";

const Project = () => {
    return (
        <div className="project" id="project">
            <h1>Quick project start</h1>
            <div className="wrapper">
            <div className="content">
                <div className="item">
                    <h2>Contact</h2>
                    <p>Submit your project request or project idea to us.</p>
                </div>

                <div className="item">
                    <h2>Analysis</h2>
                    <p>We will contact you to clarify your project requirements.</p>
                </div>

                <div className="item">
                    <h2>Proposal</h2>
                    <p>We will provide you with our free, non-binding bid or a tailored proposal.</p>
                </div>

                <div className="item">
                    <h2>Start</h2>
                    <p>We will assemble and prepare a team and start the project work</p>
                </div>
            </div>
            <img src={img1.src} alt="img" />
            </div>
        </div>
    );
};

export default Project;