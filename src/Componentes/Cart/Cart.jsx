import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
export default function Cart({productsMaped}){
  const {deleteItem} = useContext(CartContext)
  const {name,price,quantity} = productsMaped
  return(
    <>
      <div className="card">
        <div className="card-body">
          {name}{quantity}
        </div>
        <div className="card-body">
          ${price*quantity}
        </div>
        <button className="btn btn-danger" onClick={()=>deleteItem()}>Eliminar</button>
      </div>
    </>
  )
}