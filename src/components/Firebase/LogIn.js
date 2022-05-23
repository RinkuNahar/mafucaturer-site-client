import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';
import './Login.css';

const LogIn = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    
    const navigateRegister = event => {
        navigate('/register')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // await signInWithEmailAndPassword(email, password);
        // const { data } = await axios.post('/login', { email });
        // localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true });
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        // navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error : {error?.message}</p>
    }

    if(loading){
        return <Loading></Loading>
    }

    // const resetPassword = async () => {
    //     const email = emailRef.current.value;
    //     if(email){
    //         await sendPasswordResetEmail(email);
    //     toast('Sent mail');
    //     }
    //     else{
    //         toast('Please enter your email address');
    //     }
    // }

    return (
        <div>
           
                <h2 className='login-title md:ml-[500px]'>Please Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" controlId="formBasicEmail">

                        <input className='input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto' ref={emailRef} type="email" placeholder="Enter email" required />
                    </div>

                    <div className="mb-3" controlId="formBasicPassword">
                        <input className='input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto' ref={passwordRef} type="password" placeholder="Password" required />
                    </div>
                    {errorElement}
                    <btn className='login-button btn mx-auto btn-primary md:ml-[500px] input-md w-50 mt-4 max-w-sm' variant="primary" type="submit">
                        <p className='pt-1'>Login</p>
                    </btn>
                </form>
                <p className='mt-4 fs-4 new-para md:ml-[500px]'>New to Juicy Warehouse? <Link to={'/register'} className='text-primary text-decoration-none ' onClick={navigateRegister}   >Please Register</Link></p>

                <p className='mt-4 fs-5 forget-para md:ml-[500px]'>Forget Password? <button to={'/register'} className='text-primary border-0 text-decoration-none  bg-white login-button forget-para ' >Reset Password</button></p>
                {/* <SocialLogin></SocialLogin> */}


            </div>
         
      
    );
};

export default LogIn;
// onClick={resetPassword}
