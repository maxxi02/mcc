"use client"

import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`max-w-screen-xl mx-auto flex md:justify-between gap-[5rem] justify-between px-[1.5rem] h-[80px] py-[2rem]  `}>


      {nav ? (
        // Navigation menu when toggled
        <div  className={` fixed w-[100%] h-[100%] top-[0] left-[0] bg-[#1e293b] flex flex-col items-center pt-[5rem] gap-[2rem]  duration-[.9s]`}>
          <div className='absolute top-6 right-5 text-2xl hover:bg-slate-700 rounded-sm duration-[.5s] p-[.1rem]' onClick={handleNav}>
            <i class="ri-close-fill"></i>
          </div>
          <div className='px-[1rem] flex items-center gap-[.5rem]'>
            <hr className='border-[1px] border-white border-solid w-[1rem]' />
            <h1 className='font-[700] bg-blackColor'>MCC</h1>
            <hr className='border-[1px] border-white border-solid w-[1rem]' />
          </div>
          <ul className='flex flex-col items-center justify-center gap-[.5rem] cursor-pointer'>
            <li className='block'><a onClick={handleNav} href={'#home'}>Home</a></li>
            <li className='block'><a onClick={handleNav} href={'#about'}>About</a></li>
            <li className='block'><a onClick={handleNav} href={'#project'}>Projects</a></li>
            <li className='block'><a onClick={handleNav} href={'#contact'}>Contact</a></li>
          </ul>
        </div>
      ) : (
        // Default header without navigation menu
        <>
          <div className='px-[1rem] flex gap-[10rem] '>
            <h1 className='font-[700] bg-blackColor'>MCC</h1>
            <ul className='hidden md:flex gap-[2rem]'>
              <Link href={'/'}>Home</Link>
              <Link href={'/aboutme'}>About</Link>
              <Link href={'/myprojects'}>Projects</Link>
            </ul>
          </div>



          <div>
            <Link href={''}  className='bg-btnColor  rounded-xl p-[.8rem] hidden md:block shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]' >Contact</Link>
          </div>
  

          <div className='md:hidden relative text-xl  ' onClick={handleNav}>
            <i className='ri-menu-3-line hover:bg-slate-700 rounded-sm duration-[.5s] p-[.5rem]'></i>
          </div>
        </>
      )}
    </div>
  );
}
