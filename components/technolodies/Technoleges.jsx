import React from 'react';
import TechnolegesItem from './technolegesItem/TechnolegesItem';
import pytgonImg from '../../images/python.png'
import dockerImg from '../../images/docker.png'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Technoleges = (props) => {

    const [sliderRef] = useKeenSlider({
        slidesPerView: 3,
        mode: "free-snap",
        spacing: 15,
        loop: true,
    })

    return (
        <div className="technoleges" id="tech">
            <h1 className="technoleges_title">Modern technologies for innovative solutions</h1>

            <div className="blocks_item">

                <div ref={sliderRef} className="keen-slider mobileTech">
                    <div className="keen-slider__slide number-slide1">
                        <div className="t_adaptive">
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
                    <div className="keen-slider__slide number-slide2">
                        <div className="t_adaptive">
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

                </div>

                <div className="deskTech">
                    
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

                    </div> <div className="technoleges_blocks">

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

        </div>

    );

};

export default Technoleges;