import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import GaleryList from "./GaleryList"
import GaleryDropdown from "./GaleryDropdown"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../utils/firebase"
export default function GaleryCategoryContainer(){
  const  info = useParams()
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getItems()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[info])
  function getItems() {
  const galeryReff = collection(db,'galery')
  getDocs(galeryReff)
  .then(response=>{
    const productsData = response.docs.map(doc => ({
      data:doc.data(),
      id:doc.id
    }))
    const filteredProducts = productsData.filter(product=>product.data.category===info.category&&product)
    setProducts(filteredProducts)
  })
  .catch(error=>console.error(error))
}

  return(
  <>
    <GaleryDropdown/>
    <div className="card-group row-cols-xl-6 row-cols-md-5 row-cols-sm-4 row-cols-2 gap-3 p-3 gap-sm-2 justify-content-center text-center">
      <GaleryList pictures={products}/>
    </div>
  </>
  )
}