import React,{createContext,useState} from "react";
import Toastify from 'toastify-js'

const CartContext = createContext()

const CartProvider = (props) => {
  const[cart,setCart] = useState([])
  function deleteItem(id){
    const newCart = cart.filter(product=>product.id!==id)
    setCart(newCart)
  }
function addOneItem(item){
    const newProducts = cart.map(product=>{
      if(product.id===item.id){
        if(product.cant+1>product.stock){
          Toastify({
            text: `Llegaste al limite de stock NO se agrego al carrito`,
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
          return product
        }
        const newProduct = {...product,cant:product.cant+1}
        return newProduct
      }else{
        return product
      }})
    setCart(newProducts)
  }
  function removeOneItem(item){
    const newProducts = cart.map(product=>{
      if(product.id===item.id){
        const newProduct = {...product,cant:product.cant-1}
        return newProduct
      }else{
        return product
      }})
    setCart(newProducts)
  }
  function addItem(item,id,cant,setVisibility){
    let itemAmount={...item,cant,id}
    if(!isInCart(id)){
      setCart([...cart,itemAmount])
      toast(cant)
    }else{
      const newProducts = cart.map(product=>{
        if(product.id===id){
          if(product.cant+cant>product.stock){
            Toastify({
              text: `Llegaste al limite de stock NO se agrego al carrito`,
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
            return product
          }
          const newProduct = {...product,cant:product.cant+cant}
          toast(cant)
          return newProduct
        }else{
          return product
        }
      })
      setCart(newProducts)
    }
    setVisibility(true)
  }
  function clear(){
    setCart([])
  }
  function isInCart(id){
    return cart.some(e=>e.id===id)
  }
  function toast(cant){
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
  }

  function getTotal(){
    let total = 0
    cart.forEach((e) => total += (e.cant*e.price))
    return total 
  }
  
  return(
    <>
      <CartContext.Provider value={{cart,deleteItem,addItem,clear,addOneItem,removeOneItem,getTotal}}>
        {props.children}
      </CartContext.Provider>
    </>
  )
}

export {CartContext, CartProvider}