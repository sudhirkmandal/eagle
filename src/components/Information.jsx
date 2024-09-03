import React from 'react'

function Information({title, desc}) {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <h1 className='text-[4vw] font-[GLAMORISE] text-[#245656] mb-6'>{title}</h1>
      <p className="font-[GLAMORISE] text-2xl w-[50%]">{desc}</p>
    </div>
  )
}

export default Information