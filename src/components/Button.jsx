import React from 'react'

const Button = ({id, title, leftIcon, containerClass}) => {

  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full hover:bg-violet-50 transition-all duration-300 px-7 py-3 text-black ${containerClass}`}>
    <span className='hover:text-blue-600'>{leftIcon}</span>
    <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
            {title}
        </div>
    </span>
    </button>
  )
}

export default Button
