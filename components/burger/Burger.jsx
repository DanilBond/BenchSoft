import React, { useEffect, useState } from "react";
import logo from "../../images/Subtract.png";
import telegram from "../../images/TGR.png";
import whatsApp from "../../images/WAA.png";
import faceBook from "../../images/INN.png";

const Burger = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

    const setBigger = (el) => {
        [...el.parentElement.children].forEach((sib) =>
            sib.classList.remove("bigger")
        );
        el.classList.add("bigger");
    };
    const removeBigger = (el) => {
        [...el.parentElement.children].forEach((sib) =>
            sib.classList.remove("bigger")
        );
    };
    useEffect(() => {
        if (window != undefined) {
            window.addEventListener("scroll", (e) => {
                let y = window.scrollY;
                let aboutBlock = window.document.querySelector("#about");
                let valuesBlock = window.document.querySelector("#values");
                let projectBlock = window.document.querySelector("#project");
                let serviceBlock = window.document.querySelector("#service");
                let portfolioBlock =
                    window.document.querySelector("#portfolio");
                let contactBlock = window.document.querySelector("#contact");
                let homeBlock = window.document.querySelector("#home");

                let homeBur =
                    window.document.querySelectorAll(".burger-nav-link")[0];
                let aboutBur =
                    window.document.querySelectorAll(".burger-nav-link")[1];
                let valuesBur =
                    window.document.querySelectorAll(".burger-nav-link")[2];
                let projectBur =
                    window.document.querySelectorAll(".burger-nav-link")[3];
                let serviceBur =
                    window.document.querySelectorAll(".burger-nav-link")[4];
                let portfolioBur =
                    window.document.querySelectorAll(".burger-nav-link")[5];
                let contactBur =
                    window.document.querySelectorAll(".burger-nav-link")[6];

                let home =
                    window.document.querySelectorAll(".sideBare_link")[0];
                let about =
                    window.document.querySelectorAll(".sideBare_link")[1];
                let values =
                    window.document.querySelectorAll(".sideBare_link")[2];
                let project =
                    window.document.querySelectorAll(".sideBare_link")[3];
                let service =
                    window.document.querySelectorAll(".sideBare_link")[4];
                let portfolio =
                    window.document.querySelectorAll(".sideBare_link")[5];
                let contact =
                    window.document.querySelectorAll(".sideBare_link")[6];
                
                    console.log(aboutBlock.offsetTop)
                if(y < 200){
                        setBigger(home);
                    }
                else if (y < aboutBlock.offsetTop - 500) {
                    setBigger(homeBur);
                    removeBigger(contact);
                } else if (y >= contactBlock.offsetTop - 300) {
                    setBigger(contact);
                    setBigger(contactBur);
                } else if (y >= portfolioBlock.offsetTop - 300) {
                    setBigger(portfolio);
                    setBigger(portfolioBur);
                } else if (y >= serviceBlock.offsetTop - 300) {
                    setBigger(service);
                    setBigger(serviceBur);
                } else if (y >= projectBlock.offsetTop - 300) {
                    setBigger(project);
                    setBigger(projectBur);
                } else if (y >= valuesBlock.offsetTop - 300) {
                    setBigger(values);
                    setBigger(valuesBur);
                } else if (y >= aboutBlock.offsetTop - 300) {
                    setBigger(about);
                    setBigger(aboutBur);
                } else {
                    removeBigger(about);
                    setBigger(aboutBur);
                }
            });
        }
    }, []);

    return (
        <div className="burger">
            <div
                className={isActive ? "iconclose" : "icon"}
                onClick={toggleClass}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                className={isActive ? "background" : "backgroundClosed"}
                onClick={toggleClass}
            ></div>

            <div className={isActive ? "contentOpen" : "content"}>
                <img src={logo.src} alt="" />
                <div className="content-wrapper">
                    <a className="burger-nav-link" href="#">
                        Home
                    </a>
                    <a className="burger-nav-link" href="#about">
                        About
                    </a>
                    <a className="burger-nav-link" href="#values">
                        Values
                    </a>
                    <a className="burger-nav-link" href="#project">
                        Project start
                    </a>
                    <a className="burger-nav-link" href="#service">
                        Services
                    </a>
                    <a className="burger-nav-link" href="#portfolio">
                        Portfolio
                    </a>
                    <a className="burger-nav-link" href="#contact">
                        Contact
                    </a>
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
        </div>
    );
};

export default Burger;
