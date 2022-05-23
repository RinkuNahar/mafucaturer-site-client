import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'
const Tool = ({ tool }) => {
    const { _id,name, img, quantity, availableQquantity, price, about } = tool;

    const navigate = useNavigate();

    const navigateToPorducts = id =>{
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
                    <h3>Available Quantity: {availableQquantity}</h3>
                    <div class="card-actions justify-end">
                        <button onClick={()=>navigateToPorducts(_id)} class="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;