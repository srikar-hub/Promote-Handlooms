import React from 'react'
import './Collection.css'
import { data } from '../Data'
import Item from '../item/Item'
export default function Collection() {
  return (
   <div className="new-collection">
    <h1>Collection</h1>
    <hr />
    <div className="collections">
        {data.map((item,id)=>{
            return <Item key={id} id={item.id} image={item.image} name={item.name} old_price={item.old_cost} new_price={item.new_cost} ></Item>
        })}
    </div>
   </div>
  )
}
