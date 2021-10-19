import React from 'react';
import img1 from "../../images/Group.png";
import img2 from "../../images/carbon_report.png";
import img3 from "../../images/Vector1.png";

const Values = () => {
    
    return (
        <div className="values" id="values">
            <h1>Our values</h1>

            <div className="container">
                <div className="item" id="values_1">
                    <img src={img1.src} alt="img1" />
                    <h2>Product development from scratch</h2>
                    <p>Initial analysis and risk accounting.</p>
                </div>

                <div className="item" id="values_2">
                    <img src={img2.src} alt="img1" />
                    <h2>Full reporting</h2>
                    <p>Full and clear documentation for your product</p>
                </div>

                <div className="item"  id="values_3">
                    <img src={img3.src} alt="img1" />
                    <h2>MVP development</h2>
                    <p>Quick launch of project. We use Agile and Scrum for better and fast development.</p>
                </div>
            </div>
        </div>
    );
};

export default Values;