import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function Landing() {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.2" className='overflow-hidden h-screen w-full bg-zinc-800 pt-1'>
                <div className='textstructure mt-44 px-12'>
                    {["we create", "eye-opening", "Presentation"].map((item, index) => (
                        <div className='masker uppercase tracking-tighter flex items-center overflow-hidden'>
                             {index === 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='h-[5vw] w-[8vw] mr-[0.8vw] ml-[0.3vw] mt-[0.8vw] rounded-md'><img className='object-cover object-center rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>)}
                            <h1 className='text-8xl leading-[6vw] font-Founder '>{item}</h1>
                        </div>
                    ))}
                </div>
                <div className='border-t-2 border-zinc-600 mt-28 flex justify-between items-center py-5 px-14 gap'>
                    {["For public and private companies","From the first pitch to IPO"].map((item) =>(
                        <p className='text-md font-Neue tracking-tight leading-none cursor-pointer hover:underline'>{item}</p>
                    ))}
                    <div className='start flex items-center gap-2 cursor-pointer'>
                        <div className='px-4 py-1 border-[1px] border-zinc-400 rounded-full text-sm uppercase font-Neue hover:bg-zinc-200 hover:text-zinc-900'>Start the project</div>
                        <div className='w-8 h-8 border-[1px] border-zinc-400 rounded-full flex items-center justify-center hover:bg-zinc-200 hover:text-zinc-900'><span className='text-[20px]  '><GoArrowUpRight /></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing