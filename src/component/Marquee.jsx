import React from 'react'
import {motion} from 'framer-motion'
function Marquee(){
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full h-[70vh] bg-green-800 py-[7vw] font-Neue font-bold rounded-t-2xl overflow-hidden'>
        <div  className='overflow-hidden border-t-2 border-b-2 border-zinc-300 flex text-[15vw] whitespace-nowrap leading-none '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:5,repeat:Infinity}}>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:5,repeat:Infinity}}>&nbsp;WE ARE OCHI</motion.h1>
        </div>
    </div>
    </>
  )
}

export default Marquee