import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className='fixed top-[-16] left-0 w-full h-full flex flex-col items-center justify-center bg-zinc-400
    bg-opacity-70 backdrop-filter backdrop-blur-sm z-1'>
        <h1 className='text-white text-3xl font-semibold'>Sorry! This Page is down for Redesigning</h1>
        <h1 className='text-white text-3xl font-semibold'>Please go to <Link to="/" className='underline text-blue-500'>Home</Link></h1>
    </div>
  )
}

export default Features