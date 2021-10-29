import React from "react";
import img1 from "../../images/Vector4.png";
import img2 from "../../images/Vector5.png";
import img3 from "../../images/Vector6.png";
import img4 from "../../images/sdf.png";
import TextField from "@mui/material/TextField";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1 data-aos="flip-up">Contact us</h1>

            <div className="container">
                <div className="contact-block animateOpacity">
                    <div className="item" data-aos="fade-right">
                        <img src={img1.src} alt="img1" width="35" height="45" />
                        <div className="localWrapper">
                            <h2>Address</h2>
                            <p>4 th icrodistrict 2/1</p>
                            <p>Bishkek, Kyrgyzstan</p>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-right">
                        <img src={img3.src} alt="img1" width="45" height="35" />
                        <div className="localWrapper">
                            <h2>Email us</h2>
                            <p>benchsoft@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-block animateOpacity">
                    <div className="item" data-aos="fade-right">
                        <img src={img2.src} alt="img1" width="45" height="45" />
                        <div className="localWrapper">
                            <h2>Call us</h2>
                            <p>+996 774 15 65 33</p>
                            <p>+996 222 15 65 33</p>
                        </div>
                    </div>

                    <div className="item" data-aos="fade-right">
                        <img src={img4.src} alt="img1" width="45" height="45" />
                        <div className="localWrapper">
                            <h2>Open hours</h2>
                            <p>Monday-Friday</p>
                            <p>9:00AM - 05:00PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form  animateOpacity">
                <form action="post" id="form">
                    <input
                        type="text"
                        placeholder="Your name"
                        data-aos="fade-left"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        data-aos="fade-left"
                    />
                    <input
                        type="email"
                        placeholder="Message"
                        data-aos="fade-left"
                    />
                    <a href="./" data-aos="fade-left">
                        send message
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Contact;
