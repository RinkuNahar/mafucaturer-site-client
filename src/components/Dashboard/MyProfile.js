import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user,loading] = useAuthState(auth);
    const[users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profile`,{
                method: 'GET',
               
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user]);

    return (
        <div>
            {orders.length}
        </div>
    );
};

export default MyProfile;