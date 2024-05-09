import React from 'react'

const hero_img = '/assets/images/login/burgur1.png'

const HeroSection = () => {
  return (
    <div className='min-h-[50vh] flex md:flex-row flex-col items-center justify-center gap-10 py-10 px-10'>
        <div className=''>
            <img className='md:h-[400px] w-auto' src={hero_img} alt="hero-img" />
        </div>

        <div className='w-[400px] flex flex-col'>
            <h1 className='text-6xl font-bold uppercase mb-5 text-center md:text-start tracking-tighter'><span className='text-red-600'>Peer</span> Restaurant</h1>
            <p className='italic text-sm font-medium mb-5 text-center md:text-start'><span className=' font-semibold '> Our restaurant</span> delivers delicious food right to your doorstep with a few clicks. Enjoy your favorite dishes hassle-free. Our menu offers tasty options made with fresh ingredients. Relax and let us take care of dinner tonight!</p>
            <div className='flex flex-col items-center md:items-start'>
                <h2 className='text-3xl md:text-xl  font-bold md:font-bold text-red-600'>Address</h2>
                <p className='text-sm font-medium mb-2'>Hetauda-6</p>
                <h2 className='text-3xl md:text-xl font-bold md:font-bold text-red-600'>Phone no</h2>
                <p className='text-sm font-medium'>9858748999</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection