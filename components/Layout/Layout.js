import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Home from './Home'

export default function Layout() {
  return (
    <>
    <div className='shadow-sm shadow-slate-800 h-[100px]  border-none'>
      <Header/>
      </div>
      <div className='shadow-sm shadow-slate-800  border-none'>
      <Home/>
      </div>

      <div className='shadow-sm shadow-slate-800  border-none'>
      <About/>
      </div>

      <div className='shadow-sm shadow-slate-800  border-none'>
      <Projects/>
      </div>
      <div className='shadow-sm shadow-slate-800  border-none'>
      <Contact/>
      </div>
      <div className='shadow-sm shadow-slate-800  border-none'>
      <Footer/>
      </div>
    </>
  )
}
