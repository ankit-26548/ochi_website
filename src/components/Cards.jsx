import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
        </div>
        <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
        <div className=' card rounded-xl w-1/2 h-full bg-[#1e3330] '></div>
        <div className='card  rounded-xl w-1/2 h-full bg-[#1e3330] '></div>
    </div>
    </div>
  )
}

export default Cards