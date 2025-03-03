import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width ,start ,para , hover="false" }) {
    
  return (

    <motion.div whileHover={{backgroundColor: hover === "false" && "#7443ff" , padding:"25px"}} className={`bg-zinc-800 p-5  ${width} rounded-xl min-h-[30rem] flex flex-col justify-between`}>
       
       <div className='animate w-full'>

       <div className='w-full flex justify-between items-center'>
            <h3 className=''>ip next</h3>
            <FaArrowRightLong />
        </div>

        <h1 className='text-3xl font-medium mt-5'>whatever heading</h1>

       </div>

       <div className='down w-full  '>
        {
            start && (
                <>
                <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
                <button className='rounded-full px-5 py-2 border-[1px] border-zinc-50 mt-5'>Contact us</button>
                </>
            )
        }
        {
            para &&(
                
                <p className='text-sm text-zinc-400 font-medium'>Lorem ipsum dolor sit.</p>
            )
        }
        
       </div>

    </motion.div>
  )
}

export default Card