import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';
import './Login.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import useToken from '../hooks/useToken';

const LogIn = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user || gUser){
        navigate(from, { replace: true });
    }
    const [token] = useToken(user|| gUser);

    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
        }
    },[token, from, navigate]);

    let errorMessage;

    const [email, setEmail] = useState('');

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errorMessage = <p className='text-red-500'>{error?.message || gError.message}</p>
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">LogIn</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"  {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 Characters or Longer' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {errorMessage}

                        <input className='btn w-full max-w-xs' type="submit" value='LogIn' />

                    </form>
                    <p className='pr-1'>New to Doctor's Portal?  <Link className='text-primary' to='/register'>Create New Account</Link></p>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>

                </div>
            </div>
        </div>
         
      
    );
};

export default LogIn;

