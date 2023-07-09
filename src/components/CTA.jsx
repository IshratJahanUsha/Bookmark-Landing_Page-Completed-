import React from "react";
import EmailValidation from "./EmailValidation";

export default function CTA() {

  return (
    <>
      <section className="bg-cta px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-normal text-sm uppercase tracking-widest mb-8 text-center">
            35,000+ already joined
          </h3>
          <h2 className="text-white text-3xl mb-8 lg:text-4xl text-center lg:w-96 lg:mx-auto">
            Stay up to date with what we're doing
          </h2>

          <EmailValidation/>

        </div>
      </section>
    </>
  );
}
