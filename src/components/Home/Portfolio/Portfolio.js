import React from 'react';
import rinku from '../../../images/myself/rinku.jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='mt-12'>
        <hr />
        <h2 className='text-danger font-bold text-4xl text-indigo-800 text-center mt-4 mb-4 underline underline-offset-1'>My Portfolio</h2>
        <hr />
    <div className='container contact-container mt-12'>
      <div className='ml-[200px]'>
        <img className='contact-img' src={rinku} alt="" />
        <h3 className='text-2xl font-medium p-1 text-blue-800 mt-5'>My Worked Link: </h3>
        <li className='px-4 text-xl font-medium  text-green-900 cursor-pointer'>https://boost-learner.web.app/</li>
        <li className='px-4 text-xl font-medium  text-green-900 cursor-pointer'>https://fruits-warehouse-40010.web.app/</li>
        <li className='px-4 text-xl font-medium  text-green-900 cursor-pointer'>https://music-lifes.netlify.app/</li>
      </div>
      
      <div className='pr-12 '>
          <h3 className='text-2xl font-semibold p-1'>Rinku Nahar Hossan</h3>
      
          <h3 className='text-xl font-medium p-1'>E-mail : rinkunaharhossan2022@gmail.com</h3>
          <h3 className='text-2xl font-medium p-1 text-blue-800'>Educational Background: 
          </h3>
          <p className='px-4 text-xl font-medium p-1 text-pink-500'>School: Engineering University Girls' School and College</p>
              <p className='px-4 text-xl font-medium p-1 text-pink-500'>College: Engineering University School and College</p>
              <p className='px-4 text-xl font-medium text-pink-500 p-1'>University: Daffodil International University(Graduated in March, 2022)</p>
          
              <h3 className='text-2xl font-medium p-1 text-blue-800'>My Skills:
              <li className='px-4 text-xl font-medium text-green-900'>HTML</li>
              <li className='px-4 text-xl font-medium  text-green-900'>CSS(BootStrap, Tailwind)</li>
              <li className='px-4 text-xl font-medium  text-green-900'>JSX</li>
              <li className='px-4 text-xl font-medium text-green-900'>JavaScript Fundamentals + ES6</li>
              <li className='px-4 text-xl font-medium text-green-900'>Git</li>
              <li className='px-4 text-xl font-medium text-green-900'> Node + npm</li>
              <li className='px-4 text-xl font-medium  text-green-900'>Mongodb</li>
              <li className='px-4 text-xl font-medium  text-green-900'>Express.js</li>
              <li className='px-4 text-xl font-medium  text-green-900'>Firebase</li>
              <li className='px-4 text-xl font-medium  text-green-900'>Heroku</li>
          </h3>
      </div>
    </div>
    <hr />
 </div>
    );
};

export default Portfolio;