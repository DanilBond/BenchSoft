import React from "react";
import Service_block_left from "./Service_block_left/Service_block_left";
import Service_block_right from "./Service_block_right/Service_block_right";
import photo from "../../images/LOGO (1).png";

const Service = () => {
    return (
        <div className="service" id="service">
            <h1
                className="service_title"
                data-aos="flip-up"
                style={{ marginRight: "10px" }}
            >
                {" "}
                Our services{" "}
            </h1>

            <div className="service_blocks">
                <Service_block_left
                    title="Code review"
                    description="A mentor will tell you how to do magic correctly"
                />
                <Service_block_right
                    title="Full development proccess"
                    description="QA, DevOps, Backend and Frontend, Project manager and Tech lead"
                />

                <Service_block_left
                    title="Monthly interview"
                    description="Improve your skills on interviews"
                />
                <Service_block_right
                    title="UI & UX design"
                    description="Creative design for any product"
                />

                <Service_block_left
                    title="Participate in startups"
                    description="Be a part of International startups"
                />
                <Service_block_right
                    title="Grow with professionals"
                    description="Grow with us"
                />
            </div>
            <img src={photo.src} className="service__bg" width="750" />
        </div>
    );
};

export default Service;
