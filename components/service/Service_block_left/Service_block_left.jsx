import React from "react";

const Service_block_left = ({ title, description }) => {
    return (
        <div className="block_left" data-aos="fade-up">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Service_block_left;
