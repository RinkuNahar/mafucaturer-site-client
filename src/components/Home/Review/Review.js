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
        <div className='mt-[120px] ml-12'>
            <h2 className='text-3xl text-center text-red-800 font-bold review-header underline underline-offset-1'>Reviews</h2>
        <div className=' tool review '>
            {
                reviews.map(review=> <ReviewEach key={review._id} review={review}
                ></ReviewEach>)
            }
        </div>
   </div>
    );
};

export default Review;