import React from "react";
import logo from "../../images/LOGO.png";
import telegram from "../../images/Vector (3).svg";
import whatsApp from "../../images/Vector (4).svg";
import faceBook from "../../images/Vector (5).svg";

import Link from "next/link";

const SideBare = () => {
    return (
        <div className="sideBare animateOpacity">
            <div className="logoContainer">
                <img src={logo.src} alt="logo" />
            </div>

            <div className="navContainer">
                <nav className="nav">
                    <a className="sideBare_link" href="#about">
                        About
                    </a>
                    <a className="sideBare_link" href="#values">
                        Values
                    </a>
                    <a className="sideBare_link" href="#project">
                        Project start
                    </a>
                    <a className="sideBare_link" href="#service">
                        Services
                    </a>
                    <a className="sideBare_link" href="#portfolio">
                        Portfolio
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
