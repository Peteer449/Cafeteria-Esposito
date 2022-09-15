import Cart from "./Cart"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
export default function CartList(){
  const itemsCart = useContext(CartContext)
  let total = 0

  if(itemsCart.cart.length===0){
    return(
      <>
        <h1>Tu carrito esta vacio</h1>
      </>
    )
  }
  return(
  <>
    <button className="btn btn-danger col-7" onClick={()=>itemsCart.clear()}>Vaciar carrito</button>
    {itemsCart.cart.map((product,index)=>{
      total += product.price * product.cant
      return <Cart productsMaped={product} key={index} />
    }
    )}
    <div className="fs-4 text-center col-12 text-light">Tu total es ${total}</div>
  </>
  )
}