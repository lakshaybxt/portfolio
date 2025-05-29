import React from 'react'
import Logo from '../../assets/logo.png'
import TextChager from '../TextChager';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start mt-20 p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChager/>
        </h1>
        <p className='text-sm max-w-xl md:text-2xl tracking-tight'>
          Java Developer | Building scalable systems,
          backend solutions & seamless experiences.
        </p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#52B2E5]'></button>
      </div>
      <div className='md:block animate-bounce'>
        <img className='w-40 md:w-64' src={Logo} alt='Lakshay Icon' />
      </div>

    </div>
  )
}

export default Home;