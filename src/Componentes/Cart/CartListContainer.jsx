import CartList from "./CartList"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
export function CartListContainer () {
  const itemsCart = useContext(CartContext)
  return(
    <>
      <div className="card-group row-cols-xl-6 row-cols-m-5 row-cols-sm-4 row-cols-1 gap-3 p-3 gap-sm-2 justify-content-center">
        <CartList products={itemsCart.cart}/>
      </div>
    </>
  )

}