import Galery from "./Galery"
export default function GaleryList(props){
  return(
    <>
      {props.pictures.map((picture,index)=>{
      return <Galery productsMaped={picture} key={index} />})}
    </>
  )
}