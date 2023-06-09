import React from 'react'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  
} from "@iconscout/react-unicons";

function tempAndDetails() {
  return (
    <>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        cloudy
      </div>

      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src="" alt="" className='w-20' />
        <p className='text-5xl'> 34° </p>

        <div className='flex flex-col space-y-2'>
            <div className='flex font-light items-center justify-center text-sm'>
              <UilTemperature size={18} className='mr-1'/>
              Real Feel:
              <span className='font-medium ml-1'>32° </span>
            </div>

            <div className='flex font-light items-center justify-center text-sm'>
              <UilTear size={18} className='mr-1'/>
              Humidity:
              <span className='font-medium ml-1'>65% </span>
            </div>

            <div className='flex font-light items-center justify-center text-sm'>
              <UilWind size={18} className='mr-1'/>
              Wind:
              <span className='font-medium ml-1'>11 km/h </span>
            </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
          <UilSun/>
          <p className='font-light'>
            Rise:
            <span className='font-medium ml-1'>06:45 AM</span>
          </p>
          <p className='font-light'>|</p>


          <UilSunset/>
          <p className='font-light'>
            Set:
            <span className='font-medium ml-1'>07:45 PM</span>
          </p>
          <p className='font-light'>|</p>


          <UilSun/>
          <p className='font-light'>
            High:
            <span className='font-medium ml-1'>45° </span>
          </p>
          <p className='font-light'>|</p>


          <UilSun/>
          <p className='font-light'>
            Low:
            <span className='font-medium ml-1'>25°</span>
          </p>
      </div>

      
    </>
  )
}

export default tempAndDetails