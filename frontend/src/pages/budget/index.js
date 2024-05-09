import { Testimonials, Features2, Contact, Features3, Hero, Faq, Meta } from '../../components';

import { hero, faqData, process, agitate, solution, metaProps } from './data';

const Budget = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features2 data={solution} />
            <Features3 data={process} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>

    );
}

export default Budget;