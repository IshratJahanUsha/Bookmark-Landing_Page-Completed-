import React from 'react'
import { logoLight, closeBtn, facebook, twitter } from "../../public/images"


import { navLinks } from "../constants/constant"

const OverlyNav = ({ setIsOpen }) => {
    return (
        <>
            <header className='h-screen w-screen bg-[#252b46e6] py-8 px-6 md:px-10 lg-px-12 xl-px-16'>
                <div className="flex items-center justify-between">
                    <img src={logoLight} alt="" />

                    <button className="" onClick={() => setIsOpen(false)}>
                        <img src={closeBtn} alt="" />
                    </button>
                </div>
                <nav className='mt-8 text-white space-y-8'>
                    <div>
                        {navLinks.map((link) => {
                            const { id, title } = link;
                            return (
                                <li className='text-white tracking-widest border-t-[1px] border-white/25 last:border-b-[1px] 
                                leading-[3rem] text-xenter curser-pointer hover:text-red-400 transition-all'
                                    key={id}>
                                    {title}
                                </li>
                            );
                        })}
                        <button className="text-white px-6 rounded-lg py-2 border-2 border-white">
                            LOGIN
                        </button>
                        <ul className="flex items-center justify-center gap-6 lg:hidden">
                            <li>
                                <img src={facebook} alt="" />
                            </li>
                            <li>
                                <img src={twitter} alt="" />
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default OverlyNav
