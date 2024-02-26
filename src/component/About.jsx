import React from 'react'
import { GoDotFill } from "react-icons/go";
function About() {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.2" className='overflow-hidden w-full h-[80vw] bg-lime-300 rounded-t-2xl px-[4vw] py-5 text-black'>
                <div className='w-[80%] text-5xl font-Neue  mt-[5vw]'>
                    <h1>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
                </div>
                <div className='border-t-2 border-black w-full mt-8 flex justify-between items-start py-[1vw] px-[4vw] gap-[5vw]'>
                   <h1>What you can expect:</h1>
                    <h1 className='w-[25%]'>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.<br /> <br />
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
                    <h1>S: <br /> Instagram <br />Behance<br /> Facebook<br /> Linkedin</h1>
                </div>
                <div className='mt-[5vw] border-t-2 border-black w-full h-[35vw] flex'>
                    <div  className='h-full w-[50%] mt-[1vw] font-Neue'>
                        <h1 className='text-5xl'>Our approach:</h1>
                        <button className='text-white bg-zinc-900 text-sm mt-[2vw]  w-[12vw] h-[3.5vw] rounded-full flex items-center justify-center gap-5 hover:border-2 hover:border-zinc-900 hover:bg-lime-300 hover:text-zinc-900'>READ MORE <span><GoDotFill /></span> </button>
                    </div>
                    <div className='mt-[1vw]  w-[50%]'><img className=' rounded-lg w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>

                </div>
            </div>
        </>
    )
}

export default About