import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsLinkedin } from 'react-icons/bs'



const inter = Inter({ subsets: ['latin'], weight: "700" })

export default function About() {
  return (
    <div id='about'  className='snap-y snap-center max-w-screen-xl mx-auto h-[100%] flex flex-col gap-[2rem] px-[2.5rem] md:px-[0] md:gap-[50px] py-[10rem]'>
      <h1 className={`text-center text-[32px] font-[700] ${inter.className}`}>/About</h1>
      <div className='flex flex-col-reverse md:flex-row-reverse items-center gap-[50px]'>
        <div className='relative flex-1 flex flex-col gap-[1rem]'>
          <hr className='w-[25px] absolute top-3 left-[-30px] border-[1px] border-solid border-[whitesmoke]' />
          <p className='md:indent-0 indent-6'> Hello there! I&apos;m <b>MCC</b>, a passionate <b>Web Developer</b> with a love for all things creative and technical. I believe in the power of code to bring ideas to life and create meaningful digital experiences.</p>
          <p><b>&#9679; My Skills Are:</b> HTML, CSS, Javascript, React, Github & Figma.</p>
          <div className='flex items-center gap-[1rem]'>
            <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>About Me</button>
            <ul className=' text-[1.5rem]'>
            <li><a href=""><BsLinkedin/></a></li>
            </ul>
            </div>
        </div>
        <div className='relative flex-1' >
          <Image src={"/assets/Illustration2.png"} alt='' width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}
