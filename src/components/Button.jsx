import React from 'react'

function Button({hover, bg, text, icon}) {
  return (
    <div className={`px-4 rounded-full cursor-pointer py-[.4vw] ${hover ? "hover:bg-[#245656] hover:text-white duration-300 border text-[#245656] border-[#245656]" : bg}`}>    
        <h5 className='font-semibold'>{`${text ? text : "Get In Touch!"}`}</h5>
        <span>{icon}</span>
    </div>
  )
}

export default Button