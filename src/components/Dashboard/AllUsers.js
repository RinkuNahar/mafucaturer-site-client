import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Firebase/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
        
        <div className="overflow-x-auto mt-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                     
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user, index)=><UserRow
                      index={index}
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></UserRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;