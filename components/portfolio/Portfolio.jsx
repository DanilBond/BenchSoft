// import React, { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";


// import 'swiper/swiper.scss'; // core Swiper 
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module 
// import 'swiper/modules/pagination/pagination.scss'; // Pagination


// SwiperCore.use([Navigation]);


// SwiperCore.use([Scrollbar]);



// const Portfolio = () => {
//   const navigationPrevRef = React.useRef(null) 
//       const navigationNextRef = React.useRef(null) 
//   return (
//     <div className="portfolio" id="portfolio">
//       <h1 data-aos="flip-up">Open positions</h1>
//       <div className="scrollContainer" data-aos="zoom-in" >

//        <Swiper 
//           navigation={{ 
//             prevEl: navigationPrevRef.current, 
//             nextEl: navigationNextRef.current, 
//           }} 
//          onBeforeInit={()=>{ 
//               swiper.params.navigation.prevEl = navigationPrevRef.current,
//               swiper.params.navigation.nextEl = navigationNextRef.current 
//          }} 
//         > 
//           <SwiperSlide>slide 1</SwiperSlide> 
//           <SwiperSlide>slide 2</SwiperSlide> 
//           <div ref={navigationPrevRef} /> 
//           <div ref={navigationNextRef} /> 
//         </Swiper> 
      
//       </div>

//       <div className="scrollBar" data-aos="zoom-in">
//         <div className="bar">
//           <div className={"handle"}></div>
//         </div>

//         <div className="buttonContainer">
//         <button className="custom_next">Custom Next Btn</button>
//         <button class="custom_next_btn">Custom Next</button>
//           <div
//             className="custom_next_btn"
//           >
//             <img src={left.src} alt="" />
//           </div>
//           <div
//             className="custom_prev_btn"
//           >
//             <img src={right.src} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


 
// Slider.js 
import React from 'react';
import image1 from "../../images/sliderImg1.png";
import image2 from "../../images/sliderImg2.png";
import left from "../../images/r1.png";
import right from "../../images/r2.png";

 
import { Navigation } from 'swiper'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
 
const Portfolio = () => { 
    const navigationPrevRef = React.useRef(null) 
    const navigationNextRef = React.useRef(null) 
    
    return ( 
      <div className="portfolio" id="portfolio">
     <h1 data-aos="flip-up">Open positions</h1>
      <div className="scrollContainer" data-aos="zoom-in" ></div>
      <Swiper 
        navigation={{ 
          prevEl: navigationPrevRef.current, 
          nextEl: navigationNextRef.current, 
        }} 
        modules={[Navigation]} 
        onSwiper={(swiper)=>{ 
            swiper.params.navigation.prevEl = navigationPrevRef.current; 
            swiper.params.navigation.nextEl = navigationNextRef.current; 
        }} 
       scrollbar={{
          el: '.swiper-scrollbar',
          draggable: true,
          dragClass:'.swiper-scrollbar-drag'
        }}
       
        className='swiper_port'
      > 
        <SwiperSlide> <img className='img_port' src={image1.src} alt="ok" /> </SwiperSlide> 
        <SwiperSlide> <img className='img_port'src={image2.src} alt="ok" /> </SwiperSlide> 
        <SwiperSlide> <img className='img_port'src={image1.src} alt="ok" /> </SwiperSlide> 
        <SwiperSlide><img className='img_port'src={image2.src} alt="ok" /> </SwiperSlide> 
        <SwiperSlide> <img className='img_port'src={image1.src} alt="ok" /> </SwiperSlide> 
        <SwiperSlide><img className='img_port'src={image2.src} alt="ok" /> </SwiperSlide> 
         
        <div slot="container-end"> 
            <div className="swiper-scrollbar">
              <div className="swiper-scrollbar-drag"></div>
            </div>
            <div className="port_flex">
            <div ref={navigationPrevRef}> 
                <img className='portfolio_img' id='r1'  src={right.src} alt="" />
            </div> 
            <div ref={navigationNextRef}> 
            <img className='portfolio_img' src={left.src} alt="" />
            </div> 
            </div>
        </div> 
      </Swiper> 
      </div>
    ) 
  }
export default Portfolio;
