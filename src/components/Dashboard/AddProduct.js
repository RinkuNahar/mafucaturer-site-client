import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://calm-beyond-40705.herokuapp.com/purchase`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Product Add Successfully')
            });
    }

    return (
        <div>
        <h2 className='mt-2 text-3xl'> Add Product </h2>
        <form className='m-4' onSubmit={handleSubmit(onSubmit)}>

            <input className='mt-2 w-50 input input-bordered' placeholder='Product Name'{...register("name", { required: true, maxLength: 20 })} /> <br />

            <textarea className='mt-2 w-50 input input-bordered' placeholder='Description' {...register("about")} /> <br />

            <textarea className='mt-2 w-50 input input-bordered' placeholder='Price' {...register("price")} /> <br />

            <textarea className='mt-2 w-50 input input-bordered' placeholder='Quantity' {...register("quantity")} /> <br />

            <textarea className='mt-2 w-50 input input-bordered' placeholder='Available Quantity' {...register("availableQuantity")} /> <br />

            <input className='mt-2 w-50 input input-bordered' placeholder='Photo URL' type="text" {...register("img")} /> <br />

            <input className='mt-2 btn btn-primary' value="Add Products" type='submit' />
        </form>

    </div>
    );
};

export default AddProduct;