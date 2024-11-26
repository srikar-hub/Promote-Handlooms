import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { data } from "../Components/Data";
export const ShopContext=createContext();

const getCart=()=>{
   let cart={};
   for(let i=1;i<data.length;i++){
     cart[i]=0;
   }
   return cart;
}
const ShopContextProvider=(props)=>{
   const [useCart,setCart]=useState(getCart());

   const addToCart = async (itemId) => {
      setCart((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] + 1,
      }));
  
      const product = data.find((each) => each.id === itemId);
  
      if (product) {
        try {
          const token = localStorage.getItem("token");
          if (token) {
            const decodeToken = jwtDecode(token);
            const userId = decodeToken.id;
  
            const response = await fetch("http://localhost:8080/api/cart/addItem", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: userId,
                productId: product.id,
                price: product.new_cost,
                quantity: 1,
                title: product.name,
              }),
            }); 
            if (!response.ok) {
              console.error("Failed to add item to the cart in the backend");
            }
          }
        } catch (error) {
          console.error("Error while adding item to the cart:", error);
        }
      }
    };
  
   const removeFromCart= (itemId)=>{
      setCart((prevCart)=>{

         return {
            ...prevCart,
         [itemId]:prevCart[itemId]-1,
         }
      })
   }
   const getTotalCostOfCart=()=>{
      let totalAmount=0;
      for(let item in useCart){
         if(useCart[item]>0){
            let itemInfo = data.find((each)=>{
              return each.id===Number(item);
            })
            totalAmount+=itemInfo.new_cost* useCart[item];
      }
    
    }  
    return totalAmount;    
   }
   const totalNoOfItems=()=>{
      let total=0;
      for(let item in useCart){
         if(useCart[item]>0){
            total+=useCart[item];
         }
      }
      return total;
   }
   const contextValue={totalNoOfItems,getTotalCostOfCart,data,useCart,addToCart,removeFromCart};
   
  
   return <ShopContext.Provider value={contextValue}>
    {props.children}
   </ShopContext.Provider>
}

export default ShopContextProvider;