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

export const mainRef = React.createRef()
const Content = (scrollVal) => {
    if(scrollVal === null){
        console.log(scrollVal);
    }
    return (
        <div className="content" id='home'>
            <div className="mainContent" >
                <Home/>
                <Main ref={mainRef}/>
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