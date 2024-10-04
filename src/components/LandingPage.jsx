import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUp } from "react-icons/go";

function LandingPage() {
  return (
    <div  className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className='textstructure mt-40 px-20 md:hidden tracking-[.025]'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) =>{
                return (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-center'>
                            {index === 1 && (
                                <motion.div 
                                initial={{width: 0}} 
                                animate={{width: "9vw"}} 
                                transition={{ease: [0.76, 0, 0.24, 1], duration:0.25}}
                                className=' mr-2 w-[9vw] rounded-md  h-[5vw] relative -bottom-[0.5vw]  overflow-hidden'>
                                    <img src="./img/tree.jpg" alt=""  />
                                </motion.div>)}
                <h1 className='uppercase text-9xl leading-[5.5vw] tracking-wide font-["Test Founders Grotesk X-"] font-medium'>{item}</h1>
                    </div>
                    </div>
                );
            })}
            
        </div>
        <div className='textstructure mt-40 px-20 md:block  hidden'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) =>{
                return (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-center'>
                            {index === 1 && (
                                <motion.div 
                                initial={{width: 0}} 
                                animate={{width: "9vw"}} 
                                transition={{ease: [0.76, 0, 0.24, 1], duration:1}}
                                className=' mr-2 w-[9vw] rounded-md  h-[5vw] relative -bottom-[0.5vw]  overflow-hidden'>
                                    <img src="./img/tree.jpg" alt=""  />
                                </motion.div>)}
                <h1 className='uppercase text-9xl leading-[5.5vw] tracking-tighter font-["Test Founders Grotesk X-"] font-medium'>{item}</h1>
                    </div>
                    </div>
                );
            })}
        </div>

        <div className=' flex  justify-between items-center py-5 px-20 border-t-2 border-zinc-700 mt-32'>
            {["For Public and private companies", "From the First pitch to IPO"].map((item, index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-sm capitalize '>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] rounded-full border-zinc-500'>
                    <span className='rotate-[45deg]'>
                    <GoArrowUp />
                    </span>
               
                </div>
            </div>
        </div>
    </div>

  )

}
export default LandingPage