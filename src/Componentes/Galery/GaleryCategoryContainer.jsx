import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import GaleryList from "./GaleryList"
import { allPictures } from "./GaleryContainter"
import GaleryDropdown from "./GaleryDropdown"
const getItem = (check) => {
  return new Promise((res,rej)=>{
    if(check){res(allPictures)}
    else{rej("Acceso denegado")}
  })
}
export default function GaleryCategoryContainer(){
  const  info = useParams()
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getItem(true)
      .then(data=>{
        const filteredProducts = data.filter(product=>product.category===info.category&&product)
        setProducts(filteredProducts)
      })
      .catch(error=>console.error(error))
  },[info])
  return(
    <div className="item--detail">
      <GaleryDropdown/>
      <GaleryList pictures={products}/>
    </div>
  )
}