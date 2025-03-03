import React from 'react'

function Footer() {
  return (
    <div className='w-full'>

        <div className='max-w-screen-xl mx-auto py-10 flex gap-10'>
                <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>Refokus.</h1>
                </div>
                <div className='basis-1/2 flex gap-4'>
                
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 captailize'>socials </h4>
                    {["instagram","twitter (x?)" , "Linkedin"].map((item , index)=><a className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
                </div>

                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 captailize'>socials </h4>
                    {["instagram","twitter (x?)" , "Linkedin"].map((item , index)=><a className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptatum.</p>
                    <img
                            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                            alt=""
                            className="w-24 px-4 py-1 mt-8 bg-blue-600"
                        />
                </div>

                </div>

        </div>

    </div>

  )
}

export default Footer