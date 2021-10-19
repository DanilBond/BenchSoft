import React, { useEffect } from 'react';
import abt from "../../images/Rectangle 4.png";

const About = () => {
    let ok = true;
    let ok2 = true;
    let ok3 = true;
    useEffect(()=>{
        if(window != undefined){
            
            window.addEventListener("scroll", update);
        }
    }, []);

    function update(){
        
        if(window.scrollY >= window.document.getElementById("about").clientHeight-300){
            window.document.getElementById("about_1").className = "animateFromLeft";
            window.document.getElementById("about_2").className = "animateFromLeft";
            window.document.getElementById("about_3").className = "animateFromRight";
        }
        if(ok){
        if(window.scrollY >= window.document.getElementById("values").clientHeight+300){
            window.document.getElementById("values_1").className += " animateFromLeft";
            window.document.getElementById("values_2").className += " animateFromRight";
            window.document.getElementById("values_3").className += " animateOpacity";
            ok = false;
        }
        }

        
        if(ok2){
            if(window.scrollY >= window.document.getElementById("project").clientHeight+1000){
                window.document.getElementById("project_1").className += " animateOpacity";
                window.document.getElementById("project_2").className += " animateOpacity";
                window.document.getElementById("project_3").className += " animateOpacity";
                window.document.getElementById("project_4").className += " animateOpacity";
                window.document.getElementById("project_5").className += " animateOpacity";
                ok2 = false;
            }
            }
            
        if(ok3){
            if(window.scrollY >= window.document.getElementById("service").clientHeight+2000){
                let lB = window.document.getElementsByClassName("block_left");
                let rB = window.document.getElementsByClassName("block_right");
                for (let i = 0; i < lB.length; i++) {
                    lB[i].className += " animateFromRight";
                }
                for (let i = 0; i < rB.length; i++) {
                    rB[i].className += " animateFromLeft";
                }
                ok3 = false;
            }
            }
    }
    return (
        <div className="about" id="about">
            <h1 id="about_1">About us</h1>
            <div>
            <p id="about_2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img id="about_3" src={abt.src} alt="image" />
            </div>
        </div>
    );
};

export default About;