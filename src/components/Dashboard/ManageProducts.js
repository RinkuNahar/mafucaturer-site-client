import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure');
        if(proceed){
            const url =`http://localhost:5000/purchase/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining = tools.filter(tool=> tool._id !== id)
                setTools(remaining);
                toast('deleted')
            })
        }
    }

    return (
        <div>
            <h2>manage Products</h2>
            {
                tools.map((tool, index) => <>
                    <div key={tool._id}>
                    <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
       <th></th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <th>{index+1}</th>
        <td className='font-bold'>{tool.name}</td>
        <th><button onClick={()=>handleDelete(tool._id)} className='btn btn-secondary'>Delete</button></th>
      </tr>
     
    </tbody>
  </table>
</div>
                    </div>
                </>)
            }
        </div>
    );
};

export default ManageProducts;