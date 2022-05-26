import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'; 
import useAdmin from '../hooks/useAdmin'
import auth from '../../firebase.init';
import Loading from '../Firebase/Loading'
const MyOrder = () => {

    const [user,loading] = useAuthState(auth);
    const[users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [admin] = useAdmin(user);

    
    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/order?customer=${user.email}`,{
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
                    setOrders(data)
                }
                </>);
        }
    }, [user]);

    // delete from my order
    const handleUserDelete = id =>{
       const proceed = window.confirm('Are You Sure You Want To Delete?');
       if(proceed){
           console.log(id);
           const url =`http://localhost:5000/order/${id}`;
           fetch(url,{
               method: 'DELETE',
           })
           .then(res=>res.json())
           .then(data=>{
            if(data.deletedCount > 0){
                console.log('deleted');
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
           })
       }
    }

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>My Orders : {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Order</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th></th>
                            <th>Payment</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customer}</td>
                                <td>{a.order}</td>
                                <td>{a.phone}</td>
                                <td>{a.address}</td>
                                <td>{a.price}</td>
                                <td>{a.info}</td>

                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-sm btn-success '>Pay</button> </Link>} </td>
                                
                                <td>{(a.price && !a.paid) && <div>
                                    
                                    <button onClick={()=>handleUserDelete(a._id) } className=' btn btn-sm btn-[red-600] mt-4'>Delete</button>

                                    </div>} </td>

                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}

                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;