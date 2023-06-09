import image from '../assets/images/letter.svg'
import { LinkedinLogo } from "@phosphor-icons/react";

import ContactForm from './ContactForm'

const Contact = () => {

    return (
        <div id="contact" className="px-4 bg-base-200 ">
            <div className="container mx-auto">
                <div className="py-24 grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center sm:text-center lg:text-left">
                    <div className='space-y-6'>
                        <h2 className="text-3xl font-extrabold sm:text-4xl max-w-2xl">
                            Contact Me Today for a Free Quote and Consultation
                        </h2>
                        <p className="text-lg xl:text-xl lg:z-10 relative mx-auto lg:mx-0 mt-2 max-w-2xl">
                            Ready to take your online presence to the next level? Get in touch with us today for a free quote and consultation. Fill out the form below, and I will respond to your inquiry as soon as possible. Alternatively, you can connect with me on LinkedIn to explore the possibilities.
                            <a href="https://www.linkedin.com/in/rp42/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary-focus inline-block -mb-4 ml-2"> <LinkedinLogo size={42} weight="light" /></a>
                        </p>

                        <ContactForm />
                    </div>
                    <div className="z-10 grid  hidden lg:block">

                        <img width="300" height="100" className="object-cover mx-auto my-auto" src={image} alt="Paper plane" />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact