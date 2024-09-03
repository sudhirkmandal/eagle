import React from 'react'
import img10 from "../assets/img10.png"
import Button from './Button'
import { Link } from 'react-router-dom'

function Page4() {
  return (
    <div className='w-full h-[135vh] flex'>
        <div className="left w-1/2 h-ful pl-20 px-6 pt-[10%]">
        <img src={img10} alt="" />
        </div>
        <div className="right w-1/2 h-full flex flex-col items-start pl-14 pt-[10%]">
            <h1 className='text-[4vw] font-[GLAMORISE] leading-[5vw] text-[#245656]'>What is <br />
            our goal:</h1>
            <p className='mt-2 mb-14'>Our goal is to transform your beautiful house into a luxurious <br /> home. Through a multi-faceted approach including <br /> architectural and interior design, our principal designer will <br /> create a space that is uniquely yours</p>
            <Link to="/contact"><Button hover={false} bg="bg-[#245656] font-[GLAMORISE] text-white text-sm" text="Get Started!" /></Link>
        </div>
    </div>
  )
}

export default Page4