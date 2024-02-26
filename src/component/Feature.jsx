import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { GoDotFill } from "react-icons/go";
function Feature() {
    const card = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];
    const handlehover = (index)=>{
        card[index].start({y:"0"});
    }
    const handlehoverend = (index)=>{
        card[index].start({y:"100%"});
    }

    return (
        <>
            <div className='w-full h-[124vw] rounded-t-2xl bg-zinc-800 text-zinc-200 font-Neue'>
                <div className='  text-6xl px-[4vw] py-[3vw]'>
                    <h1>Featured projects</h1>
                </div>
                <div className=' border-t-2 border-zinc-200 w-full h-[50vw] px-[4vw] pt-[5vw] pb-[1vw] flex justify-between items-center gap-4 '>
                    <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverend(0)} className='cardcontainer1 relative w-1/2 h-full flex flex-col justify-center gap-3 '>
                        <h1 className='absolute flex overflow-hidden text-lime-300 left-[84%] text-8xl z-[9] leading-none tracking-tighter font-extrabold select-none'>{"FYDE".split("").map((item,index)=>(<motion.span initial={{y:"100%"}} animate={card[0]} transition={{ease:[0, 0.55, 0.45, 1],delay:index*0.1}} className='inline-block'>{item}</motion.span>))}</h1>
                        <div className='flex justify-start gap-1 items-center'> <span ><GoDotFill /></span> <h1>FYDE</h1></div>
                        <div className='h-[90%] w-[100%] '><img className='h-full w-full object-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" /></div>
                        <div className=' w-full flex items-center gap-4  text-sm'> 
                        <button className='h-[2vw] w-[4vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>AUDIT</button>
                        <button className='h-[2vw] w-[8vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>COPYWRITING</button>
                        <button className='h-[2vw] w-[8vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>SALES DECK</button>
                        <button className='h-[2vw] w-[8vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>SLIDES DESIGN</button>
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverend(1)} className='cardcontainer2 w-1/2 h-full flex flex-col justify-center gap-3'>
                    <h1 className='absolute flex overflow-hidden text-lime-300 right-[43%]  text-8xl z-[8] leading-none tracking-tighter font-extrabold select-none'>{"VISE".split("").map((item,index)=>(<motion.span initial={{y:"100%"}} animate={card[1]} transition={{ease:[0, 0.55, 0.45, 1],delay:index*0.1}} className='inline-block'>{item}</motion.span>))}</h1>
                        <div className='flex justify-start gap-1 items-center'> <span ><GoDotFill /></span> <h1>VISE</h1></div>
                        <div className='h-[90%] w-[100%] '><img className='h-full w-full object-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" /></div>
                        <div className=' w-full flex items-center gap-4  text-sm'> 
                        <button className='h-[2vw] w-[5vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>AGENCY</button>
                        <button className='h-[2vw] w-[14vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>COMPANY PRESENTATION </button>
                        </div>
                    </motion.div>
                </div>

                <div className='w-full h-[50vw] px-[4vw] py-[2vw] flex justify-between items-center gap-4 '>
                    <motion.div onHoverStart={()=>handlehover(2)} onHoverEnd={()=>handlehoverend(2)} className='cardcontainer3 relative w-1/2 h-full flex flex-col justify-center gap-3 '>
                        <h1 className='absolute flex overflow-hidden text-lime-300 left-[78.5%] text-8xl z-[9] leading-none tracking-tighter font-extrabold'>{"TRAWA".split("").map((item,index)=>(<motion.span initial={{y:"100%"}} animate={card[2]} transition={{ease:[0, 0.55, 0.45, 1],delay:index*0.1}} className='inline-block'>{item}</motion.span>))}</h1>
                        <div className='flex justify-start gap-1 items-center'> <span ><GoDotFill /></span> <h1>TRAWA</h1></div>
                        <div className='h-[90%] w-[100%] '><img className='h-full w-full object-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" /></div>
                        <div className=' w-full flex items-center gap-4  text-sm'> 
                        <button className='h-[2vw] w-[10vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>BRAND IDENTITY</button>
                        <button className='h-[2vw] w-[11vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>DESIGN RESEARCH</button>
                        <button className='h-[2vw] w-[10vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>INVESTOR DECK</button>
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handlehover(3)} onHoverEnd={()=>handlehoverend(3)} className='cardcontainer4 w-1/2 h-full  flex flex-col justify-center gap-3'>
                    <h1 className='absolute flex overflow-hidden text-lime-300 right-[40%]  text-8xl z-[8] leading-none tracking-tighter font-extrabold'>{"BLEND".split("").map((item,index)=>(<motion.span initial={{y:"100%"}} animate={card[3]} transition={{ease:[0, 0.55, 0.45, 1],delay:index*0.1}} className='inline-block'>{item}</motion.span>))}</h1>
                        <div className='flex justify-start gap-1 items-center'> <span ><GoDotFill /></span> <h1>PREMIUM BLEND</h1></div>
                        <div className='h-[90%] w-[100%] '><img className='h-full w-full object-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" /></div>
                        <div className=' w-full flex items-center gap-4  text-sm'> 
                        <button className='h-[2vw] w-[12vw]  border-2 border-zinc-200 rounded-full  hover:bg-zinc-200 hover:text-zinc-900'>BRANDED TAMPLATE</button>
                        </div>
                    </motion.div>
                </div>
                <div className='mt-[5vw] viewbutton h-[8] w-full flex justify-center items-center '>
                <button className='h-[4vw] w-[18vw] bg-zinc-900 text-zinc-100 flex items-center justify-center gap-8 rounded-full text-sm hover:bg-zinc-200 hover:text-zinc-900'><h1>VIEW ALL CASE STUDY</h1> <span ><GoDotFill /></span></button>
                </div>
            </div>
        </>
    )
}

export default Feature