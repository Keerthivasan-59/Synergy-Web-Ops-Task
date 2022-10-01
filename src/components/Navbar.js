import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav,setNav]=React.useState(false)

  const links=[
    {
      id:1,
      link:'Home'
    },{
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Experience'
    },
    {
      id: 4,
      link:'Contact'
    }
  ]

  return (
    <div name='Home' className='flex justify-between items-center w-full h-20 px-5 text-white bg-black fixed z-10'>
      <div><h1 className='font-signature text-5xl ml-2'>MyPortfolio</h1></div>
      <ul className='hidden md:flex text-gray-400'>
        {
          links.map(({link,id})=>(
            <li key={id} className='mx-4 pb-[3px] hover:border-b-2 hover:scale-105 hover:text-white duration-300 cursor-pointer'>
              <Link to={link} smooth duration={500} >{link}</Link>
            </li>
          ))
        }
      </ul>
      <div onClick={()=> setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-400 hover:text-white'>
        {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>
      {nav && 
      (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-400 bg-gradient-to-b from-black to-gray-800 text-4xl z-10'>
        {
          links.map(({link,id})=>(
            <li key={id} className='px-4 py-6 hover:text-white'><a href='/'>{link}</a></li>
          ))
        }
      </ul>)
      }      
    </div>
  )
}

export default Navbar