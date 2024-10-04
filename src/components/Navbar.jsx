import React from 'react'

function  Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
        <div className='font-bold text-2xl'>Ochi</div>
        <div className='links flex gap-10'>
          {["Services", "Our work", "About Us", "Insights", "contact"].map((items,index)=>(
            <a  key={index} className={`text-md capitalize font-light ${index === 4 && "ml-32"}`}>{items}</a>
          ))}
        </div>
    </div>
  )
}

export default  Navbar