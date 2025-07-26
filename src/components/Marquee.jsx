
import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {

  return (
    <div className="w-full py-16 bg-[#004D43]">
      <div  className='text border-t-2 border-b-2 flex whitespace-nowrap border-zinc-300 font-bold overflow-hidden'>
      <motion.h1
          className="text-[20vw] uppercase tracking-tighter leading-none -mb-5 -pt-10"
          initial={{ x: '0%' }} // Start at the initial position
          animate={{ x: '-100%' }} // Animate to the left
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          we are ochi❗️
        </motion.h1>
        <motion.h1
          className="text-[20vw] uppercase tracking-tighter leading-none -mb-5 -pt-10"
          initial={{ x: '0%' }} // Start at the initial position
          animate={{ x: '-100%' }} // Animate to the left
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          we are ochi❗️
        </motion.h1>
        <motion.h1
          className="text-[20vw] uppercase tracking-tighter leading-none -mb-5 -pt-10"
          initial={{ x: '0%' }} // Start at the initial position
          animate={{ x: '-100%' }} // Animate to the left
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          we are ochi❗️
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
