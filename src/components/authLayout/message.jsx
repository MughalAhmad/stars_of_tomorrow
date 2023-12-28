import React from 'react'
import "../../styles/style.css"

const Message = () => {
  return (
    <div className='absolute left-20 bottom-32 w-72 h-64 flex flex-col'>
            <img src='assets/pic10.svg' alt='none' className='w-16 h-16 absolute z-10 left-6 border border-[#D8E0EF] rounded-full object-contain'/>
        <div className='border border-[#D8E0EF] bg-white relative h-full mt-7 rounded-xl'>
            <p className='text-6xl text-[#AE70FF] font ml-6 mt-10 h-10'>“</p>
            <p className='w-4/5 font text-xl ml-6'>“Great platform for the model agencies and advertising directors.”</p>
            <p className='font-manrope font-semibold  mt-1 ml-6 text-sm'>Jolie Doe</p>
            <p className='font-manrope ml-6 text-xs'>Warsaw, Poland</p>
            <p className='absolute right-4 top-5 bg-[#AE70FF]/25 w-16 h-7 font-manrope font-semibold text-xs text-center pt-1.5 rounded-lg text-[#AE70FF]'>Agency</p>
        </div>
    </div>
  )
}

export default Message