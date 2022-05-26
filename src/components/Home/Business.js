import React from 'react';
import country from '../../images/business/country.jpg';
import customer from '../../images/business/customer.jpg';
import service from '../../images/business/services.webp';
import feedback from '../../images/business/feedback.jpg';
import '../Home/Business.css';

const Business = () => {
    return (
        <div className='h-[500px] mt-[120px] ml-12'>
           <div>
           <h2 className='text-center text-5xl font-bold text-green-800'>Wherever there is FAITH, There we are</h2>
            <h2 className='text-3xl font-bold text-center text-red-400 mt-7'>Your BestFriend for decorate your desire Location</h2>
           </div>

           <div className='business mt-12 mb-10'>
               <div>
                   <img className='b-img' src={country} alt="" />
                   <h2 className='font-bold text-center text-blue-800 text-5xl'>50+</h2>
                   <h3 className='text-center text-3xl mt-3 text-orange-800 font-semibold'>Countries</h3>
               </div>
               <div>
                   <img className='b-img' src={customer} alt="" />
                   <h2 className='font-bold text-center text-blue text-5xl text-blue-800'>150+</h2>
                   <h3 className='text-center text-3xl mt-3 text-orange-800 font-semibold'>Happy Clients</h3>
               </div>
               <div>
                   <img className='b-img' src={service} alt="" />
                   <h2 className='text-blue-800 font-bold text-center text-blue text-5xl'>30</h2>
                   <h3 className='text-center text-3xl mt-3 text-orange-800 font-semibold'>Employees</h3>
               </div>
               <div>
               <img className='b-img' src={feedback} alt="" />
               <h2 className='text-blue-800 font-bold text-center text-blue text-5xl'>120+</h2>
               <h3 className='text-blue-800 text-center text-3xl mt-3 text-orange-800 font-semibold'>Feedback</h3>
               </div>
           </div>
        </div>
    );
};

export default Business;