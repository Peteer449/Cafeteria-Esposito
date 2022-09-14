import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
export default function Cart({productsMaped}){
  const {deleteItem,addOneItem,removeOneItem} = useContext(CartContext)
  const {name,price,cant,id} = productsMaped
  return(
    <>
      <div className="card col-5">
        <div className="card-body d-flex justify-content-between">
          <div>
            {name}
          </div>
          <div>
            <button className={`btn btn-primary me-3 ${cant===1&&'disabled'}`} onClick={()=>removeOneItem(productsMaped)}>-</button>
            {cant}
            <button className="btn btn-primary ms-3" onClick={()=>addOneItem(productsMaped)}>+</button>
          </div>
          <div>
            ${price*cant}
          </div>
        </div>
        <button className="btn btn-danger" onClick={()=>deleteItem(id)}>Eliminar</button>
      </div>
    </>
  )
}