import React from 'react'
import {GrHomeRounded}  from "react-icons/gr";
import {HiSquares2X2}  from "react-icons/hi2";
import {AiOutlinePieChart} from "react-icons/ai";
import {BsBookmarkDash, BsBoxArrowRight} from "react-icons/bs";
import {BsHandbag} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";

const Left = () => {
  return (
    <div className='border-0 h-screen flex flex-col justify-between'>
        <div id="logo" className='px-4 '>
          <div style={{borderColor:"lightgray"}} className='border-b py-4'>
              <div className='bg-logo bg-center bg-cover w-10 h-6'></div>
          </div> 
        </div>
        <div className='flex-1 flex flex-col justify-between mt-6'>
            <ul id='top-menu' className=''>
                <li id="home" className=' w-full flex justify-center my-6'>
                  <GrHomeRounded size={20} color='lightgray'/>
                </li>
                <li id="squares" className=' w-full flex justify-center border-r-2 border-ecommerce-orange my-6'>
                  <HiSquares2X2 size={20} color="#f46703"/>
                </li>
                <li id="pie" className=' w-full flex justify-center my-6'>
                  <AiOutlinePieChart size={20} color='gray'/>
                </li>
                <li id="bookmark" className=' w-full flex justify-center my-6'>
                  <BsBookmarkDash size={20} color='gray'/>
                </li>
                <li id="bag" className=' w-full flex justify-center my-6'>
                  <BsHandbag size={20} color='gray'/>
                </li>
            </ul>

            <ul id='lower-menu'>
                <li id="settings" className='w-full flex justify-center my-6'>
                  <IoSettingsOutline size={20} color='gray'/>
                </li>
                <li id="signout" className='w-full flex justify-center my-6'>
                  <BsBoxArrowRight size={20} color='gray'/>
                </li>
            </ul>
        </div>
       
    </div>
  )
}

export default Left