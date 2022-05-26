import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import '../Home/Tools/Tool.css'
const MyReview = () => {

    const [user, loading, error] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://calm-beyond-40705.herokuapp.com/review?review=${user.email}`)
                .then(res => res.json())
                .then(data => setReviews(data))
        }
    }, []);

    return (
        <div>
            <h2>My Reviews : {reviews.email}</h2>

            {
                reviews.map(r => <div key={r._id}>

                    <div className='mt-0'>
                        <div className="  w-96 bg-base-100 shadow-xl mt-5">
                            <figure><img src={r.img} alt="tool" className='tool-img' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{r.name}</h2>
                                <p>{r.about}</p>
                                <p>Ratings: {r.ratings} (Out of 5)</p>
                            </div>
                        </div>


                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReview;