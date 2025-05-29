import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import Icon from '../../assets/icon.png';


const Navbar = () => {
    const [menu, openmenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className='flex flex-wrap justify-between md:items-center bg-[#12171a]/30 backdrop-blur-md shadow-md text-white px-10 pt-6 md:px-20 fixed top-0 left-0 w-full z-50'>
        <a href="/" className="text-xl font-bold tracking-wide">
            <img src={Icon} alt="Site Logo" className="h-14 w-auto" />
        </a>

        <ul className={`${menu ? 'block' : 'hidden'} mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <a href='#About'>
                <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
            </a>
            <a href='#experience'>
                <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
            </a>
            <a href='#Projects'>
                <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
            </a>
            <a href='#Contact'>
                <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
            </a>
        </ul>
        {showMenu ? (
            <RiMenu2Line 
                size={30} 
                className='md:hidden absolute right-10 top-6 transition-all duration-300'
                onClick={() => {
                    openmenu(!menu);
                    setShowMenu(!showMenu);
                }}
            />
        ):(
            <RiCloseLine 
                size={30} 
                className='md:hidden absolute right-10 top-6 transition-all duration-300'
                onClick={() => {
                    openmenu(!menu);
                    setShowMenu(!showMenu);
                }}
            />
        )}
    </nav>
  )
}

export default Navbar;