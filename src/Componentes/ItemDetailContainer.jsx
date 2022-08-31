import { productsData } from "./ItemsListContainer"
import { ItemDetail } from "./ItemDetail"
import { useEffect,useState } from "react"

const getItem = (check) => {
  return new Promise((res,rej)=>{
    if(check){res(productsData.filter(product=>product.name==="Torta brownie"))}
    else{rej("Acceso denegado")}
  })
}

export default function ItemDetailContainer(){
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getItem(true)
      .then(data=>{setProducts(data)})
      .catch(error=>console.error(error))
  },[])
  return(
    <>
      <div className="item--detail">
      {products.map((product,index)=>{
        return <ItemDetail productsMaped={product} key={index} />})}
      </div>
    </>
  )
}