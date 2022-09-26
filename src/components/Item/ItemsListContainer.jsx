import ItemList from "./ItemList"
import {useState,useEffect} from "react"
import { collection,getDocs } from "firebase/firestore"
import { db } from "../../utils/firebase"

export function ItemsListContainer () {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getProducts()
  },[])

  //Buscamos todos los productos en firebase y los asignamos al useState
  function getProducts(){
    const productsReff = collection(db,'products')
    getDocs(productsReff)
    .then(response=>{
      const productsData = response.docs.map(doc=>({
        data:doc.data(),
        id:doc.id
      }))
      setProducts(productsData)
    })
    .catch(error=>console.error(error))
  }
  return(
    <>
      <div className="card-group row-cols-xl-6 row-cols-m-5 row-cols-sm-4 row-cols-1 gap-3 p-3 gap-sm-2 justify-content-center">
        <ItemList products={products}/>
      </div>
    </>
  )

}