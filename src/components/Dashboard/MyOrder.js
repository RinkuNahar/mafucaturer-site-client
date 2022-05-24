import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/order?customer=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
       }
    },[user])

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
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(( a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customer}</td>
                                <td>{a.order}</td>
                                <td>{a.phone}</td>
                                <td>{a.address}</td>
                                <td>{a.price}</td>
                                <td>{a.info}</td>
                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-sm btn-success '>Pay</button> </Link>} </td>

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