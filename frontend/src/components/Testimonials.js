// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import jeff from '../assets/images/testimonials/jeff.webp';
import ed from '../assets/images/testimonials/ed.webp';
import jane from '../assets/images/testimonials/jane.webp';
import star from '../assets/images/star.svg';
import karen from '../assets/images/testimonials/karen.webp';

import PhoneFrame from "./Phone"

const data0 = [
    {
        id: 0,
        name: 'Karen',
        title: 'CEO of Mayanurtures.net',
        iframe: <iframe width="320" height="600" src="https://www.youtube.com/embed/fWM6pNApGns?si=sHeOH2x-TrcP3J76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
        id: 1,
        name: 'Jeff',
        title: 'CEO of Jeffshealthyliving.com',
        iframe: <iframe width="320" height="600" src="https://youtube.com/embed/Wb83muatHbk?si=oI4NHT7HCnDjQeni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
        id: 2,
        name: 'Ed',
        title: 'CEO of riseenergy.co.uk',
        iframe: <iframe width="320" height="600" src="https://youtube.com/embed/ayG8NvNND7c?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
]

const data = [
    {
        id: 0,
        image: karen,
        name: 'Karen',
        title: 'CEO of Mayanurtures.net',
        link: 'https://www.mayanurtures.net/',
        description: 'One word to describe Raivis’ service is overdeliver. A kind person recommended him. Raivis gets to know his customers to get the job done quickly and with excellent quality. The service was supposed to be for creating a funnel and helping me out with my website. But, it’s more than just that. He fixed my logo which fits what my brand. But, above all, he is easy to work with. Highly recommended!'
    },
    {
        id: 1,
        image: jeff,
        name: 'Jeff',
        title: 'Director of the board FLTD',
        link: 'https://fromladstodads.ie/',
        description: 'Raivis has been an intergeral part of our online division in From Lads to Dads. His knowledge, expertise and understanding of the online section of our charity has been second to none. He has built and maintained our online division, bringing it together with the social media end which is very important to todays businesses. We are happy to count Raivis as part of our team.'
    },
    {
        id: 2,
        image: ed,
        name: 'Ed Tattoo',
        title: 'CEO of edtattoo.no',
        link: 'https://edtattoo.no/',
        description: 'Raivis was hired as our web developer. Our industry is focused on internet and social network support. Thanks to Raivis, our company has achieved incredibly high results. Through his work, we have made contact with countless customers, and our customer base continues to grow every day. We are happy to have worked with Raivis..'
    },
    {
        id: 3,
        image: jane,
        name: 'Jane',
        title: 'Tattoo SK Workshop administrator',
        link: 'https://tattooskworkshop.no/',
        description: 'Raivis made an amazing web page for us. I have tried it myself many times and I am very glad that I found it and our page looks very bright and professional. In a short time with 100% feedback, he takes into account all the wishes and also gives advice, which is often very helpful. Definitely made my life easier and I am very grateful to him for that. I recommend it to everyone.'
    },
]



const VideoTestimonials = () => {
    return (
        <section className="pt-24">
            <div className="container mx-auto w-full text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
                    What our clients say about me
                </h2>
            </div>
            <div className="container mx-auto w-full text-center d-flex flex-wrap justify-center sm:space-x-4 space-y-4">
                {data0.map((item) => (
                    <PhoneFrame key={item.id} name={item.name} title={item.title} iframe={item.iframe} />
                ))}
            </div>

        </section>
    )
}

const Testimonials = () => {
    return (
        <>
            <VideoTestimonials />
        <section className="pt-24 pb-12">
            
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={"auto"}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col px-4 items-center justify-center w-full mx-auto text-center">
                       
                            <img src={item.image} alt={item.name} className="w-40 h-40 rounded-full mx-auto" />
                            <h3 className="mt-4 text-2xl font-semibold sm:text-4xl">{item.name}</h3>
                            <p className="text-sm xl:text-lg font-medium">{item.title}</p>
                            <a href={item.link} target="_blank" rel="noreferrer" className="text-sm xl:text-lg font-medium text-blue-500 hover:underline">{item.link}</a>
                            <p className="max-w-xl mt-4 text-sm xl:text-lg">{item.description}</p>
                            <div className="flex items-center justify-center mt-4 space-x-2">
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </section>
        </>
    )
}

export default Testimonials