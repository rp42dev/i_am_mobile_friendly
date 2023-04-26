import { ArrowBendRightDown } from "@phosphor-icons/react";
import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';

const image = require('../../assets/images/transform.webp');

const Home = () => {
    const { theme } = useContext(ThemeContext);

    console.log(theme);
    return (
        <div className="home mx-auto pb-24">
            <div className="mt-8 container">
                <div className="max-w-full hero-content flex-col lg:flex-row-reverse justify-between mx-auto ">
                    <div className="max-w-2xl w-full h-full">

                        <div className="flex justify-center px-4 py-8 lg:py-0 shadow-inherit"><img src={image} alt="Hero image" className="hero-img object-contain h-100 w-full" /></div>

                    </div>
                    <div className="relative text-center lg:text-left flex-1">
                        <span className="w-20 h-2 mb-12"></span>
                        <h1 className="flex flex-col text-5xl font-black leading-none uppercase font-bebas-neue sm:text-8xl">
                            Transform
                            <span className="text-3xl sm:text-5xl max-w-2xl">
                                your website into a <span className="text-primary">Mobile-Friendly</span> version
                            </span>
                        </h1>
                        <p className="py-6 text-xl max-w-2xl">

                            Make your website accessible to everyone, everywhere with our mobile-friendly transformation website services.
                            Get ready to take your business to the next level and reach more customers than ever before! 🚀

                        </p>
                        <div className="mt-8 mx-auto text-center lg:text-left btn-group">
                            <a href="#contact" className="btn px-4 py-2 btn-primary border-2">
                                Get started
                            </a>
                            <a href="#problem" className="px-4 py-0 mr-4 btn btn-outline btn-primary text-md ">
                                <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
                                    <span className="mr-2 mt-1">Learn more</span>
                                    <ArrowBendRightDown size={22} weight="bold"></ArrowBendRightDown>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;