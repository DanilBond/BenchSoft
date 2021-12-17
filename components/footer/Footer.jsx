import React from "react";
import logo from "../../images/Subtract.png";
import telegram from "../../images/TGR.png";
import whatsApp from "../../images/WAA.png";
import faceBook from "../../images/INN.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerImg">
                <img src={logo.src} alt="" />
            </div>
            <div className="footerTitle">ZettaLab.io</div>

            <div className="footerIcons">
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

export default Footer;
