import React from "react";
import FAQs from "./FAQs";

export default function FaqMain() {
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

        <div className="my-8 ml-4">
          <FAQs />
        </div>

        <button className="btn-blue rounded shadow-lg block mx-auto transition-all">
          More Info
        </button>

      </section >
    </>
  );
}

