import React from 'react';

const Burger = () => {
    return (
        <div className="burger">
            <div className="icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div className="content">
                <span>Home</span>
                <span>About</span>
                <span>Values</span>
                <span>Project start</span>
                <span>Services</span>
                <span>Portfolio</span>
                <span>Contact</span>
            </div>
        </div>
    );
};

export default Burger;