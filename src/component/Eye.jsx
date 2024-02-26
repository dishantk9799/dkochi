import React, { useEffect, useState } from 'react'

function Eye() {
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
   <div className='eye overflow-hidden w-full h-screen  flex flex-col justify-center items-center caret-transparent'>
    <div data-scroll data-scroll-speed="-.8"  className='relative w-full h-full rounded-t-2xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[40%]  flex justify-evenly tiems-center'>
            <div className='h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                <div className='relative h-[10vw] w-[10vw] bg-zinc-900 rounded-full'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-Y-[50%] w-full h-6 px-[0.2vw]'>
                    <div className='h-full w-[1.7vw] bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
            <div className='relative h-[10vw] w-[10vw] bg-zinc-900 rounded-full'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-Y-[50%] w-full h-6 px-[0.2vw]'>
                    <div className='h-full w-[1.7vw] bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Eye