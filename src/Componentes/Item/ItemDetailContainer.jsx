import { productsData } from "./ItemsListContainer"
import { ItemDetail } from "./ItemDetail"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


const getItem = (check) => {
  return new Promise((res,rej)=>{
    if(check){res(productsData)}
    else{rej("Acceso denegado")}
  })
}

export default function ItemDetailContainer(){
  const  info = useParams()
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getItem(true)
      .then(data=>{setProducts(data.find(product=>product.id==info.id))})
      .catch(error=>console.error(error))
  },[])
  return(
    <div className="item--detail">
      <ItemDetail productsMaped={products}/>
    </div>
  )
}