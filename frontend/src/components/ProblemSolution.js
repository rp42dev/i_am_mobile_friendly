import { CheckFat, Devices, ArrowArcRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Service = (props) => {

    return (
        <>
            <div className="flex flex-wrap content-center absolute -left-0 -top-0 px-1 py-2 bg-primary rounded-tl-lg rounded-br-lg h-24 w-28">
                <div className="w-full px-4 lg:w-1/2 text-white">
                    {props.custom ?
                        <Devices size={64} weight="light" />
                        :
                        <div className="relativew-full px-4 lg:w-1/2 ">

                            <div className="absolute left-5 -top-2 text-white">
                                <ArrowArcRight size={56} weight="light" />
                            </div>

                            <div className="absolute left-5 top-5 text-white">
                                <Devices size={64} weight="light" />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-wrap content-center absolute inset-x-0 -bottom-28 sm-bottom-24 px-1 py-2 rounded-tl-lg rounded-br-lg px-8">
                <Link to={props.custom ? "/transform"  : "/"} className="relative px-4 py-4 max-w-7xl mx-auto lg:w-1/2 bg-base-100 hover:bg-base-300 rounded-lg shadow-lg pointer ">
                    <div className="">

                        <div className="relative mt-14">
                            <h4 className="text-1xl font-extrabold sm:text-2xl">
                                {!props.custom ? "Custom development" : "Transformation services"}
                            </h4>

                            <p className="text-sm leading-6">
                                {props.custom ? "Transform your existing website to a modern, mobile friendly website." : "Build a custom mobile friendly website for your business from scratch."}
                                   <br></br> <span className="text-primary hover:text-primary-focus underline text-lgt">Learn More</span>
                               
                            </p>

                        </div>
                        <div className="flex flex-wrap content-center absolute -left-0 -top-0 px-1 py-2 bg-primary rounded-tl-lg rounded-br-lg w-20 h-16">
                            <div className="relative w-full px-4 lg:w-1/2 text-white">
                                {!props.custom ?
                                    <Devices size={36} weight="light" />

                                    :
                                    <>
                                        <div className="absolute -top-8">
                                            <ArrowArcRight size={36} weight="light" />
                                        </div>

                                        <div className="absolute -top-4">
                                            <Devices size={42} weight="light" />
                                        </div>
                                    </>

                                }
                            </div>
                        </div>
                    </div>
                </Link>
            </div >
        </>
    )
}

const ProblemSolution = (props) => {

    const { data } = props;

    return (
        <section id="problem" className="container relative mx-auto bg-base-200 border-base-100 rounded-lg shadow-lg py-24 mb-24 ">

            <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 mt-4">
                <div className="flex flex-wrap content-center">
                    <div className="w-full lg:w-1/2 xl:pr-2">
                        <div className="relative space-y-4">
                            <h4 className="text-3xl font-extrabold sm:text-4xl">
                                {data[0].text}
                            </h4>

                            <p className="mt-4 text-lg leading-6">
                                {data[0].description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:pl-2">

                        <ul className="gap-6 mt-8 lg:mt-0 md:grid md:grid-cols-2">
                            {data[0].data.map((item) => {
                                return (
                                    <li key={item.id} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckFat size={24} color="green" />
                                        </div>
                                        <p className="ml-3">
                                            {item.text}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>


            <Service custom={data[0].custom} />
        </section >
    )
}

export default ProblemSolution