import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'

const Portfolio = () => {
  const portfolios=[
    {
      id:1,
      src: html,
      name:"HTML"
    },
    {
      id:2,
      src: css,
      name:"CSS"
    },
    {
      id:3,
      src:tailwind,
      name:"Tailwindcss"
    },
    {
      id:4,
      src:javascript,
      name:"Javascript"
    },
    {
      id:5,
      src: react,
      name:"React"
    },
    {
      id:6,
      src: node,
      name:"NodeJs"
    }
  ]

return (
    <div name='Experience' className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 pb-2'>Experience</p>
        <p className='py-6 mt-3 mb-8'>Technologies that I have worked with</p>
        </div>
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    {
      portfolios.map(({id,src,name})=>(
        <div className='relative overflow-hidden cursor-pointer shadow-md shadow-gray-600 rounded-lg duration-500 hover:scale-105'>
          <img className='w-20 mx-auto block' src={src} alt="" />
          <p className='mt-4 font-bold text-center'>{name}</p>
        </div>
      ))
    }
    </div>
    </div>
    </div>
  )
}

export default Portfolio