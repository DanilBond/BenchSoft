import React from 'react';
import About from '../about/About';
import Values from '../values/Values';

const Main = (props, ref) => {
    
    return (
        <div className="main" ref={ref}>
            <About/>
            <Values/>
        </div>
    );
};

export default React.forwardRef(Main);