import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='h-48'>
            <img className='w-full h-[645px]' src={banner} alt="" />
        </div>
    );
};

export default Banner;