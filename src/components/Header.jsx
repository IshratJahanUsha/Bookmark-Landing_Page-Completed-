import React, { useState } from "react";
import {logo,logoLight,menu,closeMenu,facebook,twitter} from "../images";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-8 max-w-7xl mx-auto">
        <div>
          <img src={logo} alt="Bookmark" />
        </div>

        <nav className={`${isOpen && "open"} lg:block`}>

          <div>
            <div className="flex items-center justify-between lg:hidden">
              <img src={logoLight} alt="" />

              <button className="" onClick={() => setIsOpen(false)}>
                <img src={closeMenu} alt="" />
              </button>
            </div>

            <ul className="flex flex-col text-center mt-10 lg:mt-0 lg:text-left lg:flex-row lg:items-center lg:gap-6">
              
              <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
                <button className="uppercase lg:text-xs lg:text-slate-800  tracking-widest hover:text-red-400">
                  Features
                </button>
              </li>
              <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
                <button className="uppercase lg:text-xs lg:text-slate-800  tracking-widest hover:text-red-400">
                  Pricing
                </button>
              </li>
              <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
                <button className="uppercase lg:text-xs lg:text-slate-800  tracking-widest hover:text-red-400">
                  Contact
                </button>
              </li>
              <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
                <button className="lg:btn-red lg:bg-red-400 text-white py-2 px-4 rounded shadow-lg hover:opacity-75 lg:text-xs uppercase tracking-widest border-2 lg:border-red-400 lg:hover:bg-transparent lg:hover:text-slate-800 transition-all duration-200 w-full">
                  Login
                </button>
              </li>

            </ul>

          </div>

          <ul className="flex items-center justify-center gap-6 lg:hidden">
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
          </ul>

        </nav>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <img src={menu} alt="" />
          </button>
        </div>
        
      </header>
    </>
  );
}
