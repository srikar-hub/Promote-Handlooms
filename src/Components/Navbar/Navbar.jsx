import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Context'
export default function Navbar() {
    const [menu,setMenu] = useState("Home");
    const {totalNoOfItems}=useContext(ShopContext);
  return ( 
    <div className='navbar'>
       <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shop Here</p>
       </div>
       <ul className='nav-menu'>
        <li  onClick={()=>{setMenu("Home")}}><Link to="/" style={{textDecoration:"none"}}>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("Shop")}}><Link to="/items" style={{textDecoration:"none"}}>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("About")}}><Link to="/about" style={{textDecoration:"none"}}>About</Link>{menu==="About"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("Contact")}}><Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
       <Link to="/login" style={{textDecoration:"none"}} ><button>Login</button></Link>
        <Link to="/carts" style={{textDecoration:"none"}}><img src={cart} alt="" /></Link> 
        <div className="nav-bar-count">{totalNoOfItems()}</div>
       </div>
    </div> 
  )
}
