import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <h2 className='text-3xl font-bold text-blue-700'>Welcome to your Dashboard</h2>
        <Outlet></Outlet>


      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

          {/* Only user can access */}
          {!admin &&
            <>
              <li><Link to='/dashboard'>My Orders</Link></li>

              <li><Link to='/dashboard/review'>My Reviews</Link></li>
              <li><Link to='/dashboard/adReview'>Add Review</Link></li>
              {/* <li><Link to='/dashboard/payment'>Add Review</Link></li> */}

            </>
          }
          {/* common route */}
          <li><Link to='/dashboard/profile'>My Profile</Link></li>
          <li><Link to='/dashboard/addProfile'>Add Profile</Link></li>
          {/* <li><Link to={`/dashboard/update/${user.uid}`}>Update Profile</Link></li> */}

          {/* only admin can access */}
          {admin && <>
            <li><Link to='/dashboard/users'>All Users</Link></li>
            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
            <li><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
          
          </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;