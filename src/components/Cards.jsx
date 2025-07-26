import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center  gap-5 px-32'>
      <div className=' cardcontainer h-[50vh] w-1/2'>
      <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-5 py-2 border-1 rounded-full left-10 bottom-10 hover:bg-zinc-950'>&copy; subscribe</button>
      </div>
      </div>
      <div className='cardcontainer  h-[50vh] w-1/2 flex gap-5'>
      <div className='card relative w-full h-full bg-[#132a27] rounded-xl flex items-center justify-center'>
        <img src="	https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-5 py-2 border-1 rounded-full left-10 bottom-10 hover:bg-green-500'> Rating 5.0 On Clutch</button>
      </div>
      <div className='card relative w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center'>
        <img className='w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute px-5 py-2 border-1 rounded-full left-10 bottom-10 hover:bg-green-500'> Bootcamp</button>
      </div>
      </div>
    </div>
  )
}

export default Cards
