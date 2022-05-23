import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import './Tool.css';

const Tools = () => {

    const [tools, setTools] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setTools(data));
    },[]);

    return (
   <div className='mt-[500px]'>
            <h2 className='text-3xl text-center text-red-800 font-bold'>Tools</h2>
        <div className=' tool '>
            {
                tools.map(tool=> <Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
   </div>
    );
};

export default Tools;