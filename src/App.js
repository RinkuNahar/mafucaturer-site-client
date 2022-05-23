import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Home/Tools/Purchase';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
         
      </Routes>
    </div>
  );
}

export default App;
