import React from 'react'

function timeAndLocation() {
  return (
    <div>
        <div className='flex flex-row items-center justify-center'>
            <p className='text-white text-xl font-extralight'>
                Sunday, 09 April 2023 | Local time: 05:40 PM
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'> Berlin, DE</p>
        </div>
    </div>
  )
}

export default timeAndLocation