import React from 'react'
import Navbar from './Navbar'


export default function Homepage() {
  return (
    <div className=''>
      <Navbar/>
      <div className='flex flex-col text-left px-24 p-1'>
        <p className='my-10 text-6xl w-[50%] font-serif'>MAKING EDUCATION EASIER AND MORE ACCESSIBLE!</p>
        <a href="" className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-7 text-lg w-[10%]'>Get started</a>
      </div>
    </div>
  )
}
