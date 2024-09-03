import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Page5() {
  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-[45vh] bg-[#245656] text-white flex items-center justify-center gap-16'>
            <h1 className='text-[3.1vw]  font-[GLAMORISE] leading-[4vw]'>book your free <br />
            consultation now!</h1>
            <div className='flex flex-col items-start'>
                <p className='mb-5'>The following information will allow us to better <br />
                understand your design goals. We’ll be in touch soon!</p>
                <Link to="/contact"><Button hover={false} bg="bg-white  font-[GLAMORISE] text-[#245656] text-sm" text="Inquire Now!" /></Link>
            </div>
        </div>
        <div className='flex flex-col text-center gap-8 items-center justify-center h-[55vh]'>
            <h1 className='text-[3.7vw]  font-[GLAMORISE] text-[#245656] leading-[4vw]'>Why Choose Us</h1>
            <p className='text-xl'>Our commitment to excellence is evident in every project we undertake, <br /> ensuring that you receive nothing but the highest quality products and <br /> services.</p>
            <hr className='w-[25%] h-[.9px] bg-gray-300' />
        </div>
    </div>
  )
}

export default Page5