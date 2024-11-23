
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';

import Product from './Pages/Product';
import Carts from './Pages/Carts';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import SetPassword from './Pages/SetPassword';
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
          <Route path='/forgotPassword' element={<ForgotPassword/>} />
          <Route path='/setPassword' element={<SetPassword/>} />
          <Route path="/about" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/carts' element={<Carts/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId'element={<Product/>} />
          </Route>
        </Routes>
        </>
  );
}

export default App;
