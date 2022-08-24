import Item from "./Item"
import {products} from "../productsData"
import React from "react"
import "./Item.css"
export default function ItemsListContainer (props) {
  const items = products.map(product=>{
    const {id, name, price, picture, description,stock} = product
    return (
      <Item 
      id={id} 
      name={name} 
      price={price} 
      picture={picture} 
      description={description}
      stock={stock}
      key={id}
      />
    )
  })
  return(
    <>
      <h1 className="text-center">{props.greetings}</h1>
      <div className="card-group row-cols-xl-4 row-cols-m-3 row-cols-sm-2 row-cols-1 gap-3 p-3 gap-sm-2 justify-content-center">
        {items}
      </div>
    </>
  )
}