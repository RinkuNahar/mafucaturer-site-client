import React from 'react';


const ReviewEach = ({review}) => {
    const {name, img, about} = review;
    
    return (
        <div className='mt-0'>
        <div className="  w-96 bg-base-100 shadow-xl mt-5">
            <figure><img src={img} alt="tool" className='tool-img' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                </div>
            </div>
        </div>

    );
};

export default ReviewEach;