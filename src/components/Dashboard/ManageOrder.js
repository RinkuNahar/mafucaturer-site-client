import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Dashboard/ManageOrder.css';
import OrderRow from '../../components/OrderRow/OrderRow';
const ManageOrder = () => {
    const { id } = useParams
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);
    // const [item, setItem] = useState();


    useEffect(() => {
        fetch('http://localhost:5000/AllOrder')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // ---------------------update button-----------------------//


    const delivered = (id) => {


        fetch(`http://localhost:5000/statusOrder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()

        }).then(res => res.json())
            .then(data => {
                setStatus(true);
                // setItem(data)
                console.log(data);
            })


    }


    return (
        <div>

            <div className="overflow-x-auto manage-table mt-5">
                <table className="table w-full manage-table">

                    <thead>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Order</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Info</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => (
                                <OrderRow order={order} index={index} delivered={delivered}/>
                                
                            )
                           )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;