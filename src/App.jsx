import React from 'react'
import Nav from './component/Nav'
import LocomotiveScroll from 'locomotive-scroll';
import Landing from './component/Landing'
import Marquee from './component/Marquee'
import About from './component/About'
import Eye from './component/Eye'
import Feature from './component/Feature'
import Card from './component/Card'
import Footer from './component/Footer'
import Bottom from './component/Bottom'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='w-full min-h-screen bg-zinc-800 text-white'>
    <Nav/>
    <Landing/>
    <Marquee/>
    <About/>
    <Eye/>
    <Feature/>
    <Card/>
    <Bottom/>
    <Footer/>
    </div>
    </>
  )
}

export default App