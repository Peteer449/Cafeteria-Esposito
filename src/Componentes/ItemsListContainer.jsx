import ItemList from "./ItemList"
import {useState,useEffect} from "react"
const productsData=[
  {
    name:"Torta brownie",
    price:720,
    picture:"...",
    description:"Base de brownie decorada con dulce de leche y merengue italiano brûlee.",
    stock:3
  },
  {
    name:"Torta oreo",
    price:720,
    picture:"...",
    description:"3 pisos de oreos humedas, con capas de dulce de leche y queso crema, terminada con una gache de chocolate",
    stock:2
  },
  { 
    name:"Red velvet",
    price:720,
    picture:"...",
    description:"Bizcocho de vainilla con cacao y crema dulce de queso",
    stock:0
  },
  {
    name:"Red velvet",
    price:720,
    picture:"...",
    description:"Bizcocho de vainilla con cacao y crema dulce de queso",
    stock:0
  },
  {
    name:"Red velvet",
    price:720,
    picture:"...",
    description:"Bizcocho de vainilla con cacao y crema dulce de queso",
    stock:0
  }
]
function checkPromise(check){
  return new Promise((res,rej)=>{
    if(check){res(productsData)}
    else{rej("Acceso denegado")}
  })
}
export default function ItemsListContainer (props) {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    checkPromise(true)
      .then(data=>{setProducts(data)})
      .catch(error=>console.error(error))
  },[])
  console.log("ItemListContainer",products)
  return(
    <>
    <h1 className="text-center">{props.greetings}</h1>
      <div className="card-group row-cols-xl-4 row-cols-m-3 row-cols-sm-2 row-cols-1 gap-3 p-3 gap-sm-2 justify-content-center">
        <ItemList products={products}/>
      </div>
    </>
  )

}