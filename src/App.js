import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import LogIn from './components/Firebase/LogIn';
import Register from './components/Firebase/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/Shared/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder';
import MyReview from './components/Dashboard/MyReview';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import AllUsers from './components/Dashboard/AllUsers';
import RequireAdmin from './components/Firebase/RequireAdmin';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProducts from './components/Dashboard/ManageProducts';
import ManageOrder from './components/Dashboard/ManageOrder';
import AddProfile from './components/Dashboard/AddProfile';
import UpdateUser from './components/Dashboard/UpdateUser';
import Payment from './components/Dashboard/Payment';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          <Route path='/purchase/:ProductId' element={
         <RequireAuth>
            <Purchase></Purchase>
         </RequireAuth>
          }></Route>

          <Route path='/dashboard' element={
         <RequireAuth>
           <Dashboard></Dashboard>
         </RequireAuth>
          }>
            <Route index element={<Home></Home>} ></Route>
            <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='adReview' element={<AddReview></AddReview>}></Route>
            <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
            <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
            <Route path='addProfile' element={<AddProfile></AddProfile>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            {/* <Route path='update/:id' element={<UpdateUser></UpdateUser>}></Route> */}

            <Route path='users' element={<RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>}></Route>

            <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          </Route>

          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
         
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
