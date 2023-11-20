import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

const CustomPlayButton = () => {
    return (
        <div className='bg-[#88fcaf] w-full h-full rounded-full flex items-center justify-center active:scale-125 transition
         duration-200'>
            <button>
                <BsPlayFill className="max-[639px]:hidden" size={30} color="black" />
                <BsPlayFill className="sm:hidden max-[324px]:hidden" size={25} color="black" />
                <BsPlayFill className="min-[324px]:hidden" size={12} color="black" />
            </button>
        </div>
    )
}

export default CustomPlayButton