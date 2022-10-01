import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
     <ul>
      <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] duration-500 rounded-tr-2xl bg-gray-500 text-white'>
       <a href='https://github.com/Keerthivasan-59' target='_blank' className='flex justify-between items-center w-full'><>Github <FaGithub size={30}/> </></a></li>

      <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-500 text-white'>
       <a href='/' target='_blank' className='flex justify-between items-center w-full'><>Linkedin <FaLinkedin size={30}/> </></a></li>

      <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-500 text-white rounded-br-2xl'>
       <a href='/' target='_blank' className='flex justify-between items-center w-full'><>Instagram <FaInstagram size={30}/> </></a></li>
     </ul>
    </div>
  )
}

export default SocialLinks