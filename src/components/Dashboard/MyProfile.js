// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

// const MyProfile = () => {
//     const {data: profile, isLoading, id } = useQuery('profile', ()=> fetch(`http://localhost:5000/profile`,{
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     })
//     .then())

//     return (
//         <div>
//     {profile.length}
//         </div>
//     );
// };

// export default MyProfile;