import React from "react";
import img1 from "../../images/qwe1.png";
import img2 from "../../images/qwe2.png";
import img3 from "../../images/qwe3.png";

const Values = () => {
    return (
        <div className="values" id="values">
            <h1 data-aos="flip-left">Our values</h1>

            <div className="container">
                <div className="item" id="values_1" data-aos="flip-left">
                    <img  src={img2.src} alt="img1" />
                    <h2>Growth</h2>
                    <p>We care about your growth</p>
                </div>

                <div className="item" id="values_2" data-aos="flip-left">
                    <img src={img3.src} alt="img1" id="value_img3"/>
                    <h2>Full reporting</h2>
                    <p>Full and clear development</p>
                </div>

                <div className="item" id="values_3" data-aos="flip-left">
                    <img src={img1.src} alt="img1" />
                    <h2>Startups</h2>
                    <p>
                    You can participate in the development of cool startups
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Values;
