import React from "react";
import Service_block_left from "./Service_block_left/Service_block_left";
import Service_block_right from "./Service_block_right/Service_block_right";
import photo from "../../images/LOGO (1).png";
import p1 from "../../images/reshotka.png";
import p2 from "../../images/_1.png";
import p3 from "../../images/+.png";
import p4 from "../../images/^.png";
import p5 from "../../images/_.png";
import p6 from "../../images/~.png";

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
                    img={p4}
                    stylesForImg={
                        {
                            width: "125px",
                            marginTop: "-50px",
                            marginLeft: "200px"
                        }
                    }
                />
                <Service_block_right
                    title="Full development proccess"
                    description="QA, DevOps, Backend and Frontend, Project manager and Tech lead"
                    img={p6}
                    stylesForImg={
                        {
                            width: "125px",
                            marginTop: "-10px",
                            marginLeft: "200px"
                        }
                    }
                />

                <Service_block_left
                    title="Monthly interview"
                    description="Improve your skills on interviews"
                    img={p3}
                    stylesForImg={
                        {
                            width: "125px",
                            marginTop: "-45px",
                            marginLeft: "195px"
                        }
                    }
                />
                <Service_block_right
                    title="UI & UX design"
                    description="Creative design for any product"
                    img={p5}
                    stylesForImg={
                        {
                            width: "110px",
                            marginTop: "-90px",
                            marginLeft: "205px"
                        }
                    }
                />

                <Service_block_left
                    title="Participate in startups"
                    description="Be a part of International startups"
                    img={p1}
                    stylesForImg={
                        {
                            width: "200px",
                            marginTop: "-45px",
                            marginLeft: "180px"
                        }
                    }
                />
                <Service_block_right
                    title="Grow with professionals"
                    description="Grow with us"
                    img={p2}
                    stylesForImg={
                        {
                            width: "100px",
                            marginTop: "-45px",
                            marginLeft: "200px"
                        }
                    }
                />
            </div>
        </div>
    );
};

export default Service;
