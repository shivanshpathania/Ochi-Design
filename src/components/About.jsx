import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function About() {
  return (
    <div className="w-full  px-10 py-20 bg-[#CDEA68] text-black ">
      <h1 className=' font-[Neue Montreal] font-light text-[3vw] leading-[3.3vw] tracking-normal'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full border-t-[1px] mt-17 border-[#a1b562] py-10 flex gap-5'>
        <div className='w-1/2 '>
        <h1 className='text-5xl font-[Neue Montreal] font-light'>Our Approach:</h1>
        <button className='px-8 py-4 mt-6 bg-zinc-900 rounded-full text-white flex justify-between items-center gap-4'>Read More
        <div className='rotate-[45deg] '>
         <FaArrowUpLong />
         </div>
        </button>
        </div>
        <div className='w-1/2 h-[60vh] rounded-3xl'>
        <img  className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
