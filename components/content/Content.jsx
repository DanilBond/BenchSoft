import React from 'react';
import Main from '../main/Main';
import Home from '../home/Home';
import Project from '../project/project';

const Content = () => {
    return (
        <div className="content">
            <div className="mainContent">
            <Home/>
            <Main/>
            <Project/>
            </div>
        </div>
    );
};

export default Content;