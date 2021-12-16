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
                <FormControl>
                    <CustomInput
                        data-aos="fade-up"
                        className="CustomInput"
                        label="Your name"
                        InputProps={{
                            style: {
                                fontFamily: "Muller",
                                color: "white",
                            },
                            classes: {
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Muller",
                                color: "rgba(255, 255, 255, 0.2)",
                            },
                        }}
                    />
                    <CustomInput
                        data-aos="fade-up"
                        className="CustomInput"
                        label="Email"
                        InputProps={{
                            style: {
                                fontFamily: "Muller",
                                color: "white",
                            },
                            classes: {
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Muller",
                                color: "rgba(255, 255, 255, 0.2)",
                            },
                        }}
                    />
                    <CustomInput
                        data-aos="fade-up"
                        className="CustomInputThird"
                        rows={8}
                        multiline
                        label="Message"
                        InputProps={{
                            style: {
                                fontFamily: "Muller",
                                color: "white",
                            },
                            classes: {
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Muller",
                                color: "rgba(255, 255, 255, 0.2)",
                            },
                        }}
                    />
                    <a href="./" data-aos="fade-up" className="formBtn">
                        send message
                    </a>
                </FormControl>
                {/* <form action="post" id="form">
          <input type="text" placeholder="Your name" data-aos="fade-up" />

          <input type="email" placeholder="Email" data-aos="fade-up" />
          <input type="email" placeholder="Message" data-aos="fade-up" />
          <a href="./" data-aos="fade-up">
            send message
          </a>
        </form> */}
            </div>
        </div>
    );
};

export default Contact;
