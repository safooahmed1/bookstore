import React from 'react'

export default function Section({img , h , p }) {
  return (
    <div>
      <img src={img} alt="" className='w-7.5' />
      <h1 className=' text-[18px] font-bold text-[#222222]'>{h}</h1>
      <p className='text-[16px] font-normal text-[#22222280]'>{p}</p>
    </div>
  )
}
