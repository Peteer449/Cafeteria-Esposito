import { useEffect,useState } from "react"
import GaleryList from "./GaleryList"
import GaleryDropdown from "./GaleryDropdown"

export const allPictures = [
  {
    id:1,
    picture:"/images/tortaBrownie.jpg",
    name:"Torta brownie",
    category:"cakes"
  },
  {
    id:2,
    picture:"/images/alfajores.jpg",
    name:"Alfajores marplatenses",
    category:"pastry"
  },
  {
    id:3,
    picture:"/images/Box1.jpg",
    name:"Box 1",
    category:"boxes"
  },
  {
    id:2,
    picture:"/images/Box2.jpg",
    name:"Box 2",
    category:"boxes"
  }
]
function checkPromise(check){
  return new Promise((res,rej)=>{
    if(check){res(allPictures)}
    else{rej("Acceso denegado")}
  })
}
export function GaleryContainer(){
  const [pictures,setPictures] = useState([])
  useEffect(()=>{
    checkPromise(true)
      .then(data=>{setPictures(data)})
      .catch(error=>console.error(error))
  },[])
  
  return(
    <>
      <div className="card-group row-cols-xl-6 row-cols-m-5 row-cols-sm-4 row-cols-1 gap-3 p-3 gap-sm-2 justify-content-center">
        <GaleryDropdown/>
        <GaleryList pictures={pictures}/>
      </div>
    </>
  )
}