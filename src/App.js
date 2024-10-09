
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Carts from './Pages/Carts';

import Collection from './Components/Collections/Collection';
function App() {
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items" element={<Collection/>}>
          <Route path=':itemId' element={<Collection/>}/>
          </Route>
          
          <Route path="/about" element={<Home/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path='/carts' element={<Carts/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId'element={<Product/>} />
          </Route>
        </Routes>
        </>
  );
}

export default App;
