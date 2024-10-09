import React, { createContext, useState } from "react";

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
   const addToCart= (itemId)=>{
      setCart((prevCart)=>({...prevCart,[itemId]:prevCart[itemId]+1,}))
      
   }
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