import React, { useContext } from 'react';
import './ProductDisplay.css';
import starIcon from '../Components/Assets/star_icon.png';
import { ShopContext } from '../Context/Context';
import { Link } from 'react-router-dom';

export default function ProductDisplay(props) {
  const {product}=props;
  const {addToCart}=useContext(ShopContext)
  return (
    <div className="product-display">
     
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product Thumbnail 1" />
          <img src={product.image} alt="Product Thumbnail 2" />
          <img src={product.image} alt="Product Thumbnail 3" />
          <img src={product.image} alt="Product Thumbnail 4" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="Main Product" className="productdisplay-main-page" />
        </div>
      </div>


      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-start">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
          &#8377;{product.old_cost}
          </div>
          <div className="productdisplay-right-prices-new">
          &#8377;{product.new_cost}
          </div>
        </div>

        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  );
}
