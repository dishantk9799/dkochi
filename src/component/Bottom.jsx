import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
function Bottom() {
    const [rotate,setrotate] = useState(0);
    useEffect(() => {
    
        window.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;
            let deltax= x-window.innerWidth/2;
            let deltay= y-window.innerHeight/2;
            var angle = Math.atan2(deltay, deltax) * (180/Math.PI);
            setrotate(angle-180);
        })
    })
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='relative h-[55vw] w-full bg-lime-300 rounded-t-2xl flex justify-center items-center font-Founder pt-[1vw]'>
        <div  className='h-[85%] w-[80%] flex flex-col justify-start items-center text-9xl text-zinc-900'>
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT?</h1>
            <div className='mt-[5vw] viewbutton h-[8] w-full flex flex-col justify-center items-center gap-1 '>
                <button className='h-[4vw] w-[18vw] bg-zinc-900 text-zinc-100 flex items-center justify-center gap-8 rounded-full text-sm hover:border-2 hover:border-zinc-900 hover:bg-lime-300 hover:text-zinc-900'><h1>VIEW ALL CASE STUDY</h1> <span><GoDotFill /></span></button>
                <h1 className='text-lg'>OR</h1>
                <button className='h-[4vw] w-[18vw] border-2 border-zinc-900 text-zinc-900 flex items-center justify-center gap-8 rounded-full text-sm hover:bg-zinc-900 hover:text-zinc-200'><h1>HELLO@OCHI.DESIGN</h1> <span><GoDotFill /></span></button>
            </div>
        </div>
        <div className='absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[40%]  flex justify-evenly tems-center'>
            <div className='h-[10vw] w-[10vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                <div className='relative h-[7vw] w-[7vw] bg-zinc-900 rounded-full'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-Y-[50%] w-full h-6 px-[0.2vw]'>
                    <div className='h-full w-[1.7vw] bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='h-[10vw] w-[10vw] bg-zinc-100 rounded-full flex justify-center items-center'>
            <div className='relative h-[7vw] w-[7vw] bg-zinc-900 rounded-full'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-Y-[50%] w-full h-6 px-[0.2vw]'>
                    <div className='h-full w-[1.7vw] bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    </>
  )
}

export default Bottom