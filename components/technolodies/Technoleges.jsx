import React from 'react';
import TechnolegesItem from './technolegesItem/TechnolegesItem';
import pytgonImg from '../../images/python.png'
import dockerImg from '../../images/docker.png'
const Technoleges = () => {
    return (
        <div className="technoleges">
            <h1 className="technoleges_title">Modern technologies for innovative solutions</h1>

            <div className="blocks_item">

                <div className="technoleges_blocks">

                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />

                </div>
                <div className="technoleges_blocks">

                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />

                </div>
                <div className="technoleges_blocks">

                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Python" img={pytgonImg.src} />

                </div>
                <div className="technoleges_blocks">

                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Docker" img={dockerImg.src} />

                </div>
            </div>

        </div>
    );

};

export default Technoleges;