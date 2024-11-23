
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
import LoginSecutiy from './Pages/LoginSecutiy';
import ProtectedRoute from './Pages/ProtectedRoute';
import Logout from './Pages/Logout';
function App() {
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/items" element={<ProtectedRoute><Collection/></ProtectedRoute>}>
          <Route path=':itemId' element={<Collection/>}/>
          </Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>} />
          <Route path='/setPassword' element={<SetPassword/>} />
          <Route path="/about" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/carts' element={<ProtectedRoute><Carts/></ProtectedRoute>}/>
          <Route path='/loginSecurity' element={<LoginSecutiy/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={<Logout/>}  />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId'element={<Product/>} />
          </Route>
        </Routes>
        </>
  );
}

export default App;
