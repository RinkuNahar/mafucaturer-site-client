import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'
const Tool = ({tool, setOrder}) => {
    const { _id,name, img, quantity, availableQuantity, price, about } = tool;

    const navigate = useNavigate();

    const navigateToProducts = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div class="  w-96 bg-base-100 shadow-xl ">
                <figure><img src={img} alt="tool" className=' tool-img' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{about}</p>
                    <h4>Price: {price}</h4>
                    <h3>Quantity: {quantity}</h3>

                    <h3>Available Quantity: {availableQuantity > 1 ?`${availableQuantity}`: <span className='text-red-500'>Right now stock out</span> }</h3>
                    <div class="card-actions justify-end">
                        <button disabled={availableQuantity<1} onClick={()=>navigateToProducts(_id)}  class="btn btn-primary">Place Order</button>
                        {tool.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;