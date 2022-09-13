import React,{createContext,useState} from "react";
import Toastify from 'toastify-js'

const CartContext = createContext()

const CartProvider = (props) => {
  const[cart,setCart] = useState([])
  function deleteItem(id){
    setCart(prevCart=>prevCart.find(item=>item.id===id))
  }
  function addItem(item,cant,setVisibility){
    if(item.stock<item.quantity){
      Toastify({
        text: `No hay suficiente stock`,
        duration: 3000,
        newWindow: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
        },
        onClick: function(){}
      }).showToast();
    }else{
    Toastify({
      text: `Se ${cant===1?"agrego":"agregaron"} ${cant} al carrito`,
      duration: 3000,
      newWindow: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(90deg, rgba(251,207,79,1) 0%, rgba(202,152,171,1) 100%)",
      },
      onClick: function(){}
    }).showToast();
    setVisibility(true)
    setCart(prevCart=>[...prevCart,item])
    console.log(cart)
  }}
  function clear(){
    setCart([])
  }
  
  return(
    <>
      <CartContext.Provider value={{cart,deleteItem,addItem,clear}}>
        {props.children}
      </CartContext.Provider>
    </>
  )
}

export {CartContext, CartProvider}