import React from 'react';
import './Footer.css'
const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='foot'>
            <h2 className='footer-title   text-white text-center'> <span className='side font-bolder text-3xl px-4'> Manufacturer</span>   <span className='ps-3 side text-center text-3xl'>Capital</span></h2>
                <h4 className='text-white text-center text-xl'>Always there for you in any time</h4>
                <p className='text-white text-center text-xl'>© Copyright 2021, All Rights Reserved {year}</p>
    </div>
    );
};

export default Footer;