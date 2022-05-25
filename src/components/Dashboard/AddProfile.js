import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProfile = () => {

    const [user] = useAuthState(auth);
    // console.log(user);
    const { register, handleSubmit } = useForm();

    
    
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/profile`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    const profile = {
                        name: user.displayName,
                        email: user.email
                    }
                }
                console.log(result);
                toast('Product Add Successfully')
            });
    }

    return (
        <div>
            <h2 className='font-bold text-3xl mt-5'>My Profile</h2>
            <form className='m-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mt-2 w-50 input input-bordered font-bolder text-xl' value={user.displayName}  {...register("name", { required: true, maxLength: 20 })} /> <br />

                <input className='mt-2 w-50 input input-bordered font-bolder text-xl' value={user.email}  {...register("email")} /> <br />

                <textarea className='mt-2 w-50 input input-bordered' placeholder='Your Education' {...register("education")} /> <br />

                <textarea className='mt-2 w-50 input input-bordered' placeholder='Quantity' {...register("quantity")} /> <br />

                <textarea className='mt-2 w-50 input input-bordered' placeholder='Available Quantity' {...register("availableQuantity")} /> <br />

                <input className='mt-2 w-50 input input-bordered' placeholder='Photo URL' type="text" {...register("img")} /> <br />

                <input className='mt-2 btn btn-primary' value="Add Profile" type='submit' />
            
            </form>
        </div>
    );
};

export default AddProfile;