import React from 'react';
import logo from "../../images/LOGO.png";
import telegram from "../../images/Vector.png";
import whatsApp from "../../images/wh.png";
import faceBook from "../../images/fb.png";

const Footer = () => {
    
    return (
        <div className="footer">
            <div className="leftSide">
                <div><span className="spanFirst">B</span><span className="spanSecond">uild</span></div> 
                <div><span className="spanFirst">E</span><span className="spanSecond">xpand</span></div>
                <div><span className="spanFirst">N</span><span className="spanSecond">etwork</span></div>
                <div><span className="spanFirst">C</span><span className="spanSecond">ontrol</span></div>
                <div><span className="spanFirst">H</span><span className="spanSecond">ire</span></div>
            </div>

            <div className="rightSide">
                <img className="logo" src={logo.src} alt="logo" />
                <div className="iconWrapper">
                    <img className="icon" src={telegram.src} alt="tgr"/>
                    <img className="icon" src={whatsApp.src} alt="tgr"/>
                    <img className="icon" src={faceBook.src} alt="tgr"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;