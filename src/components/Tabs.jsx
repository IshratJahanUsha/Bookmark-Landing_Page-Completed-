import React, { useState } from "react";
import { data } from "../constants";

export default function Tabs() {
    const [tabs] = useState(data);
    const [value, setValue] = useState(0);
    const { image, title, desc, link } = tabs[value];

    return (
        <>

            <ul className="flex justify-center flex-col text-center my-10 md:flex-row">
                {tabs.map((tab, index) => (
                    <li
                        key={tab.id}
                        className="border-t border-slate-400 last:border-b md:border-t-0 md:border-b"
                    >
                        <button
                            onClick={() => setValue(index)}
                            className={`py-3 md:px-6 ${index === value && "border-b-2 border-red-400"
                                }`}
                        >
                            {tab.button}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="lg:flex items-center justify-center lg:gap-16 pt-10 max-w-7xl mx-auto">
                <article className="lg:flex-1 relative">
                    <img src={image} alt="" className="block mx-auto w-full" />
                    <div className="bg-left"></div>
                </article>

                <article className="text-center lg:text-left lg:flex-1">
                    <h2 className="text-3xl mt-16 mb-8 lg:text-4xl">{title}</h2>
                    <p className="mb-10">{desc}</p>
                    <button className="btn-blue rounded shadow-lg transition-all">
                        {link}
                    </button>
                </article>
            </div>


        </>

    )
}
