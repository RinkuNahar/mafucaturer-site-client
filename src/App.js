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
            <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='adReview' element={<AddReview></AddReview>}></Route>
            <Route path='users' element={<AllUsers></AllUsers>}></Route>
            <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          </Route>

          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
         
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
