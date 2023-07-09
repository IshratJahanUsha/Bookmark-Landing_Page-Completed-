import React from "react";
import { extensions } from "../constants";
import Extensions from "./Extensions";

export default function Download() {

  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center mb-10">

          <h2 className="text-3xl mb-8 lg:text-4xl">Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>

        </article>

        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {extensions.map((card, index) => (
            <div key={card.id}
              className={`${index === 0 ? 'lg:translate-y-0' : ''} ${index === 1 ? 'lg:translate-y-10' : ''} ${index === 2 ? 'lg:translate-y-20' : ''}`
              }>
              <Extensions image={card.image} browser={card.browser} version={card.version} />
            </div>

          ))}

        </article>

      </section>

    </>
  );
}
