import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import LogIn from './components/Firebase/LogIn';
import Register from './components/Firebase/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/Shared/RequireAuth';


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

          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
         
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
