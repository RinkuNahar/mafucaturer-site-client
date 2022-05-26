import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProfile = () => {

    const [user] = useAuthState(auth);
    // console.log(user);
    const { register, handleSubmit, reset } = useForm();

    
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
                        email: user.email,
                        education: data.education,
                        location: data.location,
                        phone: data.phone,
                        linked: data.linked
                    }
                }
                console.log(result);
                // console.log(profile);
                toast('Add Successfully');
                reset();
            });
    }

    return (
        <div>
            <h2 className='font-bold text-3xl mt-5'>My Profile</h2>
            <form className='m-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mt-2 w-50 input input-bordered font-bolder text-xl' readOnly value={user.displayName}  {...register("name", { required: true, maxLength: 20 })} /> <br />

                <input className='mt-2 w-50 input input-bordered font-bolder text-xl' readOnly value={user.email}  {...register("email")} /> <br />

                <input className='mt-2 w-50 input input-bordered' placeholder='Your Education' {...register("education")} /> <br />

                <input className='mt-2 w-50 input input-bordered' placeholder='location' {...register("location")} /> <br />

                <input className='mt-2 w-50 input input-bordered' placeholder='phone' {...register("phone")} /> <br />

                <input className='mt-2 w-50 input input-bordered' placeholder='linkedin profile' type="text" {...register("linked")} /> <br />

                <input className='mt-2 btn btn-primary' value="Add Profile" type='submit' />
            
            </form>
        </div>
    );
};

export default AddProfile;