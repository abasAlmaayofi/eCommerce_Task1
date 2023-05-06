import React from 'react'
import Left from './Left'
import { Center } from './Center'

const HomePage = () => {
  return (
    <div className='flex'>
        <Left/>
        <Center/>
        {/* <Right/> */}
    </div>
  )
}

export default HomePage