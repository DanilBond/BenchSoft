import React from "react";
import logo from "../../images/Subtract.png";
import telegram from "../../images/TGR.png";
import whatsApp from "../../images/WAA.png";
import faceBook from "../../images/INN.png";

import Link from "next/link";
import { useEffect } from "react";

const SideBare = () => {

    useEffect(()=>{
        if (window != undefined) {
            window.addEventListener("scroll", (e) => {
                let y = window.scrollY;
                // console.log(y)
                if(y > 6750){
                    let sideBar = document.querySelector("#sideBar");
                    if(!sideBar.classList.contains("footerBlock")){
                        sideBar.classList.add("footerBlock");
                    }
                }else{
                    sideBar.classList.remove("footerBlock");
                }
            })
        }
    }, [])

    return (
        <div className="sideBare animateOpacity" id="sideBar">
            <div className="logoContainer">
                <img src={logo.src} alt="logo" />
            </div>

            <div className="navContainer">
                <nav className="nav">
                    <a className="sideBare_link" href="#home">
                        Home
                    </a>
                    <a className="sideBare_link" href="#about">
                        About
                    </a>
                    <a className="sideBare_link" href="#values">
                        Values
                    </a>
                    <a className="sideBare_link" href="#project">
                        Roadmap
                    </a>
                    <a className="sideBare_link" href="#service">
                        Services
                    </a>
                    <a className="sideBare_link" href="#portfolio">
                        Positions
                    </a>
                    <a className="sideBare_link" href="#contact">
                        Contact
                    </a>
                </nav>
            </div>

            <div className="links">
                <a href="">
                    <img
                        className="sideBare_contacts"
                        src={telegram.src}
                        alt="telegram"
                    />
                </a>

                <a href="">
                    <img
                        className="sideBare_contacts"
                        src={whatsApp.src}
                        alt="whatsApp"
                    />
                </a>

                <a href="">
                    <img
                        className="sideBare_contacts"
                        src={faceBook.src}
                        alt="FaceBook"
                    />
                </a>
            </div>
        </div>
    );
};

export default SideBare;
