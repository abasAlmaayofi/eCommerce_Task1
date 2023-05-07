import React from 'react'
import Left from './Left'
import { Center } from './Center'
import Right from './Right'

const HomePage = () => {
  return (
    <div className='flex'>
        <Left/>
        <Center/>
        <Right/>
    </div>
  )
}

export default HomePage