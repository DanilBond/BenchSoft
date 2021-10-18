import React from 'react';
import TechnolegesItem from './technolegesItem/TechnolegesItem';
import pytgonImg from '../../images/python.png'
import dockerImg from '../../images/docker.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar"

import SwiperCore, {
    Scrollbar
} from 'swiper';

// install Swiper modules
SwiperCore.use([Scrollbar]);

const Technoleges = () => {
    return (
        <div className="technoleges">
            <h1 className="technoleges_title">Modern technologies for innovative solutions</h1>

            <div className="blocks_item">

                <>
                    <Swiper scrollbar={{
                        "hide": true
                    }} className="mySwiper">
                        <SwiperSlide>
                            <div >
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                    </Swiper>
                </>



            </div>

        </div>
    );

};

export default Technoleges;