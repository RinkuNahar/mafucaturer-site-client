import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import './Tool.css';

const Tools = () => {

    const [tools, setTools] = useState([]);
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/purchase')
        .then(res=>res.json())
        .then(data=>setTools(data));
    },[]);

    return (
   <div className='mt-[500px]'>
            <h2 className='text-3xl text-center text-red-800 font-bold underline underline-offset-1'>Tools</h2>
        <div className=' tool '>
            {
                tools.map(tool=> <Tool key={tool._id} tool={tool}
                setOrder={setOrder}></Tool>)
            }
        </div>
   </div>
    );
};

export default Tools;