import React from 'react'

const ServicesCard = ({image,text,para}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={image} alt="" />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {text}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
            {para}
        </p>
    </div>
  )
}

export default ServicesCard