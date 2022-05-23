import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
         
      </Routes>
    </div>
  );
}

export default App;
