import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import croissant1 from '../images/croissant1.jpg';
import croissant2 from '../images/croissant2.jpg';
import croissant3 from '../images/croissant3.jpg';


const Right = () => {
  return (
    <div className='fixed flex flex-col right-0 w-[calc(50%-20rem)] h-screen p-4'>
        <div className='flex justify-between mt-8'>
            <h1 className='text-xl'>Current Order</h1>
            <span className='text-[#5c5c5c] p-2 rounded-md bg-[#f8f8f8]'><IoSettingsOutline/> </span>
        </div>

        <div className='flex-1 flex flex-col justify-between'>
            <div>
                <div className='my-6 flex gap-2'>
                    <img className='rounded-md h-20 ' src={croissant1}/>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-md'>Smoke Tenderloin Slice Croissant</h1>
                        <h1 className='flex w-full justify-between items-end'>
                            <span className='text-xl text-[#f46703]'>$10.01</span>
                            <span className='flex-1 text-white text- flex gap-3 justify-end items-center'>
                                <span className='px-2 py-1 m-1 text-sm rounded-md bg-[#fbb37f]'>+</span>
                                <span className='m-1 text-[#5c5c5c] text-sm'>1</span>
                                <span className='px-2 py-1 m-1 text-sm rounded-md bg-[#f46703]'>-</span>
                            </span>
                        </h1>
                    </div>
                </div>

                <div className='my-6 flex gap-2'>
                    <img className='rounded-md h-20 ' src={croissant3}/>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-md'>Sweet Chocolate Chocochips Croissant</h1>
                        <h1 className='flex w-full justify-between items-end'>
                            <span className='text-xl text-[#f46703]'>$22.02</span>
                            <span className='flex-1 text-white text- flex gap-3 justify-end items-center'>
                                <span className='px-2 py-1 m-1 text-sm rounded-md bg-[#f46703]'>+</span>
                                <span className='m-1 text-[#5c5c5c] text-sm'>2</span>
                                <span className='px-2 py-1 m-1 text-sm rounded-md bg-[#f46703]'>-</span>
                            </span>
                        </h1>
                    </div>
                </div>

                <div className='my-6 flex gap-2'>
                    <img className='rounded-md h-20 ' src={croissant2}/>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-md'>Sweet Granulated Sugar Croissant</h1>
                        <h1 className='flex w-full justify-between items-end'>
                            <span className='text-xl text-[#f46703]'>$5.58</span>
                            <span className='flex-1 text-white text- flex gap-3 justify-end items-center'>
                                <span className='px-2 py-1 m-1 text-sm rounded-md bg-[#fbb37f]'>+</span>
                                <span className='m-1 text-[#5c5c5c] text-sm'>1</span>
                                <span className='px-2 py-1 m-1 text-sm rounded-md bg-[#f46703]'>-</span>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            
            <div>
                <div className=' bg-[#f8f8f8] rounded-md w-full my-5'>
                    <div className='p-5'>
                        <h6 className='flex justify-between'>
                            <span className='text-sm text-[#c2c2c2]'>Subtotal</span>
                            <span>$37.61</span>
                        </h6>

                        <h6 className='flex justify-between'>
                            <span className='text-sm text-[#c2c2c2]'>Discount sales</span>
                            <span>-$5.00</span>
                        </h6>

                        <h6 className='flex justify-between'>
                            <span className='text-sm text-[#c2c2c2]'>Total sales tax</span>
                            <span>$2.25</span>
                        </h6>
                    </div>
                    <div className='before:w-6 before:h-6 before:rounded-full before:-top-3 before:-left-3 before:bg-white  before:absolute after:w-6 after:h-6 after:rounded-full after:-top-3 after:-right-3 after:bg-white  after:absolute relative p-5 flex justify-between border-t-2 border-dashed'>
                        <h1 className='text-xl'>Total</h1>
                        <h1 className='text-2xl'>$34.86</h1>
                    </div>
                </div>
            </div>
            <div>
                <button className='w-full p-2 bg-[#f46703] text-white rounded-md'>Continue to Payment</button>
            </div>


        </div>
        



    </div>
  )
}

export default Right