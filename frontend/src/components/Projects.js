// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";


import tattoo_sk from '../assets/images/projects/tattoo_sk.webp';
import from_lads_to_dads from '../assets/images/projects/fromladstodads.webp';
import ed_tattoo from '../assets/images/projects/ed_tattoo.webp';
import maya from '../assets/images/projects/maya.webp';
import andrejfineart from '../assets/images/projects/andrejsfinert.webp';

const Projects = () => {
    return (
        <div className="relative py-24 overflow-hidden">
            <div className="container mx-auto w-full px-4 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl pb-6">
                    Recent Projects and Clients
                </h2>
            </div>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 60,
                    shadowScale: 0.60,
                }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="swiper"
            >
                <SwiperSlide>
                    <a href="https://andrejfineart.com/" target="_blank" rel="noreferrer">
                        <img className="img" src={andrejfineart} alt="andrejfineart" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.mayanurtures.net/" target="_blank" rel="noreferrer">
                        <img className="img" src={maya} alt="maya Nurtures" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://tattooskworkshop.no/" target="_blank" rel="noreferrer">
                        <img className="img" src={tattoo_sk} alt="tattoo_sk" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://fromladstodads.ie/" target="_blank" rel="noreferrer">
                        <img className="img" src={from_lads_to_dads} alt="from_lads_to_dads" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://edtattoo.no/" target="_blank" rel="noreferrer">
                        <img className="img" src={ed_tattoo} alt="ed_tattoo" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects