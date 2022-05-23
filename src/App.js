import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/purchase/:ProductId' element={<Purchase></Purchase>}></Route>
         
      </Routes>
    </div>
  );
}

export default App;
