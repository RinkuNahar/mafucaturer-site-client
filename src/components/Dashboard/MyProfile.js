import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Firebase/Loading';


const MyProfile = () => {

    const { data: profile, isLoading } = useQuery('profiles',
        () => fetch('https://calm-beyond-40705.herokuapp.com/profile')
            .then(res => res.json()));

    const [user, loading] = useAuthState(auth);
    

    // const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    // const [admin] = useAdmin(user);

    useEffect(() => {
        if (user.email) {
            fetch(`https://calm-beyond-40705.herokuapp.com/profile?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res.body)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => <>
                    if({user.email}){
                        // setOrders(data)
                    }
                </>);
        }
    }, [user]);

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    //----------- update-------------//
    const updateProfile =(id)=>{
        fetch(`https://calm-beyond-40705.herokuapp.com/profile/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
        // navigate('/dashboard/update')
        
    }

    return (
        <div>
            {/* <p>{profile.name}</p> */}
            <p>
                {profile.map(p => <> 
              
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="text-center font-bold text-2xl">{p.name}</h2>
                            <h3 class="text-center font-bold text-xl">{p.email}</h3>
                            <h3 class="text-center font-semibold text-xl">Education: <span>{p.education}</span></h3>
                            <h3 class="text-center font-semibold text-xl">Location: <span>{p.location}</span></h3>
                            <h3 class="text-center font-semibold text-xl">Phone: <span>{p.phone}</span></h3>
                            <h3 class="text-center font-semibold text-xl">LinkedIn Id: <span>{p.linked}</span></h3>
                           
                            <div class="card-actions justify-end">
                                <button onClick={()=>updateProfile(p._id)} class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>


                </>)}
            </p>
        </div>
    );
};

export default MyProfile;