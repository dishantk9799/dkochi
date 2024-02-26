import React from 'react'
import { FaCreativeCommons } from "react-icons/fa";
function Card() {
  return (
    <>
    <div className='w-full h-[50vw] bg-zinc-900 flex items-start justify-center border-t-2 border-zinc-200'>
        <div className='w-full h-[80%]  flex items-center justify-center gap-10'>
            <div className='card1 relative h-[65%] w-[45%] bg-green-900 rounded-lg flex flex-col items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute top-[87%] left-[3%] h-[2vw] w-[8vw]  border-2 border-lime-300 rounded-full text-lime-300 flex items-center justify-center'><FaCreativeCommons />2020-2022</button>
            </div>
            <div className='card2 relative h-[65%] w-[20%] bg-zinc-800 rounded-lg flex flex-col items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute top-[87%] left-[7%] h-[2vw] w-[12vw]  border-2 border-zinc-200 rounded-full text-zinc-200 flex items-center justify-center'>RATING 5.0 CLUTCH</button>
            </div>
            <div className='card3 relative h-[65%] w-[20%] bg-zinc-800 rounded-lg flex flex-col items-center justify-center'>
                <img className='h-[8vw] w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute top-[87%] left-[7%] h-[2vw] w-[13vw]  border-2 border-zinc-200 rounded-full text-zinc-200 flex items-center justify-center'>BUSINESS BOOTCAMP</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card