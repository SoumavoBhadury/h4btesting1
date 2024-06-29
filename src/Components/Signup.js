import React from 'react'
import { Link } from 'react-router-dom'

export default function SIgnup() {
  return (
    <div className='w-[30%] mx-auto mt-32 border-[3px] bg-purple-200 rounded-3xl h-[60vh] py-9 px-3'>
      <form className="flex flex-col text-left p-4 gap-2 text-purple-700 text-[15px]" action="#">
        <label htmlFor="Name">Enter Name</label>
        <input className='bg-purple-200 border-gray-30000 focus:outline-none border-b-2 focus:border-purple-800 p-[4px]' type="Enter Name" />

        <label htmlFor="Email">Enter Email</label>
        <input className='bg-purple-200 border-gray-30000 focus:outline-none border-b-2 focus:border-purple-800 p-[4px]' type="Enter Email" />

        <label htmlFor="Password">Enter Password</label>
        <input className='bg-purple-200 border-gray-30000 focus:outline-none border-b-2 focus:border-purple-800 p-[4px]' type="Enter Password" />

      </form>
      <div className="flex flex-col gap-2 items-center text-center">
        <Link to="/dashboard" className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-7 text-lg w-[20vw] mx-auto'>Register</Link>
        <span className='text-purple-700'>Already have an account? <Link to="/login" className='text-blue-700 font-semibold hover:underline'>Log In</Link></span>
      </div>
    </div>
  )
}
