import React from "react";
import "./Item.css"
export default function Item(props){
  return(
    <div className="col m-2">
      <div className="card" id="item">
        <img src={props.picture} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">${props.price}</small>
        </div>
      </div>
    </div>
  )
}