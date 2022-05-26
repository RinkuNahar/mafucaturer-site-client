import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({user, index, refetch}) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://calm-beyond-40705.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                console.log('added',data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        <td><button className="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default UserRow;