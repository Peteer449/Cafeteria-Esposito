import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {useState,useContext} from "react";
import { CartContext } from "../Context/CartContext";

export default function Checkout(){
  const {cart,getTotal,clear} = useContext(CartContext)
  const [buyer,setBuyer]=useState({
    Name:"",
    Email:"",
    Phone:""
  })
  const [orderId,setOrderId]=useState()

  const {Name,Email,Phone}=buyer

  const generateOrder = async(data) =>{
    try{
      const col = collection(db,"orders")
      const order = await addDoc(col,data)
      setOrderId(order.id)
      clear()
    }catch(error){
      console.error(error)
    }
  }

  function handleInputChange(event){
    setBuyer({
      ...buyer,
      [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    const items = cart.map(item=>({
      id:item.id,
      title:item.name,
      price:item.price,
      cant:item.cant
    }))
    const date = new Date()
    const total = getTotal()
    const data = {buyer,items,date,total}
    generateOrder(data)
  }

  return(
    <>
    {orderId?(
    <h1>Tu orden de compra es: {orderId}</h1>):(
        <form onSubmit={handleSubmit} className="col-10 offset-1 text-light mt-5 mb-5">
          <div className="mb-3">
            <label for="name" className="form-label ">Nombre y apellido</label>
            <input
              required
              className="form-control"
              id="name"
              type="text"
              name="Name"
              placeholder="Nombre"
              value={Name}
              onChange={handleInputChange}
              />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Direccion de Email</label>
            <input
              required
              className="form-control"
              id="email"
              type="email"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={handleInputChange}
              />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">Numero de telefono</label>
            <input
              required
              className="form-control"
              id="phone"
              type="text"
              name="Phone"
              placeholder="Telefono"
              value={Phone}
              onChange={handleInputChange}
              />
          </div>
          <div className="mb-3 form-check">
            <input 
              className="form-check-input"
              name="checkbox"
              type="checkbox"
              id="checkbox"
              required
              />  
            <label for="checkbox" className="form-check-label">
              Estas de acuerdo con pasar a buscar los productos por el local cuando se indique que estan listos?
            </label>
          </div>
          <input
          type="submit"
          value="Finalizar compra"
          className="btn btn-primary"
          />
        </form>
      )}
    </>
  )
}