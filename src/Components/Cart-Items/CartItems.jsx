import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';

export default function CartItems() {
  const {totalNoOfItems, getTotalCostOfCart,data, useCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
    
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
     

      {data.map((e) => {
        if (useCart[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format">
           
              <img src={e.image} alt={e.name} />

              <p>{e.name}</p>

            
              <p>{e.new_cost}</p>

             <p>{useCart[e.id]}</p>  

             
              <p>{e.new_cost * useCart[e.id]}</p>

              <img
                src={remove_icon}
                alt="Remove"
                className="remove-icon"
                onClick={() => removeFromCart(e.id)}
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h3>Cart Total</h3>
          <div>
             <div className="cart-total-items">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCostOfCart()}</p>
             </div>
             <hr />
             <div className='cart-total-items'>
              <h3>Shipping</h3>
              <h3>Free</h3>
             </div>
             <hr />
             <div className="cart-total-items">
              <h3>Total</h3>
              <h3>{getTotalCostOfCart()}</h3>
             </div>
          </div>

        </div>
            <button>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}
