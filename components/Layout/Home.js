

import Image from 'next/image'
import React from 'react'
import {BsFacebook,BsLinkedin,BsGithub} from 'react-icons/bs'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'], weight: "700" })




export default function Home() {


  return (
    <div id='home' className='snap-y  snap-center max-w-screen-xl mx-auto h-[100%] flex-col-reverse md:flex-row flex items-center md:gap-[50px] px-[1rem] py-[10rem] '>

      <div  className='flex flex-col items-start gap-[1rem]'>
        <h1 className={`${inter.className} whitespace-nowrap md:text-[80px] text-[50px] duration-[.9s]`}>Web Stuffs.</h1>
        <p className='duration-[.9s] text-start '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta animi,<br className='hidden md:block'/> reprehenderit est esse nesciunt similique illum fuga alias quia hic.</p>
        <ul className='flex  justify-start gap-[1rem] text-[1.5rem]'>
          <li><a href=""><BsFacebook/></a></li>
          <li><a href=""><BsLinkedin/></a></li>
          <li><a href=""><BsGithub/></a></li>
        </ul>
        <div className='my-[1rem]'>
          <a href="#about" className='bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>Read More</a>
        </div>
      </div>


      <div className='flex-1 relative'>
        <Image src={"/assets/Illustration1.png"} className='md:h-[500px] md:w-[100%] h-[400px] w-[400px] object-contain duration-[.9s]' alt='' width={500} height={500}/>
      </div>
    </div>
  )
}
