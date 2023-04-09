import React from 'react'

function Forecast(props) {
  return (
    <>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>
                {props.title}
            </p>
        </div>
        <hr className='my-1'/>

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 02:00 PM </p>
                <img src="" alt="" className='w-12 my-1' />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 02:00 PM </p>
                <img src="" alt="" className='w-12 my-1' />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 02:00 PM </p>
                <img src="" alt="" className='w-12 my-1' />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 02:00 PM </p>
                <img src="" alt="" className='w-12 my-1' />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 02:00 PM </p>
                <img src="" alt="" className='w-12 my-1' />
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </>
  )
}

export default Forecast