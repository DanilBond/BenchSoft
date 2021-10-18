import React from 'react';
import logo from "../../images/LOGO.png";
import telegram from "../../images/Vector.png";
import whatsApp from "../../images/wh.png";
import faceBook from "../../images/fb.png";

const SideBare = () => {
    
    return (
        <div className="sideBare">

            <div className="logoContainer">
                <img src={logo.src} alt="logo" />
            </div>

            <div className="navContainer">

                <nav className="nav">
                <a className="sideBare_link" href="#">Home</a>
                <a className="sideBare_link" href="#about">About</a>
                <a className="sideBare_link" href="#part3">Values</a>
                <a className="sideBare_link" href="#part4">Project start</a>
                <a className="sideBare_link" href="#part5">Services</a>
                <a className="sideBare_link" href="#part6">Portfolio</a>
                <a className="sideBare_link" href="#part7">Contact</a>
                </nav>

            </div>

            <div className="links">
                    <a href="">
                        <img className="sideBare_contacts" src={telegram.src} alt="telegram" />
                    </a>

                    <a href="">
                        <img className="sideBare_contacts" src={whatsApp.src} alt="whatsApp" />
                    </a>

                    <a href="">
                        <img className="sideBare_contacts" src={faceBook.src} alt="FaceBook" />
                    </a>
            </div>

        </div>
    );
};

export default SideBare;