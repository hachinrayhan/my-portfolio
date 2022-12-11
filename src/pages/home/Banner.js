import React from 'react';
import banner from '../../asset/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='relative text-white'>
            <img src={banner} className='w-full' alt="Starry Night Sky" />
            <div className='absolute left-0 right-0 bottom-1/2'>
                <h2 className='text-3xl md:text-6xl font-bold'>I am a </h2>
                <h2 className='text-3xl md:text-6xl font-bold animated-item'>Web Developer.</h2>
            </div>
        </div>
    );
};

export default Banner;