import { ItemDetail } from "./ItemDetail"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { collection,getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default function ItemDetailContainer(){
  const  info = useParams()
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getItem()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const getItem = () => {
    const productsReff = collection(db,'products')
    getDocs(productsReff)
    .then(response=>{
      const productsData = response.docs.map(doc=>({
        data:doc.data(),
        id:doc.id
      }))
      const productDetail = productsData.find(product=>product.id===info.id)
      setProducts(productDetail.data)
    })
    .catch(error=>console.error(error))
  }
  return(
    <div className="item--detail">
      <ItemDetail productsMaped={products}/>
    </div>
  )
}