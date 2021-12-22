import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/globals.css";

import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
 
 

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            mirror: true,
            // once: true,
        });
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
