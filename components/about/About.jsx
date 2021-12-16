import Aos from "aos";
import React, { useEffect } from "react";
import abt from "../../images/aboutttt.png";

const About = () => {
    // let ok = true;
    // let ok2 = true;
    // let ok3 = true;
    // useEffect(() => {
    //     if (window != undefined) {
    //         window.addEventListener("scroll", update);
    //     }
    // }, []);

    // function update() {
    //     if (
    //         window.scrollY >=
    //         window.document.getElementById("about").clientHeight - 300
    //     ) {
    //         window.document.getElementById("about_1").className =
    //             "animateFromLeft";
    //         window.document.getElementById("about_2").className =
    //             "animateFromLeft";
    //         window.document.getElementById("about_3").className =
    //             "animateFromRight";
    //     }
    //     if (ok) {
    //         if (
    //             window.scrollY >=
    //             window.document.getElementById("values").clientHeight + 300
    //         ) {
    //             window.document.getElementById("values_1").className +=
    //                 " animateFromLeft";
    //             window.document.getElementById("values_2").className +=
    //                 " animateFromRight";
    //             window.document.getElementById("values_3").className +=
    //                 " animateOpacity";
    //             ok = false;
    //         }
    //     }

    //     if (ok2) {
    //         if (
    //             window.scrollY >=
    //             window.document.getElementById("project").clientHeight + 1000
    //         ) {
    //             window.document.getElementById("project_1").className +=
    //                 " animateOpacity";
    //             window.document.getElementById("project_2").className +=
    //                 " animateOpacity";
    //             window.document.getElementById("project_3").className +=
    //                 " animateOpacity";
    //             window.document.getElementById("project_4").className +=
    //                 " animateOpacity";
    //             window.document.getElementById("project_5").className +=
    //                 " animateOpacity";
    //             ok2 = false;
    //         }
    //     }

    //     if (ok3) {
    //         if (
    //             window.scrollY >=
    //             window.document.getElementById("service").clientHeight + 2000
    //         ) {
    //             let lB = window.document.getElementsByClassName("block_left");
    //             let rB = window.document.getElementsByClassName("block_right");
    //             for (let i = 0; i < lB.length; i++) {
    //                 lB[i].className += " animateFromRight";
    //             }
    //             for (let i = 0; i < rB.length; i++) {
    //                 rB[i].className += " animateFromLeft";
    //             }
    //             ok3 = false;
    //         }
    //     }
    // }
    return (
        <div className="about" id="about">
            <h1 id="about_1" data-aos="fade-right">
                About us
            </h1>
            <div className="about_block">
                <div className="about_text">
                <div className="about_p" id="about_2" data-aos="fade-right">
                We are a team of creative developers, data analysts, designers who care about your growth in the interesting world of programming. We are ready to support you and provide you with practice if you are not yet confident in your abilities after IT courses or self-study.
                </div>
                <div className="about_p" id="about_txt" data-aos="fade-right">
                We provide real foreign orders, an experienced mentor and a staffed team for the project, and if you quickly achieve a result and pass an interview, we will help you find a job in the companies of our foreign partners
                </div>
                </div>

                <div data-aos="fade-up">
                    <img id="about_3" src={abt.src} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default About;
