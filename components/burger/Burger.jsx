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
            <div className={isActive ? 'iconclose': 'icon'} onClick={toggleClass}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={isActive ? 'background': 'backgroundClosed'} onClick={toggleClass}></div>

            <div className={isActive ? 'contentOpen': 'content'}>
                <img src={logo.src} alt="" />
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Values</a>
                <a href="#">Project start</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>

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