import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-10'>
        {["We create","eye opening","presentations"].map((item ,idx)=>{
          return (
          <div className='masker'>
         <div className='w-fit flex items-center'>
          {idx===1 && (<div className='w-[9vw] h-[5.2vw] bg-red-400 rounded relative top-[.1vw] mr-3'></div>)}
         <h1 key={idx} className="uppercase text-[8vw] leading-[6.8vw] font-['Founders Grotesk X-Condensed'] font-semibold tracking-tighter ">{item}</h1>
         </div>
        </div>
        )
        })}
      </div>

      <div className="border-t-2 border-zinc-800 mt-40 flex justify-between items-center py-5 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO"
        ].map((item,idx)=>(
          <p className=" text-md font-light tracking-tighter leading-none">{item}</p>
        ))}
        <div className='start flex items-center gap-1'>
          <div className='uppercase py-1 px-3 rounded-full border-[1px] border-zinc-500 '>Start the project</div>
          <div className='w-8 h-8 rounded-full bg-zinc-800 border-[1px] flex items-center justify-center'>
         <span className='rotate-[45deg]'>
         <FaArrowUpLong />
         </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
