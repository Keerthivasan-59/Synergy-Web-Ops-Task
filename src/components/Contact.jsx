import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500 pb-2'>Contact</p>
       <p className='py-6 mt-2'>Fill the below form to get in touch with me</p>
      </div>
      <div className='grid grid-cols-[200px_1fr] gri'>
        <div className='flex flex-col space-y-10  py-2 font-bold'>
          <p>Name</p>
          <p>Email</p>
          <p>Feedback</p>
        </div>
       <form action="" className='flex flex-col w-full h-full space-y-5'>
        <input type="text" className='p-2 border-2 rounded-md text-white bg-transparent  focus:outline-none' name="name" id="Enter your name" />
      <input type="text" className='p-2 border-2 rounded-md text-white bg-transparent focus:outline-none placeholder-black' name="email" id="Enter your Email" />
      <textarea name="message" rows="10" className='p-2  bg-transparent border-2 rounded-md focus:outline-none'></textarea>
      <button className='px-6 py-3 text-white w-fit flex items-center rounded-full my-10 hover:bg-white bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 hover:scale-105'>Submit</button>
       </form>
      </div>
     </div>
    </div>
  )
}

export default Contact