import React from "react";
import Tabs from "./Tabs";

export default function Features() {
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

        <Tabs />

      </section>
    </>
  );
}