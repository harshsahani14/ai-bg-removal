import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <img className=' w-32 sm:w-44' src={assets.logo}></img>
        <button>
            Get Started <img src={assets.arrow_icon}></img>
        </button>
    </div>
  )
}

export default Navbar