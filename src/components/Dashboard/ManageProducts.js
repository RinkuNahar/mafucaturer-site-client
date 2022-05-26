import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://calm-beyond-40705.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
            const url = `https://calm-beyond-40705.herokuapp.com/purchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tools.filter(tool => tool._id !== id)
                    setTools(remaining);
                    toast('deleted')
                })
        }
    }

    return (
        <div>
            <h2>manage Products</h2>



            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <tr key={tool._id}>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>

                                <button onClick={() => handleDelete(tool._id)} className=' btn btn-sm btn-[red-600]'>Delete</button>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;