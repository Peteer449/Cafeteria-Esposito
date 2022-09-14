import Cart from "./Cart"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
export default function CartList(){
  const itemsCart = useContext(CartContext)
  return(
  <>
    <button className="btn btn-danger col-7" onClick={()=>itemsCart.clear()}>Vaciar carrito</button>
    {itemsCart.cart.map((product,index)=>{
    return <Cart productsMaped={product} key={index} />})}
  </>
  )
}