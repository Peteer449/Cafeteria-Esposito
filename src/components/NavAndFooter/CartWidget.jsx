import { CartContext } from "../Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
export default function CartWidget(){
  const {cart} = useContext(CartContext)
  let numberOfItems = 0
  cart.map(item=>numberOfItems += item.cant)
  if(numberOfItems===0){
    return
  }
  return(
    <>
      <Link to="/carrito"><button className= "d-flex btn btn-light me-2 mt-2 position-absolute top-0 end-0">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIid3UPy5EURzF8Q8FCgURNY0FSMQaDInKVqxBZgMqyRTCCqaU0NuBckaFkjwKf4r7S7yMZNz7vCfhJLf7/s45N/eXy3/RG97jDLoIeK0FPGO1ixAY1oKansu64exEwHELJafefgY30WS3wHQJ9zG3/x18GOCwIKAfM1c58DKepM3ayODXUQW/ldtoEI36Gex5sKe55rAZQw9YmMJtS80rrJUEwLX81TwqNV/BXYZxhTPMlwachMGFtLqtalH6Ll7kbVGx5vCo2TeRrQN5b9A4oHPt4RZj9Frgvmjs89qjn3CT3/WvqSe1G2GnBe4P6wMWynZC39nrkQAAAABJRU5ErkJggg==" alt="carrito" width="30px" height="30px" className="align-self-center ms-auto"/>
        <small className="fs-5">{numberOfItems}</small>
      </button></Link>
    </>
  )
}