import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

export default function Product() {
  const {data}=useContext(ShopContext);
  const {productId}=useParams();
  const product = data.find((e)=>e.id === Number(productId));
  return (
    <div>
     <ProductDisplay 
      product={product}
/>
    </div>
  )
}
