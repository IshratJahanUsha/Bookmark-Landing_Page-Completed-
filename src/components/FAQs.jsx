import React, { useState } from "react";

import arrow from "../images/icon-arrow.svg";
import arrowRed from "../images/icon-arrow-red.svg";

import {questions} from "../constants";
// console.log(questions)

export default function FAQs() {
  const [items] = useState(questions);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="max-w-xl mx-auto px-8 py-20">
        <article className="text-center">
          <h2 className="text-3xl mb-8 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </article>


        <div className="my-8">
          {items.map((item, index) => (
            <div className="py-3 border-t border-slate-300 last:border-b last:border-slate-300 flex flex-col justify-between cursor-pointer" key={index}>

              <div className="flex flex-row gap-4 justify-between">
                <h3 className="font-normal text-lg hover:text-red-400" onClick={() => toggleAnswer(index)}>
                  {item.question}
                </h3>

                <button className="">
                  {activeIndex === index ? (
                    <img src={arrowRed} alt="" className="arrow transform rotate-180" onClick={() => toggleAnswer(index)} />
                  ) : (
                    <img src={arrow} alt="" onClick={() => toggleAnswer(index)} />
                  )}
                </button>
              </div>
              <div>
                {activeIndex === index && (
                  <p className="flex transition-all duration-1000">{item.answer}</p>
                )}
              </div>


            </div>
          ))}
        </div>

        <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75 block mx-auto">
          More Info
        </button>

      </section >
    </>
  );
}
