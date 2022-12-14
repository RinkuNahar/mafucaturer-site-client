import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
const Purchase = () => {

    const { ProductId } = useParams();
    const [product, setProduct] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(product){
            setCount(product?.minQuantity);
        }
    },[product])


    const handleIncrement = () => {
        if (product.minQuantity < product.availableQuantity) {
            setCount(count + 1);        
        }
    }

    const handleDecrement = () => {
        if (product.minQuantity >= count) return
        setCount(count - 1);
    }

    useEffect(() => {
        const url = `https://calm-beyond-40705.herokuapp.com/purchase/${ProductId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            orderId: product._id,
            order: product.name,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
            info: event.target.info.value,
            price: totalPrice
        }

        fetch('https://calm-beyond-40705.herokuapp.com/order',{
            method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data => {
            toast('data is set');
        })
    }

    const totalPrice = ((product.minQuantity) * (product.price));

    if(!product) return <></>

    return (
        <div className='ml-[20px] mt-[50px] '>
            <h4 className='md:ml-[500px] text-3xl text-green-700 font-bold'>Place Order for: {product.name}</h4>

            <form onSubmit={handleOrder}>

                <input name="name" type="text" disabled value={user?.displayName} className="input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto" />
                <br />
                <input disabled value={user?.email} type="email" name='email' placeholder="Email Address" className="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />
                <br />
                <input type="text" name='address' placeholder="Your Address" className="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />
                <br />
                <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />
                <br />

                <div>
                    {/* <p className='md:ml-[500px] w-full'>Min Quantity</p> */}
                    <div className="md:ml-[500px] w-full mt-4 border  max-w-sm flex justify-between items-center">
                        <button type='button' className='text-center pl-4 text-red-800 font-bold text-3xl' onClick={handleDecrement}> - </button>
                        <div className='pl-4 text-2xl font-bold'>{count}</div>
                        <button className='pr-4 text-green-800 font-bold text-3xl' onClick={handleIncrement} type='button'> + </button>
                    </div>
                </div>


                {/* <input type="text" name='quantity' onChange={increaseCount} placeholder="quantity"  className="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" /> */}

                <input type="text" name='price' value={totalPrice} placeholder="Product Price" className="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />


                <br />
                <input type="text" name='info' placeholder="Others Information" className="input input-bordered md:ml-[500px] input-lg w-full mt-4 max-w-sm" />
                <br />
                <input type="submit" className='btn mx-auto btn-primary md:ml-[500px] input-md w-50 mt-4 max-w-sm' value="Submit" />
            </form>
        </div>
    );
};

export default Purchase;