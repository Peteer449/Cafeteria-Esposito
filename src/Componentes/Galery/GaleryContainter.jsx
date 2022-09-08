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
    id:4,
    picture:"/images/Box2.jpg",
    name:"Box 2",
    category:"boxes"
  },
  {
    id:5,
    picture:"/images/Boxes.jpg",
    name:"Boxes",
    category:"boxes"
  },
  {
    id:6,
    picture:"/images/chocotorta.jpg",
    name:"Chocotorta",
    category:"cakes"
  },
  {
    id:7,
    picture:"/images/tortaFrutilla.jpg",
    name:"Torta de frutilla",
    category:"cakes"
  },
  {
    id:8,
    picture:"/images/Scon dulce.jpg",
    name:"Scon dulce",
    category:"pastry"
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
      <GaleryDropdown/>
      <div className="card-group row-cols-xl-6 row-cols-md-5 row-cols-sm-4 row-cols-2 gap-3 p-3 gap-sm-2 justify-content-center text-center">
        <GaleryList pictures={pictures}/>
      </div>
    </>
  )
}