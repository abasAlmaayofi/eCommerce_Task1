import React from 'react'
import { BsCart2 } from 'react-icons/bs'

export const Poster = ({src, title, parg, price, pcs}) => {
  return (
    <div className='p-3 rounded-md bg-white'>
        <div className='relative'> 
            <img className='rounded-md' src={src}/>
            <div className='absolute top-2 right-2 rounded-md bg-white/80 p-2 text-[#f46703]'>
                <BsCart2 size={20}/>
            </div>
        </div>
        <div>
        <h4 className='text-lg font-extrabold mt-2 '>{title}</h4>
        <p className='text-sm text-[#c2c2c2] mt-2'>{parg}</p>
        <h2 className='text-2xl text-[#f46703] mt-2'>${price}<span className='text-[#c2c2c2] text-lg'> / {pcs} pcs</span></h2>
        </div>
        
        
    </div>
 )
}
