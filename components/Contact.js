import React from 'react'
import { Inter } from 'next/font/google'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'


const inter = Inter({ subsets: ['latin'], weight: "700" })
export default function Contact() {
  return (
    <div id='contact' className='snap-y snap-center max-w-screen-xl mx-auto py-[10rem] flex flex-col items-center gap-[3rem]'>
        <h1  className={`text-center text-[32px] font-[700] ${inter.className}`}>/Contact</h1>

        <div className='flex-col flex items-center p-[1rem] gap-[50px] md:flex-row md:items-start'>

            <div className='flex-1 flex flex-col items-start gap-[1rem]'>
                <h2 className='text-xl'>Contact Me <br /> </h2>
                <p>Send a message through <b>Email</b> or just want to say <b>Hi</b> <br />Feel free to message me, you can also contact me through my <b>Social Medias</b></p>
                <ul className='flex  justify-start gap-[1rem] text-[1.5rem]'>
                  <li><a href=""><BsFacebook/></a></li>
                  <li><a href=""><BsLinkedin/></a></li>
                  <li><a href=""><BsGithub/></a></li>
                </ul>
            </div>

            <form className='flex-1 flex flex-col items-start gap-[1rem] p-[1rem] w-[100%] h-[100%] rounded-sm bg-[#161f32] shadow-teal-500 shadow-sm' action="">
              <h2 className='text-xl pb-[2rem]'>Send a message</h2>
              <div className='flex gap-[1rem] w-[100%]'>
                <input className='w-[100%] p-[1rem] text-[#111] font-semibold'  type="text" placeholder='Name' />
                <input className='w-[100%] p-[1rem] text-[#111] font-semibold'  type="text" placeholder='Email Address' />
              </div>
              <input className='w-[100%] p-[1rem] text-[#111] font-semibold'  type="text" placeholder='Subject' />
              <textarea  className='w-[100%] p-[1rem] text-[#111] font-semibold' placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
              <button className='w-[100%] bg-btnColor rounded-md p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>Submit</button>
            </form>
        </div>
    </div>
  )
}
