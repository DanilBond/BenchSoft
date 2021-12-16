import React from "react";
import img1 from "../../images/Locaa.png";
import img2 from "../../images/Phnee.png";
import img3 from "../../images/Malee.png";
import img4 from "../../images/Clcc.png";
import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
const CustomInput = styled(TextField)({
    "& label.Mui-focused": {
        color: "#fff !important",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#c83b34",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "rgba(255, 255, 255, 0.2)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(200, 59, 52, 1)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#c83b34",
        },
    },
});
const useStyles = makeStyles((theme) => ({
    notchedOutline: {
        borderRadius: "8px",
    },
}));
const Contact = () => {
    const classes = useStyles();
    return (
        <div className="contact" id="contact">
            <h1 data-aos="flip-up">Contact us</h1>

            <div className="container">
                <div className="contact-block animateOpacity">
                    <div className="item" data-aos="fade-right">
                        <img src={img1.src} alt="img1" width="35" height="45" />
                        <div className="localWrapper">
                            <h2>Address</h2>
                            <p>Logvinenko st. 55, 1st office</p>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-right">
                        <img src={img3.src} alt="img1" width="45" height="35" />
                        <div className="localWrapper">
                            <h2>Email us</h2>
                            <p>hello@zettasoft.io</p>
                        </div>
                    </div>
                </div>
                <div className="contact-block animateOpacity">
                    <div className="item" data-aos="fade-right">
                        <img src={img2.src} alt="img1" width="45" height="45" />
                        <div className="localWrapper">
                            <h2>Call us</h2>
                            <p>+996 774 15 65 33</p>
                            <p>+996 559 60 16 09</p>
                        </div>
                    </div>

                    <div className="item" data-aos="fade-right">
                        <img src={img4.src} alt="img1" width="45" height="45" />
                        <div className="localWrapper">
                            <h2>Open hours</h2>
                            <p>Monday-Friday</p>
                            <p>10:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form  animateOpacity">
                <form action="">
                    <input type="text" placeholder="Your name"/>
                    <input type="text" placeholder="Phone number"/>
                    <input type="text" placeholder="Message"/>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
