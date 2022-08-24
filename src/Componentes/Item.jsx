import React from "react";
import "./Item.css"
import ItemCount from "./ItemCount";
export default function Item(props){
  return(
    <div className="col">
      <div className="card" id="item">
        <img src={props.picture} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex">
            <p className="text-muted flex-grow-1">${props.price}</p>
            <p className="text-muted">Stock: {props.stock}</p>
          </div>
          <ItemCount
          stock={props.stock}
          />
          <button className="btn btn-primary col-12 mt-2">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}