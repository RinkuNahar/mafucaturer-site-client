// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useParams } from 'react-router-dom';
// import auth from '../../firebase.init';

// const UpdateUser = () => {
//     const {id} = useParams();
//     const [update, setUpdate] = useState([]);
//     const [user] =useAuthState(auth);

//     useEffect(()=>{
//         const url =`http://localhost:5000/user/${id}`;
//         fetch(url)
//         .then(res=>res.json)
//         .then(data=>setUpdate(data))
//     })
//     return (
//         <div>
//            <p>hi: {id}</p>
//            <p>name: {user.displayName}</p>
//            <p>name: {user.email}</p>
//         </div>
//     );
// };

// export default UpdateUser;