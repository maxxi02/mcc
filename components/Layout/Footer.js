
import React from 'react'

export default function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto flex gap-[5rem] justify-between px-[1.5rem] h-[80px] py-[2rem]  '>
      <h1 className='font-[700] bg-blackColor'>MCC</h1>
      <ul className='flex  gap-[2rem]'>
        <a href='#home'>Home</a>
        <a href={'#about'}>About</a>
        <a href={'#projects'}>Projects</a>
      </ul>
    </div>
  )
}
