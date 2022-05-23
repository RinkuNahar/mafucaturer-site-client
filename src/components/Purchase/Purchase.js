import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { ProductId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${ProductId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handleOrder = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
    }


    return (
        <div className='ml-[20px] mt-[50px] '>
            <h4 className='md:ml-[500px] text-3xl text-green-700 font-bold'>Place Order for: {product.name}</h4>
    
         <form onSubmit={handleOrder}>

         <input  name="name" type="text" placeholder="Your Name" class="input input-bordered input-md w-full md:ml-[500px] sm:ml-[100px] max-w-sm mt-4 mx-auto" />
            <br />
            <input type="email" name='email' placeholder="Email Address" class="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />
            <br />
            <input type="text" name='address' placeholder="Your Address" class="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />
            <br />
            <input type="number" name='phone' placeholder="Your Phone Number" class="input input-bordered md:ml-[500px] input-md w-full mt-4 max-w-sm" />
            <br />
            <input type="text" name='info' placeholder="Others Information" class="input input-bordered md:ml-[500px] input-lg w-full mt-4 max-w-sm" />
            <br />
            <input type="submit" className='btn mx-auto btn-primary md:ml-[500px] input-md w-50 mt-4 max-w-sm' value="Submit" />
         </form>
        </div>
    );
};

export default Purchase;