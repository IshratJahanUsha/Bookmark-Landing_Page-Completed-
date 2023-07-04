import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import logo from "../images/logo-bookmark-light.svg";

export default function Footer() {
  return (
    <>
      <footer className="py-4 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-6 flex-col md:flex-row md:justify-between">
          <div className="md:flex md:items-center md:gap-6 lg:gap-10">
            <img src={logo} alt="" />

            <ul className="mt-6 md:mt-0 md:flex md:gap-6 lg:gap-10">
              <li>
                <button className="text-white hover:text-red-400 uppercase text-sm tracking-wide">
                  Features
                </button>
              </li>
              <li className="my-4 md:my-0">
                <button className="text-white hover:text-red-400 uppercase text-sm tracking-wide">
                  Pricing
                </button>
              </li>
              <li>
                <button className="text-white hover:text-red-400 uppercase text-sm tracking-wide">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-4 lg:gap-10">
            <li>
              <button>
                <img src={facebook} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={twitter} alt="" />
              </button>
            </li>
          </ul>
        </div>

      </footer>
    </>
  );
}
