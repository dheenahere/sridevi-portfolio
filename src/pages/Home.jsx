import React from 'react'
import images from '../assets/images'

const Home = () => {
    return (
        <div className=' '>
            <div>
                <div className='p-4 md:h-screen md:p-12 md:flex justify-between items-center md:space-x-12 my-8 md:my-0'>
                    <div className=' h-full flex flex-col justify-end items-center  md:items-start '>
                        <h1 className='font-cheri_stroke text-6xl  md:text-start  md:text-[120px] '>Sr<span className="text-purple-400">i</span> Dev<span className="text-rose-400">i</span></h1>
                        <div className=' font-cheri_dark mt-4 md:mt-6 md:w-4/5'>
                            <p className='text-2xl md:text-4xl text-center md:text-start '>✨ Once upon a time…</p>
                            <p className='text-xl mt-2 md:text-2xl  text-center  md:text-start'>In the very first chapter of my college adventure, I stepped into the magical kingdom of Engineering — a place where ideas sparkle like lanterns in the night sky and curiosity is the key to unlocking hidden wonders.</p>
                        </div>
                        <img src={images.Pirincess2} className=' h-fit  rounded-2xl md:rounded-4xl mt-6 md:mt-10 ' alt="" />
                    </div>
                    <img src={images.Pricess} className='h-full  rounded-2xl md:rounded-4xl mt-4 md:mt-0   ' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home