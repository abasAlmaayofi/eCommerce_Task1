import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import {BiFilterAlt} from "react-icons/bi";
import {GiCroissant, GiJusticeStar} from "react-icons/gi";
import {FaStroopwafel} from "react-icons/fa";
import { AiOutlineCoffee } from 'react-icons/ai';
import {MdOutlineIcecream} from 'react-icons/md';
import croissant1 from '../images/croissant1.jpg';
import croissant2 from '../images/croissant2.jpg';
import croissant3 from '../images/croissant3.jpg';
import croissant4 from '../images/croissant4.jpg';
import croissant5 from '../images/croissant5.jpg';
import croissant6 from '../images/croissant6.jpg';
import { BsCart2 } from 'react-icons/bs';
import { Poster } from './Poster';


export const Center = () => {
  return (
    <div className='ml-20 flex w-4/6 p-4 flex-col' style={{backgroundColor: "#f8f8f8"}}>
           <div className='flex justify-between w-full h-20 items-center'>
                <div>
                    <h1 className='capitalize tracking-wide  text-2xl font-normal'>welcome, gorry</h1>
                    <h5 style={{color: "gray"}} className='text-sm mt-2'>Discover whatever you need easily</h5>
                </div>
                <div className='flex gap-4'>
                    <div style={{backgroundColor: "white"}} className='flex gap-2 justify-center rounded-md p-3 items-center'>
                        <IoSearchOutline size={25}/>
                        <input type='text' className='border-0 outline-0 w-60' placeholder='Search product...'/>
                    </div>
                    <div style={{backgroundColor: "white"}} className='rounded-md p-3'>
                        <BiFilterAlt size={22}/>
                    </div>
                    
                </div>
           </div>

            <div className='grid grid-cols-5 gap-4 mt-8'>
                <button  className='flex gap-2 bg-white rounded-md p-3 justify-center'><GiJusticeStar size={22}/> <span>Signature</span></button>
                <button className='flex gap-2 text-white bg-[#f46703] rounded-md p-3 justify-center shadow-md shadow-[#f46703]'><GiCroissant size={22}/><span>Croissant</span></button>
                <button className='flex gap-2 bg-white rounded-md p-3 justify-center'><FaStroopwafel size={22}/><span>Waffle</span></button>
                <button className='flex gap-2 bg-white rounded-md p-3 justify-center'><AiOutlineCoffee size={22}/><span>Coffee</span></button>
                <button className='flex gap-2 bg-white rounded-md p-3 justify-center'><MdOutlineIcecream size={22}/><span>Ice Cream</span></button>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-5'>

                <Poster 
                src={croissant1} 
                title={"Almond Brown Sugar Croissant"} 
                parg={"Sweet croissant with topping alomnds and brwon sugar"}
                price={"12.98"}
                pcs={3}
                />

                <Poster 
                src={croissant2} 
                title={"Smoke Tenderloin Slice Croissant"} 
                parg={"Plaincroissant with smoke tenderloin beef sliced and vegetable"}
                price={"10.01"}
                pcs={2}
                />

                <Poster 
                src={croissant3} 
                title={"Berry Whipped Cream Croissant"} 
                parg={"Sweet croissant with blueberries and strawberries inside"}
                price={"8.92"}
                pcs={3}
                />


                <Poster 
                src={croissant4} 
                title={"Sweet Granulated Sugar Croissant"} 
                parg={"Sweet croissant with topping alomnds and brwon sugar"}
                price={"12.98"}
                pcs={3}
                />

                <Poster 
                src={croissant5} 
                title={"Sweet Choloclate Chocochips Croissant"} 
                parg={"Plaincroissant with smoke tenderloin beef sliced and vegetable"}
                price={"10.01"}
                pcs={2}
                />

                <Poster 
                src={croissant6} 
                title={"Basic Croissant La Ta Dhore"} 
                parg={"Sweet croissant with blueberries and strawberries inside"}
                price={"8.92"}
                pcs={3}
                />

            </div>

    </div>
  )
}
