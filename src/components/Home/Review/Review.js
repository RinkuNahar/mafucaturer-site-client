import React, { useEffect, useState } from 'react';
import ReviewEach from './ReviewEach';
import '../Tools/Tool.css'
const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/myReviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div className='mt-[100px]'>
            <h2 className='text-3xl text-center text-red-800 font-bold'>Reviews</h2>
        <div className=' tool '>
            {
                reviews.map(review=> <ReviewEach key={review._id} review={review}
                ></ReviewEach>)
            }
        </div>
   </div>
    );
};

export default Review;