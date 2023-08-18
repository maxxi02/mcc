import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'


const inter = Inter({ subsets: ['latin'], weight: "700" })

export default function Projects() {
  return (
    <div id='projects'  className='snap-y snap-center h-[100%] flex flex-col max-w-screen-xl mx-auto px-[3rem] py-[10rem] gap-[50px] duration-[.9s] '>
        <h1  className={`text-center text-[32px] font-[700] ${inter.className}`}>/Projects</h1>
        <div className='md:grid grid-cols-3 grid-rows-2 flex flex-col items-center gap-[50px] '>

            {/* card containers */}
            <div className='flex flex-col gap-[1rem] items-start  '>
                <div className='relative'>
                    <Image className='object-contain w-[100%] ' src={"/assets/card-image.png"} alt='' width={500} height={500}/>
                </div>
                <div  className='relative'>
            
                        <hr className='w-[18px] absolute top-7 left-[-25px] border-[1px] border-solid border-[whitesmoke]' />
                        <h1 className={`${inter.className} pt-[1rem]  text-xl`}>Website</h1>

                    <p className='opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem itaque eveniet, corrupti, pariatur accusamus ipsum delectus architecto fuga at similique nisi omnis veritatis odio nesciunt consectetur ipsa, culpa assumenda!</p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>View</button>
                <ul className='text-[1.5rem]'><li ><a href="" target='__blank'><BsLinkedin/></a></li></ul>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] items-start'>
                <div className='relative'>
                    <Image className='object-contain w-[100%]' src={"/assets/card-image.png"} alt='' width={500} height={500}/>
                </div>
                <div  className='relative'>
            
                        <hr className='w-[18px] absolute top-7 left-[-25px] border-[1px] border-solid border-[whitesmoke]' />
                        <h1 className={`${inter.className} pt-[1rem]   text-xl`}>Website</h1>

                    <p className='opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem itaque eveniet, corrupti, pariatur accusamus ipsum delectus architecto fuga at similique nisi omnis veritatis odio nesciunt consectetur ipsa, culpa assumenda!</p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>View</button>
                <ul className='text-[1.5rem]'><li ><a href="" target='__blank'><BsLinkedin/></a></li></ul>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] items-start'>
                <div className='relative'>
                    <Image className='object-contain w-[100%]' src={"/assets/card-image.png"} alt='' width={500} height={500}/>
                </div>
                <div  className='relative'>
            
                        <hr className='w-[18px] absolute top-7 left-[-25px] border-[1px] border-solid border-[whitesmoke]' />
                        <h1 className={`${inter.className} pt-[1rem]   text-xl`}>Website</h1>

                    <p className='opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem itaque eveniet, corrupti, pariatur accusamus ipsum delectus architecto fuga at similique nisi omnis veritatis odio nesciunt consectetur ipsa, culpa assumenda!</p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>View</button>
                <ul className='text-[1.5rem]'><li ><a href="" target='__blank'><BsLinkedin/></a></li></ul>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] items-start'>
                <div className='relative'>
                    <Image className='object-contain w-[100%]' src={"/assets/card-image.png"} alt='' width={500} height={500}/>
                </div>
                <div  className='relative'>
            
                        <hr className='w-[18px] absolute top-7 left-[-25px] border-[1px] border-solid border-[whitesmoke]' />
                        <h1 className={`${inter.className} pt-[1rem]   text-xl`}>Website</h1>

                    <p className='opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem itaque eveniet, corrupti, pariatur accusamus ipsum delectus architecto fuga at similique nisi omnis veritatis odio nesciunt consectetur ipsa, culpa assumenda!</p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>View</button>
                <ul className='text-[1.5rem]'><li ><a href="" target='__blank'><BsLinkedin/></a></li></ul>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] items-start'>
                <div className='relative'>
                    <Image className='object-contain w-[100%]' src={"/assets/card-image.png"} alt='' width={500} height={500}/>
                </div>
                <div  className='relative'>
            
                        <hr className='w-[18px] absolute top-7 left-[-25px] border-[1px] border-solid border-[whitesmoke]' />
                        <h1 className={`${inter.className} pt-[1rem]   text-xl`}>Website</h1>

                    <p className='opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem itaque eveniet, corrupti, pariatur accusamus ipsum delectus architecto fuga at similique nisi omnis veritatis odio nesciunt consectetur ipsa, culpa assumenda!</p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>View</button>
                <ul className='text-[1.5rem]'><li ><a href="" target='__blank'><BsLinkedin/></a></li></ul>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] items-start'>
                <div className='relative'>
                    <Image className='object-contain w-[100%]' src={"/assets/card-image.png"} alt='' width={500} height={500}/>
                </div>
                <div  className='relative'>
            
                        <hr className='w-[18px] absolute top-7 left-[-25px] border-[1px] border-solid border-[whitesmoke]' />
                        <h1 className={`${inter.className} pt-[1rem]  text-xl`}>Website</h1>

                    <p className='opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem itaque eveniet, corrupti, pariatur accusamus ipsum delectus architecto fuga at similique nisi omnis veritatis odio nesciunt consectetur ipsa, culpa assumenda!</p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                <button className='max-w-max bg-btnColor rounded-xl p-[.8rem]  shadow-sm hover:text-[#fff] border-none hover:bg-[#4477CE] hover:shadow-slate-500 duration-[.5s]'>View</button>
                <ul className='text-[1.5rem]'><li ><a href="" target='__blank'><BsLinkedin/></a></li></ul>
                </div>
            </div>
       
        </div>
    </div>
  )
}
