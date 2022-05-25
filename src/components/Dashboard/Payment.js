import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Firebase/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1y4FBgBFtCjzb1x3Caau8J8GwMIIPkRfwPxRh9AzGxiXqVtRGoNLLnpgw6SC4kfkZAB49psYU4UlbP7wWul3D900dtyQDfb7');

const Payment = () => {
    const {id} = useParams();
   const url = `http://localhost:5000/order/${id}`;

   const {data: order, isLoading} = useQuery(['order', id], ()=>fetch(url,{
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
   }).then(res=>res.json()));

   if(isLoading){
       return <Loading></Loading>
   }

    return (
        <div>
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <p className="text-success font-bold">Hello, {order.customerName}</p>
                <h2 className="card-title">Please Pay for {order.order}</h2>
                <p className='text-orange-700'>Please pay: ${order.price}</p>
            </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class  Name="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;