import { PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";

const metaProps = {
    title: 'Custom Web Development in Ireland | Drogheda, Dublin & Remote | I am mobile friendly developer',
    description: 'Custom web development services in Ireland, serving Drogheda and Dublin and beyond, offering remote services to clients worldwide. Utilizing modern technologies such as React, Node, Django, and more.',
}


const faqData = [
    {
        question: "What is custom mobile-friendly web design?",
        answer: "Custom mobile-friendly web design involves creating a website from scratch, tailored specifically to be responsive and optimized for mobile devices."
    },
    {
        question: "Why is custom mobile-friendly web design important?",
        answer: "Custom mobile-friendly design ensures that your website provides an optimal user experience on mobile devices, leading to higher engagement and conversions."
    },
    {
        question: "How long does it take to develop a custom mobile-friendly website?",
        answer: "The development time can vary depending on the complexity and scope of the project. We will provide you with a timeline for your project based on your requirements."
    },
    {
        question: "What technologies are used in custom mobile-friendly web design?",
        answer: "Custom mobile-friendly websites can be developed using a variety of technologies such as HTML5, CSS3, JavaScript, and frameworks like React, Node, and Django."
    },
    {
        question: "Can I update the content on my custom mobile-friendly website myself?",
        answer: "This depends on the type of website you have. I can develop a custom content management system (CMS) that allows you to update the content on your website yourself."
    },
    {
        question: "Will my custom mobile-friendly website be compatible with all mobile devices?",
        answer: "Yes, custom mobile-friendly websites are designed to be compatible with a wide range of mobile devices, ensuring a consistent user experience."
    },
    {
        question: "Can I integrate third-party services and tools into my custom mobile-friendly website?",
        answer: "Yes, custom mobile-friendly websites can be integrated with various third-party services and tools to enhance functionality and meet your specific needs."
    },
    {
        question: "Will my custom mobile-friendly website be search engine optimized?",
        answer: "Yes, web developers can implement search engine optimization (SEO) techniques during the development process to ensure your website ranks well in search results."
    },
    {
        question: "Can I request additional features and functionalities for my custom mobile-friendly website?",
        answer: "Yes, one of the advantages of custom web design is the flexibility to add specific features and functionalities tailored to your business requirements."
    },
    {
        question: "How much does custom mobile-friendly web design cost?",
        answer: "The cost of custom mobile-friendly web design varies depending on factors such as the complexity of the project, desired features, and the web developer's rates. I will provide you with a quote based on your requirements."
    }
];

const features = [
    {
        id: 1,
        custom: true,
        text: 'Key Features of Custom Mobile-Friendly Websites',
        data: [
            {
                id: 1,
                title: 'Responsive Design',
                text: "Ensure a seamless user experience across all devices and screen sizes with responsive design."
            },
            {
                id: 2,
                title: 'Modern Technologies',
                text: "Development using cutting-edge tools like React and Django for robust functionality and performance."
            },
            {
                id: 3,
                title: 'Customizable Layouts',
                text: "Tailor the design, layout, and features to align with your brand and business objectives."
            },
            {
                id: 4,
                title: 'Optimized Performance',
                text: "Fast loading speeds and efficient coding for a smooth browsing experience on all devices."
            },
            {
                id: 5,
                title: 'Endless Customization',
                text: "With a custom website, you can add any feature you want and customize it to your needs."
            },
            {
                id: 6,
                title: 'Integration Capabilities',
                text: "Seamlessly integrate third-party services and tools for enhanced functionality."
            },
        ]
    }
]

const hero = [
    {
        title: 'Custom',
        subtitle: 'Website Design & Development',
        description: 'I specialize in creating customized, mobile-friendly websites using modern technologies like React and Django. I offer services in Ireland, including Drogheda and Dublin, and remotely to clients worldwide. With a strong focus on mobile-friendly design and seamless user experience',
        image: require('../../assets/images/responsive.webp'),
        alt: 'Custom Website Design & Development displaying responsive design',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features2'
    }
]

const benefits = [
    {
        id: 1,
        custom: false,
        title: 'Benefits working with me!',
        description: '',
        steps: [
            {
                id: 1,
                check: false,
                icon: <PenNib size={32} />,
                title: "Customized Solutions",
                text: ["I will work with you to understand your business needs and provide a customized solution that fits your needs and budget."],
                link: "",
            },
            {
                id: 2,
                check: false,
                icon: <PiggyBank size={32} />,
                title: "Competitive Pricing",
                text: ["Affordable pricing for small businesses. Minimal upfront costs and no hidden fees. Pay only for what you need and use."],
                link: "",
            },
            {
                id: 3,
                check: false,
                icon: <ArrowClockwise size={32} />,
                title: "Fast Turnaround Time",
                text: ["Time is money. I will work hard to ensure that your website is up and running as soon as possible to minimize downtime."],
                link: "",
            },
        ]
    }
]


const process = [
    {
        id: 1,
        custom: false,
        title: 'Here\'s How Our Process Works',
        button: 'Get started',
        description: 'I will work with you to understand your business needs and provide a customized solution that fits your needs and budget. Here\'s how our process works in 3 simple steps:',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "I'll discuss your website goals and needs and provide you with a custom quote for your project based on your requirements and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "I'll design and develop your website using the latest technologies and best practices to ensure it's mobile-friendly and optimized for search engines."
            },
            {
                id: 3,
                title: 'Launch',
                text: " I'll launch your mobile-friendly website and ensure it's fully functional and optimized for search engines to increase your online visibility."
            },
        ]
    }
]


export { features, faqData, hero, benefits, process, metaProps }
