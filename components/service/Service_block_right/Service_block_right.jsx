import React from "react";

const Service_block_right = ({ title, description, img, stylesForImg  }) => {
    return (
        <div className="block_right serviceBlockData" data-aos="fade-up">
            <h2>{title}</h2>
            <img src={img == undefined ? null : img.src} alt="" style = {stylesForImg}/>
            <p>{description}</p>
            
        </div>
    );
};

export default Service_block_right;
