import React from 'react'
import { expertiseset } from './expertiseset'


const ExpertiseCard = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-11 mx-9 my-5'>
        {
            expertiseset.map((item,index) => <div 
                key={index}
                className='bg-zinc-900 flex flex-col rounded-lg duration-500 hover:shadow-md hover:shadow-blue-500  hover:bg-gradient-to-tl hover:from-black hover:to-gray-900'
                >
                <label className='font-bold px-3 py-1'>{item.title}</label>
                <p className='text-sm text-gray-400 px-5 py-4'>{item.desription}</p>
            </div>)
        }
    </div>
  )
}

export default ExpertiseCard