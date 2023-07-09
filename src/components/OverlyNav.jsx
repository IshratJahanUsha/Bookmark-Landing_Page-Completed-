import React from 'react';
import { logoLight, closeBtn } from "../images";
import { navLinks } from "../constants";

import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";

const OverlyNav = ({ setIsOpen }) => {
    return (
        <>
            <header className='h-screen w-screen bg-[#252b46e6] opacity-1 py-8 px-6 md:px-10 lg-px-12 xl-px-16 fixed top-0 z-10'>
                <div className="flex items-center justify-between">
                    <img src={logoLight} alt="" />

                    <button className="" onClick={() => setIsOpen(false)}>
                        <img src={closeBtn} alt="" />
                    </button>
                </div>
                <nav className='mt-8 text-white space-y-8'>
                    <div className='text-center'>
                        {navLinks.map((link) => {
                            const { id, title } = link;
                            return (
                                <h3 className='text-white tracking-widest border-t-[1px] border-white/25 last:border-b-[1px] 
                                leading-[3rem] curser-pointer hover:text-red-400 transition-all'
                                    key={id}>
                                    {title}
                                </h3>
                            );
                        })}
                        <li className='border-white/25 border-t-[1px] list-none'>
                            <button className="text-white hover:text-red-400 tracking-widest px-6 py-2 mt-4 w-full rounded-lg border-2 border-white">
                                LOGIN
                            </button>
                        </li>

                        <ul className="nav-social flex items-center justify-center gap-12 absolute bottom-8 left-[50%] ">
                            <svg-style>
                                <Facebook />
                            </svg-style>
                            <svg-style>
                                <Twitter />
                            </svg-style>
                        </ul>

                    </div>
                </nav>

            </header>
        </>
    )
}

export default OverlyNav
