import React, { useState } from "react";
import { arrowOpen, arrowClose } from "../images"
import { questions } from "../constants";

const FAQs = () => {
    const [items] = useState(questions);

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            return setActiveIndex(null)
        }
        setActiveIndex(index)
    };

    return (
        <>
            <div className="wrapper">
                <div className="accordion">
                    {items.map((item, index) => (
                        <div className="item py-3 px-6 border-t border-slate-300 last:border-b last:border-slate-300 flex flex-col justify-between cursor-pointer" key={index}>
                            <div className=" flex flex-row gap-4 justify-between">
                                <h3 className="title font-normal text-lg hover:text-red-400" onClick={() => toggleAnswer(index)}>
                                    {item.question}
                                </h3>
                                <button>
                                    {activeIndex === index ? (
                                        <img src={arrowClose} alt="" className="arrow transform rotate-180"/>
                                    ) : (
                                        <img src={arrowOpen} alt=""/>
                                    )}
                                </button>
                            </div>
                            <div className={activeIndex === index? "content show" : "content"}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ >
    )
}

export default FAQs