import React from 'react'
import { Link } from 'react-router-dom';


export default function Homepage() {
  return (
    <div className=''>
      <div className='homenav flex justify-between py-5 px-7 text-lg rounded-full mt-4 mx-4'>
        <div className='flex list-none gap-10 items-center text-white'>
            <li>Join our community</li>
            <li>Connect with us</li>
            <li>Feedbacks</li>
        </div>
        <Link to='/dash' className='text-white'>
        <button className='rounded-xl border-[3px] border-black px-3 py-1 font-semibold hover:bg-black hover:text-white hover:border-transparent transition duration-0 hover:duration-150 hover:ease-in'>Connect wallet</button></Link>
      </div >
      <div className='flex flex-col text-left px-24 p-1'>
        <p className='my-10 text-6xl w-[50%] font-serif'>MAKING EDUCATION EASIER AND MORE ACCESSIBLE!</p>
        <a href="" className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-7 text-lg w-[10%]'>Get started</a>
      </div>
    </div>
  )
}
