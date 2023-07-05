import React from "react";
import hero from "../images/illustration-hero.svg";

export default function Home() {
    return (
        <>
            <section className="flex flex-col-reverse px-8 py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:place-items-center max-w-7xl mx-auto">

                <article className="text-center lg:text-left flex flex-1 flex-col">
                    <h2 className="text-3xl md:text-4 lg:text-4xl mb-6">
                        A Simple Bookmark Manager
                    </h2>
                    <p>
                        {/* A clean and simple interface to organize your favourite websites.
                        Open a new browser tab and see your sites load instantly. Try it for
                        free. */}
                    </p>
                    <ul className="mt-10 flex items-center justify-center flex-wrap gap-4 lg:justify-start">
                        <li>
                            <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
                                Get it on Chrome
                            </button>
                        </li>
                        <li>
                            <button className="btn-home bg-slate-100 text-slate-800 py-2 px-4 rounded shadow-lg hover:opacity-75">
                                Get it on Firefox
                            </button>
                        </li>
                    </ul>
                </article>

                <article className="relative flex flex-1">
                    <img src={hero} alt="" className="w-full md:w-4/5" />

                    <div className="bg"></div>
                </article>

            </section>
        </>
    );
}
