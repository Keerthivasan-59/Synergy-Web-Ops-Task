import React from 'react'
import Earthimg from '../assets/earthimg.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
   <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='w-full flex flex-col justify-center items-center h-full p-10 md:flex-row'>
     <div className='flex flex-col justify-center h-full min-w-1/3 pl-10'>
      <h2 className='text-white font-bold text-4xl md:text-6xl sm:text-7xl'>Hello I am Keerthivasan</h2>
      <h2 className='text-gray-400 font-bold text-4xl md:text-6xl  sm:text-7xl'>I am an aspiring Web developer</h2>
      <div>
       <button className='group px-6 py-3 text-white w-fit flex items-center rounded-full my-10 bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 hover:text-black'>
         Experience 
         <span className='group-hover:rotate-90 duration-150 ml-2'><MdOutlineKeyboardArrowRight size={20}/></span>
       </button>
      </div>
     </div>
     <div className='w-2/3'>
      <img src={Earthimg} alt=""
      className='w-150 h-150 md:w-120 md:h-100 rounded-3xl mx-auto' />
      </div>
    </div>
   </div>
  )
}

export default Home