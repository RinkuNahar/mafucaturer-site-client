import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <h2>Manage Orders {orders.length}</h2>

            
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
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.customer}</td>
                                <td>{order.order}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                <td>{order.price}</td>
                                <td>{order.info}</td>

                                {/* <button onClick={() => handleDelete(tool._id)} className=' btn btn-sm btn-[red-600]'>Delete</button> */}

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;