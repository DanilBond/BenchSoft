import React from "react";

const TechnolegesItem = ({ text, img }) => {
    return (
        <div className="technology_text" data-aos="flip-down">
            <img className="tecnology_image" src={img} alt="img" />
            <p className="tecnology_p"> {text} </p>
        </div>
    );
};

export default TechnolegesItem;
