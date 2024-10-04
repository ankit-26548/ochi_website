import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#91a549] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex  border-t-[1px] pt-10 mt-20 border-[#91a549] '>
            <div className='w-1/2 mt-22'>
            <h1 className='text-6xl'>Our approach:</h1>
            <button className='px-10  py-6 bg-zinc-900 rounded-full mt-7 text-white font-semibold flex gap-9 items-center'>Read More
                <div className='w-2 h-2 bg-white rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 bg-white h-[70vh] rounded-3xl overflow-hidden bg-contain'>
            <img src="./img/street.jpg" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default About