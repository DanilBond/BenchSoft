import React, { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        console.log(document.body.mainContent)
    })
    return (
        <div className="home">
            <h1 className="animateOpacity">Benchsoft</h1 >
            <p  className="animateOpacity">Build, expand and control your business with us</p>
            <a className="animateOpacity" href="./">get started</a>
        </div>
    );
};

export default Home;