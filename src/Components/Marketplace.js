import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

export default function Marketplace() {
  return (
    <div>
      <div className='homenav flex justify-between py-5 px-11 text-xl rounded-full mt-4 mx-8'>
        <span className='text-white'>
            MARKETPLACE
        </span>
        
        <button className='border-black border-[3px] rounded-xl w-28 py-[2.25px] font-semibold transition-colors hover:bg-black hover:text-white'>SELL</button>
      </div >
      <div className='my-4 mx-8'>
        <div>
            <Cards/>
        </div>

      </div>
    </div>
  )
}
