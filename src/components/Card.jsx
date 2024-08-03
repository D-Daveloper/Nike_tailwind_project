import React from 'react'
import { star } from '../assets/icons'

const Card = ({values}) => {
  return (
    <div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={values.imgURL} alt="" className='w-[282px] h-[282px]'/>
        </div>
        <div className='mt-5 flex gap-2'>
            <img src={star} alt="" />
            <p>(4.5)</p>
         </div>
         <div>
            <h3 className='font-semibold font-montserrat'>{values.name}</h3>
            <p className='text-coral-red font-bold'>{values.price}</p>
         </div>
    </div>
  )
}

export default Card