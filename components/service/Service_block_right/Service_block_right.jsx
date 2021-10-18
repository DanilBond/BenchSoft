import React from 'react';

const Service_block_right = ({title , description}) => {
    return (
        <div className="block_right animateFromLeft">
            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </div>
    );
};

export default Service_block_right;