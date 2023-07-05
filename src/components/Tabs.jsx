import React, { useState } from "react";

import {data} from "../constants";
// console.log(data)

export default function Tabs() {
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  const { image, title, desc, link } = tabs[value];

  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center">
          <h2 className="text-3xl mb-8 lg:text-4xl">Features</h2>
          <p className="lg:w-96 lg:mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </article>

        <div>
          <ul className="flex justify-center flex-col text-center my-10 md:flex-row">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                className="border-t border-slate-400 last:border-b md:border-t-0 md:border-b"
              >
                <button
                  onClick={() => setValue(index)}
                  className={`py-3 md:px-6 ${
                    index === value && "border-b-2 border-red-400"
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
              <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
                {link}
              </button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}