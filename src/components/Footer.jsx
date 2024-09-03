import React from 'react'
import eagel from "../assets/eagle.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full h-[70vh] flex bg-[#F8F9FA] justify-between border-t-[1px] border-black'>
        <div className='w-[30%] flex flex-col gap-4 justify-start pt-[6vw] px-[5vw] h-full'>
        <Link><img className='w-[7vw]' src={eagel} alt="" /></Link>
        <div>
            {["Discover the art of", "living beautifully with", "us. Let's create", "something", "extraordinary", "together!"].map((item, index)=>(
                <h5 key={index} className='font-bold text-zinc-800'>{item}</h5>
            ))}
        </div>
        
        </div>
        <div className='w-[30%] flex flex-col gap-4 justify-start pt-[6vw] px-[8vw] h-full'>
        <div>
            {["Kh no. 561 Gali no.", "D3 CHATTARPUR", "PAHRI, SOUTH", "DELHI, 110074"].map((item, index)=>(
                <h5 key={index} className='font-bold text-zinc-800'>{item}</h5>
            ))}
        </div>
        <div className='flex flex-col mt-2 gap-1'>
            <Link className='font-bold text-zinc-800'>+91 8595424644</Link>
            <Link className='font-bold text-zinc-800'>+91 98715 26883</Link>
            <Link className='font-bold text-zinc-800'>eaglewoodhouse2023@gmail.com</Link>
        </div>
        </div>
        <div className='w-[30%] h-full justify-start pt-[6vw] px-[10vw]'>
        <div className='flex flex-col gap-2'>
        <Link to="/" className='font-bold text-zinc-800'>Home</Link>
        <Link to="/services" className='font-bold text-zinc-800'>Service</Link>
        <Link to="/gallery" className='font-bold text-zinc-800'>Gallery</Link>
        <Link to="/about" className='font-bold text-zinc-800'>About</Link>
        <Link to="/contact" className='font-bold text-zinc-800'>Contact</Link>
        <Link to="/" className='font-bold text-zinc-800'>Admin Login</Link>
        </div>
        </div>
    </div>
  )
}

export default Footer