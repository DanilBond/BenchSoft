import React from 'react';
import Main from '../main/Main';
import Home from '../home/Home';
import Project from '../project/Project';
import Technoleges from '../technolodies/Technoleges';

const Content = () => {
    return (
        <div className="content">
            <div className="mainContent">
            <Home/>
            <Main/>
            <Project/>
            <Technoleges/>
            </div>
        </div>
    );
};

export default Content;