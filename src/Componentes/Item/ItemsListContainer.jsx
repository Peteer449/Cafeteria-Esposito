import ItemList from "./ItemList"
import {useState,useEffect} from "react"
export const productsData=[
  {
    id:1,
    name:"Torta brownie",
    price:720,
    picture:"/images/tortaBrownie.jpg",
    description:"Base de brownie decorada con dulce de leche y merengue italiano brûlee.",
    stock:3
  },
  {
    id:2,
    name:"Torta oreo",
    price:720,
    picture:"/images/cheesecakeOreo.jpg",
    description:"3 pisos de oreos humedas, con capas de dulce de leche y queso crema, terminada con una gache de chocolate",
    stock:2
  },
  { 
    id:3,
    name:"Tarta de frutilla",
    price:720,
    picture:"/images/tortaFrutilla.jpg",
    description:"Bizcocho de vainilla con cacao y crema dulce de queso",
    stock:0
  },
  {
    id:4,
    name:"Torta mousse",
    price:720,
    picture:"/images/tortaMousse.jpg",
    description:"Bizcocho de vainilla con cacao y crema dulce de queso",
    stock:0
  },
  {
    id:5,
    name:"Tarta de coco",
    price:720,
    picture:"/images/tartaCoco.jpg",
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
export function ItemsListContainer (props) {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    checkPromise(true)
      .then(data=>{setProducts(data)})
      .catch(error=>console.error(error))
  },[])
  return(
    <>
      <div className="card-group row-cols-xl-6 row-cols-m-5 row-cols-sm-4 row-cols-1 gap-3 p-3 gap-sm-2 justify-content-center">
        <ItemList products={products}/>
      </div>
    </>
  )

}