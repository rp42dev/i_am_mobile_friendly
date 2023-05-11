import { CaretUp } from "@phosphor-icons/react";
import React, { useState } from "react";

function Accordion({ title, content }) {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        setExpanded((current) => !current)
    }

    return (
        <div className="my-4 md:my-6 cursor-pointer bg-base-200 rounded-md shadow-lg" onClick={toggleExpanded}>
            <div className="px-6 py-4 text-left items-center select-none flex justify-between flex-row">
                <h5 className={`flex-1 text-md xl:text-lg font-semibold text-left ${expanded ? "text-primary" : ""}`}>
                    {title}
                </h5>
                <div className="flex-none pl-2">
                    <label className="btn btn-circle btn-ghost btn-sm">

                        <span data-rotate="true" className={`transition-transform duration-300 ease-in ${expanded ? "rotate-180" : "rotate-0"}`}>
                            <CaretUp size={24} />
                        </span>

                    </label>
                </div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-300 ease-in ${expanded ? "max-h-60" : "max-h-0"}`}>
                <p className="py-4 text-left border-t border-base-100">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Accordion