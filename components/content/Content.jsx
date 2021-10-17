import React from 'react';
import Main from '../main/Main';
import Home from '../home/Home';
import Project from '../project/project';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Burger from '../burger/Burger';

const Content = () => {
    return (
        <div className="content">
            <div className="mainContent">
                
                <Home/>
                <Main/>
                <Project/>

                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default Content;