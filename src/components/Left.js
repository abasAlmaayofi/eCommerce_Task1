import React from 'react'
import {FiHome}  from "react-icons/fi";
import {HiSquares2X2}  from "react-icons/hi2";
import {AiOutlinePieChart} from "react-icons/ai";
import {BsBookmarkDash, BsBoxArrowRight} from "react-icons/bs";
import {BsHandbag} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";
const Left = () => {
  return (
    <div className='border-0 h-screen fixed flex flex-col justify-between'>
        <div id="logo" className='px-4 '>
          <div style={{borderColor:"lightgray"}} className='border-b py-4'>
              <div className='bg-logo bg-center bg-cover w-12 h-8'></div>
          </div> 
        </div>
        <div className='flex-1 flex flex-col justify-between mt-6'>
            <ul id='top-menu' className=''>
                <li id="home" className=' w-full flex justify-center text-[#c2c2c2] my-6'>
                  <FiHome size={25} />
                </li>
                <li id="squares" className=' w-full flex justify-center border-r-2 text-[#f46703] border-[#f46703] my-6'>
                  <HiSquares2X2 size={25}/>
                </li>
                <li id="pie" className=' w-full flex justify-center text-[#c2c2c2] my-6'>
                  <AiOutlinePieChart size={25} />
                </li>
                <li id="bookmark" className=' w-full flex justify-center text-[#c2c2c2] my-6'>
                  <BsBookmarkDash size={25} />
                </li>
                <li id="bag" className=' w-full flex justify-center text-[#c2c2c2] my-6'>
                  <BsHandbag size={20} />
                </li>
            </ul>

            <ul id='lower-menu'>
                <li id="settings" className='w-full flex justify-center my-6'>
                  <IoSettingsOutline size={25} color='#c2c2c2'/>
                </li>
                <li id="signout" className='w-full flex justify-center my-6'>
                  <BsBoxArrowRight size={25} color='#c2c2c2'/>
                </li>
            </ul>
        </div>
       
    </div>
  )
}

export default Left