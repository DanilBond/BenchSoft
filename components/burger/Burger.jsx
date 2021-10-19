import React, { useState } from 'react';
import logo from "../../images/LOGO.png";

import telegram from "../../images/Vector.png";
import whatsApp from "../../images/wh.png";
import faceBook from "../../images/fb.png";
 

const Burger = () => {
    const [isActive, setActive] = useState(false);
  
    const toggleClass = () => {
      setActive(!isActive);
    };
    
    return (
        <div className="burger">
            <div className={isActive ? 'iconclose' : 'icon'} onClick={toggleClass}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={isActive ? 'background': 'backgroundClosed'} onClick={toggleClass}></div>

            <div className={isActive ? 'contentOpen': 'content'}>
                <img src={logo.src} alt="" />
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#values">Values</a>
                <a href="#project">Project start</a>
                <a href="#service">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>

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
            
        </div>
    );
};

export default Burger;