import React from 'react';
import Main from '../main/Main';
import Home from '../home/Home';
import Project from '../project/Project';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Technoleges from '../technolodies/Technoleges';
import Service from '../service/Service';
import Burger from '../burger/Burger';
import Portfolio from '../portfolio/Portfolio';

const Content = () => {

    return (
        <div className="content">
            <div className="mainContent" >
                <Home/>
                <Main />
                <Project />
                <Technoleges />
                <Service/>
                <Portfolio/>
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Content;