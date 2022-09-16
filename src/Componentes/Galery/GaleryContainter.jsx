import { useEffect,useState } from "react"
import GaleryList from "./GaleryList"
import GaleryDropdown from "./GaleryDropdown"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export function GaleryContainer(){
  const [pictures,setPictures] = useState([])
  useEffect(()=>{
    getPictures()
  },[])
  
  function getPictures(){
    const galeryReff = collection(db,'galery')
    getDocs(galeryReff)
    .then(response=>{
      const galeryData = response.docs.map(doc => ({
        data:doc.data(),
        id:doc.id
      }))
      setPictures(galeryData)
    })
    .catch(error=>console.error(error))
  }
  return(
    <>
      <GaleryDropdown/>
      <div className="card-group row-cols-xl-6 row-cols-md-5 row-cols-sm-4 row-cols-2 gap-3 p-3 gap-sm-2 justify-content-center text-center">
        <GaleryList pictures={pictures}/>
      </div>
    </>
  )
}