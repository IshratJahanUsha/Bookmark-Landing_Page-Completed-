import React from 'react'
import { logo, menu } from "../images";
import { navLinks } from '../constants';

const Navbar = ({ setIsOpen }) => {
  return (
    <header className='flex items-center justify-between x-axis-padding'>
      <img src={logo} alt="LogoBookmark" />
      <img className='curser-pointer md:hidden '
        src={menu}
        alt="HumburgerMenu"
        onClick={() => setIsOpen(true)}
      />

      <nav className='space-x-8 hidden md:block'>
        {navLinks.map((links) => {
          const { id, title } = links;
          return (
            <li className='tracking-wider inline-block curder-pointer text-slate-800 hover:text-red-400'
              key={id}>
              {title}
            </li>
          )
        })}

        <button className='btn-red px-6 rounded py-2 shadow-lg'>
          LOGIN
        </button>
      </nav>
    </header>
  )
}

export default Navbar