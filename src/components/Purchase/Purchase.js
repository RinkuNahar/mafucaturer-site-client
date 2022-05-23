import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const {ProductId} = useParams();
    // const [product, setProduct] = useState({});

    // useEffect(()=>{
    //     const url = `data.json/${ProductId}`
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data));
    // },[]);

    return (
        <div>
            <h2>welcome {ProductId}</h2>
            {/* <h4>Price: {product.price}</h4>
            <p> Name: {product.name}</p> */}
        </div>
    );
};

export default Purchase;