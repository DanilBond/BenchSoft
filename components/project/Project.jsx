import React from "react";
import img1 from "../../images/NewNote.png";

const Project = () => {
    return (
        <div className="project" id="project">
            <h1 className="animateOpacity" data-aos="flip-up">
                Roadmap
            </h1>
            <div className="wrapper">
                <div className="content">
                    <div className="item" id="project_1" data-aos="fade-right">
                        <h2>Contact</h2>
                        <p>
                        Submit your request to us.
                        </p>
                    </div>

                    <div className="item" id="project_2" data-aos="fade-right">
                        <h2>Interview</h2>
                        <p>
                        We will contact you to clarify your skills
                        </p>
                    </div>

                    <div className="item" id="project_3" data-aos="fade-right">
                        <h2>Proposal</h2>
                        <p>
                        We will provide you an experienced mentor, office and team
                        </p>
                    </div>

                    <div className="item" id="project_4" data-aos="fade-right">
                        <h2>Start</h2>
                        <p>
                        You need to pay 8500 som and sign formal documents and start your journey.
                        </p>
                    </div>
                </div>
                <img
                    src={img1.src}
                    alt="img"
                    id="project_5"
                    // data-aos="fade-left"
                />
            </div>
        </div>
    );
};

export default Project;
