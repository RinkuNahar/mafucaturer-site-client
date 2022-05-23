import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';

const Register = () => {
    
    const navigate = useNavigate();
    
    const navigateLogin = () =>{
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

   
    let errorElement;
    if(error){
        errorElement = <p className='text-danger'>Error : {error?.message}</p>
     }
      
     if(loading){
         return <Loading></Loading>
     }
 
    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
          alert('Updated profile');
          navigate('/home')
    }
    return (
        <div className='container  mx-auto login-container'>
        <h2 className='login-title login-title md:ml-[500px]'>Please Register</h2>
        <form onSubmit={handleRegister}>
            <input className='input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto' type="text" name='name' placeholder='Your Name' />
            <br />
            <br />
            <input className='input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto' type="email" name="email" id="" placeholder='Your email' required/>
            <br />
            <br />
            <input className='input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto' type="password" name="password" id="" placeholder='Your Password' required/>
            <br />
            <br />
            {errorElement}
            <input type="submit" className='login-button btn mx-auto btn-primary md:ml-[500px] input-md w-50 mt-4 max-w-sm' value="Register" />
        </form>
        <p className='mt-4 fs-4 new-para md:ml-[500px]'>Already Have an account? <Link to={'/login'} className='text-primary text-decoration-none ' onClick={navigateLogin}>Please LogIn</Link></p>
       {/* <SocialLogin></SocialLogin> */}
    </div>
    );
};

export default Register;

// onClick={navigateLogin}